<!-- stardust:provenance
  writtenBy: stardust:seed (hand-authored, proof-of-concept)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - brand/BRAND.md
  synthesizedInputs:
    - brand/BRAND.md
  stardustVersion: 0.3.0
  scope: descriptive — captures the visual system as the brand has been authored
-->
---
name: Chapitô
description: Single-maker Portuguese hot-sauce house in Alfama, Lisbon — palette deployed at maximalist intensity, with a named compositional motif catalog (sunburst medallion · X-marquee · highlighter-tape · color-block product collages · chip-tag cluster · big-dark bottle hero · medallion footer · persistent bottom bar)
colors:
  chapito-cravo:         "#f4b09d"
  chapito-areia:         "#fbe9d0"
  chapito-piri:          "#ed7f3f"
  chapito-laranja-doce:  "#e95b27"
  chapito-azulejo:       "#3fbcaf"
  chapito-galinha:       "#f3c84e"
  chapito-malagueta:     "#9b3536"
  chapito-tejo:          "#1f4548"
  chapito-noite:         "#1a1410"
  chapito-cal:           "#fffaef"
typography:
  logotype-medallion:
    fontFamily: "'Bodoni Moda','Playfair Display','GFS Didot','Didot',serif"
    fontStyle: "normal"
    fontWeight: 400
    letterSpacing: "0.18em"
    loadBearingRule: "wordmark medallion only — never deploy as standing body or display text"
  display:
    fontFamily: "'Anton','Bebas Neue','Oswald','Impact',sans-serif"
    fontStyle: "normal"
    fontWeight: 400
    fontSize: "80px"
    lineHeight: "0.92"
    letterSpacing: "-0.01em"
    textTransform: "uppercase"
  display-large:
    fontFamily: "'Anton','Bebas Neue','Oswald','Impact',sans-serif"
    fontSize: "120px"
    textTransform: "uppercase"
  display-section:
    fontFamily: "'Anton','Bebas Neue','Oswald','Impact',sans-serif"
    fontSize: "64px"
    textTransform: "uppercase"
  body:
    fontFamily: "'Inter','DM Sans','Outfit','Helvetica Neue',sans-serif"
    fontSize: "17px"
    lineHeight: "1.55"
  body-italic:
    fontFamily: "'Inter','DM Sans','Outfit','Helvetica Neue',sans-serif"
    fontStyle: "italic"
    fontSize: "19px"
  mono:
    fontFamily: "'IBM Plex Mono','JetBrains Mono','Courier New',monospace"
    fontSize: "12px"
    letterSpacing: "0.12em"
    textTransform: "uppercase"
  mono-marker:
    fontFamily: "'IBM Plex Mono','JetBrains Mono','Courier New',monospace"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm:   "2px"
  md:   "4px"
  lg:   "8px"
  pill: "9999px"
spacing:
  xxs:  "4px"
  xs:   "8px"
  sm:   "12px"
  md:   "20px"
  lg:   "32px"
  xl:   "56px"
  xxl:  "96px"
  xxxl: "160px"
  sectionPadding:
    desktop: "96px"
    tablet:  "64px"
    mobile:  "40px"
    tier:    "drenched-fairground"
components:
  button-primary-pill:
    backgroundColor: "{colors.chapito-tejo}"
    textColor:       "{colors.chapito-cal}"
    rounded:         "{rounded.pill}"
    padding:         "14px 28px"
    fontFamily:      "mono-marker"
  button-circle-cta:
    backgroundColor: "{colors.chapito-tejo}"
    textColor:       "{colors.chapito-cal}"
    rounded:         "{rounded.pill}"
    size:            "180px"
    fontFamily:      "mono-marker"
  ticket-stub-tag:
    backgroundColor: "{colors.chapito-cal}"
    border:          "1px solid {colors.chapito-noite}"
    rounded:         "{rounded.sm}"
    padding:         "8px 12px"
    rotation:        "±6°"
  highlighter-rectangle:
    fontFamily:      "body-italic"
    padding:         "2px 8px"
    rounded:         "{rounded.none}"
  marquee-ribbon-tape:
    backgroundColor: "{colors.chapito-cal}"
    textColor:       "{colors.chapito-noite}"
    fontFamily:      "display"
    border:          "1px solid {colors.chapito-noite}"
    rotation:        "±12°"
---

# Design System: Chapitô

## 1. Overview

**Creative North Star: "Big-top spectacle wrapping a quiet pepper farm. A 1962 Portuguese travelling-circus poster wheat-pasted over the door of an Alentejo curing shed."**

