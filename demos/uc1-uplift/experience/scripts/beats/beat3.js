/* beat3.js — drives the NEW redesign iframe's internal scroll programmatically
   so its Lenis + GSAP scroll-triggered motions actually play during the beat.
   The OLD layer is a static PNG and is animated via CSS translateY.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b3';
  const SCROLL_DURATION_MS = 14000; // matches data-duration on b3
  const SCROLL_HOLD_BEFORE_MS = 0;  // start scrolling immediately on .active

  let section, iframe, raf = 0, started = false;

  function startScroll() {
    if (!iframe || !iframe.contentWindow) return;

    let win;
    try { win = iframe.contentWindow; } catch (e) {
      console.warn('beat3: iframe contentWindow inaccessible', e);
      return;
    }

    const startTs = performance.now() + SCROLL_HOLD_BEFORE_MS;
    // Ask the iframe document how tall it is. If it's still loading, retry.
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

    function tick(now) {
      if (!started) return;
      const t = (now - startTs) / SCROLL_DURATION_MS;
      const p = Math.min(Math.max(t, 0), 1);
      // Quint ease-in-out for cinematic pacing
      const eased = p < 0.5
        ? 16 * p * p * p * p * p
        : 1 - Math.pow(-2 * p + 2, 5) / 2;

      const maxScroll = getMaxScroll();
      const targetY = eased * maxScroll * 0.78; // scroll ~78% of the page

      try {
        // If Lenis is exposed, use its scrollTo to keep its internal state in sync.
        const lenis = win.__lenis || win.lenis || null;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(targetY, { immediate: true, force: true });
        } else {
          win.scrollTo(0, targetY);
          // Belt: dispatch a synthetic scroll event so any non-Lenis ScrollTrigger
          // listeners pick it up.
          win.dispatchEvent(new Event('scroll'));
        }
      } catch (_) { /* cross-origin guarded — same-origin should always work */ }

      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  function stopScroll() {
    started = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    // Reset the iframe scroll for clean re-entry
    try {
      const win = iframe?.contentWindow;
      const lenis = win?.__lenis || win?.lenis || null;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else if (win) {
        win.scrollTo(0, 0);
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
