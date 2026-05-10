/* beat1.js — orchestrates the Stardust intro + cold open + trap timeline.
   Self-installs by observing the section's `.active` class. When the controller
   activates b1, this kicks off the 24s timeline. Idempotent — re-entry replays.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b1';
  const TOTAL_MS = 24000;

  // ── Intro (0:00–0:10) — "Stardust / AI design. On brand." with AI→Unique correction ──
  const AI_CORRECT_MS = 4000;        // marker strikes "AI" + writes "Unique" above
  const INTRO_FADE_OUT_MS = 9000;    // intro fades out
  const INTRO_END_MS = 10000;        // original timeline begins (cover hole opens)

  // ── Cold open + trap (timings relative to INTRO_END_MS) ──
  const STINGER_MS = INTRO_END_MS + 9500;   // "Pick one. That's the deal." scrambles in
  const FOOTER_MS  = INTRO_END_MS + 11500;  // "Enterprise marketing. Since forever." fades in

  const STINGER_TEXT = "Pick one. That's the deal.";
  const STINGER_HTML = "Pick one. That's <span class=\"red\">the deal.</span>";

  let timeoutHandles = [];
  let cover, hole, sceneA, sceneB, stinger, footer, sub, intro, aiBlock;

  // Polygon points: tiny center ↔ large irregular pentagon.
  // Two distinct "open" shapes give visual variety between scene A and scene B.
  const HOLE_START   = '720,450 720,450 720,450 720,450 720,450';
  const HOLE_FULL_A  = '110,160 1330,200 1390,720 700,860 80,720';   // scene A reveal
  const HOLE_FULL_B  = '60,260  1380,120 1340,780 760,840 100,640';  // scene B reveal — different angle
  const HOLE_FADE    = '720,450 720,450 720,450 720,450 720,450';    // collapse back

  function clearTimers() {
    timeoutHandles.forEach(h => clearTimeout(h));
    timeoutHandles = [];
  }
  function at(delay, fn) {
    timeoutHandles.push(setTimeout(fn, delay));
  }

  function reset(section) {
    sceneA.classList.remove('visible');
    sceneB.classList.remove('visible');
    if (cover) cover.classList.remove('fading');
    if (hole) hole.setAttribute('points', HOLE_START);
    stinger.classList.remove('scrambling');
    stinger.innerHTML = STINGER_HTML;
    footer.classList.remove('in');
    // Intro stays .visible (it's the splash); just clear timeline-applied states
    if (intro) intro.classList.remove('leaving', 'started');
    if (aiBlock) aiBlock.classList.remove('struck');
    // H1 starts visible (it's revealed by the cover's hole, not its own mask)
    section.querySelectorAll('.cold-open-sub .st-char')
      .forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(20px)'; });
  }

  function scrambleStinger(text, html) {
    stinger.classList.add('scrambling');
    stinger.textContent = '';
    return window.Scramble.to(stinger, text, {
      duration: 1500,
      scrambleSpeed: 28,
      charDelay: 22,
    }).then(() => {
      stinger.innerHTML = html;
      stinger.classList.remove('scrambling');
    });
  }

  function enter(section) {
    if (!window.gsap) {
      console.warn('beat1: GSAP missing — falling back to no-animation');
      return;
    }
    clearTimers();
    reset(section);

    // ── Scene 0 · Stardust intro overlay (0:00–0:10) ──
    // Intro is already .visible from page-load splash; mark .started so the
    // press-space cue fades out now that the user has begun.
    if (intro) intro.classList.add('started');

    // 4.0s — red marker strikes "AI" and writes "Unique" handwritten above
    at(AI_CORRECT_MS, () => {
      if (aiBlock) aiBlock.classList.add('struck');
    });

    // 9.0s — intro fades out
    at(INTRO_FADE_OUT_MS, () => intro && intro.classList.add('leaving'));

    // 10.0s — Scene A becomes visible (still hidden behind the cover until hole opens)
    at(INTRO_END_MS, () => sceneA.classList.add('visible'));

    // 10.28s — first opening: hole grows on Scene A → H1 emerges
    at(INTRO_END_MS + 280, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FULL_A },
        duration: 1.9,
        ease: 'power3.out',
      });
    });

    // 12.4s — subhead cascades in while H1 is still framed by the cover
    at(INTRO_END_MS + 2400, () => {
      const subChars = window.SplitText.chars(sub);
      gsap.to(subChars, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: { each: 0.018, from: 'start' },
      });
    });

    // 13.8s — hole shrinks back: Scene A wipes out, page-pattern re-covers
    at(INTRO_END_MS + 3800, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FADE },
        duration: 0.8,
        ease: 'power3.in',
      });
    });

    // 14.6s — under the fully-closed cover, swap scenes A → B (invisible cut)
    at(INTRO_END_MS + 4600, () => {
      sceneA.classList.remove('visible');
      sceneB.classList.add('visible');
    });

    // 14.8s — second opening: hole regrows with a different polygon shape on Scene B
    at(INTRO_END_MS + 4800, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FULL_B },
        duration: 1.4,
        ease: 'power3.out',
      });
    });

    // 16.0s — fade the cover so Scene B reads cleanly for the rest of the beat
    at(INTRO_END_MS + 6000, () => cover.classList.add('fading'));

    // ── Stinger — "Pick one. That's the deal." scrambles in at 19.5s ──
    at(STINGER_MS, () => scrambleStinger(STINGER_TEXT, STINGER_HTML));

    // ── Subtitle — "Enterprise marketing. Since forever." fades in at 21.5s ──
    at(FOOTER_MS, () => footer.classList.add('in'));
  }

  function exit() {
    clearTimers();
  }

  function init() {
    const section = document.getElementById(SECTION_ID);
    if (!section) return;

    cover = section.querySelector('.reveal-cover');
    hole = section.querySelector('.reveal-hole');
    sceneA = section.querySelector('.scene-a');
    sceneB = section.querySelector('.scene-b');
    stinger = section.querySelector('.stinger');
    footer = section.querySelector('.footer-line');
    sub = section.querySelector('.cold-open-sub');
    intro = section.querySelector('.b1-intro-overlay');
    aiBlock = section.querySelector('.ai-correction');

    // Show the intro overlay immediately on page load — it's the splash
    // screen, visible before the user presses Space. The full beat-1
    // timeline (AI correction, fade out, cold open) only fires once the
    // controller activates the section via .active.
    if (intro) {
      requestAnimationFrame(() => intro.classList.add('visible'));
    }

    // Watch for `.active` class toggle — drive enter/exit accordingly
    const obs = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.attributeName === 'class') {
          if (section.classList.contains('active')) enter(section);
          else exit();
        }
      }
    });
    obs.observe(section, { attributes: true, attributeFilter: ['class'] });

    // Cold-start: if the section is already active on init, fire enter
    if (section.classList.contains('active')) enter(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
