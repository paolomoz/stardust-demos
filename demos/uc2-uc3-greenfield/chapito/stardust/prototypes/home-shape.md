<!-- stardust:provenance
  writtenBy: stardust:prototype (Phase 1)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - stardust/current/DESIGN.json
    - stardust/current/DESIGN.md
    - stardust/direction.md (Active)
    - brand/BRAND.md
    - briefing/CONTENT.md
  scope: per-page compositional brief for home. Site-level system decisions live in DESIGN.md; this brief decides how that system DEPLOYS to this page.
  stardustVersion: 0.3.0
-->

# home — page-shape brief

## Premise (single sentence)

A long-scroll fairground-poster manifesto that introduces Chapitô by reimplementing eight named compositional motifs in sequence — sunburst medallion hero, X-crossed marquee band, highlighter-tape manifesto paragraph, four full-bleed color-block product-family sections (each with a 6-bottle row + B&W cutout-photo collage + corner accents), one chip-tag cluster, a big-dark Trapézio bottle hero, and a centered wordmark-medallion footer — all anchored by a fixed `VISITA A LOJA → VAI ATÉ LÁ` bottom bar.

## Output target

`stardust/prototypes/home-proposed.html` — self-contained static HTML with inline CSS. No external dependencies beyond Google Fonts (Anton, Inter, IBM Plex Mono, Bodoni Moda). No JS required for the v1 render; reduced-motion fallbacks are CSS-only.

## Hard constraints (lifted verbatim from direction.md + DESIGN.md + DESIGN.json.extensions.motifs)

1. **Mode A active.** Palette and type tier pinned. No new font outside the 4-family deck (Bodoni Moda / Anton / Inter / IBM Plex Mono). No new color outside the 10-token palette.
2. **Drenched palette deployment.** Section-ground sequence locked: `cravo · cravo · cravo · piri · galinha · cravo+cyan · tejo · tejo · cravo · cal` — 6 distinct grounds across 10 sections. Each product family on its own ground exactly once.
3. **Cover-of-night beat.** `chapito-tejo` appears twice consecutively (Cabeçudo section + Trapézio bottle hero). This is the only consecutive-same-ground pairing allowed.
4. **Condensed all-caps display.** Anton (or fallback) for every display tier ≥ 48px. Mixed-case display FORBIDDEN. Italic display FORBIDDEN.
5. **Bodoni in medallion only.** The medallion is the only place Bodoni Moda is allowed. No standing Bodoni text anywhere else.
6. **Mono load-bearing for numerals + addresses + micro-labels.** "Nº 7", "100 ml", "EST. 2018", "+351 ..." all in IBM Plex Mono uppercase tracking +0.12em.
7. **First-person singular Portuguese-native voice.** Never "nós" / "nossa equipa" / "passionate" / "crafted". No Italian-language words. No reference-brand naming. No tourist-Lisbon set-dressing.
8. **No SaaS silhouette.** No centered massive type + dual-CTA pair. The hero is the sunburst medallion with 6 radial bottles + 2 ticket-stub corners — no CTA in the hero itself (the X-marquee section delivers the primary CTA below).
9. **No 3-col card grid for bottles.** The bottles per family render as a single horizontal row of 6, never as a card grid.
10. **No drop shadows, no gradients-as-elevation, no glassmorphism, no neumorphism.** Depth = layering + off-axis rotation + flat color blocks.
11. **Off-axis rotation everywhere.** Cutouts, ticket-stubs, ribbons, accent rectangles, chip-tag cluster all rotate between -12° and +12°. Pure orthogonal layout reserved for centered display moments.
12. **Section padding alternates 96px / 64px** to break rhythm.

## Anti-patterns to render-refuse

Each is a default the LLM-rendered prototype will likely reach for. Refuse explicitly.

