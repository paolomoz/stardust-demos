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
  const STINGER_START_MS = 9500;     // "Pick one. That's the deal." scrambles in
  const FOOTER_START_MS = 11500;     // motto fades in

  let timer = null;
  let timeoutHandles = [];
  let cover, hole, sceneA, sceneB, stinger, footer, h1, sub;

  // Polygon points: tiny center → large irregular pentagon
  const HOLE_START = '720,450 720,450 720,450 720,450 720,450';
  const HOLE_FULL  = '110,160 1330,200 1390,720 700,860 80,720';

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
    footer.classList.remove('in');
    stinger.classList.remove('scrambling');
    // H1 starts visible (it's revealed by the cover's hole, not its own mask)
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

    // ── Scene A · Cold open ──
    sceneA.classList.add('visible');

    // After a brief beat, expand the polygon hole — H1 emerges through it.
    // GSAP attr tween interpolates each number in the points string.
    at(280, () => {
      gsap.to(hole, {
        attr: { points: HOLE_FULL },
        duration: 1.9,
        ease: 'power3.out',
      });
    });

    // After the hole is fully open + a brief hold, fade the cover out
    // so the H1 reads cleanly without the wireframe pattern around it.
    at(2700, () => cover.classList.add('fading'));

    // Subhead lands once the cover is mostly gone
    at(3300, () => {
      const subChars = window.SplitText.chars(sub);
      gsap.to(subChars, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: { each: 0.018, from: 'start' },
      });
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

    cover = section.querySelector('.reveal-cover');
    hole = section.querySelector('.reveal-hole');
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
