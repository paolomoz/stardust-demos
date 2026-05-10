/* scramble.js — character scramble effect, resolves to target text.
   Each char picks random glyphs for a scramble window, then settles.
   No GSAP Club ScrambleText needed.
*/

(function (global) {
  'use strict';

  const GLYPHS = '!<>-_\\/[]{}—=+*^?#0123456789';

  function pickGlyph() {
    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }

  /**
   * Scramble an element's text to a target string.
   * @param {HTMLElement} el — the element to scramble
   * @param {string} target — final text
   * @param {object} opts
   * @param {number} opts.duration — total ms
   * @param {number} opts.scrambleSpeed — glyph swap interval ms
   * @param {number} opts.charDelay — per-char reveal stagger ms
   * @returns {Promise<void>} resolves when settled
   */
  function scrambleTo(el, target, opts = {}) {
    const duration = opts.duration ?? 1400;
    const scrambleSpeed = opts.scrambleSpeed ?? 32;
    const charDelay = opts.charDelay ?? 18;
    return new Promise(resolve => {
      const start = performance.now();
      const slots = target.split('').map((ch, i) => ({
        ch,
        revealAt: i * charDelay,
        // each char gets ~60% of the duration to scramble before resolving
        scrambleEnd: i * charDelay + 0.6 * duration,
        revealed: false,
      }));
      let lastSwap = 0;
      function tick(now) {
        const t = now - start;
        let dirty = false;
        if (now - lastSwap >= scrambleSpeed) {
          lastSwap = now;
          dirty = true;
        }
        const out = slots.map(s => {
          if (s.revealed) return s.ch;
          if (t >= s.scrambleEnd) { s.revealed = true; return s.ch; }
          if (t < s.revealAt) return ' ';
          return s.ch === ' ' ? ' ' : pickGlyph();
        }).join('');
        if (dirty) el.textContent = out;
        if (slots.every(s => s.revealed)) { el.textContent = target; resolve(); return; }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  global.Scramble = { to: scrambleTo };
})(window);
