/* beat1.js — orchestrates the Stardust intro + cold open + trap timeline.
   Self-installs by observing the section's `.active` class. When the controller
   activates b1, this kicks off the 24s timeline. Idempotent — re-entry replays.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b1';
  const TOTAL_MS = 24000;

  // ── Stardust splash + immediate reveal ──
  // The Stardust cover is the splash AND the mask. Pressing Space should
  // give instant feedback, so the polygon hole begins opening within
  // ~300ms of the cue fading — not on a long delay. The cover's content
  // (wordmark, quotes, logo) stays in place around the hole as the Adobe
  // scenes appear through it.
  const INTRO_FADE_OUT_MS = 200;   // press-Space cue fades right away
  const INTRO_END_MS      = 300;   // scene-a goes .visible, hole begins ~280ms later

  // ── Cold open + trap (absolute timings into beat 1) ──
  const STINGER_MS = 8000;   // "Pick one. That's the deal." scrambles in
  const FOOTER_MS  = 11000;  // "Enterprise marketing. Since forever." fades in

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

    // ── Stardust cover stays in place ──
    // Mark .started immediately so the press-Space cue fades away the
    // moment the user has begun.
    if (intro) intro.classList.add('started');

    // ~0.3s — scene-a goes .visible behind the cover; the polygon hole
    //         opens ~280ms later, so the audience sees an immediate
    //         reaction to the keypress.
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

  // Stardust-palette starfield: paints onto the b1-starfield canvas.
  // Deterministic seed so the field is identical across reloads but still
  // feels random. Three layers: distant dim dust → medium → bright glow.
  function paintStarfield(canvas) {
    if (!canvas || !canvas.getContext) return;
    const W = canvas.width, H = canvas.height;
    const ctx = canvas.getContext('2d');
    // Simple seeded RNG (Mulberry32) so positions don't shift between runs.
    let s = 1337;
    const rng = () => {
      s |= 0; s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    ctx.clearRect(0, 0, W, H);

    // Layer 1 — distant tiny stars (dim dust)
    for (let i = 0; i < 260; i++) {
      const x = rng() * W;
      const y = rng() * H;
      const r = rng() * 0.7 + 0.25;
      ctx.globalAlpha = 0.25 + rng() * 0.35;
      ctx.fillStyle = '#f5f0e6';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Layer 2 — medium stars (brighter dust)
    for (let i = 0; i < 90; i++) {
      const x = rng() * W;
      const y = rng() * H;
      const r = rng() * 1.1 + 0.7;
      ctx.globalAlpha = 0.55 + rng() * 0.35;
      ctx.fillStyle = '#f6efe2';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Layer 3 — a handful of bright "anchor" stars with soft glow, tinted
    // warm amber so they tie into the Stardust palette.
    for (let i = 0; i < 14; i++) {
      const x = rng() * W;
      const y = rng() * H;
      const r = rng() * 1.4 + 1.4;
      // Glow halo
      const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
      const amber = rng() < 0.45;
      halo.addColorStop(0,    amber ? 'rgba(255,217,138,0.85)' : 'rgba(245,240,230,0.9)');
      halo.addColorStop(0.35, amber ? 'rgba(232,185,94,0.32)'  : 'rgba(245,240,230,0.30)');
      halo.addColorStop(1,    'rgba(245,240,230,0)');
      ctx.globalAlpha = 1;
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, r * 8, 0, Math.PI * 2);
      ctx.fill();
      // Bright core
      ctx.fillStyle = '#fff8e6';
      ctx.globalAlpha = 0.95;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
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

    // Paint the Stardust nebula starfield on the cover. Beat 6 uses the
    // same sky behind its SLICC shell — paint both canvases here so the
    // background reads as the same surface bookending the demo.
    paintStarfield(section.querySelector('.b1-starfield'));
    document.querySelectorAll('.b6-starfield').forEach(paintStarfield);

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