- Centered SaaS hero with dual-CTA pair.
- 3-col identical card grid of bottles.
- Italic-classical serif display (that's High Lonesome's register).
- Mixed-case display.
- Atmospheric photographic hero (full-bleed photo with overlaid type).
- Atmospheric radial-gradients as primary depth language (that's High Lonesome's register).
- Editorial-register vocabulary in chrome (`the journal`, `dispatches`, `atelier`, `the studio`).
- Italian-language words anywhere.
- Reference-brand naming (Opificio / Cattaneo / Liquoreria / Amaro / Aperitivo — anywhere).
- Tourist-Lisbon set-dressing (`azulejo` patterns, `fado`, `saudade` as decoration).
- Slow Food / Kinfolk terracotta-luxe palette substitution.
- Pure `#000000` or `#ffffff`.
- Hero text on photographic background without contrast scrim ≥ 4.5:1.
- Bottle row rendered as ≥ 3 columns of cards (must be a single horizontal row, 6 wide on desktop, 3×2 grid on tablet, 2×3 on mobile).
- Script web fonts as standing text.

## Section list — sequence + ground + layout strategy

### Section 1 — Sunburst Medallion Hero (`data-section="hero-sunburst"` · ground `chapito-cravo` · motif `sunburst-medallion-hero`)

- **Type:** full-viewport hero (min-height 92vh on desktop).
- **Surface:** `chapito-cravo` ground. Sunburst overlay: 16 alternating wedge rays of `chapito-areia` (60% opacity) emanating from the medallion center, covering the upper 70% of the section.
- **Center composition:** 280×280px circular medallion in `chapito-cal` with 1px `chapito-noite` border. Bodoni Moda 400, +0.18em tracking, set as circular SVG `<textPath>` — "CHAPITÔ" arcing top, "MOLHOS FEITOS À MÃO" arcing bottom. Inside the medallion: a large monogrammatic `C` (~120px Bodoni) with a freestanding circumflex `^` floating ~20px above the apex of the C. Subtitle inside-medallion: tiny mono "EST. 2018 · LISBOA" centered below the C.
- **Bottle ring:** 6 hand-painted bottle illustrations arranged at clock positions 12, 2, 4, 6, 8, 10 around the medallion (~180px radius from medallion center). Each bottle is a SVG / placeholder showing a labelled jar silhouette in palette colors. Bottles rotate slightly toward the medallion (each rotated to point its label inward). On hover, each bottle gains a subtle `translateY(-2px)` lift and a `chapito-noite` 1px outline.
- **Ticket-stub corner tags:**
   - **Top-left:** ~180×80px ticket-stub at `top: 32px; left: 24px`, rotated -6°. Background `chapito-cal`, 1px `chapito-malagueta` border, dashed-edge perforation strip. Contains a circular ~50px B&W cutout of a fairground-performer in mid-trapeze (placeholder) + mono label `PIRI-PIRI` in 12px.
   - **Top-right:** ~180×80px ticket-stub at `top: 32px; right: 24px`, rotated +6°. Same construction. Contains a circular ~50px B&W cutout of an Alfama grandmother-on-balcony (placeholder) + mono label `EQUILIBRISTA`.
