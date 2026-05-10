/* beat3.js — orchestrates the 3-stage progressive uplift.
   Stage 1 (0-12s):    home — OLD screenshot → wipe → NEW redesign video (5s play)
   Stage 2 (12-17s):   AEM Sites — OLD screenshot → wipe → NEW redesign iframe
   Stage 3 (17-30s):   AEM Sites — first redesign → wipe → bolder
                       1s pause after wipe, 7s scroll, overlay at +2s for 5s
*/

(function () {
  'use strict';

  const SECTION_ID = 'b3';

  // Stage 1
  const STAGE1_VIDEO_PLAY_AT_MS = 5500;  // start playing at mid-wipe
  const STAGE2_AT_MS             = 12000; // hand off to stage 2

  // Stage 2 (relative to beat start)
  const STAGE3_AT_MS             = 17000;

  // Stage 3 (relative to STAGE 3 ACTIVATION)
  // Wipe is 0.5s delay + 4s = ends at 4.5s
  const STAGE3_SCROLL_AT_MS      = 5500;  // 1s after wipe ends
  // Scroll runs for 7s (0..7), overlay reveals at 2s into scroll for 5s
  const STAGE3_SCROLL_DURATION_S = 7;

  let section, stages = [], video, scrollIframe, started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(delay, fn) { timeouts.push(setTimeout(fn, delay)); }

  function setActiveStage(idx) {
    stages.forEach((s, i) => {
      s.classList.toggle('b3-stage-active', i === idx);
    });
  }

  function reset() {
    setActiveStage(-1);
    if (video) { try { video.pause(); video.currentTime = 0; } catch (_) {} }
    if (scrollIframe) {
      try {
        const win = scrollIframe.contentWindow;
        const lenis = win?.__lenis;
        if (lenis && lenis.scrollTo) lenis.scrollTo(0, { immediate: true });
        else if (win) win.scrollTo(0, 0);
      } catch (_) {}
    }
  }

  function enter() {
    started = true;
    clearTimers();
    reset();

    // ── STAGE 1 ── activate immediately
    setActiveStage(0);

    // Video starts mid-wipe
    at(STAGE1_VIDEO_PLAY_AT_MS, () => {
      if (!started || !video) return;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    });

    // ── STAGE 2 ── home → AEM Sites
    at(STAGE2_AT_MS, () => {
      if (!started) return;
      try { video.pause(); } catch (_) {}
      setActiveStage(1);
    });

    // ── STAGE 3 ── AEM Sites → bolder
    at(STAGE3_AT_MS, () => {
      if (!started) return;
      setActiveStage(2);
    });

    // ── STAGE 3 SCROLL ── 1s after wipe ends
    at(STAGE3_AT_MS + STAGE3_SCROLL_AT_MS, () => {
      if (!started || !scrollIframe) return;
      try {
        const win = scrollIframe.contentWindow;
        const lenis = win?.__lenis;
        const doc = scrollIframe.contentDocument;
        const maxScroll = doc
          ? Math.max(0, doc.documentElement.scrollHeight - 900)
          : 4000;
        const target = maxScroll * 0.85;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(target, {
            duration: STAGE3_SCROLL_DURATION_S,
            easing: t => 1 - Math.pow(1 - t, 3),
            force: true,
          });
        } else if (win) {
          // Fallback: rAF-driven
          const t0 = performance.now();
          const dms = STAGE3_SCROLL_DURATION_S * 1000;
          (function tick(now) {
            if (!started) return;
            const p = Math.min((now - t0) / dms, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            win.scrollTo(0, target * eased);
            win.dispatchEvent(new Event('scroll'));
            if (p < 1) requestAnimationFrame(tick);
          })(performance.now());
        }
      } catch (_) {}
    });
  }

  function exit() {
    started = false;
    clearTimers();
    reset();
  }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    stages = Array.from(section.querySelectorAll('.b3-pass'));
    video = section.querySelector('.b3-pass[data-stage="1"] .b3-frame-video');
    scrollIframe = section.querySelector('.b3-pass[data-stage="3"] .b3-frame-iframe-scroll');

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
