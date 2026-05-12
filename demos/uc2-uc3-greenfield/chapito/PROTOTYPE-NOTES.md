# Chapitô — prototype iteration notes

> Per-iteration fix log for `stardust/prototypes/home-proposed.html`. Each entry: what was wrong, what was fixed, whether the fix is brand-specific (stays here) or general (gets promoted to `context/stardust-prototype-skill.md`).
>
> Cross-pollinates with `context/stardust-seed-brief-skill.md § Reference-driven seed` — the seed pattern that produced this prototype — and with `context/stardust-prototype-skill.md` — the render-time skill that has to honour the lifted motif catalog.

---

## Iteration 1 — first pass, 2026-05-12

**Status:** rendered, viewable. 8 motifs all present.

**Built from:**
- `brand/BRAND.md` — reference-driven (visual register lifted from opificiocattaneo.com, culturally rotated to Lisbon + circus + hot sauce)
- `briefing/SITE-BRIEF.md` + `briefing/CONTENT.md`
- `stardust/current/` — hand-authored compile of seed + brief inputs
- `stardust/direction.md` + `stardust/prototypes/home-shape.md`

**User reaction (verbatim, 2026-05-12):** *"this is a great first pass! ... we will continue working on this prototype which needs several fixes (and we will also track the fixes as general improvements)"*

**Validation already captured:**
- Reference-driven seed pattern produces noticeably better design quality than abstract-BRAND.md seed (Chapitô vs. High Lonesome same-day comparison). Locked as the recommended default in `context/stardust-seed-brief-skill.md § Reference-driven seed`.

---

## Open fixes (to triage with the user)

Logged but unresolved. Each gets a fix entry below when addressed.

### [open] Bottle illustrations are placeholders
Current: simple SVG silhouettes with text labels. Missing the hand-painted-label character the reference's bottles carry. Each bottle reads as "icon" rather than "Lane 2 hand-painted product label."

**Path to fix:**
- Either: generate 24 hand-painted-label assets via Gemini using BRAND.md § Logo direction prompt seed adapted per bottle.
- Or: improve the inline SVG to read as "stylised label" — colored ground rectangle, hand-cut faux-typography, a small painted figure per product, off-axis composition inside the label.

**Generalisation candidate:** placeholder-quality contract — when a brand has Lane-2 hand-painted assets pending, what's the highest-quality placeholder a prototype should render? "Stylised SVG bottle" vs "Gemini draft" vs "explicit gap signature".

### [open] B&W cutouts read as icons, not photos
Current: abstract SVG silhouettes. Don't quite carry the "vintage B&W photograph cut out of its background" reading the reference uses.

**Path to fix:**
- Source actual public-domain mid-century photographs and crop them as transparent PNGs.
- Or: improve the SVG silhouettes with more figure detail + a subtle paper-fibre texture overlay.

**Generalisation candidate:** Lane-1 cutout-photo register — what's the placeholder rendering when no captured photography exists? `grayscale + figure-silhouette` may be insufficient.

### [resolved 2026-05-12 → placeholder] Bottle ring behaviour
**Was:** 6 bottles arranged radially around the medallion, statically positioned. User asked if rotation was intended; static composition was reading as "frozen" without enough visual energy.
**Now:** bottle-slots wrapped in an `.orbit` div with `animation: orbit-spin 36s linear infinite`. Each bottle SVG counter-rotates at the same rate (`orbit-counter`) so labels stay upright (ferris-wheel pattern, not carousel-front-facing). Medallion sits outside `.orbit` (z-index 3) so it doesn't rotate. `prefers-reduced-motion: reduce` collapses both animations to none. Hover-lift on bottles moved from `transform: translateY(-4px)` to `filter: drop-shadow(...)` to avoid conflicting with the counter-rotation animation.
**Generalisation candidate:** "rotating composition pattern" — for brands whose register implies motion (carousel, ferris wheel, mill, clock), the hero's radial composition can rotate slowly. Implementation pattern: orbit wrapper + counter-rotated children + reduced-motion respected.
**Files touched:** `home-proposed.html` (orbit wrapper added; SVG counter-rotation animation; hover changed to filter).

