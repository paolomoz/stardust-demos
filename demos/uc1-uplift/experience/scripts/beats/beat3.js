/* beat3.js — controls the prerecorded video of the redesigned page.
   The video sits in the NEW layer underneath the OLD page and the diagonal
   wipe. Started at 5.5s (mid-wipe, ~45% NEW visible) so its 11.5s natural
   playback ends exactly as the beat ends at 17s — no freeze, no cut-off.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b3';
  const VIDEO_PLAY_AT_MS = 5500;    // start playing at mid-wipe
  const VIDEO_DURATION_MS = 11533;  // matches the .mp4 source

  let section, video, started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }

  function reset() {
    if (!video) return;
    try { video.pause(); video.currentTime = 0; } catch (_) {}
  }

  function enter() {
    started = true;
    clearTimers();
    reset();
    timeouts.push(setTimeout(() => {
      if (!started || !video) return;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(e => console.warn('beat3: video.play blocked', e.message));
    }, VIDEO_PLAY_AT_MS));
  }

  function exit() {
    started = false;
    clearTimers();
    reset();
  }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    video = section.querySelector('.b3-frame-video');
    if (!video) return;

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
