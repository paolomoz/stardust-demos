<!-- stardust:provenance
  writtenBy: stardust:seed (hand-authored, proof-of-concept)
  writtenAt: 2026-05-11T00:00:00Z
  readArtifacts:
    - demos/uc2-uc3-greenfield/site/brand/BRAND.md
  synthesizedInputs:
    - demos/uc2-uc3-greenfield/site/brand/BRAND.md
  stardustVersion: 0.3.0
  scope: descriptive — captures the visual system as the brand has been authored. No prior site exists; design tokens, typography model, and components are hand-authored from BRAND.md as the proof-of-concept output of /stardust:seed.
-->
---
name: Holler & Hymn
description: Single-maker Appalachian botanical-liqueur house — Wolfpen Holler, Madison County NC
colors:
  hymnal-black:     "#1a1410"
  barn-rust:        "#7e1d12"
  gilt-gold:        "#d4a45c"
  rhody-green:      "#3e5a3e"
  bulletin-cream:   "#e8d8b8"
  hellfire-neon:    "#f04a26"
  ink:              "#1a1410"
  surface-cream:    "#e8d8b8"
  surface-black:    "#1a1410"
  text-primary:     "#1a1410"
  text-on-dark:     "#e8d8b8"
  text-mute:        "#5a4a3e"
  border-neutral:   "#c8b89a"
  accent-rust:      "#7e1d12"
  accent-gold:      "#d4a45c"
typography:
  display:
    fontFamily: "'Saloon', 'Camp Type', 'Knockout', sans-serif"
    fontSize: "72px"
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: "-0.01em"
    textTransform: "uppercase"
  headline:
    fontFamily: "'Saloon', 'Camp Type', 'Knockout', sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "0"
    textTransform: "uppercase"
  title:
    fontFamily: "'Sentinel', 'Bookman', 'Cycles', serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0"
  subtitle:
    fontFamily: "'Sentinel', 'Bookman', 'Cycles', serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: "1.3"
  body:
    fontFamily: "'Sentinel', 'Bookman', 'Cycles', serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.55"
  body-strong:
    fontFamily: "'Sentinel', 'Bookman', 'Cycles', serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: "1.55"
  label:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  numerals:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "14px"
    fontWeight: 500
rounded:
  none: "0px"
  sm:   "2px"
  md:   "4px"
  lg:   "8px"
  pill: "9999px"
spacing:
  xxs: "4px"
  xs:  "8px"
  sm:  "12px"
  md:  "20px"
  lg:  "32px"
  xl:  "56px"
  xxl: "96px"
  xxxl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.barn-rust}"
    textColor:       "{colors.bulletin-cream}"
    rounded:         "{rounded.sm}"
    padding:         "14px 28px"
    border:          "1px solid {colors.barn-rust}"
  button-secondary:
    backgroundColor: "transparent"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.sm}"
    padding:         "14px 28px"
    border:          "1px solid {colors.hymnal-black}"
  banner-bulletin:
    backgroundColor: "{colors.bulletin-cream}"
    textColor:       "{colors.hymnal-black}"
    padding:         "96px 48px"
  banner-revival:
    backgroundColor: "{colors.hymnal-black}"
    textColor:       "{colors.bulletin-cream}"
    padding:         "96px 48px"
  card-bottle:
    backgroundColor: "{colors.bulletin-cream}"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.sm}"
    padding:         "28px"
    border:          "1px solid {colors.border-neutral}"
  chip-accent:
    backgroundColor: "{colors.hellfire-neon}"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.pill}"
    padding:         "4px 12px"
---

# Design System: Holler & Hymn

## 1. Overview

**Creative North Star: "Revival-tent poster meets apothecary cabinet drawer"**

The visual system has **two alternating registers** — Sunday-bulletin mode (cream surface, rust display type) and revival-tent mode (hymnal-black surface, bulletin-cream display type) — and a section toggle drives the page through both as it scrolls. The two registers do for the visual layer what the holler / hymn pairing does for the voice: each section is one half of the ampersand. The page is read as a sequence of revival-tent posters and Sunday-bulletin pages alternating.

