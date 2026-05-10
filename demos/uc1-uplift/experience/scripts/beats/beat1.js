/* beat1.js — orchestrates the cold open + trap timeline.
   Self-installs by observing the section's `.active` class. When the controller
   activates b1, this kicks off the 14s timeline. Idempotent — re-entry replays.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b1';
  const TOTAL_MS = 14000;

  const SCENE_A_END_MS = 5000;
  const TRAP_START_MS = 5000;        // Scene B begins
  const STINGER_MS = 9500;           // "Pick one. That's the deal." scrambles in
  const FOOTER_MS = 11500;           // "Enterprise marketing. Since forever." subtitle fades in

  const STINGER_TEXT = "Pick one. That's the deal.";
  const STINGER_HTML = "Pick one. That's <span class=\"red\">the deal.</span>";

  let timer = null;
  let timeoutHandles = [];
  let cover, hole, sceneA, sceneB, stinger, footer, h1, sub;

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

    // ── Scene A · Cold open ──
    sceneA.classList.add('visible');

    // 0.28s — first opening: hole grows on Scene A → H1 emerges
    at(280, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FULL_A },
        duration: 1.9,
        ease: 'power3.out',
      });
    });

    // 2.4s — subhead cascades in while H1 is still framed by the cover
    at(2400, () => {
      const subChars = window.SplitText.chars(sub);
      gsap.to(subChars, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: { each: 0.018, from: 'start' },
      });
    });

    // 3.8s — hole shrinks back: Scene A wipes out, page-pattern re-covers
    at(3800, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FADE },
        duration: 0.8,
        ease: 'power3.in',
      });
    });

    // 4.6s — under the fully-closed cover, swap scenes A → B (invisible cut)
    at(4600, () => {
      sceneA.classList.remove('visible');
      sceneB.classList.add('visible');
    });

    // 4.8s — second opening: hole regrows with a different polygon shape on Scene B
    at(4800, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FULL_B },
        duration: 1.4,
        ease: 'power3.out',
      });
    });

    // 6.0s — fade the cover so Scene B reads cleanly for the rest of the beat
    at(6000, () => cover.classList.add('fading'));

    // (Scene A → Scene B handoff is now embedded in the cover choreography
    //  above: shrink at 3.8s, swap at 4.6s, regrow at 4.8s, fade at 6.0s.)

    // ── Stinger — "Pick one. That's the deal." scrambles in at 9.5s ──
    at(STINGER_MS, () => scrambleStinger(STINGER_TEXT, STINGER_HTML));

    // ── Subtitle — "Enterprise marketing. Since forever." fades in at 11.5s ──
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
    h1 = section.querySelector('.cold-open-h1');
    sub = section.querySelector('.cold-open-sub');

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
