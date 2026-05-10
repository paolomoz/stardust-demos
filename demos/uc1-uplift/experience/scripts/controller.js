/* controller.js — the Piñata translate-Y page-wrap navigator,
   adapted for autoplay with manual override.
   Reference: ~/Desktop/preso/AI Factory Piñata — Adobe.html (lines 1456-1545)
*/

(function () {
  'use strict';

  // Capture the hash IMMEDIATELY (before the browser auto-scrolls to the
  // matching element id) and strip it from the URL. With `body { overflow:
  // hidden }` the page won't scroll visually, but body.scrollTop still gets
  // set, which compounds with our translate-Y page-wrap and offsets the
  // beats. By removing the hash before any scroll resolution, the browser
  // has nothing to scroll to.
  const INITIAL_HASH = location.hash;
  if (INITIAL_HASH) {
    try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {}
  }

  // Per-beat durations in ms — must match script.md
  // Beat 1 cold open + trap        14s
  // Beat 2 turn + pipeline montage 32s
  // Beat 3 reveal (extended)       17s — Phase 2 + hold at landing
  // Beat 4 lands in AEM             8s
  // Beat 5 ongoing capability      14s
  // Beat 6 math + close             8s
  const BEAT_DURATIONS_MS = [14000, 32000, 17000, 8000, 14000, 8000];
  const TRANSITION_MS = 900; // matches CSS #page-wrap transition

  const wrap = document.getElementById('page-wrap');
  const cover = document.getElementById('cover');
  const progress = document.querySelector('.nav-progress > i');

  if (!wrap) {
    console.error('controller: #page-wrap missing');
    return;
  }

  let secs = [];
  let cur = 0;
  let busy = false;
  let advanceTimer = null;
  let started = false;

  function init() {
    secs = Array.from(document.querySelectorAll('#page-wrap section.beat'));
    console.log('controller: beats found =', secs.length, 'durations =', BEAT_DURATIONS_MS);
    if (secs.length !== BEAT_DURATIONS_MS.length) {
      console.warn('controller: beat count mismatch with BEAT_DURATIONS_MS');
    }
    // Belt-and-braces scroll reset (hash was already stripped above, but
    // some browsers may still have set scrollTop before the strip landed).
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Place first beat at offset 0 without animating
    wrap.style.transition = 'none';
    wrap.style.transform = 'translateY(0)';
    requestAnimationFrame(() => {
      wrap.style.transition = '';
    });
    bindInputs();

    // Auto-start on deeplink
    const deep = readDeeplink();
    if (deep >= 0) {
      // brief delay so transitions are armed
      setTimeout(() => start(deep), 60);
    }
  }

  function start(targetIndex) {
    if (started) return;
    started = true;
    cover.classList.add('hidden');
    // Start the music bed if present and gated by user gesture
    const audio = document.getElementById('music');
    if (audio) {
      audio.volume = 0.6;
      audio.play().catch(e => console.warn('audio play blocked:', e.message));
    }
    goTo(typeof targetIndex === 'number' ? targetIndex : 0);
  }

  // Deeplink: #b3 jumps straight to that beat, skipping the cover.
  // Reads from the hash captured at script-eval time (before the URL was stripped).
  function readDeeplink() {
    const m = (INITIAL_HASH || '').match(/#b(\d+)/i);
    if (!m) return -1;
    const i = parseInt(m[1], 10) - 1;
    return (i >= 0 && i < (secs.length || 6)) ? i : -1;
  }

  function goTo(i) {
    if (i < 0 || i >= secs.length || busy) return;
    busy = true;
    cur = i;
    // Belt-and-braces: clear any document scroll the browser inserted.
    if (window.scrollY || document.documentElement.scrollTop) {
      window.scrollTo(0, 0);
    }

    // Clear .active on all, set on current — drives motion.css selectors
    secs.forEach(s => s.classList.remove('active'));
    const target = secs[i];
    target.classList.add('active');

    // Translate the wrap to align section i with the viewport top
    wrap.style.transform = 'translateY(-' + target.offsetTop + 'px)';

    // Trigger reveals on this section's children
    target.querySelectorAll('.reveal, .reveal-left, .stagger-item, .card').forEach((el, j) => {
      // small individual delay for rhythm; reveal-N classes give explicit ordering
      setTimeout(() => el.classList.add('in'), j * 80);
    });

    // Numeric count-ups
    target.querySelectorAll('[data-target]').forEach(el => {
      if (el.dataset.animated) return;
      el.dataset.animated = '1';
      const t = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      function step(ts) {
        const p = Math.min((ts - start) / 1400, 1);
        const e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(e * t) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });

    // Progress bar
    if (progress) {
      const pct = secs.length > 1 ? (i / (secs.length - 1)) * 100 : 0;
      progress.style.width = pct + '%';
    }

    // Schedule next auto-advance
    if (advanceTimer) clearTimeout(advanceTimer);
    if (i < secs.length - 1) {
      const dur = BEAT_DURATIONS_MS[i] ?? 10000;
      advanceTimer = setTimeout(() => goTo(i + 1), dur);
    }

    // Release busy lockout after the wrap transition completes
    setTimeout(() => { busy = false; }, TRANSITION_MS);
  }

  function bindInputs() {
    // Spacebar / Enter starts; arrows manually navigate
    window.addEventListener('keydown', e => {
      if (!started) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          start();
        }
        return;
      }
      if (busy) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (advanceTimer) clearTimeout(advanceTimer);
        goTo(cur + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (advanceTimer) clearTimeout(advanceTimer);
        goTo(cur - 1);
      } else if (e.key === 'Home') {
        if (advanceTimer) clearTimeout(advanceTimer);
        goTo(0);
      } else if (e.key === 'End') {
        if (advanceTimer) clearTimeout(advanceTimer);
        goTo(secs.length - 1);
      }
    });

    // Cover screen click also starts
    cover.addEventListener('click', () => start());

    // Disable wheel-driven scroll (we don't want native scroll)
    window.addEventListener('wheel', e => {
      if (!started) return;
      e.preventDefault();
    }, { passive: false });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