Type is a **three-tier hybrid**: hand-lettered revival-tent display (all caps, condensed, rough-stroke industrial sans-serif of the kind painted on Appalachian plywood signage) sits above a hymnal-style transitional serif body (the visual weight of an old hardcover hymnal page), with an IBM-Selectric-style typewriter monospace reserved for numerals, dates, ABV figures, and almanac-style label callouts.

The palette is **rust, cream, hymnal-black, gilt-gold, rhododendron-green, hellfire-neon** — six tokens, no Kinfolk beige, no Apothéke industrial, no Etsy folk-pastel. Cream and hymnal-black are the two page surfaces; rust is the load-bearing display color; gilt-gold appears only as a hymnal-edge accent; rhododendron green is reserved for botanical-context blocks; hellfire-neon is the irreverence accent — used sparingly, never as primary text, never on already-dark surfaces.

What this system explicitly is **not**: a luxe-minimal artisanal-Southern surface (no generous white space, no italic serif as primary display, no muted beige palette), and not a craft-beer can-illustration vernacular (no full-bleed illustrated panels as the dominant grammar). It is editorial in scroll grammar, like a single-voice magazine feature laid out across one long page.

**Key Characteristics:**
- Six brand tokens, three (rust, cream, hymnal-black) doing most of the work
- Two-register alternating sections (bulletin / revival) — same color tokens, inverted surfaces
- Three-tier type hierarchy: hand-lettered display + hymnal serif body + typewriter mono numerals
- All-caps display headlines — never set in title case
- Hand-painted bottle labels (one per product) as the dominant imagery motif
- Rotation, irregularity, and hand-imperfection preserved in label art and dividers
- No shadows, no gradients, no glassmorphism — flat, with one or two hand-painted decorative rules

## 2. Colors

### Primary
- **Hymnal Black `#1a1410`** (`--hymnal-black`): page surface in revival-tent mode; primary body text on cream. An old-leather-Bible brown-black, never pure black — softer for body text and more faithful to the brand register.
- **Bulletin Cream `#e8d8b8`** (`--bulletin-cream`): page surface in Sunday-bulletin mode; primary text color on hymnal-black. Sun-bleached Sunday-bulletin paper, slightly warm.
- **Barn Rust `#7e1d12`** (`--barn-rust`): the load-bearing display color. Headlines, hand-lettered marks, primary CTA fills. The color of oxidized iron and old-barn paint.

### Secondary
- **Gilt Gold `#d4a45c`** (`--gilt-gold`): reserved exclusively for hymnal-edge moments — decorative rules, gilded initial capitals, hymnal-page-edge bordering. Rare; never primary.
- **Rhododendron Green `#3e5a3e`** (`--rhody-green`): the only "nature" color in the system. Reserved for botanical-context surfaces (the still process page, the foraging map). Never on home, never on product cards.

### Accent (irreverence)
- **Hellfire Neon `#f04a26`** (`--hellfire-neon`): jukebox-neon orange-red. Used only for one-glance accents: the "shipping" chip, a single ornament glyph, the dot over a hand-lettered "&." Never as body text, never on hymnal-black surface as a dominant element. Reading it should feel like a single neon bulb above a Sunday school.

### Neutral
- **Border Neutral `#c8b89a`** (`--border-neutral`): card outlines, divider rules on cream surfaces. A muted hymnal-page-margin tone.
- **Text Mute `#5a4a3e`** (`--text-mute`): secondary copy, footer link text on cream. Never on dark surface.

### Named Rules

**The Two-Register Alternation Rule.** Every section commits to either bulletin mode (cream surface, hymnal-black or rust text) OR revival-tent mode (hymnal-black surface, bulletin-cream or gilt text). Sections **must not blend the two** — the alternation is the rhythm. A scroll through the home page is a strict sequence: cream → black → cream → black, with one bulletin-mode hero, one revival-tent maker quote, etc.

**The Hellfire-Neon Restraint Rule.** The hellfire-neon `#f04a26` appears at most once per visible viewport. If it would appear twice, demote one to barn-rust. The accent's job is to read like a single neon sign in a dim room — multiple instances dilute it to "decoration."

**The No-Pure-Black Rule.** Hymnal-black `#1a1410` is the darkest color in the system. Pure `#000000` is forbidden — it reads as digital, not as old leather. Body text on cream is `#1a1410`, not black.

