<!-- stardust:provenance
  writtenBy: stardust:seed + stardust:brief (hand-authored, proof-of-concept)
  writtenAt: 2026-05-11T00:00:00Z
  readArtifacts:
    - demos/uc2-uc3-greenfield/site/brand/BRAND.md
    - demos/uc2-uc3-greenfield/site/briefing/SITE-BRIEF.md
    - demos/uc2-uc3-greenfield/site/briefing/CONTENT.md
  synthesizedInputs:
    - demos/uc2-uc3-greenfield/site/brand/BRAND.md
    - demos/uc2-uc3-greenfield/site/briefing/SITE-BRIEF.md
    - demos/uc2-uc3-greenfield/site/briefing/CONTENT.md
  stardustVersion: 0.3.0
  scope: descriptive — captures the brand state as it currently is. No source site exists; this is the greenfield-seeded equivalent of an extract artifact, hand-authored as the proof-of-concept output of /stardust:seed (brand half) + /stardust:brief (briefing half).
-->
---

# Product

## Register

brand

## Users

Three concentric audiences. (1) **Asheville-area drinkers, bartenders, and stockists** — locals who can show up at the barn for a Saturday tasting and reorder by texting Wendell directly. (2) **Craft-spirits-curious visitors** — tourists in the Western North Carolina mountains looking for makers worth visiting, plus Hudson Valley / Brooklyn / Portland transplants who already buy Faccia Brutto, Forthave, or St. Agrestis and want a Southern equivalent. (3) **Bars and restaurants outside the region** looking to carry a regional amaro with a real story. Visitors arrive from word-of-mouth, regional bar mentions, Instagram, and stockist listings. The site is the *brand* destination, not the *shop* — transaction is offloaded to a separate Shopify subdomain.

## Product Purpose

A single-maker botanical-liqueur house in Wolfpen Holler, Madison County, North Carolina — roughly forty minutes outside Asheville. Wendell Greene makes amari, bitters, cordials, and low-ABV aperitivi from herbs and fruit foraged or grown within forty miles of his barn. Hand-distilled in a copper still he built in 2019. Hand-labeled in a shed he bought off a dead preacher. No synthetic aromas, no industrial shortcuts, nothing bought in a jug. The web site exists to tell that story, route locals to bars that pour the spirits, route visitors to a Saturday tasting at the barn, and let trade buyers reach Wendell directly. The transactional shop lives at a separate `.shop` subdomain.

## Brand Personality

The brand sits on a single load-bearing tension: **the most artisanal product possible, in a wrapper that refuses Kinfolk-luxe-minimalism**. Two halves at full volume:

- **The HOLLER** — outlaw, place-rooted, foraged, hand-made. Barn, copper still, mason-jar shelf, pickup truck, faded denim. Saturday-night side.
- **The HYMN** — heritage, ritual, language, restraint. Old leather hymnal, Sunday-morning sermon, revival-tent typography. Sunday-morning side.

The ampersand in the name is the brand. Strip either half and the brand collapses — pure outlaw/honky-tonk becomes costume, pure heritage/hymnal becomes Etsy. Both halves at full volume, both rooted in WNC, both rendered with conviction.

Voice is **first-person singular** (Wendell, never "we"). Plainspoken declaratives. Short sentences. Numbers and proper nouns over adjectives. Specifics ("forty miles," "in 2019," "twenty-seven herbs," "the preacher's shed") over modifiers. Sustained but sparing wordplay on revival/gospel/sin/salvation vocabulary applied to drinking products — the US-South load-bearing equivalent of the Catholic-mass irreverence common in some European artisanal-liqueur traditions. The maker plays affectionately with the language of faith because that language is in the bones of the place; never mocks it.

`_provenance: synthesized` — basis: BRAND.md voice & copy rules, BRAND.md central-tension section, sacred-profane vocabulary table.

## Anti-references

The brand is **defined by what it refuses** as much as by what it embraces. Anti-references (do **not** drift toward these registers, even though they are the dominant defaults for "artisanal Southern"):

