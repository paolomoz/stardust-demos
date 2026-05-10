/* beat5.js — scroll each beat-5 iframe to its target anchor after load.
   With `body { overflow: hidden }` in base.css, a fragment in an iframe's
   src ("...html#anchor") still triggers the UA to scroll the parent body
   to bring the iframe element into view (document.body.scrollTop ends up
   at the iframe's offset). Every subsequent beat then renders above the
   viewport — uniform black.

   Even setting `iframe.contentWindow.location.hash` post-load triggers the
   same parent-scroll. We sidestep both by scrolling INSIDE the iframe
   directly: lookup the anchor element, scroll the iframe's contentWindow
   to its offsetTop. Anchor navigation never happens, parent stays put.
*/

(function () {
  'use strict';

  function scrollIframeToAnchor(ifr) {
    try {
      const id = ifr.dataset.fragment.replace(/^#/, '');
      const doc = ifr.contentDocument;
      const target = doc?.getElementById(id);
      if (target) ifr.contentWindow.scrollTo(0, target.offsetTop);
    } catch (_) { /* cross-origin or detached — ignore */ }
    // Belt-and-braces: if anything else scrolled the parent body, undo it.
    document.body.scrollTop = 0;
  }

  function applyFragments() {
    document.querySelectorAll('iframe[data-fragment]').forEach(ifr => {
      if (ifr.contentDocument?.readyState === 'complete') {
        scrollIframeToAnchor(ifr);
      } else {
        ifr.addEventListener('load', () => scrollIframeToAnchor(ifr), { once: true });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyFragments);
  } else {
    applyFragments();
  }
})();