**The Botanical-Quarantine Rule.** Rhododendron green `#3e5a3e` belongs only to botanical-context content (the still page, the foraging map, deep-product description sections discussing herbs and plants). It never appears as a CTA background, a chip, or a navigation surface. Quarantining it keeps "nature" from creeping into the whole brand.

## 3. Typography

**Display Font:** Hand-lettered revival-tent display — a heavy, condensed, all-caps sans-serif modeled on 1940s revival-tent posters and Appalachian state-fair signage. Stack: `'Saloon', 'Camp Type', 'Knockout', sans-serif`. The actual chosen face is to be selected during prototyping; the stack names the visual character.

**Body Font:** Hymnal serif — a transitional serif with the proportions and stroke contrast of an old hardcover hymnal page. Stack: `'Sentinel', 'Bookman', 'Cycles', serif`. Slightly oversized leading (1.55) for the unhurried-Sunday-reading register.

**Mono Font:** IBM-Selectric-style typewriter monospace. Stack: `'IBM Plex Mono', 'Courier New', monospace`. Reserved for numerals, dates, ABV figures, almanac callouts, and any micro-typography that should read as "labelled by hand on the bottle."

**Character:** The pairing is **rough-hewn display + reverent body + typewriter numerals**. The display does the brand's loudness; the body does the reading work; the numerals do the literalism. No font is used outside its assigned tier.

### Hierarchy
- **Display** (hand-lettered display, 72px / 1.05, all caps): hero headlines, section openers like "PASS THE PLATE" and "TENT REVIVAL."
- **Headline** (hand-lettered display, 48px / 1.1, all caps): sub-section headlines, "THE STILL" / "THE HOLLER" / "HYMNS."
- **Title** (hymnal serif, 32px / 1.2, weight 600): card titles, sub-sub-section leads.
- **Subtitle** (hymnal serif, 22px / 1.3, weight 500): captions under hero artwork, story-page intros.
- **Body** (hymnal serif, 17px / 1.55, weight 400): default reading text — Wendell's manifesto, the still process steps.
- **Body Strong** (hymnal serif, 17px / 1.55, weight 700): emphasis within body.
- **Label** (typewriter mono, 12px / 0.08em letter-spacing, all caps): eyebrows, micro-copy.
- **Numerals** (typewriter mono, 14px / 500): ABV figures, dates, addresses, phone numbers.

### Named Rules

**The All-Caps Display Rule.** Every display headline is all-caps. The hand-lettered display face is **never** set in title case or sentence case — it loses the revival-tent register immediately. If a phrase doesn't read at all-caps, it does not belong as display copy.

**The Numerals-as-Proof Rule.** Numbers are set in the typewriter mono for the same reason Wendell uses numbers in his voice: literalism is the brand's truth-claim. "FORTY MILES" set in hymnal serif reads as decorative. "40 mi." set in typewriter mono reads as measured. The font carries the meaning.

**The Hymnal-Serif-Only-For-Reading Rule.** Hymnal serif is the body face. It **never** appears at display sizes (the larger sizes are reserved for the hand-lettered display). Setting a 72px hymnal serif headline reads as gift-shop hymnbook, which is the costume version of the brand.

## 4. Elevation

**The system is flat by conviction.** Cards have 1px borders in border-neutral (`#c8b89a` on cream surfaces) and no shadows. CTAs are flat color fills. Sections alternate by surface color, not by depth.

The only place "depth" reads is in the **hand-painted label artwork** itself — bottle labels are rendered as painted artifacts with slight registration drift, irregular ink density, and the look of physical paint on glass. The painterly imperfection is the system's only depth language.

No drop shadows. No glassmorphism. No gradient fills. Pages read as printed posters, not as glossy screens.

## 5. Components

### button-primary
Barn-rust `#7e1d12` fill, bulletin-cream `#e8d8b8` text, 2px radius, 14×28px padding. 1px barn-rust border (visible only on cream surface, identical to fill in revival-tent mode). Hover: darkens to a deeper rust (~`#5e1408`). All-caps typewriter-mono label, letter-spaced.

### button-secondary
Transparent fill, hymnal-black text on cream / bulletin-cream text on hymnal-black, 2px radius, 14×28px padding, 1px border matching text color. The ghost variant. All-caps typewriter-mono label.