### [resolved 2026-05-12] Bottle illustrations → Gemini-generated label artwork
**Was:** placeholder SVG silhouettes with Anton text labels. Generic icon register; didn't carry the brand's hand-painted-label character.
**Now:** 6 bottle images generated via Gemini 3 Pro Image Preview using prompts derived from the Cattaneo label-style reference (Memphis-Milano collage register: bottle photography + wax-dipped cap + solid-color label ground + B&W cutout circus-performer figure + Anton title band + small "C" brand badge). Bottles wired into the hero ring as `<img>` elements; orbit + counter-rotation animation now apply to `.bottle-slot>*` selector instead of `svg` specifically.
**Pipeline pieces:**
- `assets/references/cattaneo-shop/LABEL-STYLE.md` — register characterisation
- `stardust/current/assets/prompts/_label-style.md` — shared register notes for the prompt pack
- `stardust/current/assets/prompts/label-{trapezio,faquir,palhaco,domador,funambulo,acrobata}.prompt.txt` — 6 prompt files
- `stardust/current/assets/prompts/_gemini_generate.py` — generator script (copied from highlonesome)
- `stardust/current/assets/images/label-*.png` — 6 generated bottle assets
**Generalisation candidate:** "Reference-driven Gemini label pack" — when a brand is seed-driven by a reference site, the same reference register can drive the bottle/product Lane-2 asset generation. Two-step: (1) scrape reference catalog with Playwright, (2) author register-shared prompts with subject rotation per product. Worth promoting to `context/stardust-seed-brief-skill.md` as a follow-on pattern.
**Files touched:** `home-proposed.html` (CSS selector + slot dimensions; HTML bottle markup).

### [resolved 2026-05-12 round 2] Logo → Gemini-generated minimal Ô-monogram (v6)
**Iterations:** round 1 = tent silhouette SVG (rejected — too close to placeholder territory). Round 2 = Gemini variant set (5 wheel-of-tent variants tested, then a 6th minimal variant authored). Final logo: double-ring border + italic Bodoni Ô at centre + small dark pennant flag rising from above the Ô + 3 burgundy stars + transparent background (post-processed via Pillow cream-keying).
**Files:** `stardust/current/assets/images/logo.png` (canonical) + `logo-v1..v5.png` + `logo-v6-raw.png` + `_postprocess_bottle.py` (the Pillow keying script also serves the logo).
**Generalisation:** **two-pass image generation for logos and product assets** — generate Gemini PNG against a flat known-color background (cream), then post-process with Pillow to key out the background → true transparent PNG. The "transparent background" prompt phrase consistently triggers Gemini to render checkerboard pattern; flat-color + key-out is the workaround.

### [resolved 2026-05-12 round 2] Bottle redesign — woozy silhouette + new Ô badge + transparent
**Was:** Cattaneo-style sauce bottles with wax-dipped caps and a 'C' brand-mark badge; checkered-background PNGs (not actually transparent).
**Now:** Classic 5fl-oz craft hot-sauce woozy silhouette (tall narrow cylindrical body, square shoulder, black plastic dispenser cap — NO wax), brand-mark badge mirrors the new v6 logo (double ring + Ô + flag + 3 red stars, no 'C', no wedges), background flat cream → keyed out to transparent + bbox-cropped via `_postprocess_bottle.py`. All 6 bottles regenerated.
**Files:** `stardust/current/assets/images/label-{trapezio,faquir,palhaco,domador,funambulo,acrobata}.png` (final, transparent + cropped), `images/raw/label-*.png` (raw cream-background outputs kept for debugging), `prompts/_label-style.md` (REV 2 spec).
**Generalisation candidate:** "Pillow keying + bbox crop pipeline" — a reusable post-processing step for any Gemini-generated product asset that needs to live on a non-fixed-background page. Worth lifting into `context/stardust-prototype-skill.md` as a Pattern.

### [resolved 2026-05-12] EN-default + PT toggle
**Was:** Portuguese-led copy with English gloss; English audience friction (shipping abroad).
**Now:** Default English (`<html lang="en">`), persistent PT toggle pill in credits bar (top-right). Every translatable phrase has parallel EN/PT spans with proper `lang="en"` / `lang="pt-PT"` attributes (18 elements, validated). Brand-specific Portuguese (product names, voice anchors, the brand name itself) stays Portuguese in both modes. Toggle persists via localStorage. Dynamic `aria-label` on the button (switches between "Switch to Portuguese" / "Switch to English"). Inner toggle text marked `aria-hidden="true"`.

### [resolved 2026-05-12] Motion package
**Added:** marquee tape continuous scroll (t1 forward 22s, t2 reverse 26s for X-cross feel) + medallion sway (±1.6° + 2px translateY, 7s alternate) + Tagus wave-line stroke-draw on Trapézio section entry (1400ms cubic-bezier, paths staggered 220ms apart) + orbit-pause-on-hover for figure inspection. All reduced-motion safe.

