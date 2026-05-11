/* beat3.js — orchestrates the 2-stage progressive uplift.
   Stage 1 (0-12s):  homepage — OLD screenshot → wipe → redesign video
                     (video plays for the last 3s before handoff)
   Stage 2 (12-30s): AEM Sites — three stacked layers, two sequential wipes
                     0.4-3.9s : wipe 1 (OLD screenshot → first redesign)
                     3.9-4.9s : 1s hold on first redesign
                     4.9-8.4s : wipe 2 (first redesign → bolder)
                     9.4s     : bolder iframe scroll begins (7s)
                     11.4s    : "Same brand. New surface." overlay (5s visible)
*/

(function () {
  'use strict';

  const SECTION_ID = 'b3';

  // Stage 1
  const STAGE1_VIDEO_PLAY_AT_MS = 9000;   // 3s before STAGE2_AT_MS
  const STAGE2_AT_MS            = 12000;  // hand off to merged stage 2

  // Stage 2 scroll trigger — fires 9.4s after the stage-2 active class is
  // added (1s after wipe 2 completes). The class is added STAGE_FADE_MS +
  // STAGE_DARK_HOLD_MS after STAGE2_AT_MS, so the absolute schedule from
  // enter() time is STAGE2_AT_MS + 900 + 9400 = 22300ms.
  const SCROLL_TRIGGER_MS       = 22300;
  const SCROLL_DURATION_S       = 7;
  const SCROLL_TARGET_F         = 0.5;

  let section, stages = [], video, scrollIframe, started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(delay, fn) { timeouts.push(setTimeout(fn, delay)); }

  // Stage transition: fade-out → dark hold → fade-in. The dark hold is
  // the cinema-style cut the audience reads as "different page now."
  // STAGE_FADE_MS matches the CSS opacity transition (beat3.css `#b3 .b3-pass`).
  const STAGE_FADE_MS      = 400;
  const STAGE_DARK_HOLD_MS = 500;

  function setActiveStage(idx) {
    const curIdx = stages.findIndex(s => s.classList.contains('b3-stage-active'));
    if (curIdx >= 0 && curIdx !== idx) {
      stages[curIdx].classList.remove('b3-stage-active');
      if (idx >= 0) {
        timeouts.push(setTimeout(() => {
          if (started) stages[idx]?.classList.add('b3-stage-active');
        }, STAGE_FADE_MS + STAGE_DARK_HOLD_MS));
      }
    } else {
      // First activation, reset, or same stage — toggle directly (no blank).
      stages.forEach((s, i) => {
        s.classList.toggle('b3-stage-active', i === idx);
      });
    }
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

    // Start the redesign-scroll video 3s before handoff so the audience
    // sees the redesigned page in motion just before we leave it.
    at(STAGE1_VIDEO_PLAY_AT_MS, () => {
      if (!started || !video) return;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    });

    // ── STAGE 2 ── homepage → AEM Sites (the merged two-wipe stage)
    at(STAGE2_AT_MS, () => {
      if (!started) return;
      try { video.pause(); } catch (_) {}
      setActiveStage(1);
    });

    // ── BOLDER SCROLL ── 1s after wipe 2 ends
    at(SCROLL_TRIGGER_MS, () => {
      if (!started || !scrollIframe) return;
      try {
        const win = scrollIframe.contentWindow;
        const lenis = win?.__lenis;
        const doc = scrollIframe.contentDocument;
        const maxScroll = doc
          ? Math.max(0, doc.documentElement.scrollHeight - 900)
          : 4000;
        const target = maxScroll * SCROLL_TARGET_F;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(target, {
            duration: SCROLL_DURATION_S,
            easing: t => 1 - Math.pow(1 - t, 3),
            force: true,
          });
        } else if (win) {
          // Fallback: rAF-driven
          const t0 = performance.now();
          const dms = SCROLL_DURATION_S * 1000;
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
    scrollIframe = section.querySelector('.b3-pass[data-stage="2"] .b3-frame-iframe-scroll');

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
