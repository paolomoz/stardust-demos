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
name: High Lonesome
description: Single-maker WNC mountain-spirits house — palette deployed at maximalist intensity
colors:
  high-lonesome-blue:  "#1d4250"
  fiddle-bone:         "#f9efd8"
  cardinal-flash:      "#e54a1c"
  sourwood-honey:      "#eac246"
  mountain-laurel:     "#f0a99e"
  butterfly-pea:       "#5cc1c0"
  barn-ink:            "#2d1a14"
  ridge-dawn:          "#2a4858"
  cardinal-deep:       "#a8341a"
  text-mute-on-dark:   "#a8bdc0"
  text-mute-on-light:  "#6b3f30"
  border-on-dark:      "#3a5868"
  border-on-light:     "#c8b89a"
typography:
  display-hero:
    fontFamily: "'Playfair Display','Cormorant Infant','EB Garamond','Georgia',serif"
    fontStyle: "italic"
    fontWeight: 400
    fontSize: "144px"
    lineHeight: "0.92"
    letterSpacing: "-0.012em"
  display-section:
    fontFamily: "'Playfair Display','Cormorant Infant','EB Garamond','Georgia',serif"
    fontStyle: "italic"
    fontWeight: 500
    fontSize: "80px"
    lineHeight: "0.95"
    letterSpacing: "-0.005em"
  display-product:
    fontFamily: "'Playfair Display','Cormorant Infant','EB Garamond','Georgia',serif"
    fontStyle: "italic"
    fontWeight: 500
    fontSize: "64px"
    lineHeight: "1"
  body:
    fontFamily: "'Spectral','Lora','Georgia',serif"
    fontStyle: "normal"
    fontWeight: 400
    fontSize: "19px"
    lineHeight: "1.6"
  body-italic:
    fontFamily: "'Spectral','Lora','Georgia',serif"
    fontStyle: "italic"
    fontWeight: 400
    fontSize: "22px"
    lineHeight: "1.5"
  mono:
    fontFamily: "'IBM Plex Mono','Courier New','Menlo',monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.22em"
    textTransform: "uppercase"
  numerals:
    fontFamily: "'IBM Plex Mono','Courier New','Menlo',monospace"
    fontSize: "14px"
    fontWeight: 500
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
    desktop: "120px"
    tablet:  "80px"
    mobile:  "48px"
    tier:    "drenched-cinematic"
    note: "padding varies per section in the brand's atmospheric register; ≥ 96px desktop everywhere, up to 160px on hero and bottle-poster sections"
components:
  button-primary:
    backgroundColor: "{colors.fiddle-bone}"
    textColor:       "{colors.high-lonesome-blue}"
    fontFamily:      "italic-display"
    rounded:         "{rounded.sm}"
    padding:         "16px 36px"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor:       "{colors.fiddle-bone}"
    border:          "1px solid {colors.fiddle-bone}"
    rounded:         "{rounded.sm}"
    padding:         "16px 32px"
  link-quiet:
    textColor:       "{colors.mountain-laurel}"
    textDecoration:  "underline"
    textUnderlineOffset: "0.2em"
  link-cardinal:
    textColor:       "{colors.cardinal-flash}"
    textDecoration:  "underline"
---

# Design System: High Lonesome

## 1. Overview

**Creative North Star: "Mountain song, Italian-pop wrap. The recordings of Bill Monroe pressed onto vinyl jackets designed by Massimo Vignelli."**

The system has **one dominant register** (cinematic landscape-led, atmospheric, italic-classical-serif at scale) deployed across **seven palette tokens** in asymmetric cycle. Saturation lives in the palette deployment, not in density — the brand stays spare per section while saturated across sections.

The composition is **cinematic landscape**: full-bleed atmospheric grounds (placeholders for Blue Ridge photography during the demo phase; deployed via radial-gradient atmospherics + mountain-silhouette horizons), with italic-display wordmarks set over the landscape and supporting copy in humanist serif body.

The palette is **maximalist deployment** — four or more distinct section grounds cycle across the home page (high-lonesome-blue dominant; fiddle-bone, cardinal-flash, and butterfly-pea-tinted blue as secondary surface colors). Saturated mid-century Italian travel-poster register applied to a Foxfire-Book content register.

**Key characteristics:**
- 7 brand tokens, 3 of them (high-lonesome-blue, fiddle-bone, cardinal-flash) doing most of the work
- Saturated palette deployed widely — section grounds vary, not just accent colors
- Asymmetric cycling, not strict alternation
- Italic-classical-serif throughout display tier (Playfair Display / Cormorant Infant italic)
- Spectral humanist serif body
- IBM Plex Mono for numerals, dates, eyebrow markers
- Cinematic atmospheric grounds (radial gradients + mountain silhouettes) replace per-section photography for the demo
- Flat — no drop shadows, no glassmorphism
- Mixed-case display (all-caps display forbidden — too revival-tent / too Holler & Hymn)

## 2. Colors