### [resolved 2026-05-12] impeccable:critique → fix → audit → adapt pipeline
**Critique findings (30/40):** P0 Italian leak ("Prendete, e Provai"), P1 drop-shadow on bottle hover, P1 cutout silhouettes are abstract (not photo), P2 cravo ground 4/6 sections (bookend monotony), P2 chip 8px font unreadable, P3 Bodoni-italic Trapézio script lockup.
**Audit findings (14/20):** P0 missing h1, P0 hidden-language DOM leakage to screen readers (no lang attrs), P1 ~6.5MB unoptimised PNGs eager-loaded, P1 touch targets <44px (persistent bar, iconlinks, lang-toggle), P1 bottle-row in-SVG text illegible <640px, P1 X-marquee CTA decouples from intersection on mobile.
**Adapt fixes (mobile <640px):** bottle-row in-SVG text hidden (figcaption carries name), tape rotation reduced ±12° → ±8°, 2 of 4 cutouts retained at 90px scale (depth language preserved), credits-bar long nav hidden, marquee CTA scaled 140→128px, chip cluster scaled down for narrow viewports, safe-area-inset-bottom honoured for persistent bar.
**Deferred (next round):** WebP/AVIF conversion of bottle + logo PNGs, source real B&W photo cutouts, X-marquee CTA pixel-pin on very-narrow viewports, conic-gradient → SVG sunburst symbol for Safari mobile perf.
**Generalisation candidate:** "impeccable pipeline integration with Stardust prototype" — running critique + audit early surfaces brand-rule violations (Italian leak, flat-by-conviction breach) that an LLM render misses by default. Worth lifting into `context/stardust-prototype-skill.md` as a final-pass contract.

### [open] Sunburst hero needs more visual energy
Current: rays + medallion + 6 bottles. Functionally correct, but doesn't quite read as "carnival spinning wheel frozen at noon."

**Path to fix candidates:**
- Increase ray contrast / opacity.
- Add a subtle pulsing motion to the rays (respecting reduced-motion).
- Larger bottle scale; tighter ring radius.
- Add brand-name ornament / small fairground bunting along the upper rim.

### [open] Color-block sections — cutouts feel sparse
Current: 4 cutouts per section at off-axis angles. Reference uses denser collage with cutouts genuinely overlapping the bottle row.

**Path to fix:** more cutouts (5–6 per section), larger sizes, stronger overlap into the bottle row's z-stack.

### [open] X-marquee — tape ribbon weight
Current: 60px tape, single ribbon repeat. Reference's tapes are heavier, with more text instances per ribbon, creating denser typographic rhythm.

**Path to fix:** taller tape (80–100px), tighter `·` separator, more repeats per ribbon.

### [open] Highlighter manifesto — line breaks read odd at narrow widths
Current: highlighter spans break awkwardly across lines at certain widths. The `box-decoration-break: clone` handles it visually but the rhythm suffers.

**Path to fix:** test at mobile width; possibly reduce manifesto font-size at narrow widths so highlighter spans stay on single lines.

### [open] Trapézio big-dark bottle — feels detached from the bottle illustration register
Current: the central Trapézio is a larger version of the same SVG bottle silhouette. The hero deserves a more elaborate label rendering (more circus figure detail, hand-painted character).

**Path to fix:** dedicated Lane-2 placeholder with more label detail OR upgrade the central bottle SVG to a richer composition.

### [open] Medallion footer — icon-link row could use ornament
Current: 4 clean icon-links in a row. Pleasant but quiet.

**Path to fix:** small horizontal ornament rule above / below the icon-links; or break the row visually with a small mono ornament between each.

### [open] Persistent bottom bar — arrow micro-interaction is subtle
Current: arrows translate 4px on hover. Hard to notice.

**Path to fix:** increase translate distance to 8–10px; consider an underline-grow on the label text.

### [open] Type — Anton at small sizes loses crispness
Current: At 12–14px the Anton condensed face starts feeling too tight. Some sub-sections use it for `<figcaption>` at sizes below its sweet spot.

**Path to fix:** drop figcaption to IBM Plex Mono at small sizes; reserve Anton for ≥ 16px.

---

## Resolved fixes

### [resolved 2026-05-12] Logo differentiation from reference
**Was:** circular medallion with circular arc-text (CHAPITÔ top / MOLHOS FEITOS À MÃO bottom) + monogrammatic italic C + circumflex `^` floating above. Mirrored opificiocattaneo's medallion formula too directly.
**Now:** big-top tent silhouette — triangular tent with cravo + cal vertical stripes inside, scalloped malagueta base flap, small pennant flag rising from the apex (echoing the ô-diacritic as a flag), wordmark CHAPITÔ inside the tent in Anton condensed all-caps, mono sub-line `MOLHOS · À MÃO · LISBOA · 2018` below the tent.
**Generalisation:** **Logo must differ from the reference's logo formula in kind, not just in detail.** Other compositional moves can be lifted with a rename; the logo cannot. Promoted to `context/stardust-seed-brief-skill.md § Logo must differ from the reference's logo`. Saved as a memory.
**Files touched:** `home-proposed.html` (hero medallion + footer medallion), `brand/BRAND.md § Logo direction`, `stardust/current/_brand-extraction.json` (logo block).

---

## Promoted to `context/stardust-prototype-skill.md`

When a fix turns out to generalize beyond Chapitô, add a short entry here naming the proposal/failure-mode it landed under in the prototype skill draft.

(none yet)
