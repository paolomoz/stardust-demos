<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-11T00:00:00Z
  page:             home
  pageUrl:          https://hollerandhymn.com/
  againstDirection: stardust/direction.md (Active 2026-05-11T00:00:00Z — Mode A single-variant)
  consumedBy:       impeccable:craft
  replaces:         home-shape-v1.md (slop-shape; produced AI-craft-default render; analysis in context/stardust-prototype-skill.md)
  readArtifacts:
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
    - context/stardust-prototype-skill.md (proposed audit constraints applied to this re-shape)
  stardustVersion:  0.3.0
  version:          2 (re-shape after v1 slop critique; see context/stardust-prototype-skill.md § Failure mode #1)
-->
---
slug: home
url: https://hollerandhymn.com/
register: brand
shape_version: 2
escapes_silhouette: true
---

# Page shape: home (v2)

> **This brief is structured to refuse the AI-craft default silhouette.** Every section's composition is specified to violate at least one of the slop-shaped patterns documented in `context/stardust-prototype-skill.md` § Failure mode #1: centered massive hero, dual-CTA pair, 3-col card grid, 5/7 image-text splits, 12-col 1200px uniform container, balanced 64px section padding everywhere, geometric SVG ornaments, system-fallback display typography that erases the hand-painted character.
>
> **Composition principles enforced throughout:** asymmetric layouts (no centered massive type), full-bleed grounds (sections refuse the 1200px container by default), type breaks the rectangle (rotation, irregular sizes, layered placement), hand-imperfect details (rotations, irregular edges, hand-drawn strokes), real-physical-object metaphors for section breaks (tape / stamps / bunting / wax seals, not centered ornament rules), section padding varies wildly (no uniform 64px), card-grid pattern refused everywhere (each item composes differently).
>
> **Seed-to-composition translation applied** (`stardust-prototype-skill.md` § proposal D): decade=1940s revival-tent posters + 1970s outlaw country → asymmetric album-cover composition + marquee-tape ribbons + hand-painted plywood signage; craft=hand-painted plywood signage → rough paint edges + irregular registration + weathered wood-texture grounds; register-flavor=Memoir × Tabloid alternation → letter-from-Wendell framing for the maker section + Tabloid-display-size irregularity for the pew/bottle sections.

## Sections (in render order)

### 1. **site-header** — hand-painted bar, NOT centered SaaS chrome

**Mode:** bulletin. **Refuses:** sticky top nav with centered logo + right-aligned CTA pair (SaaS chrome).

Full-bleed cream ground, **not** centered in a 1200px container — the bar extends edge-to-edge. Hand-painted "H&H" monogram top-left (~40px). Nav links are typewriter-mono uppercase BUT at irregular spacing (not equidistant flex-justify-between). The nav reads like hand-painted bar signage: each link at a slightly different vertical baseline (±2-3px), one or two slightly rotated (-1°). Right side: single hand-painted `VISIT` button in barn-rust with **irregular paint-edge** (jagged border via SVG-clip-path or `border-image`).

No sticky behavior. The header sits as a band at the top and stays there.

### 2. **hero** — left-anchored asymmetric album cover, NOT centered SaaS hero

**Mode:** revival. **Refuses:** centered massive type + dual-CTA pair below + balanced padding (the SaaS template).

Full-bleed hymnal-black ground with **hand-stippled SVG noise overlay** (subtle paint-texture). Padding: extra-tall (160px+ block).

Composition: a **12-column grid but content is scattered, NOT centered.**

- **Top-left (cols 1-4):** hand-painted seal logo (~180px circular), barn-rust ink on cream. The seal sits as a stamp in the upper-left corner of the hero — not the center.
- **Left-anchored stacked wordmark (cols 1-8, rows 2-4):**
  - `HOLLER` set in 96-128px display all-caps, left-aligned, cream.
  - `&` set in 200px italic-serif barn-rust, rotated **-8°**, positioned with `transform: translate(0.1em, 0.15em)` so it visually sits between `HOLLER` and `HYMN` but offset asymmetrically.
  - `HYMN` set 96-128px display all-caps, left-aligned, cream, but **indented +0.5em from `HOLLER`'s left edge** for hand-set-type irregularity.
- **Right-anchored tagline (cols 8-12, rows 2-4):** four short lines stacked, right-aligned, hymnal serif 22-28px in cream:
  - "Saturday night"
  - "sin." — the word `sin.` is **circled in hand-drawn rust ink** (inline SVG ellipse with rough stroke around the text)
  - "Sunday morning"
  - "hymn." — the word `hymn.` is **circled in hand-drawn rust ink** (matching SVG ellipse, slightly different shape — hand-imperfect)
- **Diagonal marquee tape (row 5, full-bleed):** runs at **-3°** across the entire viewport, **clipped at both edges**, mustard-yellow ribbon with barn-rust uppercase text. The text repeats with `·` separators: `MADE BY HAND · FROM A TO Z · MADE BY HAND · FROM A TO Z · MADE BY HAND · FROM A TO Z · MADE BY HAND · FROM A TO Z`. The tape extends beyond the viewport on both sides. Uses CSS `transform: rotate(-3deg)` + `width: 110vw` + `left: -5vw`.
- **Below the tape (row 6, cols 1-6 — left-anchored):** single hand-painted `FIND A PEW →` button. Barn-rust fill, irregular paint-edge (SVG-clip-path on the border), no rounded corners. Padding asymmetric: more on the right than left.
- **Below the button (row 7, cols 1-4):** a small mono-text secondary link `book a saturday tasting →` — barn-rust underline, indented under the button.

**No dual-CTA pair.** Primary action is left-anchored and singular; secondary is a text link beneath, not an equal-weight button beside.

**Hellfire-neon spend:** ONE allowed instance — a single ink-dot above the seal's "&" inside the seal logo. The seal's neon "&" dot is the brand's one neon-per-viewport accent for this section.

### 2.5. **section break (after hero)** — hand-painted tape strip with "P.1"

Full-bleed strip ~60px tall, mustard-yellow tape graphic (inline SVG with rough edges), hand-stenciled "P.1" in barn-rust. The tape is rotated **+1.5°** so it doesn't sit perfectly horizontal. Slight wood-texture peeks through.

### 3. **wendell's letter** — full-bleed letter-on-table, NOT split-5-7 maker block

**Mode:** bulletin. **Refuses:** split-5-7 image-on-left text-on-right (Kinfolk grammar).

Full-bleed cream ground extending edge-to-edge — **no 1200px container.** Padding: 160px top, 96px bottom (irregular).

The section IS one composed artifact: **a letter from Wendell rendered as if photographed on a worn wood table.**

- The letter sits centered horizontally within the viewport but rotated **-1.5°** — set down by hand, not aligned. Max-width: 720px. Cream paper texture (subtle SVG noise), kraft-paper edge (1-2px barn-rust border for paper-edge feel, NO drop shadow — depth lives in rotation).
- **Top-left corner of letter:** wax-seal stamp `WG` — barn-rust filled circle, ~48px, with cursive `WG` in cream inside, slightly rotated +5°.
- **Top-right corner of letter:** typewriter-mono date `MAY 11, 2026` rotated +1°.
- **Body of letter (the 50-word quote in hymnal serif 19px / 1.6 line-height):**

  > "I grew up in a hollow outside Asheville where my grandmother kept a still in the smokehouse and a hymnal on the kitchen table. We never thought of them as different things. Everything in these bottles is foraged within forty miles of my barn. Made by hand. From a to z."

  **Highlighter-marker callouts on the quote** (these are the load-bearing brand voice moments):
  - The phrase `twenty-seven herbs` is replaced/inserted as `twenty-seven herbs` with **translucent mustard-yellow background-color** (`background: rgba(212,164,92, 0.55); padding: 0.05em 0.2em;`) — reads like a yellow highlighter strike.
  - The phrase `preacher's shed` carries **translucent barn-rust background-color** highlighter strike.
  - The phrase `forty miles` is wrapped in an inline **SVG hand-drawn ellipse** in red ink (rough stroke, slight gap at the join — looks circled by hand).
  - The phrase `from a to z` is **underlined with a heavy hand-drawn rust pen stroke** (SVG path under the text, irregular thickness).

  Adjust the quote text content to include these specific phrases naturally — rewrite if needed to weave them in. Sample integrated quote:
  
  > "I grew up in a hollow outside Asheville where my grandmother kept a still in the smokehouse and a hymnal on the kitchen table. We never thought of them as different things. **[twenty-seven herbs]** foraged from inside **[forty miles]** of my barn. Hand-distilled in the **[preacher's shed]**. Made **[from a to z]**."

- **Wendell's portrait Polaroid:** stuck onto the letter's lower-left corner, ~140×180px (4:5 aspect), rotated **+3°**, with two hand-painted kraft-tape strips at the top corners (one on each side, irregular widths). The Polaroid is a **placeholder** (Lane 1 portrait pending Gemini) — render with the v2-revised placeholder signature (cream surface, 1px dashed border-neutral, mono label "AWAITING GEMINI · LANE 1 · PORTRAIT", **barn-rust** dot — NOT hellfire-neon, per the v1 critique fix).
- **Wendell's hand-cursive signature** at the bottom-right of the letter, rotated **-2°**: `Wendell` in script (use `'Brush Script MT', 'Lucida Handwriting', cursive` fallback at 36-48px).
- **Envelope corner peek (bottom-right of section, partly off-page):** kraft-brown triangular shape ~120px, with a small wax-seal `WG` stamp.

Below the letter (small, centered, mono caps): `READ THE FULL LETTER →` in barn-rust.

### 3.5. **section break (after letter)** — hand-stenciled crate stamp

Full-bleed strip ~80px tall. Hand-stenciled `PASSED INSP. WG · 04 · 2026` in cream on a hymnal-black band, rotated **-1°**. Looks like a shipping-crate stamp. Some letters slightly distorted (hand-stencil character).

### 4. **the back room** — asymmetric collage on hand-painted plywood, NOT two parallel splits

**Mode:** revival. **Refuses:** two near-identical splits (5/7 + 7/5) that the v1 brief authored for the-holler-preview + the-still-preview. **Collapses both into one section.**

Full-bleed barn-rust ground with **hand-painted plywood texture overlay** — subtle vertical wood-grain lines (SVG pattern), with patches of darker rust paint that look hand-applied with a brush. No 1200px container. Padding: 144px block (longer than other sections).

Composition: **asymmetric collage on the plywood ground**, NOT a 5/7 or 7/5 split. Use named CSS grid areas with irregular row/column tracks.

- **Top-left (~25% width):** hand-drawn ink map of Madison County (inline SVG with rough hand-drawn paths). The map shows the rough outline of Madison County NC with the French Broad River line, Mars Hill marked, Spring Creek marked, and a **hand-drawn star + label "WOLFPEN HOLLER"** at the marked spot. A small brass-thumbtack illustration pins the star (small SVG with circle + offset highlight, no shadow — flat hand-painted style).
- **Top-right (~30% width):** a **Polaroid of the copper still** tilted **+5°**, kraft-paper tape strips at the top corners. The still image is a placeholder (Lane 1 process, 4:5 ratio) with the same v2 placeholder signature as Wendell's portrait.
- **Center (middle band):** display type **stacked irregularly, NOT center-aligned**:
  - `WOLFPEN` at 54px, left-indent 8%
  - `HOLLER` at 80px, left-indent 22%
  - `+` at 100px italic, left-indent 14% (the `+` is an italic-serif character, rotated -3°)
  - `THE` at 36px, left-indent 28%
  - `STILL` at 72px, left-indent 32%
  
  All in cream, on the rust ground. Each on its own line. Indents are **irregular by design** — looks set-by-hand on plywood.
- **Bottom band (full-width, ~80px tall):** numbers stenciled like crate marks on a hymnal-black sub-band — cream mono on hymnal-black:
  
  ```
  40 MI  ·  2019  ·  27 HERBS  ·  4,000 BUCKS  ·  1 DEAD PREACHER
  ```
  
  Each number/phrase separated by `·`. The `1 DEAD PREACHER` is the brand's irreverence beat in this section (the preacher's shed cost Wendell $4,000 from the widow).
