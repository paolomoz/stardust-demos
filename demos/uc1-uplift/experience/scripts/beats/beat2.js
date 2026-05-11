/* beat2.js — SLICC web app runtime.

   Chatbot UX:
     - Each step types its prompt INTO the chat-input field (typewriter
       caret blinking after the last char).
     - The prompt "submits": input clears, user bubble appears at the
       bottom of the chat thread; older messages remain in place (the
       thread is bottom-anchored so new messages land below).
     - Agent bubble appears below and streams its response.
     - Artifact panel swaps to the step's output, previous artifact
       fades out. At step 4, WYSIWYG overlay + hero-title text edit
       animate on top of the iframe.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b2';

  // ── Step data ────────────────────────────────────────────────────
  const STEPS = [
    {
      cmd: '/stardust:',  cmdBold: 'extract',
      args: ' https://business.adobe.com',
      response: 'Reading the brand surface at business.adobe.com — palette, type, voice, structural rhythm. Six colors, two type families, four recurring patterns. Locked in as the source ground.',
    },
    {
      cmd: '/stardust:',  cmdBold: 'direct',
      args: ' "feel modern. cinematic. let motion carry it."',
      response: 'Resolving the brief into design tokens. Register shifts from enterprise to editorial. Density opens up. Ground goes ink-deep, motion goes cinematic. Compiled to design.json.',
    },
    {
      cmd: '/stardust:',  cmdBold: 'prototype',
      args: '',
      response: 'Generating prototypes across viewports. Hero variants, type ladder, motion choreography — composed onto the page-level structure I read in step 1. Live preview on the right.',
    },
    {
      cmd: '/stardust:',  cmdBold: 'migrate',
      args: '',
      response: 'Mapping the prototype onto AEM’s component grammar. Every block is authorable — your team edits in place, no rebuild. The redesign just landed in AEM.',
    },
  ];

  // ── Step pacing ─────────────────────────────────────────────────
  // Steps are CHAINED — each one waits for the prior to complete (stream
  // done → artifact open → brief hold) before the next starts. Matches a
  // real chat experience: prompt, response, then the artifact arrives,
  // then the user types the next thing.
  const FIRST_STEP_AT_MS  = 6000;   // first step starts after Turn intro settles
  const INPUT_CHAR_MS     = 28;     // per-char typewriter in the input field
  const SUBMIT_PAUSE      = 320;    // after typing complete, before "submitting"
  const AGENT_DELAY       = 240;    // after user msg lands, before agent starts streaming
  const STREAM_CHAR_MS    = 18;     // per character of agent response
  const POST_STREAM_PAUSE = 260;    // after stream completes, before artifact opens
  const INTER_STEP_HOLD   = 650;    // after artifact opens, before the next step starts
  const FINAL_HOLD_MS     = 5000;   // step 4 only — hold for the WYSIWYG animation

  // Step 4 · WYSIWYG title edit
  const FIXED_PREFIX_HTML       = 'An agentic <span class="word--accent">CMS</span>';
  const ORIGINAL_TAIL           = ' to scale modern experiences.';
  const NEW_TAIL                = ' for every brand.';
  const EDIT_DELAY_AFTER_ART_MS = 1100;
  const BACKSPACE_MS            = 50;
  const TYPE_MS                 = 55;

  // ── State ───────────────────────────────────────────────────────
  let section, thread, inputEl, inputTextEl;
  let iframeWrap, iframeEl;
  let started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(d, fn) { timeouts.push(setTimeout(fn, d)); }

  // ── Chat helpers ────────────────────────────────────────────────
  function typeInInput(promptObj, onDone) {
    if (!started) return;
    const text = promptObj.cmd + promptObj.cmdBold + promptObj.args;
    inputEl.classList.add('is-typing');
    inputTextEl.innerHTML = '';
    let i = 0;
    const tick = () => {
      if (!started) return;
      i = Math.min(i + 1, text.length);
      // Render with the bold slash-command name highlighted.
      const slice = text.slice(0, i);
      const cmdLen = promptObj.cmd.length;
      const boldLen = promptObj.cmdBold.length;
      let html;
      if (i <= cmdLen) {
        html = escapeHtml(slice);
      } else if (i <= cmdLen + boldLen) {
        html = escapeHtml(promptObj.cmd) + '<b>' + escapeHtml(slice.slice(cmdLen)) + '</b>';
      } else {
        html = escapeHtml(promptObj.cmd) + '<b>' + escapeHtml(promptObj.cmdBold) + '</b>' + escapeHtml(slice.slice(cmdLen + boldLen));
      }
      inputTextEl.innerHTML = html;
      if (i < text.length) timeouts.push(setTimeout(tick, INPUT_CHAR_MS));
      else onDone && onDone();
    };
    tick();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function submitUser(promptObj) {
    inputEl.classList.remove('is-typing');
    inputTextEl.innerHTML = '';

    const msg = document.createElement('div');
    msg.className = 'b2-chat-msg b2-chat-user';
    msg.innerHTML =
      '<span class="b2-chat-av">You</span>' +
      '<div class="b2-chat-bubble">' +
        '<span class="b2-cmd">' + escapeHtml(promptObj.cmd) +
          '<b>' + escapeHtml(promptObj.cmdBold) + '</b></span>' +
        escapeHtml(promptObj.args) +
      '</div>';
    thread.appendChild(msg);
    requestAnimationFrame(() => msg.classList.add('is-in'));
  }

  function streamAgent(text, onDone) {
    const msg = document.createElement('div');
    msg.className = 'b2-chat-msg b2-chat-agent is-streaming';
    msg.innerHTML =
      '<span class="b2-chat-av b2-av-slicc">S</span>' +
      '<div class="b2-chat-bubble"></div>';
    thread.appendChild(msg);
    requestAnimationFrame(() => msg.classList.add('is-in'));

    const bubble = msg.querySelector('.b2-chat-bubble');
    let i = 0;
    const tick = () => {
      if (!started) return;
      i = Math.min(i + 1, text.length);
      bubble.textContent = text.slice(0, i);
      if (i < text.length) timeouts.push(setTimeout(tick, STREAM_CHAR_MS));
      else {
        msg.classList.remove('is-streaming');
        onDone && onDone();
      }
    };
    tick();
  }

  // ── Artifact panel ──────────────────────────────────────────────
  function showArtifact(step) {
    if (!started) return;
    const stepKey = step === 4 ? 3 : step; // step 4 reuses iframe artifact (step 3)
    section.querySelectorAll('.b2-art.is-in').forEach(el => {
      if (el.dataset.step !== String(stepKey)) el.classList.remove('is-in');
    });
    const target = section.querySelector(`.b2-art[data-step="${stepKey}"]`);
    if (target) target.classList.add('is-in');
    if (step === 4) {
      iframeWrap?.classList.add('is-step-4');
      at(EDIT_DELAY_AFTER_ART_MS, () => started && startWysiwygEdit());
    }
  }

  // ── Step 4 · WYSIWYG title edit (same approach as beat 4) ──────
  function getTitle() {
    return iframeEl?.contentDocument?.querySelector('.aem-hero__title') || null;
  }
  function injectEditStyles() {
    const doc = iframeEl?.contentDocument;
    if (!doc || doc.getElementById('b2-edit-style')) return;
    const s = doc.createElement('style');
    s.id = 'b2-edit-style';
    s.textContent = `
      .b2-editing-title { outline: 2px solid #eb1000; outline-offset: 14px; background: rgba(235,16,0,0.05); }
      .b2-cursor { display: inline-block; width: 3px; height: 0.95em; background: #eb1000; vertical-align: -0.08em; margin-left: 3px; animation: b2-blink 0.6s steps(2,start) infinite; }
      @keyframes b2-blink { 50% { opacity: 0; } }
    `;
    doc.head.appendChild(s);
  }
  function setTitleHTML(html) { const t = getTitle(); if (t) t.innerHTML = html; }
  function backspaceTail(onDone) {
    let tail = ORIGINAL_TAIL;
    const step = () => {
      if (!started) return;
      if (!tail.length) { onDone(); return; }
      tail = tail.slice(0, -1);
      setTitleHTML(FIXED_PREFIX_HTML + tail + '<span class="b2-cursor"></span>');
      timeouts.push(setTimeout(step, BACKSPACE_MS));
    };
    step();
  }
  function typeNewTail() {
    let i = 0;
    const step = () => {
      if (!started) return;
      if (i >= NEW_TAIL.length) return;
      i++;
      setTitleHTML(FIXED_PREFIX_HTML + NEW_TAIL.slice(0, i) + '<span class="b2-cursor"></span>');
      timeouts.push(setTimeout(step, TYPE_MS));
    };
    step();
  }
  function startWysiwygEdit() {
    const fire = () => {
      injectEditStyles();
      const t = getTitle();
      if (!t) return;
      t.classList.add('b2-editing-title');
      setTitleHTML(FIXED_PREFIX_HTML + ORIGINAL_TAIL + '<span class="b2-cursor"></span>');
      at(300, () => started && backspaceTail(() => started && typeNewTail()));
    };
    if (iframeEl?.contentDocument?.readyState === 'complete' && getTitle()) fire();
    else iframeEl?.addEventListener('load', fire, { once: true });
  }

  // ── Per-step orchestration ──────────────────────────────────────
  // Chain: type prompt → submit user → agent streams → artifact opens
  // AFTER the stream finishes → brief hold → next step.
  function runStep(step) {
    if (!started) return;
    const data = STEPS[step - 1];
    typeInInput(data, () => {
      at(SUBMIT_PAUSE, () => {
        if (!started) return;
        submitUser(data);
        at(AGENT_DELAY, () => {
          if (!started) return;
          streamAgent(data.response, () => {
            // Stream done — pause briefly, then open the artifact.
            at(POST_STREAM_PAUSE, () => {
              if (!started) return;
              showArtifact(step);
              // Then hold (5s on step 4 so the WYSIWYG animation reads),
              // or advance to the next step.
              const hold = step === 4 ? FINAL_HOLD_MS : INTER_STEP_HOLD;
              if (step < 4) at(hold, () => runStep(step + 1));
            });
          });
        });
      });
    });
  }

  function reset() {
    thread.innerHTML = '';
    inputEl?.classList.remove('is-typing');
    inputTextEl.innerHTML = '';
    section.querySelectorAll('.b2-art.is-in').forEach(el => el.classList.remove('is-in'));
    iframeWrap?.classList.remove('is-step-4');
    const t = getTitle();
    if (t) {
      t.classList.remove('b2-editing-title');
      setTitleHTML(FIXED_PREFIX_HTML + ORIGINAL_TAIL);
    }
  }

  function enter() {
    started = true;
    clearTimers();
    reset();
    at(FIRST_STEP_AT_MS, () => runStep(1));
  }

  function exit() {
    started = false;
    clearTimers();
    reset();
  }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    thread      = section.querySelector('.b2-chat-thread');
    inputEl     = section.querySelector('.b2-chat-input');
    inputTextEl = section.querySelector('.b2-chat-input-text');
    iframeWrap  = section.querySelector('.b2-art-iframe-wrap');
    iframeEl    = section.querySelector('.b2-art-iframe');

    const obs = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.attributeName === 'class') {
          if (section.classList.contains('active')) enter();
          else exit();
        }
      }
    });
    obs.observe(section, { attributes: true, attributeFilter: ['class'] });
    if (section.classList.contains('active')) enter();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
