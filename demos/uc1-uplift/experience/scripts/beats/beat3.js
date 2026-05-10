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
  // Phase 1: 0 → 1500 over 3.0s LINEAR — steady velocity through the
  //          mosaic convergence + 3-cards stagger reveal.
  // Hold:    300ms at 1500 — brief pause so cards register.
  // Phase 2: 1500 → maxScroll over the REMAINING beat time. No freeze at
  //          the end — page scrolls continuously through the rest of the
  //          redesign (Business solutions, Ford story, products, CTA, footer)
  //          right up to the beat-to-Beat-4 transition.
  const CARDS_END_Y      = 1500;
  const PHASE1_DURATION  = 3.0;     // seconds
  const PHASE1_HOLD_MS   = 300;
  const PHASE2_TARGET_F  = 0.92;    // fraction of maxScroll to land on
  // Beat 3 total duration is 17s in controller.js; subtract the hold +
  // Phase 1 + Phase 1 hold to get whatever's left for Phase 2.
  const BEAT_TOTAL_MS    = 17000;
  const PHASE2_END_BUFFER_MS = 200; // small buffer before the controller advances
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

  // Drive position frame-by-frame. Lenis's own `duration` parameter
  // collapses to its internal lerp (~0.5s regardless of what we pass), so
  // we control timing in JS and call Lenis with `immediate: true` each frame
  // to set the position exactly.
  function scrollTo(targetY, durationSec, easing) {
    const win = iframe.contentWindow;
    if (!win) return;
    const lenis = getLenis();
    const start = (lenis ? lenis.animatedScroll : win.scrollY) || 0;
    const t0 = performance.now();
    const dms = durationSec * 1000;
    const ease = easing || (t => t);
    function tick(now) {
      if (!started) return;
      const p = Math.min((now - t0) / dms, 1);
      const y = start + (targetY - start) * ease(p);
      try {
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(y, { immediate: true, force: true, lock: true });
        } else {
          win.scrollTo(0, y);
          win.dispatchEvent(new Event('scroll'));
        }
      } catch (_) {}
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

    // PHASE 2 — after a brief hold for the cards to register, scroll
    // continuously through the rest of the redesigned page. Uses ALL
    // remaining beat time so there's no freeze before transition.
    at(SCROLL_HOLD_BEFORE_MS + PHASE1_DURATION * 1000 + PHASE1_HOLD_MS, () => {
      const maxScroll = getMaxScroll();
      const targetY = maxScroll * PHASE2_TARGET_F;
      scrollTo(targetY, PHASE2_DURATION_MS / 1000, t => t);
    });
  }

  function stopScroll() {
    started = false;
    clearTimers();
    try {
      const lenis = getLenis();
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else if (iframe?.contentWindow) {
        iframe.contentWindow.scrollTo(0, 0);
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
