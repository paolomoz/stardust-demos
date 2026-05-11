<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-05-11T00:00:00Z
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/_brand-extraction.json
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
  synthesizedInputs:
    - resolved direction (Mode A — brand-faithful, single variant)
    - user freeform intent: "rooted, irreverent, hand-made. Saturday night and Sunday morning at the same time."
  stardustVersion: 0.3.0
  scope: target — what the redesigned Holler & Hymn should be
-->
---

# Product

## Register

brand

## Users

Three concentric audiences, in their captured priority order:

- **Asheville-area drinkers, bartenders, and stockists (primary).** Locals who can show up at the barn for a Saturday tasting and reorder by texting Wendell directly. They are the brand's first audience; the site exists to make their casual reference easy, and to give visiting friends a place to read after.
- **Craft-spirits-curious WNC visitors (secondary).** Tourists in the mountains looking for makers worth visiting, plus Hudson Valley / Brooklyn / Portland transplants who already buy Faccia Brutto / Forthave / St. Agrestis and want a Southern equivalent. They convert via the visit page or by remembering the brand name when they get home.
- **Trade buyers outside the region (tertiary).** Bars and restaurants who want to carry a regional amaro with a story. They reach Wendell via the "for trade" line at the foot of the pews page and via the catalog PDF.

The redesign holds these audiences in their captured priority order. The home is multi-audience but commits visibly to the **brand-storytelling** path as the primary surface — the transactional shop is offloaded to a separate `.shop` subdomain by design.

## Product Purpose

A single-maker Appalachian botanical-liqueur house: amari, bitters, cordials, and low-ABV aperitivi made by Wendell Greene from herbs and fruit foraged inside forty miles of his barn in Wolfpen Holler, Madison County, North Carolina. Hand-distilled in a copper still he built in 2019. Hand-labeled in a shed he bought off a dead preacher. No synthetic aromas, no industrial shortcuts, nothing bought in a jug.

The site is the **brand** destination, not the **shop**. It exists to (a) introduce the maker and the place, (b) prove the literalism of the hand-made process, (c) route locals to the bars that pour the spirits and tourists to a Saturday tasting at the barn, and (d) let trade buyers reach Wendell directly. Transactions live on the `.shop` subdomain.

The redesign moves the brand from **not-yet-deployed** to **a single-maker brand surface that crystallizes the HOLLER × HYMN duality** — Saturday-night outlaw and Sunday-morning revival at full volume on top of each other. The ampersand is the brand; the visual system is two registers alternating; the voice is Wendell's, first-person, plainspoken.

## Brand Personality

**Locked at full volume (the central tension):**
- The HOLLER half — outlaw, place-rooted, foraged, hand-made. Barn, copper still, mason-jar shelf, faded denim. Saturday-night side.
- The HYMN half — heritage, ritual, restraint. Old leather hymnal, Sunday-morning sermon, revival-tent typography. Sunday-morning side.

The ampersand is the brand. Pure-outlaw collapses to costume; pure-heritage collapses to Etsy. Both halves at full volume, with conviction, rooted in WNC.

