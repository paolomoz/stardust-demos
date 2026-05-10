/* beat3.js — drives the NEW redesign iframe's internal scroll programmatically
   so its Lenis + GSAP scroll-triggered motions actually play during the beat.
   The OLD layer is a static PNG and is animated via CSS translateY.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b3';
  // Wipe runs from 1.2s to 10.7s. 80% of wipe = 8.8s.
  // Hold the NEW iframe at the top until then, so the redesign's
  // scroll-driven hero animations fire when the audience is looking.
  const SCROLL_HOLD_BEFORE_MS = 8800;

  // Phased scroll calibrated to the redesign's actual content positions
  // (probed live from the iframe — see /tmp/uc1-skeleton-check/probe-y*.png):
  //   y=0     hero with "Customer experience orchestration" headline
  //   y=700   end of hero-pin-spacer (mosaic fully converged)
  //   y=735–1005  editorial-bento stagger-reveal fires (3 cards slide in)
  //   y=1500  cards section settled — readable
  //   y=2500  next section ("Business solutions" 3-card alt)
  //   y=7000  CTA section with red gradient ("Let's talk about Adobe for Business")
  //
  // Phase 1: 0 → 1500 over 2.5s LINEAR — steady velocity through the
  //          mosaic convergence + 3-cards stagger reveal.
  // Phase 2: 1500 → ~maxScroll*0.92 over the rest of the beat (~5.5s)
  //          with EASE-OUT-CUBIC. Velocity is highest at handoff (sprint
  //          past Business solutions / Ford / products) and decelerates
  //          smoothly toward the CTA section. By the time the headline
  //          overlay fades in (last ~1.2s in CSS), the page is barely
  //          moving (<5% of avg velocity), so scroll-vs-paint pressure
  //          is negligible.
  //
  // No hold between phases. Linear→ease-out boundary still has a small
  // velocity jump, but ease-out's high initial velocity quickly
  // overwhelms the linear tail, blending visually.
  const CARDS_END_Y      = 1500;
  const PHASE1_DURATION  = 2.5;     // seconds
  const PHASE1_HOLD_MS   = 0;
  const PHASE2_TARGET_F  = 0.92;
  const BEAT_TOTAL_MS    = 17000;
  const PHASE2_END_BUFFER_MS = 200;
  const PHASE2_DURATION_MS = BEAT_TOTAL_MS - SCROLL_HOLD_BEFORE_MS
                            - PHASE1_DURATION * 1000 - PHASE1_HOLD_MS - PHASE2_END_BUFFER_MS;

  let section, iframe, started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(delay, fn) { timeouts.push(setTimeout(fn, delay)); }

  function getMaxScroll() {
    try {
      const doc = iframe.contentDocument;
      if (!doc) return 0;
      const h = Math.max(
        doc.documentElement.scrollHeight,
        doc.body ? doc.body.scrollHeight : 0
      );
      return Math.max(0, h - 900);
    } catch (_) { return 0; }
  }

  function getLenis() {
    try { return iframe.contentWindow?.__lenis || iframe.contentWindow?.lenis || null; }
    catch (_) { return null; }
  }

  // Let Lenis own the animation. One scrollTo call with explicit duration
  // and easing — Lenis lerps from current to target over `duration` seconds
  // and fires scroll events along the way (GSAP ScrollTrigger picks them up).
  // Fallback to manual rAF when Lenis isn't available.
  function scrollTo(targetY, durationSec, easing) {
    const win = iframe.contentWindow;
    if (!win) return;
    const lenis = getLenis();
    const ease = easing || (t => t);
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetY, {
        duration: durationSec,
        easing: ease,
        force: true,
        lock: false,
      });
      return;
    }
    // Fallback for missing Lenis
    const start = win.scrollY || 0;
    const t0 = performance.now();
    const dms = durationSec * 1000;
    function tick(now) {
      if (!started) return;
      const p = Math.min((now - t0) / dms, 1);
      const y = start + (targetY - start) * ease(p);
      try { win.scrollTo(0, y); win.dispatchEvent(new Event('scroll')); } catch (_) {}
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function startScroll() {
    if (!iframe?.contentWindow) return;

    // PHASE 1 — 0 → 1500 over 3.0s LINEAR. Mosaic converges into the
    // hero (steady time on the convergence), then the 3 cards
    // stagger-reveal as they enter viewport.
    at(SCROLL_HOLD_BEFORE_MS, () => {
      scrollTo(CARDS_END_Y, PHASE1_DURATION, t => t);
    });

    // PHASE 2 — scroll the rest of the page with EASE-OUT. Velocity is
    // highest at the start of Phase 2 (sprint past Business solutions /
    // Ford / products) and decelerates toward the CTA section. The slow
    // tail gives the overlay headline room to fade in without the active
    // scroll repainting underneath.
    at(SCROLL_HOLD_BEFORE_MS + PHASE1_DURATION * 1000 + PHASE1_HOLD_MS, () => {
      const maxScroll = getMaxScroll();
      const targetY = maxScroll * PHASE2_TARGET_F;
      scrollTo(targetY, PHASE2_DURATION_MS / 1000, t => 1 - Math.pow(1 - t, 3));
    });
  }

  function stopScroll() {
    started = false;
    clearTimers();
    try {
      const win = iframe?.contentWindow;
      if (win) win.scrollTo(0, 0);
      const lenis = getLenis();
      if (lenis) {
        lenis.animatedScroll = 0;
        lenis.targetScroll = 0;
        if (typeof lenis.start === 'function') lenis.start();
      }
    } catch (_) {}
  }

  function enter() {
    started = true;
    if (iframe.contentDocument && iframe.contentDocument.readyState !== 'loading') {
      startScroll();
    } else {
      iframe.addEventListener('load', startScroll, { once: true });
    }
  }

  function exit() { stopScroll(); }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    iframe = section.querySelector('.b3-new iframe');
    if (!iframe) return;

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
