/* split-text.js — hand-rolled char/word splitter, no GSAP Club dependency.
   Splits an element's text into per-character spans for staggered animation.
   Preserves spaces as non-breaking; newlines from <br> remain.
*/

(function (global) {
  'use strict';

  function splitInto(el, mode /* 'chars' | 'words' */) {
    if (!el || el.dataset.splitDone === '1') return readUnits(el);
    const wasText = el.textContent;
    const words = wasText.split(/(\s+)/);
    el.textContent = '';
    const chars = [];
    const wordsOut = [];
    for (const w of words) {
      if (/^\s+$/.test(w)) {
        // preserve whitespace as inline text
        el.appendChild(document.createTextNode(w));
        continue;
      }
      const wSpan = document.createElement('span');
      wSpan.className = 'st-word';
      wSpan.style.display = 'inline-block';
      wSpan.style.whiteSpace = 'nowrap';
      for (const ch of w) {
        const cSpan = document.createElement('span');
        cSpan.className = 'st-char';
        cSpan.style.display = 'inline-block';
        cSpan.textContent = ch;
        wSpan.appendChild(cSpan);
        chars.push(cSpan);
      }
      el.appendChild(wSpan);
      wordsOut.push(wSpan);
    }
    el.dataset.splitDone = '1';
    el._stChars = chars;
    el._stWords = wordsOut;
    return mode === 'words' ? wordsOut : chars;
  }

  function readUnits(el) {
    return el._stChars || [];
  }

  global.SplitText = {
    chars: el => splitInto(el, 'chars'),
    words: el => splitInto(el, 'words'),
  };
})(window);
