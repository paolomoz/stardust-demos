/* beat4.js — WYSIWYG editing demo for the "Lands in AEM" beat.

   Inside the bolder iframe: select the hero title, add a red highlight
   ring + a blinking cursor.
   In the parent doc: float a component label and a rich-text toolbar
   over the title's screen position, then run a typing simulation that
   backspaces the tail of the title and types a new one.

   Timing (8s beat):
     0.0s  beat enters, title/eyebrow/canvas fade in
     0.8s  highlight ring + component label appear (component selected)
     1.5s  floating toolbar appears
     2.5s  cursor lands at end of title; backspace begins
     ~4.6s backspace done, new tail starts typing
     ~6.0s typing done, hold for the rest of the beat
*/

(function () {
  'use strict';

  const SECTION_ID = 'b4';

  // The title is `An agentic CMS …` — CMS is the accent word in bolder.html.
  // We keep that as the immutable prefix and edit only the tail.
  const FIXED_PREFIX  = 'An agentic <span class="word--accent">CMS</span>';
  const ORIGINAL_TAIL = ' to scale modern experiences.';
  const NEW_TAIL      = ' for every brand.';

  const HIGHLIGHT_AT_MS       = 800;
  const TOOLBAR_AT_MS         = 1500;
  const BACKSPACE_START_MS    = 2500;
  const BACKSPACE_MS_PER_CHAR = 45;
  const TYPE_MS_PER_CHAR      = 55;

  let section, iframe, toolbar, label;
  let started = false;
  let timeouts = [];
  let onLoadHandler = null;

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(d, fn) { timeouts.push(setTimeout(fn, d)); }

  function getDoc() { return iframe?.contentDocument || null; }
  function getTitle() { return getDoc()?.querySelector('.aem-hero__title') || null; }

  function injectIframeStyles() {
    const doc = getDoc();
    if (!doc || doc.getElementById('b4-edit-style')) return;
    const style = doc.createElement('style');
    style.id = 'b4-edit-style';
    style.textContent = `
      .b4-editing {
        outline: 2px solid #eb1000;
        outline-offset: 14px;
        background: rgba(235, 16, 0, 0.05);
        transition: outline-color 0.25s ease, background 0.25s ease;
      }
      .b4-cursor {
        display: inline-block;
        width: 3px;
        height: 0.95em;
        background: #eb1000;
        vertical-align: -0.08em;
        margin-left: 3px;
        animation: b4-blink 0.6s steps(2, start) infinite;
      }
      @keyframes b4-blink { 50% { opacity: 0; } }
    `;
    doc.head.appendChild(style);
  }

  function setTitleHTML(html) {
    const title = getTitle();
    if (title) title.innerHTML = html;
  }

  function positionOverlay() {
    if (!iframe || !toolbar || !label) return;
    const title = getTitle();
    if (!title) return;
    const iframeRect = iframe.getBoundingClientRect();
    const canvas = iframe.parentElement;
    if (!canvas) return;
    const canvasRect = canvas.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    // Convert title's iframe-internal coords to canvas-relative coords.
    // Iframe is absolutely positioned at canvas (0,0) with same size, so
    // iframeRect.left/top relative to canvas is just (iframeRect.left -
    // canvasRect.left). Add titleRect (already in iframe viewport) to it.
    const offsetX = iframeRect.left - canvasRect.left;
    const offsetY = iframeRect.top - canvasRect.top;
    const titleX = offsetX + titleRect.left;
    const titleY = offsetY + titleRect.top;

    // Component label: top-left of title, just above the highlight ring
    // (the ring is outline-offset 14px outside the title, so back up 14
    // + ~22 for the label height).
    label.style.left = (titleX - 14) + 'px';
    label.style.top  = (titleY - 14 - 24) + 'px';

    // Toolbar: above the title, indented a bit so the corner anchor of
    // the label has room. Stays inside the canvas.
    const toolbarH = 38;
    let toolbarX = titleX + 90;
    let toolbarY = titleY - 14 - toolbarH - 6;
    // Clamp to canvas bounds
    const maxX = canvasRect.width - 220;
    if (toolbarX > maxX) toolbarX = maxX;
    if (toolbarX < 12) toolbarX = 12;
    if (toolbarY < 8) toolbarY = titleY + titleRect.height + 14 + 10; // fall below if no room above
    toolbar.style.left = toolbarX + 'px';
    toolbar.style.top  = toolbarY + 'px';
  }

  function backspaceTail(onDone) {
    let tail = ORIGINAL_TAIL;
    function step() {
      if (!started) return;
      if (tail.length === 0) { onDone(); return; }
      tail = tail.slice(0, -1);
      setTitleHTML(FIXED_PREFIX + tail + '<span class="b4-cursor"></span>');
      timeouts.push(setTimeout(step, BACKSPACE_MS_PER_CHAR));
    }
    step();
  }

  function typeTail(onDone) {
    let i = 0;
    function step() {
      if (!started) return;
      if (i >= NEW_TAIL.length) { onDone(); return; }
      i++;
      setTitleHTML(FIXED_PREFIX + NEW_TAIL.slice(0, i) + '<span class="b4-cursor"></span>');
      timeouts.push(setTimeout(step, TYPE_MS_PER_CHAR));
    }
    step();
  }

  function setup() {
    if (!started) return;
    injectIframeStyles();
    // Normalize the title to the flat "prefix + original tail" form so
    // the typing animation has a known starting point.
    setTitleHTML(FIXED_PREFIX + ORIGINAL_TAIL);
    positionOverlay();

    at(HIGHLIGHT_AT_MS, () => {
      if (!started) return;
      const t = getTitle();
      if (t) t.classList.add('b4-editing');
      label?.classList.add('on');
      // Re-position in case adding the outline shifted the rect slightly.
      positionOverlay();
    });

    at(TOOLBAR_AT_MS, () => {
      if (!started) return;
      toolbar?.classList.add('on');
    });

    at(BACKSPACE_START_MS, () => {
      if (!started) return;
      // Plant the cursor before the first backspace
      setTitleHTML(FIXED_PREFIX + ORIGINAL_TAIL + '<span class="b4-cursor"></span>');
      // Tiny pause so the cursor blinks once at the end of the line
      timeouts.push(setTimeout(() => {
        if (!started) return;
        backspaceTail(() => {
          if (!started) return;
          typeTail(() => {
            // Final state: leave the new title + cursor visible.
          });
        });
      }, 300));
    });
  }

  function enter() {
    started = true;
    clearTimers();

    const doc = getDoc();
    if (doc && doc.readyState === 'complete' && getTitle()) {
      setup();
    } else if (iframe) {
      onLoadHandler = () => { if (started) setup(); };
      iframe.addEventListener('load', onLoadHandler, { once: true });
    }
  }

  function exit() {
    started = false;
    clearTimers();
    if (onLoadHandler && iframe) {
      iframe.removeEventListener('load', onLoadHandler);
      onLoadHandler = null;
    }
    const title = getTitle();
    if (title) {
      title.classList.remove('b4-editing');
      setTitleHTML(FIXED_PREFIX + ORIGINAL_TAIL);
    }
    label?.classList.remove('on');
    toolbar?.classList.remove('on');
  }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    iframe  = section.querySelector('.b4-iframe');
    toolbar = section.querySelector('.b4-toolbar');
    label   = section.querySelector('.b4-component-label');

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