- **No body copy in this section.** The medallion + bottles + ticket-stubs carry the brand message. No CTA in the hero — the X-marquee section delivers the primary CTA.
- **Padding:** 64px desktop top / 32px bottom (the section's content is centered; padding is breathing room for the corner tags + medallion).

### Section 2 — X-Crossed Marquee Band (`data-section="marquee-x"` · ground `chapito-cravo` · motif `x-crossed-marquee-band`)

- **Type:** horizontal band, ~360px tall on desktop.
- **Surface:** `chapito-cravo` ground.
- **Ribbon 1 (rotated -12°):** spans edge-to-edge (overflow hidden), full-width `chapito-cal` band ~64px tall, 1px `chapito-noite` border top and bottom. Anton 28px in `chapito-noite`, +0.04em tracking, repeats `VEM AO CHAPITÔ` with `·` bullet separators — 6× across the band.
- **Ribbon 2 (rotated +12°):** same construction, repeats `PROVA A CASA` 6×. Layered ABOVE ribbon 1 at the center crossing.
- **Center CTA button:** 180×180px circular button on `chapito-tejo` ground, `chapito-cal` text, centered absolute on the band's center. IBM Plex Mono 16px, weight 700, +0.18em tracking, uppercase, text wraps to 2 lines: `VAI À` / `LOJA`. Sits ABOVE both ribbons (z-index). On hover: subtle `transform: scale(1.04)`, background → `chapito-noite`.
- **Padding:** 0 (the band's tape ribbons bleed edge-to-edge).

### Section 3 — Highlighter-Tape Manifesto (`data-section="manifesto"` · ground `chapito-cravo` · motif `highlighter-tape-manifesto`)

- **Type:** centered narrow content column.
- **Surface:** `chapito-cravo` ground.
- **Body:** Inter 18px, line-height 1.65, color `chapito-noite`, max-width 720px, text-align center. Five phrase-spans wrapped in `<span class="hl hl-{token}">` highlighter rectangles — flat solid-color background, 2px padding, 1px radius MAX, NO shadow, NO gradient, italic 600 weight. The text and the highlights, verbatim:

> "O Chapitô é a realização de um sonho. <hl azulejo>Uma paixão tornada em projeto.</hl> A minha visão é unir tradição e modernidade. Embalagem divertida, colorida, pop, ao lado de um produto de <hl piri>alta qualidade e 100% natural</hl>. <hl galinha>Receitas novas e inovadoras</hl>, nada banais, mas com um método produtivo totalmente artesanal. Os meus frascos são feitos à mão, de A a Z, <hl malagueta>como se fazia antigamente</hl>, usando só ervas, especiarias, flores, frutas e ingredientes nobres. <hl tejo>Sem aromas nem aditivos.</hl>"
> — Inês

- **CTA:** below the paragraph, a single button `▸ DESCARREGA O CATÁLOGO COMPLETO`. Construction: `chapito-noite` background, `chapito-cal` text, 2px radius, 14×28px padding, IBM Plex Mono 14px weight 600 +0.14em tracking uppercase. On hover: background → `chapito-tejo`.
- **Padding:** 96px desktop top + bottom.

### Section 4 — PIRI-PIRI Color Block (`data-section="family-piri"` · ground `chapito-piri` · motif `color-block-product-collage`)

- **Type:** full-bleed band, ~640px tall on desktop, min-height 100vh on tablet.
- **Surface:** `chapito-piri` ground (vivid orange).
- **Top-center:** Anton 80px `PIRI-PIRI` in `chapito-noite`. Below, 18px gap, IBM Plex Mono 12px subtitle row in `chapito-noite`: `ALTERNATIVOS  |  ORIGINAIS  |  100% NATURAIS`.
- **Bottle row:** 6 hand-painted bottle illustrations (SVG placeholders for now) in a single horizontal row, each ~120px tall, evenly spaced edge-to-edge with 16px gap. Names below each bottle in IBM Plex Mono 10px uppercase: `TRAPÉZIO · FAQUIR · EQUILIBRISTA · DOMADOR · SALTIMBANCO · CUSPIDOR DE FOGO`.
- **Cutout overlays:** 4 B&W cutout PNGs (placeholders rendered as SVG silhouettes with `filter: grayscale(1)`) positioned absolutely:
   - Upper-left: a fairground-performer cutout, ~150×220px, rotated -8°, top: 60px, left: 80px.
   - Upper-right: a vintage car / tram cutout, ~180×120px, rotated +5°, top: 80px, right: 60px.
   - Lower-left: an Alfama-grandmother portrait cutout, ~140×200px, rotated -3°, bottom: 100px, left: 120px.
   - Lower-right: a balcony-laundry-line cutout, ~160×140px, rotated +9°, bottom: 80px, right: 100px.
- **Diagonal stripe accent (bottom-right corner, inside-section absolute):** 120×80px rectangle with `background: repeating-linear-gradient(45deg, chapito-cal 0 12px, chapito-laranja-doce 12px 24px)`, rotated 15°. Sits at `bottom: 24px; right: 24px`.
- **Polka-dot accent (bottom-left corner, inside-section absolute):** 120×80px rectangle, `chapito-areia` ground, `chapito-azulejo` 8px circles every 20px grid. Sits at `bottom: 24px; left: 24px`.
- **Padding:** 96px top + 64px bottom desktop (asymmetric).

### Section 5 — DOCE FOGO Color Block (`data-section="family-doce-fogo"` · ground `chapito-galinha` · motif `color-block-product-collage`)

- Same construction as Section 4, with these substitutions:
   - Ground: `chapito-galinha` (mustard).
   - Family name: `DOCE FOGO`.
   - Mono subtitle: `JOVENS  |  SAUDÁVEIS  |  100% NATURAIS`.
   - Bottle row labels: `PALHAÇO · CONTORCIONISTA · ACROBATA · FUNÂMBULO · MESTRE-DE-CERIMÓNIAS · MALABARISTA`.
   - Cutouts: different silhouettes (a winter-coat figure upper-left, a striped-fabric panel upper-right, a swimsuit cutout lower-left, a profile-portrait cutout lower-right).
   - Stripe accent: `chapito-cal` + `chapito-piri` stripes.
   - Polka-dot accent: `chapito-azulejo` ground + `chapito-areia` dots.
- **Padding:** 64px top + 96px bottom (alternated with §4).

### Section 6 — EQUILIBRISTA / FERMENTADOS Color Block + Chip-Tag Cluster (`data-section="family-equilibrista"` · ground `chapito-cravo` with cyan overlay · motifs `color-block-product-collage` + `chip-tag-cluster`)

- **Type:** full-bleed band, ~720px tall on desktop (taller than §§4–5 to accommodate the chip cluster).
- **Surface:** `chapito-cravo` ground with a horizontal band of `chapito-azulejo` at 40% opacity across the upper third (creating a saturated pink-cyan zone).
- **Top-center:** Anton 80px `PRENDETE, E PROVAI` (Portuguese verb "take ye, and try"). Mono subtitle: `IRREVERENTES  |  FERMENTADOS  |  100% NATURAIS`.
- **Bottle row:** 6 bottles — `TRAPÉZIO NEGRO · FUNÂMBULO VERDE · ACROBATA C-E · SALTIMBANCO CÍTRICO · EQUILIBRISTA · CONTORCIONISTA MISÔ`.
- **Chip-tag cluster (BELOW the bottle row, distinguishing this section):** 6 small circular cutout-photo chips (60×60px each, B&W cutout-portrait inside) with a colored half-band across the bottom 40% of each chip carrying the name in 9px mono uppercase. Chips overlap loosely with 16px horizontal spacing, rotated `-4° / +6° / -2° / +5° / -3° / +4°`. Half-band tokens cycle: `piri · galinha · azulejo · malagueta · tejo · cravo`.
- **Cutouts (sparser than §§4–5):** 3 cutouts at off-axis rotation — one upper-left, one upper-right, one lower-right.
- **Stripe + polka-dot accents:** same construction as §4 with cyan + areia palette.
- **Padding:** 96px top + 96px bottom (the chip cluster needs breathing room).

### Section 7 — CABEÇUDO / NOVIDADES Color Block (`data-section="family-cabecudo"` · ground `chapito-tejo` · motif `color-block-product-collage` · **cover-of-night begins**)

- Same construction as §§4–5, with:
   - Ground: `chapito-tejo` (deep teal — LIGHT TYPE ON DARK).
   - Family name: `CABEÇUDO` in `chapito-cal` Anton 80px.
   - Mono subtitle: `EXPERIMENTAIS  |  SAZONAIS  |  100% NATURAIS` in `chapito-cal`.
   - Bottle row labels: `CABEÇUDO · ANÃO SÁBIO · MULHER-BARBUDA · HOMEM-FORTE · DIRETOR DO CIRCO · BILHETEIRA`.
   - Cutouts: vintage-circus performers (a fado-singer silhouette as Lisbon-native, NOT as costume; a Tagus boat cutout; a tram-driver cutout; a circus-strongman cutout).
   - Stripe accent: `chapito-cal` + `chapito-azulejo` stripes.
   - Polka-dot accent: `chapito-areia` ground + `chapito-malagueta` dots.
- **Padding:** 96px top + 64px bottom.

### Section 8 — Big-Dark Bottle Hero — TRAPÉZIO (`data-section="bottle-hero"` · ground `chapito-tejo` · motif `big-dark-bottle-hero` · **cover-of-night continues**)

- **Type:** full-bleed, min-height 80vh on desktop.
- **Surface:** `chapito-tejo` ground.
- **Wave-line motif (background):** 3 parallel hand-drawn-feeling sine-wave SVG strokes in `chapito-cal` 2px, evoking the Tagus at dusk. Span the full width of the section, rendered behind the central content.
- **Center stage:** the flagship bottle Trapézio, ~480px tall SVG placeholder (a labelled jar silhouette in palette colors).
- **Left of bottle:** Anton 120px `TRAPÉZIO` in `chapito-cal`, line-height 0.9, tracking -0.015em. Below the display name, a script-form raster-style lockup of the same word — implemented as an SVG with a hand-drawn-feeling stroke (NOT a script web font; the script feel is raster-only per BRAND.md type rules).
- **Right of bottle:** 3-line IBM Plex Mono 14px micro-block in `chapito-cal` weight 500 letter-spacing +0.14em:
   - `LARGO DO CHAFARIZ`
   - `COSTA DO CASTELO`
   - `ALFAMA, LISBOA`
- **Below the bottle:** italic Inter 22px pull-anchor in `chapito-cal`, centered: *"O molho de assinatura. Trapézio sobre malagueta."*
- **Padding:** 96px top + 96px bottom.

### Section 9 — Medallion Footer (`data-section="medallion-footer"` · ground `chapito-cravo` · motif `medallion-footer`)

- **Type:** centered, ~360px tall.
- **Surface:** `chapito-cravo` ground.
- **Medallion:** same construction as the hero medallion, 200×200px (smaller). Centered.
- **Icon-link row:** 24px below the medallion. 4 icon-link badges in a single row, gap 32px:
   - `✉ INÊS@CHAPITO.PT`
   - `◯ @CHAPITO_MOLHOS`
   - `💬 +351 9X XXX XXXX`
   - `☎ +351 21 XXX XXXX`
   
   Each badge: mono icon glyph (SVG, 16px) + IBM Plex Mono 12px uppercase label, gap 8px between icon and label, color `chapito-noite`.
- **Padding:** 96px top + 64px bottom (the persistent bottom bar takes the remainder).

### Section 10 — Persistent Bottom Bar (`data-section="persistent-bar"` · ground `chapito-cal` · motif `persistent-bottom-bar`)

- **Type:** `position: fixed; bottom: 0` band, 36px tall. Sits above all section content.
- **Surface:** `chapito-cal` ground, 1px `chapito-noite` border-top.
- **Left:** mono uppercase `VISITA A LOJA →` at 12px weight 600 +0.14em, padded 16px from left edge.
- **Right:** mono uppercase `VAI ATÉ LÁ →` at 12px weight 600 +0.14em, padded 16px from right edge.
- **Behavior:** always visible. Does NOT collapse on mobile (the page's main CTA destination must be reachable everywhere). Body adds 36px bottom-padding to avoid content occlusion.

## Section-ground sequence summary

```
1  hero-sunburst          chapito-cravo          centered medallion + 6-bottle ring
2  marquee-x              chapito-cravo          X-tape ribbons + center circle CTA
3  manifesto              chapito-cravo          highlighter-tape paragraph
4  family-piri            chapito-piri           PIRI-PIRI color block, 6 bottles, 4 cutouts
5  family-doce-fogo       chapito-galinha        DOCE FOGO color block, 6 bottles, 4 cutouts
6  family-equilibrista    chapito-cravo+cyan     EQUILIBRISTA + chip cluster
7  family-cabecudo        chapito-tejo           CABEÇUDO color block on dark, 6 bottles
8  bottle-hero            chapito-tejo           Trapézio big-dark bottle hero
9  medallion-footer       chapito-cravo          medallion + 4-icon link row
10 persistent-bar         chapito-cal (fixed)    VISITA A LOJA → ... → VAI ATÉ LÁ

Distinct grounds: 6 (cravo · piri · galinha · cravo+cyan · tejo · cal)
Sequence: asymmetric, with one cover-of-night pairing (sections 7 + 8 both on tejo)
```

## Interaction + motion model

- **Scroll-led narrative.** No sticky top nav (the medallion is the hero; the persistent-bottom-bar is the only sticky element).
- **Scroll-reveal.** Each section reveals via `opacity 0 → 1 + translateY(16px → 0)` over 520ms with `cubic-bezier(0.22, 1, 0.36, 1)`, staggered 80ms between in-section elements (heading, subtitle, bottles, cutouts).
- **Hover micro-interactions:**
   - Bottle illustrations: `translateY(-2px)` + 1px outline on hover, 200ms.
   - Ticket-stub corner tags: rotation eases toward 0° on hover (the tag straightens slightly), 280ms.
   - Marquee circular CTA: `transform: scale(1.04)` + background → `chapito-noite`, 240ms.
   - Highlighter-rectangle spans: subtle text-shift `translateY(-1px)` on hover, 160ms.
   - Persistent bottom bar arrows: arrow translates +4px on hover, 180ms.
- **Composition choreography (load):**
   - Hero medallion fades + scales from 0.92 → 1, 600ms.
   - Bottles in the radial ring fade in one-by-one clockwise starting from 12-o'clock, 60ms between bottles.
   - Ticket-stub tags fade + rotate-in from 0° → ±6°, 480ms.
- **Ornament draw-in (Tagus wave-line motif in §8):** SVG path `stroke-dasharray` from 0 → full length over 1200ms on section entry (the three waves draw in left-to-right, staggered 200ms).
- **`prefers-reduced-motion: reduce` honored** — all transforms collapse to opacity-only fades; rotations remain (static); wave-line stroke draws in instantly (CSS `transition: none`).

## Structural data attributes (every section)

Per `skills/stardust/reference/data-attributes.md`. Every `<section>` element must carry:

| section index | data-section | data-mode | data-ground |
|---|---|---|---|
| 1  | `hero-sunburst`        | `sunburst-medallion`  | `chapito-cravo` |
| 2  | `marquee-x`            | `x-marquee`           | `chapito-cravo` |
| 3  | `manifesto`            | `highlighter-paragraph` | `chapito-cravo` |
| 4  | `family-piri`          | `color-block`         | `chapito-piri` |
| 5  | `family-doce-fogo`     | `color-block`         | `chapito-galinha` |
| 6  | `family-equilibrista`  | `color-block + chip-cluster` | `chapito-cravo+cyan` |
| 7  | `family-cabecudo`      | `color-block-dark`    | `chapito-tejo` |
| 8  | `bottle-hero`          | `big-dark-bottle`     | `chapito-tejo` |
| 9  | `medallion-footer`     | `medallion-footer`    | `chapito-cravo` |
| 10 | `persistent-bar`       | `fixed-bottom`        | `chapito-cal` |

`<body>` carries `data-route="home"` and `data-palette-deployment="drenched"`.

## Provenance block (first child of `<head>`)

```html
<!-- stardust:provenance
  writtenBy: impeccable:craft (via stardust:prototype)
  writtenAt: <ts>
  readArtifacts:
    - stardust/prototypes/home-shape.md
    - stardust/current/pages/home.json
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/direction.md
  againstDirection: stardust/direction.md#active (2026-05-12)
  renderedVia: impeccable:craft
  motifs:
    - sunburst-medallion-hero
    - x-crossed-marquee-band
    - highlighter-tape-manifesto
    - color-block-product-collage (×4)
    - chip-tag-cluster
    - big-dark-bottle-hero
    - medallion-footer
    - persistent-bottom-bar
  unsourcedContent:
    [24 bottle illustrations + 16 B&W cutouts + 6 chip portraits + 1 wordmark medallion — all rendered as inline SVG placeholders per § Unsourced content]
-->
```

## Unsourced content (Mode A placeholder contract)

Greenfield workspace — no captured imagery to reuse. Every visual asset is a deliberate placeholder, **not** a synthesised photograph. Each placeholder is rendered with the signature below so reviewers see the gap rather than a fabricated photo.

### Bottle illustrations (24 total: 6 per family × 4 families)

Inline SVG: jar silhouette in palette color matching the section accent (each bottle gets a slightly different palette mix to read as a distinct figure). Inside each bottle: a small mono label showing the bottle name. NO photographic bottle textures — these read as "stylized circus-figure jar drawings," consistent with the brand's hand-painted Lane 2 register.

### B&W cutout overlays (16 in §§4–7 + 2 in hero ticket-stubs)

Inline SVG silhouettes in `chapito-noite` (close to black) on transparent ground, each at off-axis rotation. The silhouettes are abstract enough to read as "figure cutout" without naming specific people. Each cutout is wrapped in a `<figure data-placeholder="cutout-bw" data-intent="lane-1 cutout">` so a reviewer reads "this is a placeholder for B&W cutout photography from Lane 1" rather than "this is a final illustration."

### Chip-tag cluster portraits (6 in §6)

Inline SVG circular portrait-silhouettes (the same abstract-cutout register, miniaturized) inside the chip's circular crop. Half-band labels render the product names.

### Wordmark medallion

Inline SVG `<textPath>` rendering the circular type. The monogrammatic `C` is rendered as a single large Bodoni Moda glyph; the circumflex `^` is rendered as a separate SVG path floating above. The medallion fallback (if SVG fails to load): a 1px outlined circle with the brand name centered in Bodoni body text.

### Trapézio wave-line motif (§8)

Inline SVG path: 3 parallel sine-wave strokes 2px in `chapito-cal`, with `stroke-dasharray` set up for the ornament-draw-in motion.

### Placeholder data attributes

Every placeholder element carries `data-placeholder="true"` and `data-intent="lane-N <description>"` so a downstream audit can list every gap. A small mono-label appears in dev mode (hidden in production via `:not(:hover)` rule) — `AWAITING GEMINI · LANE N · <intent>`.

## Key states (per impeccable craft contract)

- **Hover** — bottle illustration: 1px `chapito-noite` outline + `translateY(-2px)`, 200ms ease-out. Ticket-stub: rotation eases toward 0°, 280ms. Circle CTA: `scale(1.04)` + background → `chapito-noite`, 240ms.
- **Focus** — visible 2px `chapito-tejo` outline-offset 4px on all interactive elements. Never `outline: none`.
- **Active** — circle CTA: `scale(0.98)` + background → `chapito-noite`. Text-link: underline thickens 1px → 2px.
- **Reduced motion** — drop all transforms; rotations remain (static); wave-line stroke-dasharray jumps to full length instantly.
- **Loading** — N/A (static page).

## Composition reading (what a designer should see)

A reader scrolling the page should perceive:

1. **First viewport (hero).** A peach-coral field with a fairground sunburst radiating from a central wordmark medallion. 6 hand-painted bottles arrayed around it like a circus carousel frozen at noon. Two ticket-stub tags pinned to the corners — one carries `PIRI-PIRI`, the other `EQUILIBRISTA`. The hero reads as a 1962 Portuguese travelling-circus poster.
2. **Section 2 (X-marquee band).** Two diagonal white tapes cross the page, repeating *VEM AO CHAPITÔ* and *PROVA A CASA*. A deep-teal button sits at the X — the brand's primary CTA, unambiguously a destination.
3. **Section 3 (manifesto).** A short paragraph in the maker's voice. Five spans pop in saturated rectangles — turquoise, orange, mustard, brick, deep teal — like the brand is reading itself out loud.
4. **Sections 4–7 (four color-block product collages).** Each family takes its own ground — orange, mustard, pink-cyan, deep teal. Six bottles in each, in a single row. B&W cutout figures (grandmothers, trapeze artists, trams, sardine fishermen) float at angles around the bottles. Corner accents: a diagonal-stripe rectangle, a polka-dot rectangle. The pink-cyan section also carries a chip-tag cluster — six circular portrait chips with colored half-band labels, like a cast list.
5. **Section 8 (big-dark Trapézio hero).** Deep teal cover-of-night. A single flagship bottle centered. Three hand-drawn wave-lines pulse behind it (the Tagus). The bottle gets a 120px display title left, a mono address block right. The brand's earned moment — fairground spectacle resolves into one quiet bottle on a dark surface.
6. **Sections 9–10 (medallion footer + persistent bar).** The medallion returns, alone, smaller. Four icon-links. The persistent bottom bar carries the page's CTAs all the way through the scroll — always one click from the shop.

The page is **a 1962 Portuguese travelling-circus poster wheat-pasted over the door of an Alentejo curing shed**. Both halves at full volume.

## Open questions

None. All composition decisions resolved from BRAND.md + CONTENT.md + DESIGN.md + direction.md. The brief is ready for impeccable:craft → render.
