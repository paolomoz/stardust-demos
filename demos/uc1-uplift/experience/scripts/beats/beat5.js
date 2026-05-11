/* beat5.js — Not just a 1 off project. A capability. (14s)

   Two responsibilities:

   1. Iframe fragment scrolling. Each beat-5 iframe loads
      content-block-vocabulary.html and is supposed to display a
      different block (#b-customer, #b-blackfriday, …). The fragment is
      moved out of `src` into `data-fragment` so the UA doesn't scroll
      the parent body on iframe load. We scrollTo() inside the iframe.
      A watchdog re-applies the scroll for ~6s because the card-entry
      transforms reliably reset it to 0 in the first second or two.

   2. Beat-5 choreography. Tree highlights advance one item at a time
      and the corresponding deck card slides in to stack on top of the
      prior ones. JS-driven so the two halves stay in sync.
*/

(function () {
  'use strict';

  const SECTION_ID = 'b5';
  // Stagger between tree highlights / card entrances (ms from beat enter).
  const STEPS_AT_MS = [800, 1700, 2600, 3500, 4400];

  let section, treeItems, cards;
  let started = false;
  let timeouts = [];

  function clearTimers() { timeouts.forEach(clearTimeout); timeouts = []; }
  function at(d, fn) { timeouts.push(setTimeout(fn, d)); }

  // ─── iframe fragment scroll ─────────────────────────────────────
  function targetOffsetFor(ifr) {
    try {
      const id = ifr.dataset.fragment?.replace(/^#/, '');
      const t = ifr.contentDocument?.getElementById(id);
      return t ? t.offsetTop : null;
    } catch (_) { return null; }
  }
  function applyScroll(ifr) {
    const top = targetOffsetFor(ifr);
    if (top == null) return;
    try { ifr.contentWindow.scrollTo(0, top); } catch (_) {}
    document.body.scrollTop = 0;
  }
  function startScrollWatchdog(ifr) {
    let attempts = 0;
    const tick = () => {
      attempts++;
      if (attempts > 20) return;
      const want = targetOffsetFor(ifr);
      if (want != null) {
        let cur = 0;
        try { cur = ifr.contentWindow?.scrollY ?? 0; } catch (_) {}
        if (Math.abs(cur - want) > 1) applyScroll(ifr);
      }
      setTimeout(tick, 300);
    };
    setTimeout(tick, 100);
  }
  function armIframe(ifr) {
    applyScroll(ifr);
    startScrollWatchdog(ifr);
  }
  function applyFragments() {
    document.querySelectorAll('iframe[data-fragment]').forEach(ifr => {
      if (ifr.contentDocument?.readyState === 'complete') armIframe(ifr);
      else ifr.addEventListener('load', () => armIframe(ifr), { once: true });
    });
  }

  // ─── beat-5 choreography ────────────────────────────────────────
  function enter() {
    started = true;
    clearTimers();
    // Reset state
    treeItems.forEach(li => li.classList.remove('is-active', 'is-done'));
    cards.forEach(c => c.classList.remove('is-in'));

    STEPS_AT_MS.forEach((delay, i) => {
      at(delay, () => {
        if (!started) return;
        // Mark prior as done, highlight current
        treeItems.forEach((li, j) => {
          li.classList.toggle('is-active', j === i);
          if (j < i) li.classList.add('is-done');
        });
        // Slide in the matching card
        cards[i]?.classList.add('is-in');
      });
    });

    // After the last step, leave the last item active + the rest marked done
    at(STEPS_AT_MS[STEPS_AT_MS.length - 1] + 800, () => {
      if (!started) return;
      treeItems.forEach((li, j) => {
        if (j < treeItems.length - 1) li.classList.add('is-done');
      });
    });
  }

  function exit() {
    started = false;
    clearTimers();
    treeItems?.forEach(li => li.classList.remove('is-active', 'is-done'));
    cards?.forEach(c => c.classList.remove('is-in'));
  }

  function init() {
    section = document.getElementById(SECTION_ID);
    if (!section) return;
    treeItems = Array.from(section.querySelectorAll('.b5-tree-item'));
    cards     = Array.from(section.querySelectorAll('.b5-card'));

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { applyFragments(); init(); });
  } else {
    applyFragments();
    init();
  }
})();