The system has **one dominant register** (fairground-poster, cutout-collage, condensed-all-caps display) deployed across **ten palette tokens** in asymmetric cycle. Saturation lives in the palette deployment AND in the compositional motif catalog — the brand's surface is a specific vocabulary of named compositional moves (sunburst medallion, X-marquee, highlighter-tape paragraph, color-block product collages, chip-tag cluster, big-dark bottle hero, medallion footer, persistent bottom bar), each of which the prototype must reimplement.

The composition is **solid-color section grounds + B&W cutout-photo collage overlay + off-axis rotation**. Photography lives ON the ground as cutout layers, never as full-bleed photographic backdrop. The depth language is layering + rotation + flat color, NOT shadows / gradients / glass.

The palette is **maximalist deployment** — six distinct section grounds cycle across the home page (`chapito-cravo` dominant; `chapito-piri`, `chapito-galinha`, `chapito-cravo+cyan-overlay`, `chapito-tejo`, `chapito-cal` as secondary surface grounds). Each product family gets its own vivid ground exactly once.

**Key characteristics:**

- 10 brand tokens, with `chapito-cravo` doing most of the chrome work as the dominant brand surface
- Saturated palette deployed across 6 distinct section grounds on the home page (Drenched intensity)
- Asymmetric cycling — no strict A/B alternation
- Condensed all-caps display (Anton) throughout — mixed-case display FORBIDDEN
- Inter humanist sans body — roman primary + italic for highlighter-tape pulls
- IBM Plex Mono for ticket-stub tags, dates, addresses, micro-labels, numerals — ≤ 14px load-bearing
- Bodoni circular serif for the wordmark medallion ONLY — never deployed as standing text
- Solid color section grounds + cutout collage overlay (no photographic backgrounds, no atmospheric radial-gradients as primary depth)
- Off-axis rotation as the brand's signature composition language
- Flat — no drop shadows, no glassmorphism, no neumorphism
- Eight named compositional motifs reimplemented in every render — load-bearing, not optional

## 2. Colors

### Dominant brand surface
- **Chapitô Cravo `#f4b09d`** (`--chapito-cravo`): peach-coral. The brand's dominant ground — hero, marquee band, manifesto band, footer band. The brand's primary chrome lives here.

### Light interludes
- **Chapitô Areia `#fbe9d0`** (`--chapito-areia`): warm cream / sand. Sunburst secondary rays, diagonal-stripe accent fills, ticket-stub corners.
- **Chapitô Cal `#fffaef`** (`--chapito-cal`): limewash white. Marquee tape ribbons, light text on dark grounds, persistent-bottom-bar ground. Never pure `#ffffff`.

### Loud product-family grounds (one section each, no repeats)
- **Chapitô Piri `#ed7f3f`** (`--chapito-piri`): piri-piri orange. Piri-Piri family section ground.
- **Chapitô Laranja-Doce `#e95b27`** (`--chapito-laranja-doce`): hotter sweet-orange. Diagonal-stripe accents.
- **Chapitô Galinha `#f3c84e`** (`--chapito-galinha`): yolk-mustard. Doce Fogo family section ground.
- **Chapitô Tejo `#1f4548`** (`--chapito-tejo`): deep teal-navy. Cabeçudo family section ground + Trapézio bottle hero ground + circle-CTA button + persistent-bottom-bar accent.

### Accent / quarantined
- **Chapitô Azulejo `#3fbcaf`** (`--chapito-azulejo`): turquoise teal. Highlighter-rectangle accent; polka-dot color; chip half-band. Never a primary section ground.
- **Chapitô Malagueta `#9b3536`** (`--chapito-malagueta`): brick / burgundy. Highlighter-rectangle accent; ticket-stub border; 1–2 word body emphasis. Never a section ground.

### Neutral
- **Chapitô Noite `#1a1410`** (`--chapito-noite`): deepest text. Body text on light grounds, marquee text on cal tape. Never pure `#000000`.

### Named rules

**The Saturation-Deployment Rule.** Section grounds use 6 distinct palette colors across the long-scroll home page. Each product family gets its own vivid ground exactly once. No single ground may occupy > 50% of sections. Asymmetric cycling required.

**The Cutout-Collage Rule.** Section grounds are solid color. B&W cutout photography (Lane 1) sits ON TOP of the ground as layered cutouts at off-axis angles. No full-bleed photographic backgrounds with overlaid type. The cutout collage IS the depth language.