**Voice carried through the site:**
- **First-person singular.** Wendell is the narrator everywhere except legal/utility footer. Never "we / our team."
- **Plainspoken declaratives.** Periods. Short sentences. Numbers and proper nouns over adjectives.
- **Specifics over modifiers.** *"Forty miles."* / *"In 2019."* / *"Twenty-seven herbs."* / *"The preacher's shed."* The numbers prove the literalism.
- **Sacred/profane wordplay is the irreverence engine — sparingly applied.** Revival / gospel / sin / salvation vocabulary lands on product names (PASS THE PLATE, TENT REVIVAL, THE BACKSLIDER, DRINK YE ALL OF IT, DEACON'S DRAUGHT, THE NO-SHOW) and label art; Wendell himself talks like he's tired and right. Never every section, never every line.

**Tonal axis declared in DESIGN.md:** drenched + cheeky-irreverent + place-singular. Energy carried by hand-lettered display + saturated palette + hand-painted ornament — never by punctuation density or marketing-warm exclamation. The reader leaves with one line: *"Saturday night sin. Sunday morning hymn. Both in one bottle."*

## Anti-references

Hard avoids — these are render-refusal conditions, not preferences. Each is propagated to `DESIGN.md` Do's-and-Don'ts and to the prototype shape brief audit.

**From `BRAND.md` Anti-patterns (the brand's own refusals):**

- **Kinfolk / Cereal-Magazine luxe-minimal-craft.** Beige, sage, charcoal, generous white space, serif italic. The dominant default for "artisanal" — explicitly refused. This is the most likely failure mode for an AI-default render of "small-batch spirits"; the brand's anti-pattern catches it.
- **Brooklyn industrial-craft.** Heath Ceramics / Apothéke vernacular — Edison bulb, subway tile, Helvetica-on-blackboard. Wrong era, wrong region.
- **Wes Anderson costume-craft.** Symmetrical pastel framing, Futura, postcard-Italian-summer staging.
- **Etsy folk-craft.** Hand-drawn fern in dusty rose. Cute. The brand is not cute.
- **Generic country / farm signage.** *"Y'all means all"* doormat energy. Not signage.
- **Modern craft-beer label vernacular.** Illustration-heavy can wraps, all-caps fashion-foundry display. Adjacent market, wrong genre.

**Universal hardening (from the divergence toolkit anti-toolbox):**

- **Generic-2026-SaaS silhouette.** Oversized centered sans-serif hero, two-button CTA pair, sticky top nav, serial-marker footer. The default Linear/Notion/Stripe render. Forbidden — the brand is hand-painted plywood, not SaaS chrome.
- **Editorial-register vocabulary on a non-editorial brand.** *Atelier*, *the studio*, *mise-en-place*, *the journal*, *dispatches*, *the bulletin*. Forbidden — the brand is a maker-as-brand, not a content publisher. (One exception: the page named *Hymns* uses gospel/hymnal vocabulary by design; it is the brand's own naming, not appropriated editorial register.)
- **Fabricated content.** Invented stats, dollar amounts, percentages, named customers, awards, dates the user did not specify. If real data isn't sourced from `BRAND.md` / `CONTENT.md` / explicit user input, the prototype declares the gap with `data-placeholder="true"` and a visible signature treatment.
- **Hero text on photographic background without contrast scrim.** ≥ 4.5:1 contrast enforced on every hero composition; either a darkening scrim, a directional gradient, or the headline moves off the photo entirely.
- **Generic role names in the palette.** `Primary`, `Secondary`, `Alarm`, `Warning`, `Shadow`, `Brand` are forbidden as sole role names. Holler & Hymn's six tokens use brand-native names: `hymnal-black`, `barn-rust`, `gilt-gold`, `rhody-green`, `bulletin-cream`, `hellfire-neon`. The names carry meaning the way the voice does.
- **Pure `#000000`.** Forbidden. The darkest color in the system is hymnal-black `#1a1410` (old-leather-Bible brown-black, never digital black).
- **Purple / magenta.** Outside the palette. Render-refused.

## Design Principles

Five principles, each mapping to a specific axis movement resolved in `direction.md`.

1. **The ampersand is the design.** *(distinctiveness: familiar → singular)* Every section commits to either bulletin mode (cream surface, hymnal-black text) or revival mode (hymnal-black surface, bulletin-cream text). The page is a scroll of alternating posters and bulletin pages. Sections never blend the two — the alternation is the rhythm, and the rhythm is the brand. A section that drifts toward neither mode is a section that has lost the brand.

2. **Hand-imperfect over digital-perfect.** *(expressive: restrained → drenched)* Hand-lettered display type (rough strokes, slight registration drift), hand-painted bottle labels (one per product, by Wendell), hand-painted section ornaments (no two identical). Roughness is intentional — cleaning up the imperfections is the same failure as removing the rust from a barn door. No drop shadows. No gradients. No glassmorphism. Flat-with-paint-texture is the system's only depth language.

3. **Numbers prove literalism.** *(voice / specificity, not an axis)* Set every measurable in IBM-Selectric typewriter mono: ABV figures, dates, addresses, batch numbers, foraging coordinates. *"40 mi."* in mono reads as measured; *"forty miles"* in hymnal serif reads as decorative. The font carries the truth-claim. This propagates to `DESIGN.md` Numerals tier.

4. **Sacred-and-profane wordplay lands sparingly.** *(tone: serious → playful with cheeky-irreverence)* The revival / gospel / sin / salvation vocabulary is the brand's irreverence engine, but each instance must register. Use on product names and label art (where the cheek belongs); restrain in Wendell's narration (he talks like he's tired and right, not a comedian). Never every section, never every line.

5. **Maker-to-buyer, no PR layer.** *(IA / audience-priority preservation)* Wendell's email, phone, and Instagram are visible on every page footer. "Book a visit" is "text Wendell." Trade buyers reach the maker directly. Contact forms with required fields are forbidden — they signal a PR mediation that the brand does not have.

## Accessibility & Inclusion

- **WCAG 2.1 AA contrast minimum** on all text. Barn-rust `#7e1d12` on bulletin-cream `#e8d8b8` resolves to ~7.84:1 (passes AAA). Bulletin-cream on hymnal-black `#1a1410` resolves to ~11.6:1 (passes AAA). Hellfire-neon `#f04a26` is restricted to one-glance accents (chips, single ornaments) and never used as body text — its contrast against hymnal-black is sub-AA at body sizes.
- **Semantic heading hierarchy** — every page leads with a single `h1`; landmark roles (`<header>`, `<nav>`, `<main>`, `<footer>`) present and unique; no reused `h6` for nav-style labels.
- **Hand-painted assets carry full descriptive `alt`** describing the painted artifact (e.g. *"PASS THE PLATE hand-painted bottle label, rust-red on bulletin-cream, offering-bowl illustration centered"*) — never an empty `alt` on a content-bearing image, never a generic "logo" / "image" descriptor.
- **Age-verification gate** is a focusable modal (not a dismissable banner), with keyboard navigation, sentence-clear labels, two buttons (*"Yes, I am 21 or older"* / *"No, I am not"*), and an irreversible exit path on the no.
- **`prefers-reduced-motion: reduce` honored** — any scroll-driven reveals, hover micro-interactions, or animation jump to the resolved state. The brand's drenched expression survives the static rendering.
- **Keyboard navigability** — focus rings visible at ≥ 2px outline in barn-rust on cream, bulletin-cream on hymnal-black (both pass AA contrast against their surfaces); tab order matches visual order; no positive `tabindex`.
- **No forms requiring contact-info entry.** The "book a visit" path is `tel:` / `sms:` / `mailto:` only — no email-gated downloads, no required-field contact forms. This is both a brand decision (maker-to-buyer, no PR layer) and an accessibility/privacy decision.
- **IA-priority preservation (Mode A constraint).** Audience-routing CTAs (`FIND A PEW`, `BOOK A SATURDAY TASTING`) remain in the first viewport on home in their captured priority order. Variants may redesign their visual treatment but cannot demote them below the fold.
