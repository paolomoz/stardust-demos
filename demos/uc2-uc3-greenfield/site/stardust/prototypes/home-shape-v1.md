<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-11T00:00:00Z
  page:             home
  pageUrl:          https://hollerandhymn.com/
  againstDirection: stardust/direction.md (Active 2026-05-11T00:00:00Z — Mode A single-variant)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
  stardustVersion:  0.3.0
-->
---
slug: home
url: https://hollerandhymn.com/
register: brand
---

# Page shape: home

## Sections (in render order)

1. **site-header** *(system-component role: `site-header`)* — **bulletin mode**. Full-width cream surface, no shadow, no sticky. Hand-painted `H & H` monogram links home on the left; typewriter-mono nav links (HOME · THE HOLLER · THE STILL · THE BOTTLES · HYMNS · PEWS · VISIT) on the right; single barn-rust `Visit` CTA at far right. Header is **static (not sticky)** — sticky cream over revival sections breaks the two-register rhythm.

2. **hero** *(custom)* — **revival mode**. Centered vertical stack on hymnal-black ground:
   - The hand-painted wordmark image (`/assets/logo.svg` from `current/`, pending replacement with Gemini-generated `assets/images/logo-final.svg`) rendered large, ~640px max width
   - Tagline below (hymnal serif, italic-suppressed, ~28px): *"Saturday night sin. Sunday morning hymn. Both in one bottle."*
   - Two CTAs side-by-side beneath the tagline: primary `FIND A PEW` (rust fill on cream text) → `/pews`, secondary `BOOK A SATURDAY TASTING` (ghost cream outline) → `/visit`
   - Hand-painted ampersand ornament SVG centered above the wordmark as a small visual nod (12-16px size)

3. **the-maker** *(custom)* — **bulletin mode**. Split 5/7 columns at desktop, stacked at narrow. Left col: portrait image of Wendell Greene (4:5 vertical, golden-hour, pearl-snap shirt — **placeholder pending Gemini Lane 1**). Right col: typewriter-mono eyebrow label `OF WOLFPEN HOLLER · MADISON CO. NC`; display headline *"MADE BY HAND. FROM A TO Z."* (rust-red, 48px); pull-quote in hymnal serif: *"I grew up in a hollow outside Asheville where my grandmother kept a still in the smokehouse and a hymnal on the kitchen table. We never thought of them as different things."*; signed `— WENDELL` in typewriter mono; link-out *"Read the full story →"* in barn-rust → `/the-holler`.

4. **the-holler-preview** *(custom)* — **revival mode**. Split 7/5 inverted (image right, text left). Left col: display headline `WOLFPEN HOLLER, MADISON COUNTY` (cream); short paragraph: *"Forty minutes outside Asheville. Rhododendron understory, sourwood blossom in late June. Everything in these bottles is foraged within forty miles of my barn."*; cream-on-hymnal link-out *"See the holler →"* → `/the-holler`. Right col: full-bleed landscape photograph of Wolfpen Holler in late-June mist (**placeholder pending Gemini Lane 1**); 16:9 within the column.

5. **the-still-preview** *(custom)* — **bulletin mode**. Split 5/7 (image left, text right). Left col: close-up photograph of the copper still in dim barn light (**placeholder pending Gemini Lane 1**); 4:5 within the column. Right col: display headline `THE STILL` (rust-red, 48px); paragraph: *"Built in 2019 from a kit a man in Tennessee sold me. He drew the diagram on the back of a feed-store receipt. I still have the receipt."*; link-out *"See the process →"* → `/the-still`.

6. **featured-bottles** *(custom)* — **revival mode**. Three hand-painted bottle cards in a 3-col grid, each in `card-bottle` component pattern (cream surface card on revival ground). Each card: hand-painted bottle label image (4:5 vertical — **placeholders pending Gemini Lane 3**), display product name in rust-red, one-line description in hymnal serif, ABV/lead-botanicals in typewriter mono, *"where to buy →"* link to `/pews`. The three: **PASS THE PLATE** (Sunday-morning aperitif) · **TENT REVIVAL** (mountain herbal amaro) · **THE BACKSLIDER** (sweet cordial). Section eyebrow: `SIX BOTTLES. FOUR CATEGORIES. EVERY LABEL PAINTED BY HAND.`; section CTA below the grid: ghost-outline `ALL SIX BOTTLES` → `/the-bottles`.

