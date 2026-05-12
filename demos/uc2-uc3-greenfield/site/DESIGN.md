<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-05-11T00:00:00Z
  readArtifacts:
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/*.json
  synthesizedInputs:
    - resolved direction (Mode A — brand-faithful, single variant)
    - user freeform intent: "rooted, irreverent, hand-made. Saturday night and Sunday morning at the same time."
  stardustVersion: 0.3.0
  scope: target — what the redesigned visual system should be (single variant, Mode A pinning)
-->
---
name: Holler & Hymn
description: Single-maker Appalachian botanical-liqueur house — target visual system (Mode A inherits the captured brand surface; resolved direction crystallizes it)
colors:
  hymnal-black:     "#1a1410"
  barn-rust:        "#7e1d12"
  gilt-gold:        "#d4a45c"
  rhody-green:      "#3e5a3e"
  bulletin-cream:   "#e8d8b8"
  hellfire-neon:    "#f04a26"
  tape-mustard:     "#d8a740"   # derived secondary — usage-restricted (see § Named Rules)
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
  sectionPadding:
    desktop: "64px"
    tablet:  "48px"
    mobile:  "32px"
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
  card:
    backgroundColor: "{colors.bulletin-cream}"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.sm}"
    padding:         "28px"
    border:          "1px solid {colors.border-neutral}"
  input:
    backgroundColor: "{colors.bulletin-cream}"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.sm}"
    padding:         "12px 16px"
    border:          "1px solid {colors.border-neutral}"
  badge:
    backgroundColor: "{colors.hellfire-neon}"
    textColor:       "{colors.hymnal-black}"
    rounded:         "{rounded.pill}"
    padding:         "4px 12px"
  link:
    textColor:       "{colors.barn-rust}"
    textDecoration:  "underline"
    textUnderlineOffset: "0.2em"
---

# Design System: Holler & Hymn

## 1. Overview

**Creative North Star: "Revival-tent poster meets apothecary cabinet drawer — Saturday night sin and Sunday morning hymn at full volume on top of each other."**

The system has **two alternating registers** that share six tokens and two surfaces. Bulletin mode (cream surface, hymnal-black body, barn-rust display) is the Sunday-morning side. Revival mode (hymnal-black surface, bulletin-cream body and display) is the Saturday-night side. Every section commits to one mode or the other; the page is a scroll of alternating posters and bulletin pages. **The alternation is the rhythm and the rhythm is the brand.**

The resolved direction crystallizes the captured brand surface (Mode A — brand-faithful). Palette is pinned at six tokens; the three-tier type hybrid (hand-lettered revival-tent display + hymnal serif body + IBM-Selectric typewriter numerals) is pinned to the captured stack. The seed rolled the non-locked dimensions (decade, craft, register-flavor) and they aligned with the brand's cultural references — 1940s revival-tent posters × early-70s outlaw-country album sleeves; hand-painted plywood signage as the dominant motif; Memoir-adjacent / Tabloid-adjacent register flavor alternating per section.

What the system explicitly is **not**: luxe-minimal artisanal-Southern (no Kinfolk beige / sage / charcoal / serif italic), Brooklyn industrial-craft (no Edison bulb / subway tile / Helvetica-on-blackboard), Wes Anderson costume-pastel, Etsy folk-craft, generic country / farm signage, or modern craft-beer label vernacular. All six are listed in § 6 as render-refusal anti-patterns.

**Density:** **balanced** tier — section padding 64px desktop / 48px tablet / 32px mobile. Home has 7 sections + hero, triggering the multi-audience hard floor; the floor is honored (≤ 64px, ≥ 40px). Editorial-airy is opt-in only and not selected.

**Key characteristics:**
- Six brand tokens; three (hymnal-black, bulletin-cream, barn-rust) doing most of the work
- Two-register alternating sections — same tokens, inverted surfaces
- Three-tier type hierarchy — hand-lettered display + hymnal serif body + typewriter mono numerals
- All-caps display headlines; title case forbidden for display
- Hand-painted bottle labels as the dominant imagery motif (one per product, by Wendell)
- Rotation, irregularity, and hand-imperfection preserved in label art and ornaments
- Flat — no shadows, no gradients, no glassmorphism, no glass / depth language; painterly imperfection is the only depth

## 2. Colors

### Primary
- **Hymnal Black `#1a1410`** (`--hymnal-black`) — page surface in revival mode; primary body text on cream. Old-leather-Bible brown-black. **Never pure `#000000`** — that's digital, not the brand register.
- **Bulletin Cream `#e8d8b8`** (`--bulletin-cream`) — page surface in bulletin mode; primary text on hymnal-black. Sun-bleached Sunday-bulletin paper.
- **Barn Rust `#7e1d12`** (`--barn-rust`) — the load-bearing display color. Headlines, hand-lettered marks, primary CTA fills. Oxidized iron / old red-barn paint.

### Secondary
- **Gilt Gold `#d4a45c`** (`--gilt-gold`) — hymnal-edge moments only. Decorative rules, gilded initial capitals, hymnbook frame borders. Rare; never primary.
- **Rhody Green `#3e5a3e`** (`--rhody-green`) — botanical-context surfaces only (the-still process page, foraging map, deep botanical descriptions). Quarantined.

### Accent (irreverence)
- **Hellfire Neon `#f04a26`** (`--hellfire-neon`) — one-glance accents only. A chip, a single ornament glyph, the dot over a hand-painted "&". **Never as body text.** **Never as a dominant element on hymnal-black surface.** Reading it should feel like a single neon bulb above a Sunday school. **At most one instance per visible viewport.**

### Derived secondary (usage-restricted)
- **Tape Mustard `#d8a740`** (`--tape-mustard`) — **marquee tape, sticker, hand-painted ribbon contexts only.** Never body, never CTA, never text fill, never a section ground. Gilt-gold-adjacent but visually distinct (sharper, less brown) for the caution-tape character the brand carries from the reference's marquee-tape grammar. The translation move from the reference brand's distinct mustard-yellow tape — Holler & Hymn's tape ribbons (marquee runners across the hero and bottles sections, the `P.1 · CONT'D ↓` section break, the kraft-strip detail on the TENT REVIVAL catalog entry) use this token, not gilt-gold.

### Neutral
- **Border Neutral `#c8b89a`** — card outlines, divider rules on cream surfaces. Muted hymnal-page-margin tone.
- **Text Mute `#5a4a3e`** — secondary copy, footer link text on cream. Never on dark surface.

### Named Rules

**The Two-Register Alternation Rule.** Every section commits to either bulletin mode (cream surface, hymnal-black or barn-rust text) OR revival mode (hymnal-black surface, bulletin-cream or gilt text). Blending the two — e.g. cream text on a barn-rust ground, or a half-tone gradient between modes — is forbidden. The alternation is the rhythm. A page scroll is a sequence: cream → black → cream → black, predictable as a hymnal reading.

**The Hellfire-Neon Restraint Rule.** Hellfire neon appears at most **once per visible viewport**. If it would appear twice, demote one to barn-rust. The accent's job is to read like a single neon sign in a dim room — multiple instances dilute it to decoration.

**The No-Pure-Black Rule.** `#000000` is forbidden. Hymnal-black `#1a1410` is the darkest color in the system. Body text on cream is hymnal-black, not black.

**The Botanical-Quarantine Rule.** Rhody green `#3e5a3e` appears only in botanical-context content (the-still page, foraging map, deep-product descriptions discussing herbs and plants). Never as a CTA background, never on the home page, never as a navigation surface. Quarantining keeps "nature" from creeping into the whole brand.

**The Tape-Mustard Restriction Rule.** Tape mustard `#d8a740` is the brand's marquee-tape / sticker / hand-painted-ribbon color. It appears **only** on contexts that render as physical-object tape or sticker artifacts — the hero marquee ribbon, the bottles-section marquee, the `P.1 · CONT'D ↓` section-break tape, the kraft-strip detail across catalog entries. **Never used for:** body text, CTAs, section grounds, primary type accents, navigation surfaces, footer chrome. Confusion with gilt-gold (`#d4a45c`) is the load-bearing failure mode — they read similarly at small sizes, but tape-mustard's slightly higher chroma and sharper warmth gives it the bar-floor caution-tape character that gilt-gold's hymnal-edge gilded character would dilute.

## 3. Typography

**Display Font:** hand-lettered revival-tent — heavy, condensed, all-caps sans-serif modeled on 1940s revival-tent posters and Appalachian state-fair signage. Stack: `'Saloon', 'Camp Type', 'Knockout', sans-serif`. Selected face confirmed during prototyping; stack names visual character.

**Body Font:** hymnal serif — transitional serif with the proportions and stroke contrast of an old hardcover hymnbook page. Stack: `'Sentinel', 'Bookman', 'Cycles', serif`. Oversized leading (1.55) for the unhurried-Sunday-reading register.

**Mono / Numerals Font:** IBM-Selectric-style typewriter monospace. Stack: `'IBM Plex Mono', 'Courier New', monospace`. **Reserved for** numerals, dates, ABV figures, addresses, micro-labels — anything that should read as *labelled on the bottle by hand*.

**Character:** rough-hewn display + reverent body + literal numerals. Display does the loudness; body does the reading; numerals do the truth-claim. No font is used outside its assigned tier.

### Hierarchy
- **Display** (72px / 1.05, all caps) — hero headlines (`HOLLER & HYMN`, `PASS THE PLATE`)
- **Headline** (48px / 1.1, all caps) — section openers (`THE STILL`, `THE BOTTLES`, `PEWS`)
- **Title** (hymnal serif 32px / 1.2, weight 600) — card titles, sub-sub-section leads
- **Subtitle** (hymnal serif 22px / 1.3) — captions under hero artwork, story intros
- **Body** (hymnal serif 17px / 1.55) — reading text — Wendell's manifesto, process steps
- **Body Strong** (hymnal serif 17px / 1.55, weight 700) — emphasis within body
- **Label** (mono 12px / 0.08em letter-spacing, uppercase) — eyebrows, micro-copy
- **Numerals** (mono 14px / 500) — ABV, dates, phone, addresses, batch codes

### Named Rules

**The All-Caps Display Rule.** Every display headline is all-caps. Hand-lettered display set in title case loses the revival-tent register. If a phrase doesn't read at all-caps, it does not belong as display.

**The Numerals-as-Proof Rule.** Numbers are set in mono. *"FORTY MILES"* in hymnal serif reads as decorative; *"40 mi."* in mono reads as measured. The font carries the meaning.

**The Hymnal-Serif-Only-For-Reading Rule.** Hymnal serif is the body face. It never appears at display sizes — the large sizes are reserved for the hand-lettered display. A 72px hymnal serif headline reads as gift-shop hymnbook, which is the costume version of the brand.

## 4. Elevation

The system is **flat by conviction.** Cards have 1px `--border-neutral` outlines and no shadows. CTAs are flat color fills. Sections alternate by surface color, not by depth. No drop shadows. No glassmorphism. No gradients. No glass / depth language anywhere.

The only place "depth" reads is in the **hand-painted bottle artwork** itself — labels are rendered as painted artifacts with slight registration drift, irregular ink density, and the look of physical paint on glass. Painterly imperfection is the system's only depth language.

## 5. Components (site-level, abstract)

Per-page deployments (literal copy, section dimensions, dock points) live in `stardust/prototypes/<slug>-shape.md`. The catalog below is **default treatment** only.

### button-primary
Barn-rust `#7e1d12` fill, bulletin-cream `#e8d8b8` text, 2px radius, 14×28px padding. 1px barn-rust border (matches fill on cream; visible on hymnal-black surfaces). Hover: darkens to ~`#5e1408`. Label in typewriter mono, all-caps, 0.08em letter-spacing.

### button-secondary
Transparent fill, hymnal-black text on cream / bulletin-cream text on hymnal-black, 2px radius, 14×28px padding, 1px border matching text color. The ghost variant. Label in mono, all-caps.

### card
Cream `#e8d8b8` background on cream surface or revival mode, hymnal-black text, 2px radius, 28px padding, 1px `--border-neutral` outline. No shadow. Used for: hand-painted bottle cards, page-listing tiles, recipe blocks.

### input
Cream background, hymnal-black text, 2px radius, 12×16px padding, 1px `--border-neutral` outline. Focus state: barn-rust border (≥ 2px). The brand has minimal forms (no contact forms exist by design); inputs appear only on age-verification gate and search.

### badge / chip
Hellfire-neon `#f04a26` fill, hymnal-black text, pill radius, 4×12px padding. Used for one-glance accents: *"shipping"* chip, single-edition product flags, *"new"* tags. **Restraint rule applies** — one per viewport.

### link
Barn-rust `#7e1d12` color, underline with 0.2em offset. Hover: switches to hymnal-black on cream, or hellfire-neon on hymnal-black. No animated underline; flat.

### system-component roles (abstract — deployment specifics in shape briefs)

- `site-header` — bulletin-cream ground, hand-painted "H & H" monogram left, typewriter-mono nav (HOME · THE HOLLER · THE STILL · THE BOTTLES · HYMNS · PEWS · VISIT), single barn-rust "Visit" CTA right.
- `site-footer` — hymnal-black ground, three columns (direct contact / site links / legal), typewriter-mono throughout — every line a literal piece of information.
- `age-gate-modal` — full-screen revival-tent mode modal that loads before any page content. Two buttons. Keyboard-navigable. Not a dismissable banner.
- `two-register-section` — the alternating bulletin / revival section pattern; the page's scroll rhythm.
- `find-a-pew-band` — revival-mode CTA band, display headline + barn-rust primary CTA. Page-level deployment lives in shape briefs.
- `hand-painted-card` — the per-product card pattern on the bottles page and home featured-products section.
- `hand-painted-ornament` — SVG marks at section breaks: crossed sourwood blossoms, a small revival-tent silhouette, a sketched copper still, a hand-painted ampersand. No two identical per page.

## 6. Do's and Don'ts

**Do** preserve the **two-register alternation**. Every section commits to bulletin or revival mode, not a blend. The alternation is the rhythm of the brand.

**Do** keep hand-painted assets rough — irregular registration, slight paint imperfections, ink density variation. Cleaning them up flattens the brand.

**Do** restrain hellfire-neon `#f04a26` to one glance per viewport. Multiple instances dilute it to decoration.

**Do** set numerals in typewriter mono. Literalism is the brand's truth-claim — *"40 mi."* reads as measured; *"forty miles"* in hymnal serif reads as decorative.

**Do** preserve `IA priority` — `FIND A PEW` and `BOOK A SATURDAY TASTING` stay in the first viewport on home; never demoted below the fold to make room for a stunning hero. (Mode A constraint per § 8 of intent-dimensions.)

**Do** use the brand-native role names in palette (`hymnal-black`, `barn-rust`, etc.). Never `Primary` / `Secondary` / `Alarm` / `Warning` / `Shadow` / `Brand` as sole role names.

**Don't** introduce a gradient, drop shadow, or any glass / glassmorphism effect. The flatness is intentional and load-bearing.

**Don't** set hand-lettered display in title case. Display is always all-caps. *"Holler & Hymn"* set title-case at display size loses the revival-tent register.

**Don't** use rhody green `#3e5a3e` outside botanical-context content. Quarantined to the-still / foraging / botanical sections.

**Don't** default to pure `#000000`. Hymnal black `#1a1410` is the darkest color in the system.

**Don't** invent a "sage" or "beige" surface. The Kinfolk-luxe-minimal palette is the anti-pattern; introducing those tones collapses the brand into the default.

**Don't** add a fourth typographic tier. Three tiers (display / serif body / typewriter numerals) are load-bearing; a fourth diffuses the system.

**Don't** render the centered SaaS-hero silhouette (oversized centered sans + dual-CTA pair + sticky top nav + serial-marker footer). Forbidden by the universal anti-toolbox. The brand is hand-painted plywood, not Linear chrome.

**Don't** use editorial-register vocabulary (*atelier*, *the studio*, *mise-en-place*, *the journal*, *dispatches*, *the bulletin*) for the brand's own surfaces. **One exception** — the page named *Hymns* uses gospel/hymnal vocabulary by design; that is brand-native, not appropriated editorial.

**Don't** fabricate content. No invented awards, dollar amounts, percentages, named customer logos, or dates beyond what `BRAND.md` / `CONTENT.md` / explicit user input specifies. Where a real asset is pending, declare the gap explicitly (`data-placeholder="true"` + visible signature treatment).

**Don't** place hero text on a photographic background without ≥ 4.5:1 contrast. Use a scrim, a directional gradient, or move the headline off the photo.

**Don't** add purple or magenta anywhere. Outside the palette.

## 7. Brand-faithful inversions (Mode A)

Mode A pins palette and type; the seed rolled non-locked dimensions; the rolled seeds aligned with the brand's cultural references (or yielded to brand-native overrides). The retentions worth recording:

- **Hymnal-black `#1a1410` retained over pure `#000000`.** Reason: the brand's darkest color is intentionally not digital-black; old-leather-Bible brown-black is the brand's character.
- **Barn-rust `#7e1d12` retained as primary display.** Reason: the seed's decade roll (early-70s outlaw country) could have suggested a brighter rust or saturated red; the brand's captured token is preserved.
- **Ground-family override (Mode C).** The seed's `ground_family` roll yielded to the brand's two-register alternation (bulletin-cream / hymnal-black). Reason: `brand-faithful` — the two-mode pattern is brand-native and load-bearing.
- **Hand-lettered display retained over standard sans.** Reason: `brand-faithful`; the captured face character (revival-tent / state-fair signage) is the brand's distinctive mark.
- **Hymnal serif body retained over a more neutral text serif.** Reason: `brand-faithful`; the old-hymnbook-page register is part of the holler-and-hymn duality.
- **IBM-Selectric mono retained as numerals tier.** Reason: `brand-faithful`; the typewriter-mono = literalism rule is part of the voice.

The brand-faithful inversions block is recorded in full at `DESIGN.json.extensions.divergence.brand_faithful_inversions[]`.
