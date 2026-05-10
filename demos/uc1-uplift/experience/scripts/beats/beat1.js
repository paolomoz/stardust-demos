/* beat1.js — orchestrates the cold open + trap timeline.
   Self-installs by observing the section's `.active` class. When the controller
   activates b1, this kicks off the 14s timeline. Idempotent — re-entry replays.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b1';
  const TOTAL_MS = 14000;

  const SCENE_A_END_MS = 5000;
  const APERTURE_OPEN_MS = 2400;     // aperture starts opening at +2.4s into Scene A
  const APERTURE_CLOSE_MS = 4500;    // and starts closing right before Scene B
  const TRAP_START_MS = 5000;        // Scene B begins
  const STINGER_START_MS = 9500;     // "Pick one. That's the deal." scrambles in
  const FOOTER_START_MS = 11500;     // motto fades in

  let timer = null;
  let timeoutHandles = [];
  let aperture, sceneA, sceneB, stinger, footer, h1, sub;

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
    aperture.classList.remove('open', 'closing');
    footer.classList.remove('in');
    stinger.classList.remove('scrambling');
    // Reset H1 chars to mask-reveal initial state (translateY(110%))
    section.querySelectorAll('.cold-open-h1 .st-char')
      .forEach(c => { c.style.opacity = ''; c.style.transform = 'translateY(110%)'; });
    // Reset subhead chars to fade-up initial state
    section.querySelectorAll('.cold-open-sub .st-char')
      .forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(20px)'; });
  }

  function enter(section) {
    if (!window.gsap) {
      console.warn('beat1: GSAP missing — falling back to no-animation');
      return;
    }
    clearTimers();
    reset(section);

    // Split text into chars (idempotent — split-text guards re-runs)
    const h1Chars = window.SplitText.chars(h1);
    const subChars = window.SplitText.chars(sub);

    // ── Scene A · Cold open ──
    sceneA.classList.add('visible');

    // Headline mask-reveal: each char rises from translateY(110%) to 0
    // through the word-level overflow:hidden mask. 22ms per char stagger.
    gsap.to(h1Chars, {
      y: 0,
      duration: 0.95,
      ease: 'power3.out',
      stagger: { each: 0.022, from: 'start' },
    });

    // Subhead fade-up cascade — gentler, body-scale type
    gsap.to(subChars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      delay: 1.4,
      stagger: { each: 0.018, from: 'start' },
    });

    // Aperture opens at 2.4s, closes at 4.5s
    at(APERTURE_OPEN_MS, () => aperture.classList.add('open'));
    at(APERTURE_CLOSE_MS, () => {
      aperture.classList.remove('open');
      aperture.classList.add('closing');
    });

    // ── Scene A → Scene B handoff at 5s ──
    at(SCENE_A_END_MS, () => {
      sceneA.classList.remove('visible');
      sceneB.classList.add('visible');
    });

    // ── Stinger scrambles in at 9.5s ──
    at(STINGER_START_MS, () => {
      stinger.classList.add('scrambling');
      const target = stinger.dataset.text || stinger.textContent;
      stinger.dataset.text = target;
      // Tease — show empty for the scramble
      stinger.textContent = '';
      window.Scramble.to(stinger, target, {
        duration: 1500,
        scrambleSpeed: 28,
        charDelay: 22,
      }).then(() => {
        // restore the .red span by re-rendering with HTML when it lands
        stinger.innerHTML = stinger.dataset.html || target;
        stinger.classList.remove('scrambling');
      });
    });

    // ── Footer line at 11.5s ──
    at(FOOTER_START_MS, () => footer.classList.add('in'));
  }

  function exit() {
    clearTimers();
  }

  function init() {
    const section = document.getElementById(SECTION_ID);
    if (!section) return;

    aperture = section.querySelector('.aperture');
    sceneA = section.querySelector('.scene-a');
    sceneB = section.querySelector('.scene-b');
    stinger = section.querySelector('.stinger');
    footer = section.querySelector('.footer-line');
    h1 = section.querySelector('.cold-open-h1');
    sub = section.querySelector('.cold-open-sub');

    // Stash the original HTML of the stinger so we can restore .red after scramble
    if (stinger) {
      stinger.dataset.html = stinger.innerHTML;
      stinger.dataset.text = stinger.textContent;
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