**The Off-Axis Rotation Rule.** Cutout photos, ticket-stub tags, marquee ribbons, accent rectangles, chip-tag clusters all sit at angles between -12° and +12°. Pure orthogonal layout is forbidden except where rhythm demands it (centered display, centered manifesto paragraph).

**The Highlighter-Tape Rule.** Brand-voice phrase-spans inside body prose are wrapped in flat solid-color rectangles — no shadow, no gradient, no rounded corners (≤ 2px). The highlighter colour rotates through `azulejo · piri · galinha · malagueta · tejo`. This is the brand reading itself out loud.

**The No-Pure-Black-or-White Rule.** `#000000` and `#ffffff` are forbidden. Darkest is `chapito-noite #1a1410`; lightest is `chapito-cal #fffaef`.

**The No-Italian Rule.** No Italian language. No Italian-place reference. No Italian-liquor-maker pastiche. The reference brand is the visual register, not a source of words, places, or category cues.

## 3. Typography

**Logotype (medallion only):** Bodoni Moda 400, tracking +0.18em, set as circular type around a monogrammatic C with freestanding circumflex. Stack: `'Bodoni Moda','Playfair Display','GFS Didot','Didot',serif`. **Never deployed outside the medallion.**

**Display:** Anton bold condensed all-caps. Stack: `'Anton','Bebas Neue','Oswald','Impact',sans-serif`. Used for section titles, family banners, CTA labels, big-dark bottle title. All-caps load-bearing; mixed-case display FORBIDDEN; italic display FORBIDDEN.

**Body:** Inter humanist sans. Stack: `'Inter','DM Sans','Outfit','Helvetica Neue',sans-serif`. Roman primary + italic for highlighter-tape pulls and verbatim Inês-voice quotes.

**Mono / markers / numerals:** IBM Plex Mono. Stack: `'IBM Plex Mono','JetBrains Mono','Courier New',monospace`. Ticket-stub tags, micro-labels, dates, addresses, 3-term subtitle rows, mono-CTA labels. ≤ 14px load-bearing.

### Hierarchy
- **Logotype medallion** — Bodoni 24–32px circular, only inside the medallion.
- **Display large** (Anton, 120px) — big-dark bottle title; section banners at hero scale.
- **Display section** (Anton, 64–80px) — product family banners, section heads.
- **Body** (Inter roman, 17px / 1.55) — reading text.
- **Body italic / emphasis** (Inter italic, 19px) — highlighter-tape spans + Inês voice quotes.
- **Mono micro** (IBM Plex Mono, 12px, 0.12em letter-spacing, uppercase) — ticket-stubs, 3-term subtitle rows, addresses.
- **Mono marker** (IBM Plex Mono, 14px, 0.14em, uppercase, weight 600) — CTAs, prominent micro-labels.

### Named rules

**The Condensed-All-Caps Display Rule.** Display tier is Anton (or equivalent) bold condensed, all-caps. Mixed-case display is forbidden. Italic display is forbidden.

**The Mono-As-Marker Rule.** IBM Plex Mono appears only at marker scale (≤ 14px). Larger mono is forbidden — pushes the brand toward technical / industrial register.

**The Bodoni-In-Medallion-Only Rule.** The classical serif logotype lives in the wordmark medallion only. Deploying Bodoni as standing display or body breaks the brand's typographic discipline (Anton owns display; Inter owns body).

**The No-Script-Web-Font Rule.** Script faces (Pacifico, Permanent Marker, Reenie Beanie, brush scripts) are FORBIDDEN as web type. Hand-lettered character lives only on raster bottle labels (Lane 2 imagery), never as web font.

## 4. Elevation

The system is **flat by conviction** — no drop shadows, no glassmorphism, no neumorphism, no gradients-as-elevation. Depth comes from:

- **Layering** — cutout B&W photos overlap each other and the central bottle row, layered without shadows.
- **Off-axis rotation** — cutouts, ribbons, ticket-stubs, accent rectangles sit between -12° and +12°.
- **Hard-edged flat color blocks** — diagonal stripes, polka-dot rectangles, marquee tape.
- **Cutout silhouettes** — each B&W photo is fully cut out (transparent surround), so the section ground reads as the field on which the cutouts float.

No atmospheric radial-gradients (those are High Lonesome's register, not Chapitô's). Chapitô's grounds are SOLID, with depth coming from the cutout-collage layers above.

## 5. Components

### button-primary-pill
Tejo fill, cal text, fully rounded pill (border-radius pill), 14×28px padding. Mono-marker label, uppercase, +0.14em tracking. On hover: `translateY(-2px)` + background → `chapito-noite`.