- **Below the bottom band, two link blocks at irregular horizontal positions:**
  - `SEE THE HOLLER →` at left-indent 12%, in a hand-painted button rectangle (rectangular, irregular paint edges, cream-on-rust)
  - `SEE THE STILL →` at left-indent 64%, in a **slightly different shape** button (taller, narrower, kraft-tape detail at top)
  
  **The buttons are deliberately not matching — one square-ish, one tall.** Refuses the identical-button-pair pattern.

**Hellfire-neon spend:** ZERO in this section. The brand's hellfire is reserved for the hero ornament.

### 4.5. **section break (after back room)** — hand-painted bunting

Full-bleed strip ~60px tall, cream ground. Hand-painted triangular bunting (~16 cream-and-rust triangles strung across), rough edges. The bunting droops slightly in the middle (SVG path with imperfection).

### 5. **bottles fan + catalog board** — 180° fan + irregular catalog, NOT 3-col card grid

**Mode:** revival. **Refuses:** 3-col card grid of identical structure (impeccable absolute ban).

Full-bleed hymnal-black ground with **hand-stippled SVG noise**. Padding: 128px block.

**Top of section:** marquee tape running **-3°** across the top, mustard-yellow on barn-rust text:
  ```
  FOUR CATEGORIES · EVERY LABEL PAINTED BY HAND · FOUR CATEGORIES · EVERY LABEL PAINTED BY HAND · FOUR CATEGORIES
  ```