7. **find-a-pew** *(system-component role: `find-a-pew-band`)* — **bulletin mode**. Display headline `FIND A PEW` (rust-red, 48px); single-line intro *"If you're in Asheville, try these pews."*; 2-col list of 4 Asheville bars (names from `current/pages/home.json`: Sermon Bar · The Backslider Tavern · Little Jumbo · Bull and Beggar) each with neighborhood marker in typewriter mono; small barn-rust link *"see all pews →"* → `/pews`.

8. **site-footer** *(system-component role: `site-footer`)* — **revival mode**. Hymnal-black ground. Three columns: (1) direct contact — typewriter mono — *wendell@hollerandhymn.com* · *+1 828 555 0143* · *@hollerandhymn*; (2) site links — HOME · THE HOLLER · THE STILL · THE BOTTLES · HYMNS · PEWS · VISIT · CATALOG; (3) legal — age-verified 21+ · privacy · shipping · the shop (link to `.shop` subdomain). Bottom row: small *"Made in Wolfpen Holler"* + copyright.

**Section ornaments:** small hand-painted SVG marks at section breaks (crossed sourwood blossom, revival-tent silhouette, copper still sketch, hand-painted ampersand). No two identical on the page. Drawn from `_brand-extraction.json` imagery direction. Render inline-SVG, ~20-32px height, centered between section bands.

## Layout strategy

- **Density:** balanced — section padding 64px desktop / 48px tablet / 32px mobile (per DESIGN.md). Multi-audience hard floor honored (home has 8 sections; cap ≤ 64px).
- **Max content width:** 1200px container; sections that need to bleed (hero, find-a-pew band) extend ground color full-bleed but content stays in the container.
- **Grid:** 12-col CSS grid with 24px gutter at desktop. Splits collapse to single-column at <768px.
- **Two-register alternation:** strict — every section commits to one mode. Order: bulletin (header) → revival (hero) → bulletin (maker) → revival (holler preview) → bulletin (still preview) → revival (bottles) → bulletin (find a pew) → revival (footer). The alternation IS the rhythm and must not be broken.

## Key states

- **Default** — described above.
- **Pending images** — hand-painted bottle labels and Lane 1 photography are `pending: true` in `current/pages/home.json`. Render with placeholder visual signature per `before-after-shell.md` § Content sourcing hierarchy: cream surface card with a 1px dashed border-neutral outline, centered typewriter-mono label *"AWAITING GEMINI — LANE N"* with the lane identifier, and the aspect-ratio of the intended image preserved. Hellfire-neon dot in the top-right corner of each placeholder as a *"shipping"* signature.
- **Hover** — `button-primary` darkens to ~`#5e1408`. Bottle cards get a 2px barn-rust outline ring + slight `translateY(-2px)` (no shadow). Nav links shift from hymnal-black to barn-rust.
- **Reduced motion** — all hover transforms cancel; color transitions remain (< 200ms).

## Interaction model

- All CTAs use real `<a href>` — no JS interactions.
- Header monogram → `/` (home).
- Header `Visit` CTA → `/visit`.
- Hero `FIND A PEW` → `/pews`; `BOOK A SATURDAY TASTING` → `/visit`.
- Maker section link-out → `/the-holler`.
- Holler-preview link-out → `/the-holler`.
- Still-preview link-out → `/the-still`.
- Bottle cards → `/the-bottles` (no per-bottle anchor for the demo; clicking lands on the bottles page).
- Featured-bottles CTA `ALL SIX BOTTLES` → `/the-bottles`.
- Find-a-pew "see all pews" link → `/pews`.
- Footer links → respective pages.
- Age-gate modal is a separate document concern (not rendered in `home-proposed.html`; would be at the site root index).

## Data attributes

Required structural attributes per `data-attributes.md`:

- `header[data-section="header"][data-intent="navigate"][data-layout="full-width-cream"]`
- `section[data-section="hero"][data-intent="brand"][data-layout="centered-stack"][data-mode="revival"][data-items="2"]`
- `section[data-section="maker"][data-intent="story"][data-layout="split-5-7"][data-mode="bulletin"][data-items="1"]`
- `section[data-section="the-holler-preview"][data-intent="story"][data-layout="split-7-5-inverted"][data-mode="revival"][data-items="1"]`
- `section[data-section="the-still-preview"][data-intent="process"][data-layout="split-5-7"][data-mode="bulletin"][data-items="1"]`
- `section[data-section="featured-bottles"][data-intent="catalog"][data-layout="grid-3"][data-mode="revival"][data-items="3"]`
- `section[data-section="find-a-pew"][data-intent="stockists"][data-layout="grid-2"][data-mode="bulletin"][data-items="4"]`
- `footer[data-section="footer"][data-intent="contact-legal"][data-layout="three-column-dark"]`