### button-circle-cta
Tejo fill, cal text, fully rounded 180×180px circle. Mono-marker label centered. Used ONCE on the X-marquee section, pinned to the ribbon intersection. On hover: subtle scale 1.02 + background → `chapito-noite`.

### ticket-stub-tag
Cal fill, noite border (1px), 4px radius, 10–14px padding. Mono micro label uppercase. Sits at -6° or +6° rotation. Two instances on the hero (top corners), each with a small B&W cutout inset.

### highlighter-rectangle (inline)
Inline span. Solid color background from the rotation `[azulejo · piri · galinha · malagueta · tejo]`. 2px padding, 1px radius max. NO shadow, NO gradient. Text inside renders italic Inter at body size. On `tejo` background the inside text is `chapito-cal` (white), elsewhere `chapito-noite`.

### marquee-ribbon-tape
Cal fill, noite text, 1px noite border top + bottom, condensed display all-caps at 28px with +0.04em tracking. Repeats phrase with `·` separator across full viewport width. Spans edge-to-edge at -12° (or +12° for the crossing ribbon). Two ribbons used in the X-marquee section.

### sunburst-medallion (composition)
Hero composition. Background ground `chapito-cravo`. Overlay: 16 alternating wedge rays of `chapito-areia` (alternating with cravo-tint) emanating from a center point ~30% from the top. Center: 280×280px circular medallion in `chapito-cal` with Bodoni serif circular type ("CHAPITÔ" arcing top, "MOLHOS FEITOS À MÃO" arcing bottom) around a large monogrammatic C with a circumflex above. Around the medallion: 6 hand-painted bottle illustrations at clock positions 12, 2, 4, 6, 8, 10. Top-left + top-right corners: ticket-stub tags with B&W cutouts.

### color-block-section (×4)
Full-bleed product-family band. Ground per family: `chapito-piri` (Piri-Piri) · `chapito-galinha` (Doce Fogo) · `chapito-cravo` with cyan overlay (Equilibrista/Fermentados) · `chapito-tejo` (Cabeçudo). Each section composed of:
- Top-center: Anton bold condensed all-caps family name (64–80px) in noite (or cal on tejo)
- Below: 3-term mono micro-subtitle row separated by `|`
- Middle: 6 hand-painted bottle illustrations in a single horizontal row
- Around: 3–4 B&W cutout photographs floating at -8° to +9° rotation
- Bottom-right: diagonal-stripe accent block (cream + accent color) ~120×80px rotated 15°
- Bottom-left: polka-dot accent rectangle ~120×80px

### chip-tag-cluster
Used once (in the Equilibrista/Fermentados section). 6 small circular cutout-photo chips (60×60px) with colored half-band labels across the bottom 40% of each chip. Each label is mono uppercase. Chips overlap loosely at -4° to +6°.

### big-dark-bottle (hero)
Full-bleed cover-of-night section, 80vh min-height. Ground: `chapito-tejo`. Behind the bottle: 3 hand-drawn parallel sine-wave lines in `chapito-cal` 2px stroke (the Tagus motif). Center: a single 480px-tall flagship bottle (Trapézio). Left of bottle: Anton 120px `TRAPÉZIO` in cal + a raster script lockup stamp below. Right of bottle: 3-line mono micro-block — `LARGO DO CHAFARIZ · COSTA DO CASTELO · ALFAMA, LISBOA`. Below the bottle: italic Inter pull-anchor in cal.

### medallion-footer
Centered alone on `chapito-cravo` ground. 200×200px circular wordmark medallion (same construction as the hero, smaller). Below: a single row of 4 icon-link badges (email · IG · WhatsApp · phone), each as a small mono icon + mono uppercase label.

### persistent-bottom-bar
Fixed-bottom 36px band on every page. Ground: `chapito-cal`. Left: mono uppercase `VISITA A LOJA →`. Right: mono uppercase `VAI ATÉ LÁ →` linking to the `.shop` subdomain.

### system-component roles (abstract)

- `sunburst-medallion` — hero composition unit
- `marquee-x-band` — X-crossed ribbons with center CTA
- `highlighter-manifesto` — centered manifesto with highlighter-rectangle phrase pulls
- `color-block-section` — per-family band; bottle row + cutout collage + corner accents
- `chip-tag-cluster` — single-instance circular chip cluster
- `big-dark-bottle` — flagship cover-of-night section
- `medallion-footer` — wordmark medallion + icon-link row
- `persistent-bottom-bar` — fixed CTA pair at viewport bottom