- **Kinfolk / Cereal-Magazine luxe-minimal-craft.** Beige, sage, charcoal, generous white space, serif italic. The well-trodden default for "artisanal." Explicitly refused.
- **Brooklyn industrial-craft.** Heath Ceramics / Apothéke vernacular — Edison bulb, subway tile, Helvetica-on-blackboard. Wrong era, wrong region.
- **Wes Anderson costume-craft.** Symmetrical pastel framing, Futura, postcard-Italian-summer staging. (A common slip when the reference brand is from a different cultural register.)
- **Etsy folk-craft.** Hand-drawn fern in dusty rose. Cute. The brand is not cute.
- **Generic country / farm signage.** "Y'all means all" doormat energy. Not signage.
- **Modern craft-beer label vernacular.** Illustration-heavy can wraps, all-caps fashion-foundry display. Adjacent market, wrong genre.

The closest *cultural reference points* (without imitating execution): old WNC fruit-crate labels, 1940s revival-tent posters, vintage Appalachian state-fair signage, the typography of *The Foxfire Book*, country-music album sleeves from the early-70s outlaw era, hand-painted plywood roadside signs you still see on US-25 north of Asheville.

`_provenance: synthesized` — basis: BRAND.md anti-patterns section.

## Design Principles

The site's design language embodies the following principles (the principles the brand has chosen to live by, not principles inferred from a captured surface):

1. **Maker first, products second.** Every page assumes the reader cares who made it before what's in it. Wendell's first-person voice anchors load-bearing pages (home, the holler, the still); product pages get straight to bottle names without preamble.
2. **The ampersand is the design.** The visual system has two registers — Sunday-bulletin (cream surface, rust display) and revival-tent (hymnal-black surface, bulletin cream display) — and the page alternates. The two registers do for the visual system what the holler/hymn pairing does for the voice.
3. **Specifics beat adjectives.** Numerical and proper-noun copy ("forty miles," "twenty-seven herbs," "2019," "the preacher's shed") replace decorative descriptors throughout. Numbers prove literalism.
4. **Single-page scroll narrative as primary form.** The home page is a long scroll that contains everything in compressed form; deep pages expand sections. Mirrors the maker-as-brand grammar — like reading a single-voice manifesto.
5. **Direct contact, no PR layer.** Wendell's email and phone are in plain view on every page footer; the "visit" CTA is "text him." No contact forms.
6. **Paper artifact CTA.** A downloadable PDF catalog is a primary call-to-action, equal in weight to "find a stockist." The brand still wants you to download a thing.
7. **Hand-imperfect over mechanically-perfect.** Hand-painted label art (one per bottle, by Wendell), slight imperfections kept. The design system never reaches for "polish" as a value — roughness is part of the brand.
8. **Transaction is offloaded.** Buying is on a separate Shopify subdomain. The main site is for *brand*, not commerce. Removes pricing-page distractions from the storytelling.

## Accessibility & Inclusion

Hand-authored. The captured target embodies the following accessibility intent (descriptive of the intended baseline, not a formal audit):

- **Heading hierarchy is clean** — every page leads with `h1`; no `h6` reuse for nav-style headings; semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) used correctly.
- **Body text contrast.** Hymnal-black `#1a1410` on Sunday-bulletin cream `#e8d8b8` passes WCAG AA at body sizes. Revival-tent mode (cream on hymnal-black) inverts the same contrast.
- **Hellfire-neon accent `#f04a26` is never used for body text** — reserved for one-glance accents (chips, single hand-painted glyphs).
- **Age-verification gate** is required (alcoholic product). Implemented as a focusable modal with keyboard navigation, sentence-clear labels, and an irreversible "No, I'm not 21" exit path — not a dismissable banner.
- **Hand-painted assets are rasterized with full `alt` text** describing the painted artifact, not its product implication.
- **Reduced motion respected.** Cinematic scroll-reveals jump to resolved state when `prefers-reduced-motion: reduce` is set.
- **Brand-tone copy never relies on cultural-insider knowledge to be parseable.** The sacred/profane wordplay is decorative — the literal product information is always plain.

`_provenance: synthesized` — basis: BRAND.md palette + voice + accessibility implied by the brand's literal/concrete register.