`data-mode` is a Holler & Hymn-specific extension capturing the two-register alternation. Downstream `migrate` reads it to apply the correct surface tokens.

## Unsourced content (placeholder list — render with the visual signature per `before-after-shell.md`)

Image-level placeholders only. Body copy is fully sourced from `current/pages/home.json` and the brand documents.

- `section[data-section="maker"] .portrait img` — Wendell Greene portrait; **placeholder pending Gemini Lane 1 (lane-1 portrait)** per `assets/gemini-prompts.md`.
- `section[data-section="the-holler-preview"] img` — Wolfpen Holler landscape; **placeholder pending Gemini Lane 1 (lane-1 landscape)**.
- `section[data-section="the-still-preview"] img` — copper still in dim barn light; **placeholder pending Gemini Lane 1 (lane-1 process)**.
- `section[data-section="featured-bottles"] .card:nth-child(1) img` — `PASS THE PLATE` hand-painted bottle label; **placeholder pending Gemini Lane 3 (lane-3 label)**.
- `section[data-section="featured-bottles"] .card:nth-child(2) img` — `TENT REVIVAL` hand-painted bottle label; **placeholder pending Gemini Lane 3**.
- `section[data-section="featured-bottles"] .card:nth-child(3) img` — `THE BACKSLIDER` hand-painted bottle label; **placeholder pending Gemini Lane 3**.

**Wordmark/logo:** `/assets/logo.svg` currently a typographic placeholder authored as a stand-in. Craft renders it as-is; replacing with the final Gemini-generated SVG is a file-swap operation later (no shape-brief change needed).

**Bar names in find-a-pew:** sourced from `current/pages/home.json` (which sources from `briefing/CONTENT.md`'s authored placeholder list). Treat as *synthesized-stable* — not placeholders; render verbatim. The brand has chosen these names as the stable stockist list for the demo.

## Open questions for craft

- **Hand-painted ornament SVGs.** Not yet generated. Craft can either (a) render simple inline-SVG ornaments inspired by the brand (crossed sourwood blossom, tent silhouette, ampersand) using only the 6 palette tokens with rough strokes; or (b) leave the ornament slots empty until Gemini Lane 3 produces them. Recommend (a) — even rough inline SVGs better than missing decorative breaks. Mark each `data-ornament="<id>"` so they're replaceable.
- **Hero CTA equality.** Primary `FIND A PEW` (barn-rust fill) vs secondary `BOOK A SATURDAY TASTING` (ghost outline) — should the visit CTA be primary instead? Recommend `FIND A PEW` primary because it serves the larger audience (local drinkers + bartenders + tourists) and the visit page is the deeper-funnel ask. Brief locks `FIND A PEW` primary.
- **Maker pull-quote length.** The full origin paragraph is ~120 words; the home preview renders ~50 words. Confirmed: shorter on home (the full text lives on `/the-holler`).
- **Bottle card photography vs label art.** Each card renders the hand-painted *label* (Lane 3) as the primary image, not a photograph of the bottle in context. This matches BRAND.md imagery direction (labels are the brand's loudest surface). Bottle photographs (lane-1) could replace these in a later iteration; for now, label art is the choice.

These are page-level deployment decisions the brief reviewer can challenge before craft runs.

## Notes for craft

- **Token contract.** All tokens come from `DESIGN.json.extensions.brandTokens` rendered as `:root { --hh-* }` block per `token-contract.md`. No hardcoded hex inside component CSS.
- **Voice rule 7.2** is active — no exclamation marks in chrome (nav, CTAs, headlines). Exclamations live only on product labels (e.g. *"PRENDETE E BEVETENE TUTTI!"*-equivalent — none of our copy currently uses one, so this is a guardrail rather than a constraint to apply).
- **All-caps display only.** Every display headline is all-caps; title-case display is forbidden.
- **Numerals in mono.** Any number that appears (`40 mi.`, `2019`, `27 herbs`, `24% ABV` on bottle cards) is set in IBM Plex Mono per the Numerals-as-Proof rule.
- **No drop shadows, no gradients, no glassmorphism.** Flat-with-paint-texture only.
- **Hellfire-neon restraint.** At most one instance per visible viewport. The hero ampersand ornament could carry it (a single neon-tinted dot); none of the other sections should compete.
- **Hand-imperfection.** When rendering inline-SVG ornaments, deliberately introduce slight registration drift, irregular stroke density. Craft's instinct to clean these up is the wrong instinct for this brand.