## 6. Do's and Don'ts

**Do** deploy the saturated palette across 6 distinct section grounds. The Saturation-Deployment Rule is load-bearing.

**Do** reimplement every named compositional motif. The motif catalog is the brand's surface.

**Do** use condensed all-caps display (Anton) for every display tier. The Condensed-All-Caps Rule is load-bearing.

**Do** use cutout B&W collage over solid grounds. The Cutout-Collage Rule is load-bearing.

**Do** rotate cutouts, ticket-stubs, ribbons, and accent rectangles off-axis. The Off-Axis Rotation Rule is load-bearing.

**Do** wrap brand-voice phrase-spans in highlighter rectangles. The Highlighter-Tape Rule is load-bearing.

**Do** keep Portuguese as the brand's native language. English is gloss.

**Do** name palette tokens brand-native (`chapito-cravo`, `chapito-piri`, etc.).

**Don't** introduce drop shadows, gradients-as-elevation, glassmorphism, or neumorphism.

**Don't** set display in italic-classical serif (that's High Lonesome's register).

**Don't** set display in mixed-case. All-caps is load-bearing.

**Don't** default to a single dominant ground color. The brand IS the asymmetric cycle of section grounds.

**Don't** use Italian-language words in copy. Anywhere.

**Don't** reference the visual-register source brand by name, place, category, or shape.

**Don't** render the centered SaaS-hero silhouette.

**Don't** render the bottles as a 3-col card grid. Each family is a single horizontal bottle row over a solid color band.

**Don't** approach `#000000` or `#ffffff` — chapito-noite / chapito-cal own the dark/light extremes.

**Don't** use the Slow-Food / Cereal-Magazine terracotta-luxe palette.

**Don't** use script web fonts as standing text.

## 7. Brand-faithful inversions

Mode A pins palette, type, and the compositional motif catalog. The rolled seed (decade × craft × register-flavor) aligned with the brand's references. Retentions worth recording:

- **Condensed-all-caps display retained over italic-classical serif.** Reason: brand-faithful — fairground-marquee weight is the brand's central display register.
- **Solid-color section grounds retained over atmospheric photographic backgrounds.** Reason: brand-faithful — cutout collage on solid grounds IS the brand's surface.
- **B&W cutout collage retained over color landscape photography.** Reason: brand-faithful — Lane 1 is load-bearing.
- **10-token saturated palette retained over Restrained default.** Reason: user-documented saturation preference + brand-faithful — Drenched deployment is the brand's central thesis.
- **Off-axis rotation retained over orthogonal grid.** Reason: brand-faithful — fairground-poster composition is asymmetric and rotated.
- **Portuguese-native voice retained over English-only.** Reason: brand-faithful — Portuguese is the native language.
- **Highlighter-rectangle phrase pulls retained over plain emphasis.** Reason: brand-faithful — the highlighter motif is the brand reading itself out loud.

Recorded in full at `DESIGN.json.extensions.divergence.brand_faithful_inversions[]`.

## 8. Compositional motif catalog (LOAD-BEARING)

The brand's design-systems-level differentiator. Every motif here MUST be reimplemented in any prototype. See `DESIGN.json.extensions.motifs.patterns[]` for the machine-readable form.

1. **Sunburst medallion hero** — sunburst rays on `chapito-cravo` + central Bodoni circular wordmark medallion + 6 bottles in radial arrangement + two ticket-stub corner tags.
2. **X-crossed marquee band** — two white-tape ribbons crossing at ±12°, repeating brand phrases, with a circular `tejo`-ground CTA button at the X-intersection.
3. **Highlighter-tape manifesto** — centered paragraph with 5–7 phrase-spans wrapped in flat solid-color highlighter rectangles.
4. **Color-block product collage** (×4) — full-bleed family band; family name + mono subtitle + 6-bottle horizontal row + 3–4 B&W cutout-photo overlays at off-axis angles + diagonal-stripe corner + polka-dot corner.
5. **Chip-tag cluster** — single instance; 6 circular cutout-photo chips with colored half-band labels.
6. **Big-dark bottle hero** — `chapito-tejo` ground + 3 hand-drawn wave-lines + centered flagship bottle + Anton display name + mono address block.
7. **Medallion footer** — same medallion as the hero, smaller, centered alone + icon-link row.
8. **Persistent bottom bar** — fixed 36px `chapito-cal` band; left + right mono-CTA pair.

Token substitution alone produces slop. The motifs are the brand.