### banner-bulletin
Cream `#e8d8b8` ground, hymnal-black or barn-rust display copy, 96px top-and-bottom padding. The Sunday-bulletin mode. Used for: maker manifesto, process steps, footer.

### banner-revival
Hymnal-black `#1a1410` ground, bulletin-cream display copy, 96px top-and-bottom padding. The revival-tent mode. Used for: hero, the still process landing, "find a pew" CTA section, paper-catalog download.

### card-bottle
Cream `#e8d8b8` background, hymnal-black text, 2px radius, 28px padding, 1px border-neutral outline. A hand-painted bottle image at top, product name (display, all caps, barn-rust) below, ABV and lead-botanicals in typewriter mono, short Wendell-voice description in hymnal serif. The card never carries a shadow. Used in: the bottles page, home featured-products section.

### chip-accent
Hellfire-neon `#f04a26` fill, hymnal-black text, pill-radius, 4×12px padding. The "shipping" chip and similar one-glance accents. **Restraint rule applies.**

### nav-primary
Bulletin-cream background, hymnal-black text. Hand-painted "H & H" monogram on the left (links home), six text links in typewriter mono all-caps (Home / The Holler / The Still / The Bottles / Hymns / Pews / Visit), a single barn-rust "Visit" CTA on the right. No active-state underline — instead, the active link is set in barn-rust.

### footer
Hymnal-black ground, bulletin-cream text. Hand-painted "H & H" monogram top-left. Three columns: Wendell's direct contact (email, phone, IG handle, mailing address), site links, legal (age verification confirmation, privacy, shipping). Typewriter mono throughout — every line on the footer is a literal piece of information.

### CTA-band ("find a pew" / "book a Saturday tasting")
Revival-tent mode (hymnal-black ground), single line of display copy, single barn-rust primary CTA below. Used as the section-break between the bottles and the visit / catalog blocks.

### hand-painted ornament
SVG marks of crossed sourwood blossoms, a small revival tent silhouette, a sketched copper still, a hand-painted ampersand. Placed at section breaks, no two ever the same. The ornaments do the work that a shadow or a divider rule would do in a flatter system.

## 6. Do's and Don'ts

**Do** preserve the two-register alternation. Sections must commit to either bulletin or revival mode, not blend them. The alternation is the rhythm.

**Do** keep hand-painted assets rough — irregular registration, slight paint imperfections, ink density variation. Cleaning them up flattens the brand.

**Do** restrain hellfire-neon to one glance per viewport. Multiple instances dilute it to decoration.

**Do** set numerals in typewriter mono. Literalism is the brand's truth-claim.

**Don't** introduce a gradient, a drop shadow, or any glass / glassmorphism effect. The flatness is intentional and load-bearing.

**Don't** set hand-lettered display in title case. Display is always all-caps.

**Don't** use rhododendron green outside botanical-context content. It is quarantined to the still / foraging / botanical sections.

**Don't** default to pure `#000000`. Hymnal black `#1a1410` is the darkest color in the system.

**Don't** invent a "sage" or "beige" surface. The Kinfolk-luxe-minimal palette is the anti-pattern; introducing those tones collapses the brand into the default.

**Don't** add a fourth typographic tier. Three tiers (display / serif body / typewriter numerals) are load-bearing; a fourth diffuses the system.

## 7. Provenance notes (for the would-be `/stardust:seed` command)

The above design system is hand-authored from `site/brand/BRAND.md` as the proof-of-concept output of a command that does not yet exist. The mapping the command would implement:

- `BRAND.md` Palette block → `colors:` frontmatter (1:1 token mapping)
- `BRAND.md` Typography block (3-tier hand-lettered + hymnal + typewriter) → `typography:` frontmatter (each tier becomes a role)
- `BRAND.md` central-tension section (holler × hymn) → "Two-Register Alternation Rule" + the `banner-bulletin` / `banner-revival` component pair
- `BRAND.md` anti-patterns section → "Do's and Don'ts" + the rhody-green Quarantine Rule + the No-Pure-Black Rule
- `BRAND.md` imagery direction (three lanes) → component-level imagery rules (hand-painted bottle photography, hand-painted ornaments, no stock photography)

Anything in BRAND.md is the source of truth. If this DESIGN.md drifts from BRAND.md, BRAND.md wins.