### Primary
- **High Lonesome Blue `#1d4250`** (`--high-lonesome-blue`): page surface in dominant dark mode. Reads as Blue Ridge dusk. The brand's most-deployed ground.
- **Fiddle Bone `#f9efd8`** (`--fiddle-bone`): page surface in light interludes; primary text color on dark grounds. Reads as warm cream / page paper.

### Loud accent
- **Cardinal Flash `#e54a1c`** (`--cardinal-flash`): vermilion red-orange. Primary CTA fills, display emphasis underlines, hero accent color. The brand's loudest single hue. Used as a full section ground on the loudest bottle section (The Gap).

### Secondary saturated
- **Sourwood Honey `#eac246`** (`--sourwood-honey`): mustard-gold. Used as accent in micro-typography and as the second-loudest section ground option.
- **Mountain Laurel `#f0a99e`** (`--mountain-laurel`): coral-pink. Used as warm-secondary section ground; italic emphasis in body; the Italian thread.
- **Butterfly Pea `#5cc1c0`** (`--butterfly-pea`): cyan / light teal. The Blue Ridge Blue product surface. Light spark on dark grounds.

### Neutral
- **Barn Ink `#2d1a14`** (`--barn-ink`): deepest text on light surfaces. Body text on fiddle-bone grounds.
- **Text Mute on Dark `#a8bdc0`** (`--text-mute-on-dark`): secondary text on high-lonesome-blue.
- **Text Mute on Light `#6b3f30`** (`--text-mute-on-light`): secondary text on fiddle-bone.

### Named rules

**The Saturation-Deployment Rule.** Section grounds use ≥ 4 distinct palette colors across the long-scroll home page. No single ground may occupy > 50% of sections. Asymmetric cycling required (no strict A/B alternation). The home page renders the brand's central thesis: saturation deployed widely, not held in reserve.

**The Italian-DNA-Implicit Rule.** Italian register lives in the palette tokens only. Italian-language words are forbidden in copy (no *atelier*, *piazza*, *trattoria*, *dolce*). The cultural source is visible in *color*, not *vocabulary*.

**The No-Pure-Black Rule.** `#000000` is forbidden. Barn-ink `#2d1a14` is the darkest color in the system.

**The Italic-Display Rule.** All display-tier text is italic-classical-serif. Roman display is forbidden — it reads as too rigid for a music-coded brand. Italic forms read as *singing*.

**The Quiet-Voice Rule.** Body copy uses slow plainspoken declaratives in roman humanist serif. The brand's saturated visual surface is balanced by a quiet voice. The voice must NOT match the saturation; the contrast between loud-palette and quiet-voice is part of the brand's tension.

## 3. Typography

**Display:** Playfair Display italic (heavy contrast classical serif, italic forms with calligraphic terminals). Stack: `'Playfair Display','Cormorant Infant','EB Garamond','Georgia',serif`. Italic-only at display sizes.

**Body:** Spectral (humanist serif, designed for long-form reading). Stack: `'Spectral','Lora','Georgia',serif`. Roman primary, italic for emphasis.

**Mono / numerals:** IBM Plex Mono. Stack: `'IBM Plex Mono','Courier New','Menlo',monospace`. Used for: eyebrow markers, dates, addresses, ABV figures, micro-labels, footnotes.

**Character:** italic-serif display + humanist roman body + typewriter mono numerals. No third display face. No all-caps body.

### Hierarchy
- **Hero wordmark** (Playfair Display italic, 144px clamp, line-height 0.92) — italic, mixed-case (e.g. *High Lonesome*).
- **Section headlines** (Playfair Display italic, 80px clamp) — italic, mixed-case.
- **Product names** (Playfair Display italic, 64px clamp) — italic, mixed-case (e.g. *Blue Ridge Blue*).
- **Body** (Spectral roman, 19px / 1.6) — reading text.
- **Body italic** (Spectral italic, 22px / 1.5) — pull-quotes, voice samples, emphasis.
- **Eyebrow / mono markers** (IBM Plex Mono, 11px / 0.22em letter-spacing, uppercase) — *Track 02 — The Song*, *Hot Springs · elev. 4,140 ft*, etc.
- **Numerals / addresses** (IBM Plex Mono, 14px, weight 500) — ABV, phone, mailing.

### Named rules

**The Italic-At-Display Rule.** Display tier is italic by default. Roman at 64px+ is forbidden.

**The Mixed-Case Display Rule.** All-caps display is forbidden (too revival-tent / too Holler & Hymn). Display tier uses mixed-case.

**The Mono-As-Marker Rule.** IBM Plex Mono appears only at marker/numeral scale (11px micro-labels or 14px numerals). Larger mono is forbidden — pushes the brand toward Holler & Hymn's almanac register.

## 4. Elevation

The system is **flat by conviction** — no drop shadows, no glassmorphism. The only depth comes from **atmospheric radial gradients** layered on section grounds, simulating cinematic landscape photography. These gradients are:

- *Sunset glow* — radial-gradient from upper-right, mountain-laurel + cardinal-flash, fading to high-lonesome-blue
- *Dawn glow* — radial-gradient from upper-left, sourwood-honey + fiddle-bone, fading to ridge-dawn
- *Mist band* — horizontal-band gradient across the middle of a section, fiddle-bone at low opacity, fading to transparent
- *Deep cove* — radial-gradient from lower-center, barn-ink fading to high-lonesome-blue, simulating valley shadow

The atmospherics deploy the saturated palette through the gradient stops; combined with placeholder photography slots they produce the cinematic landscape register without requiring final imagery.

## 5. Components

### button-primary
Fiddle-bone fill, high-lonesome-blue text, 2px radius, 16×36px padding. Italic-display label (mixed-case). On hover: shifts to mountain-laurel fill.

### button-ghost-on-dark
Transparent fill, fiddle-bone text + 1px fiddle-bone border, 2px radius. Italic-body label. On hover: cardinal-flash border.

### link-quiet
Mountain-laurel underlined text. Used for body-internal navigation ("read about the maker →"). Italic.

### link-cardinal
Cardinal-flash underlined text. Used for primary in-section navigation ("Visit the Shop →"). Italic-display at smaller scale.

### atmospheric-section
The brand's primary composition unit. Full-bleed ground (one of: high-lonesome-blue, fiddle-bone, cardinal-flash, butterfly-pea-tinted blue, mountain-laurel). Atmospheric radial-gradient overlay (sunset/dawn/mist/cove per section). Italic-display headline. Roman serif body. Single CTA or link-out.

### landscape-vista
Aspect-ratio 4:5 or 16:9 placeholder slot for Blue Ridge photography (Gemini Lane 1 imagery). Bordered with subtle 1px in border-on-dark color. Centered mono label "Awaiting Gemini · Lane 1 · Landscape · 16:9".

### bottle-poster
Full-bleed cinematic section per product. Split layout (image left / right alternating per bottle). Atmospheric radial-gradient per product (Blue Ridge Blue → butterfly-pea-tinted, The Gap → cardinal-flash, Deep Cove → high-lonesome-blue + sourwood-honey atmospheric). Italic-display product name. Roman body. Single "Buy a bottle ↗" link.

### system-component roles (abstract)

- `credits-bar-header` — minimal serif top strip; mark + nav + edition marker
- `atmospheric-section` — the brand's section pattern
- `landscape-vista` — placeholder slot for Lane 1 imagery
- `bottle-poster` — per-product cinematic section
- `liner-notes-list` — centered type block for pour list (album-credits register)
- `colophon-footer` — 3-col on high-lonesome-blue, mono throughout

## 6. Do's and Don'ts

**Do** deploy the saturated palette across ≥ 4 section grounds. The Saturation-Deployment Rule is load-bearing.

**Do** use italic-classical-serif for all display tier. The Italic-Display Rule is load-bearing.

**Do** keep body voice quiet against the loud palette. Saturation × restraint is the brand's tension.

**Do** preserve the cinematic atmospheric grounds (radial gradients + mountain-silhouette horizons) when photography is pending.

**Do** name palette tokens with brand-native names (`high-lonesome-blue`, `cardinal-flash`, etc.). Never `Primary` / `Secondary` / `Alarm`.

**Don't** introduce drop shadows, gradients-as-text-fills, glassmorphism, or any glass / depth language.

**Don't** set display in roman. Italic-only at 64px+.

**Don't** set display in all-caps. Mixed-case at display tier; all-caps reserved for IBM Plex Mono micro-labels.

**Don't** default to a single dominant ground color. The brand IS the asymmetric cycle.

**Don't** use Italian-language words in copy. *Atelier* / *piazza* / *trattoria* / *dolce* are forbidden.

**Don't** render the centered SaaS-hero silhouette. Hero is cinematic landscape with left- or right-anchored italic wordmark.

**Don't** render the bottles as a 3-col card grid. Each bottle is a full-bleed atmospheric poster section.

**Don't** approach `#000000` — darkest color is barn-ink `#2d1a14`.

**Don't** use the Foxfire-Book reissue palette (sage/oxblood/cream-only). The saturated 7-token palette is what makes this brand not a reissue.

## 7. Brand-faithful inversions

Mode A pins palette and type; the rolled seed (decade × craft × register-flavor) aligned with the brand's references. Retentions worth recording:

- **High-lonesome-blue retained over near-black.** Reason: brand-native — the page surface is mountain-dusk teal, not generic dark.
- **Italic-display retained over roman-display.** Reason: brand-faithful — italic forms read as singing, matches the central voice register.
- **7-token saturated palette retained without restraint defaults.** Reason: the saturation-deployment rule explicitly diverges from impeccable's Restrained default (one accent ≤ 10%). This brand is `Drenched` register per intent-dimensions.md § Expressive axis.
- **Mountain-silhouette horizon retained as the cinematic anchor.** Reason: brand-native — the brand's place is the Blue Ridge, and the section grounds replicate the brand's atmospheric register.

Recorded in full at `DESIGN.json.extensions.divergence.brand_faithful_inversions[]`.