**Center of section — the bottle fan:** a 180° arc of **6 hand-painted bottle silhouettes** arranged radially.
- Each bottle is an inline-SVG shape (~80×180px), cream stroke on hymnal-black, with hand-lettered product name visible on the label area.
- Bottles arranged at rotation angles: **-75°, -45°, -15°, +15°, +45°, +75°** from vertical, distributed across a 180° arc.
- All 6 bottle silhouettes anchored on a central baseline.
- **Central anchor below the fan:** `SIX` hand-painted in 144px display, barn-rust.
- **Subtle radial gradient backdrop** behind the fan: faint cream stippling fading outward from the center (like sunburst rays in the background, but rust on hymnal-black so very subtle — does NOT compete with the bottles).

Bottle product-name labels (cream hand-lettered, curving along each bottle's rotation):
- -75°: `PASS THE PLATE`
- -45°: `DEACON'S DRAUGHT`
- -15°: `DRINK YE ALL OF IT`
- +15°: `THE BACKSLIDER`
- +45°: `TENT REVIVAL`
- +75°: `THE NO-SHOW`

**Below the fan: the catalog board.** Three featured product entries (PASS THE PLATE / TENT REVIVAL / THE BACKSLIDER) rendered in a **staggered 2-col layout**, NOT a 3-col grid. Each entry has a **distinct composition** so the trio is NOT identical-card-grid:

- **Entry 1 — PASS THE PLATE** (left col, top): wider entry. Hand-painted label placeholder (Lane 3, 4:5 ratio, v2 placeholder signature) at left of entry. Product name `PASS THE PLATE` 40px display, then 1-line description `A Sunday-morning aperitif amaro.` in hymnal serif, then mono micro `24% ABV · SOURWOOD · CHICORY · MAGNOLIA BARK`, then `where to buy →` underlined.
- **Entry 2 — TENT REVIVAL** (right col, offset down by 60px): narrower entry. Hand-painted label placeholder at top of entry. Product name `TENT REVIVAL` 40px display, with a single **hellfire-neon dot** as the section's one neon-per-viewport accent (small pill `HELLFIRE` tag in neon on hymnal-black). Description `Mountain herbs. Hellfire heat.` Mono micro `32% ABV · SUMAC · JUNIPER · BLACK WALNUT · RAMPS`. A **kraft-tape strip across the entry** (decorative diagonal kraft-color SVG rectangle). `where to buy →` link.
- **Entry 3 — THE BACKSLIDER** (left col, below Entry 1, indented +40px right): squarer entry. Hand-painted label placeholder on the right of entry (flipped from Entry 1). Product name `THE BACKSLIDER` 40px display. Description `Sunday-school dropouts only.` Mono micro `18% ABV · PAW-PAW · WILD PERSIMMON · JUNIPER`. A **hand-stenciled "BATCH 04" stamp** rotated -8° in the lower-right corner of the entry. `where to buy →` link.

**Below the catalog:** single hand-stenciled CTA `ALL SIX BOTTLES →` — rough rust paint on cream, rotated -1°.

**Hellfire-neon spend:** ONE allowed instance — the `HELLFIRE` tag on TENT REVIVAL's entry. This is the section's neon accent.

### 5.5. **section break (after bottles)** — hand-painted "INTERMISSION" sign

Full-bleed strip ~80px tall. Cream plywood ground, hand-stenciled `INTERMISSION` in 32px display barn-rust, rotated **+1°**. Looks like a revival-tent signage placard.

### 6. **pour list (pews)** — folk-art map, NOT 2-col list

**Mode:** revival. **Refuses:** 2-col equal-weight list.

Full-bleed barn-rust ground with **hand-painted plywood texture** (vertical wood-grain SVG pattern, slightly different from the back-room ground — different grain pattern). Padding: 128px block.

**Top:** hand-stenciled `POUR LIST` header at 96-120px display, cream on rust, left-anchored (NOT centered). Below the header: small sticker-style label `ASHEVILLE EDITION` rotated **-5°**, mono caps, in a hand-drawn pill outline.

**Bar listings — scattered across the section as folk-art map, NOT a 2-col grid.**

The 4 bars are placed at **different positions on the plywood ground**, each at a **different display size**, with hand-drawn star/pin marks between them and a sketched Asheville-streets backdrop SVG underneath.

- **Sermon Bar** — `SERMON BAR` at **96px display**, top-left position (left-indent 4%, top-indent 0%). Below the name: mono micro `LEXINGTON AVE`. Below that: hymnal serif 17px `Pours TENT REVIVAL neat in a Pyrex cup.` Hand-drawn star pin to the left of the name.
- **The Backslider Tavern** — `THE BACKSLIDER TAVERN` at **64px display**, right-side position (left-indent 52%, top-indent 18%). Below: mono `RIVER ARTS DISTRICT`. Below: `The whole shelf.` Hand-drawn star pin.
- **Bull and Beggar** — `BULL AND BEGGAR` at **56px display**, lower-left (left-indent 8%, top-indent 48%). Below: mono `RAD`. Below: `Sourwood-honey old fashioned.` Hand-drawn star pin.
- **Little Jumbo** — `LITTLE JUMBO` at **48px display**, lower-right (left-indent 58%, top-indent 62%). Below: mono `DOWNTOWN`. Below: `Saturday-night TENT REVIVAL flight.` Hand-drawn star pin.

Hand-drawn dotted lines connect the star pins as if tracing a route through Asheville (cream SVG paths with rough dashes).

**Bottom of section:** a sketched Asheville skyline frieze (~60px tall, full-bleed) — mountain silhouettes + a few stylized building outlines in cream on rust.

**Lower-right corner:** hand-stenciled `SEE ALL PEWS →` rotated **-5°**, sticker-style (kraft-tape backing visible).

### 6.5. **section break (after pews)** — wax-seal stamp

Full-bleed strip ~80px tall. Cream ground. Centered (this is the one centered ornament in the page — earned by being the only one): a hand-painted wax-seal `WG` stamp, ~80px diameter, barn-rust filled circle with cursive `WG` cream interior, slightly rotated **+3°**.

### 7. **site-footer** — irregular hours-and-directions board, NOT 3-col dark serial

**Mode:** revival. **Refuses:** equal-width 3-col dark footer with serial chrome.

Full-bleed hymnal-black ground with **hand-painted wood-texture overlay** (different grain from back-room and pour-list — irregular dark patches). Padding: 96px top, 64px bottom.

**Composition — three blocks at IRREGULAR widths and IRREGULAR vertical alignment** (not three equal columns):

- **HOURS block (left, narrow ~22% width, top-aligned):** hand-stenciled header `HOURS` in 14px mono uppercase, cream. Below: hymnal serif lines:
  - `Open by appointment.`
  - mono `SATURDAYS · 2pm + 4pm`
  - mono `Closed during foraging weeks`
- **DIRECTIONS block (middle, wider ~38% width, top-aligned but **offset down by 32px** from HOURS):** header `DIRECTIONS`. Below: a small hand-drawn arrow SVG + hymnal serif lines:
  - `Dirt road off Spring Creek.`
  - `Last mile unpaved.`
  - mono `Wolfpen Holler · Madison Co. NC 28753`
- **CONTACT block (right, ~28% width, top-aligned with **mid-letter mid-height** from middle block):** header `CONTACT`. **Wendell's cursive signature** in script 32px rotated **-2°** at the top. Below the signature, in mono:
  - `wendell@hollerandhymn.com`
  - `+1 828 555 0143`
  - `@hollerandhymn`

**Wax-seal `21+` stamp** in the lower-left corner of the footer (~64px diameter, barn-rust filled circle with cream `21+` interior, rotated **-4°**).

**Hand-drawn weathervane illustration** in the upper-right of the footer (SVG rough strokes, ~80px tall, cream on hymnal-black).

**Bottom-left:** small hand-stenciled `MADE IN WOLFPEN HOLLER · © HOLLER & HYMN 2026 · — WG` rotated **-1°**, mono micro caps, cream-on-hymnal-black.

## Layout strategy — refuse the uniform grid

- **No 1200px max-width container as the default.** Sections are full-bleed in their grounds; content within sections uses per-section grids with custom track sizes.
- **Section padding varies per section** — NOT a uniform 64px. Hero: 160px block. Letter: 160 top / 96 bottom. Back room: 144px. Bottles: 128px. Pews: 128px. Footer: 96/64. Each section has its own density rhythm.
- **No 12-col grid imposed uniformly.** Each section composes its own layout. Some sections use named grid-areas; some use absolute positioning for collage; some use flex with irregular spacing.
- **Type breaks the rectangle.** Wordmark indents are irregular. Display sizes vary within a section (pour-list especially). Several elements carry `transform: rotate()` (the `&`, marquee tape, Polaroids, stamps, signatures, sticker labels).
- **Hand-imperfect is the default.** Rotations are slight but present everywhere. Ornaments are real-physical-object metaphors (tape, stamp, bunting, wax seal, plywood signage), not geometric SVG rules.
- **Two-register alternation maintained** but with **per-section ground textures and patterns differentiating each instance** — three revival-mode sections use three subtly different hymnal-black grounds (plain noise, wood-texture A, wood-texture B). Two bulletin-mode sections similarly differ.

## Key states

- **Default** — described above.
- **Pending images** — 6 image slots (Wendell portrait, copper still, 3 bottle labels in the fan area, ... wait, the fan uses inline-SVG bottle silhouettes, not photographic placeholders — so the fan does NOT trigger placeholder signature). The 3 catalog-entry product labels use placeholders. Total **4 placeholders on home v2** (Wendell portrait, copper still, PASS THE PLATE label, TENT REVIVAL label, THE BACKSLIDER label). Render each with v2 placeholder signature (dashed border, mono `AWAITING GEMINI · LANE N`, **barn-rust** dot not neon).
- **Hover** — buttons darken from barn-rust to ~`#5e1408`. Bar names in pour-list shift to gilt-gold on hover. Polaroids do NOT have hover transform (they're staged objects, not interactive).
- **Reduced motion** — all transforms become static (rotations preserved as final state since they're visual character, not animation; only hover micro-interactions cancel).

## Interaction model

- All CTAs use real `<a href>`.
- Header monogram → `/`.
- Header `Visit` CTA → `/visit`.
- Hero `FIND A PEW →` → `/pews`. Hero `book a saturday tasting →` link → `/visit`.
- Letter `READ THE FULL LETTER →` → `/the-holler`.
- Back-room `SEE THE HOLLER →` → `/the-holler`; `SEE THE STILL →` → `/the-still`.
- Catalog entry `where to buy →` links → `/pews`. Section CTA `ALL SIX BOTTLES →` → `/the-bottles`.
- Pour list bar names — non-interactive text; `SEE ALL PEWS →` → `/pews`.
- Footer links → respective pages and `mailto:`/`tel:`/external IG.

## Data attributes

Required structural attributes (with the custom Holler & Hymn extensions for mode + composition signature):

- `header[data-section="header"][data-intent="navigate"][data-layout="full-width-cream-irregular"]`
- `section[data-section="hero"][data-intent="brand"][data-layout="asymmetric-left-anchored-album-cover"][data-mode="revival"][data-items="3"]`
- `section[data-section="wendells-letter"][data-intent="story"][data-layout="full-bleed-letter-on-table"][data-mode="bulletin"][data-items="1"]`
- `section[data-section="the-back-room"][data-intent="place-and-process"][data-layout="full-bleed-plywood-collage"][data-mode="revival"][data-items="1"]`
- `section[data-section="bottles-fan"][data-intent="catalog"][data-layout="180-fan-plus-staggered-catalog"][data-mode="revival"][data-items="6"]`
- `section[data-section="pour-list"][data-intent="stockists"][data-layout="folk-art-map"][data-mode="revival"][data-items="4"]`
- `footer[data-section="footer"][data-intent="contact-legal"][data-layout="irregular-hours-board"][data-mode="revival"]`

Plus `data-ornament` on each section break: `data-ornament="tape-p1"`, `data-ornament="crate-stamp-passed-insp"`, `data-ornament="bunting"`, `data-ornament="intermission-sign"`, `data-ornament="wax-seal-wg"`.

## Unsourced content (placeholder list — v2 signature, no neon dot)

4 image placeholders. Each renders with the v2 placeholder signature: cream surface, 1px dashed border-neutral, centered mono label `AWAITING GEMINI · LANE N`, **barn-rust** dot top-right (not hellfire-neon — the neon is reserved for the brand's one-per-viewport accent).

- `section[data-section="wendells-letter"] .polaroid-portrait img` — Wendell portrait (pending Gemini Lane 1, 4:5 vertical)
- `section[data-section="the-back-room"] .polaroid-still img` — copper still close-up (pending Gemini Lane 1, 4:5 vertical)
- `section[data-section="bottles-fan"] .catalog-entry:nth-child(1) .label img` — PASS THE PLATE hand-painted label (Lane 3, 4:5)
- `section[data-section="bottles-fan"] .catalog-entry:nth-child(2) .label img` — TENT REVIVAL hand-painted label (Lane 3, 4:5)
- `section[data-section="bottles-fan"] .catalog-entry:nth-child(3) .label img` — THE BACKSLIDER hand-painted label (Lane 3, 4:5)

Bottle FAN silhouettes (6 of them) are **inline-SVG hand-drawn shapes**, NOT image placeholders — they render as the brand's authored composition, no Gemini dependency.

## Anti-pattern audit — explicit refusals encoded in this brief

Per `context/stardust-prototype-skill.md` § proposal B (shape-brief anti-pattern audit), this brief deliberately refuses each of the patterns the v1 brief encoded:

| v1 pattern | v2 refusal |
|---|---|
| **Centered massive hero + dual-CTA pair** | Hero is left-anchored asymmetric album cover. ONE hand-painted button + ONE secondary text link, not equal-weight CTA pair. |
| **3-col card grid of identical cards** | Bottles section uses a 180° fan + staggered 2-col catalog with each entry composed differently. |
| **Two parallel splits (5/7 + 7/5)** for holler + still previews | Collapsed into one asymmetric "back room" collage on plywood. |
| **1200px max-width container everywhere + 64px section padding everywhere** | Sections are full-bleed in their grounds; per-section padding varies (160, 96, 128, 96/64). No global container. |
| **Geometric inline-SVG ornaments between sections** | Section breaks are real-physical-object metaphors: tape with P.1, crate stamp, bunting, INTERMISSION sign, wax seal. |
| **Tasteful 5px-irregularity hover transforms** | Hand-imperfection is in the LAYOUT (rotations, irregular indents, sticker stamps), not in hover micro-interactions. |
| **System-fallback Impact/Oswald display erasing hand-painted character** | Same stack but bundled web-font loading is a Phase 4 concern; the **composition** carries the brand even at system-fallback. The rotations, irregular sizes, hand-drawn SVG details survive the font substitution. |

## Notes for craft

- **Inline-SVG everything that needs hand-imperfection.** The map, the hand-drawn pin marks, the highlighter strikes, the ellipse around "sin." and "hymn.", the bottle silhouettes, the bunting, the weathervane, the wax seals — all inline SVG with intentional irregularity in coordinates and stroke widths.
- **No drop shadows anywhere.** Polaroids use rotation + slight border, NOT shadow. Stamps use slight rotation + filled circle, NOT shadow.
- **CSS `transform: rotate()` is the brand's hand-imperfection mechanism.** Use it liberally on:
  - Headlines (hero `&` -8°)
  - Marquee tape (-3°)
  - Section breaks (tape, stamps, signs each rotated different small amount)
  - Polaroids (+3° to +5°)
  - Signatures (-2°)
  - Catalog entry stamps (-8°)
  - The "INTERMISSION" sign (+1°)
- **Each rotation is hand-imperfect** — values like -8°, -3°, +1°, +3°, +5°, -2°, -1.5° — DO NOT round to ±5° or ±10°. The irregular values are the brand.
- **Display font fallback character** — even if `Knockout`/`Saloon`/`Camp Type` aren't loaded, the layout carries the brand. The rotations and irregular sizes do the work.
- **For the hand-cursive signature**, use `'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive`. (Yes Comic Sans is in the stack — it's the most reliable hand-cursive on Linux fallback. Better than serif-fallback.)
- **Hellfire-neon discipline:** ONE instance per viewport. Hero gets ONE (the seal's `&` dot). Bottles section gets ONE (the `HELLFIRE` tag on TENT REVIVAL). All other sections: ZERO neon.
- **Voice 7.2 active** (no exclamations in chrome). Exclamations only appear inside copy that's quoted/voiced as a label or pour-note ("HELLFIRE HEAT" — could go either way; check if it reads as voice or chrome).
- **All-caps display rule:** every display headline is all-caps. Title case forbidden for display.
- **Numerals in mono:** every measurable in IBM Plex Mono. The "40 MI · 2019 · 27 HERBS" bottom band of the back room is the literalism beat — set it in mono.

## What this brief is NOT

- **Not a continuation of v1.** v1 (`home-shape-v1.md`) shipped the slop. This is a clean re-shape.
- **Not a "make v1 bolder."** Polishing v1's silhouette would refine the SaaS template; this throws away the silhouette.
- **Not Cattaneo-imitation.** Cattaneo's coral-pink + mustard + teal palette and Italian-fashion-collage character DO NOT belong here. The reference is the BRAND TENSION (HOLLER × HYMN, hand-imperfection, central wordplay), not specific Cattaneo visual cues. Holler & Hymn's hand-painted plywood + revival-tent + outlaw-country is the surface.
