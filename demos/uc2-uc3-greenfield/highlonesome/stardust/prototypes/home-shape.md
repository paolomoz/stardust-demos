<!-- stardust:provenance
  writtenBy: stardust:prototype (Phase 1)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - stardust/direction.md (Active)
    - PRODUCT.md
    - DESIGN.md
    - DESIGN.json
    - brand/BRAND.md
    - briefing/CONTENT.md
  scope: per-page compositional brief for home. Site-level system decisions live in DESIGN.md; this brief decides how that system DEPLOYS to this page.
  stardustVersion: 0.3.0
-->

# home — page-shape brief

## Premise (single sentence)

A single-scroll cinematic narrative that introduces High Lonesome by alternating four section-ground colors across ten sections — meditative blues dominate, a single fiddle-bone interlude and a single cardinal-flash flag-ground punctuate, and three full-bleed bottle sections each carry their own ground.

## Output target

`stardust/prototypes/home-proposed.html` (self-contained static HTML). No `<slug>.html` viewer (greenfield — no CURRENT side to render in a before/after iframe).

## Hard constraints (lifted verbatim from direction.md + DESIGN.md)

1. **Mode A active.** Palette and type tier pinned. No new font outside the 4-family deck (Playfair Display / Cormorant Infant / Spectral / IBM Plex Mono). No new color outside the 7-token palette.
2. **Drenched palette deployment** — ≥ 4 distinct section grounds across the 10 sections. Asymmetric cycling, not strict A/B. Sequence locked:
   `hl-blue · hl-blue · hl-fiddle-bone · hl-blue · hl-butterfly · hl-cardinal · hl-blue · hl-fiddle-bone · hl-blue · hl-blue`.
3. **Cardinal-flash rule** — exactly ONE section uses cardinal-flash as ground (section 6: The Gap). Never as body background elsewhere. Never as text color larger than the mono micro-label tier.
4. **Italic-at-display** — every headline ≥ 48px is italic-classical-serif (Playfair Display italic). All-caps display is forbidden. Roman display is forbidden.
5. **Numerals/measurables in mono** — "4,140 ft", "1983", "14%", "ten miles", phone, addresses all render in IBM Plex Mono uppercase tracking 0.08em.
6. **First-person singular voice everywhere** — never "we" / "our team" / "passionate" / "crafted" / "curated" / "artisanal". Never Italian-language words (*atelier*, *trattoria*, *piazza*, *dolce*).
7. **No SaaS silhouette** — no centered massive-type hero with dual-CTA pair. The hero is left-anchored, italic-display-led, ONE primary CTA + ONE text-link secondary.
8. **No identical-card 3-col grid** — the three bottles are rendered as three full-bleed sections (5/7 splits, alternating image-text/text-image direction), NOT as cards.
9. **No drop shadows, no gradients-as-elevation, no glassmorphism** — flat by conviction. Section depth comes from atmospheric radial gradients (sunset-pink, mountain-laurel, sourwood-honey, butterfly-pea) layered over solid ground colors.
10. **Section padding alternates** — 96px / 64px alternation across sections so rhythm doesn't flatten.

## Anti-patterns to render-refuse

Each of these triggered the v1 Holler & Hymn slop render. Surface as render-refusal in this prototype.

- Centered SaaS hero with dual-CTA pair (Generic-2026-SaaS silhouette).
- 3-col identical card grid of bottles (impeccable absolute ban).
- All-caps display anywhere.
- Roman display anywhere.
- Restrained palette deployment that holds the saturated colors to a single accent stripe — the four-ground-minimum is the brand's central-tension enforcement.
- Editorial-register vocabulary in nav or section headers (*the journal*, *atelier*, *dispatches*).
- Italian-language words in copy (*trattoria*, *piazza*, *dolce*).
- Hero text placed on photographic background without a contrast scrim ≥ 4.5:1.
- Pure `#000000` anywhere.

## Section list — sequence + ground + layout strategy

### Section 0 — Age gate (modal, renders first)

- **Type:** focus-trapped modal, irreversible no-exit.
- **Surface:** hl-blue ground, full-viewport.
- **Layout:** centered card-less block — italic display headline ("21 and over only."), mono date input, single italic primary CTA ("I am 21 or older"), tiny mono link to leave (".gov shop locator").
- **Voice:** *"You must be of legal drinking age in your country to enter this site. — Sadie"*
- **Data attribute:** `data-section="age-gate"`
- **Interaction:** keyboard-navigable, `prefers-reduced-motion` honored (no fade), `Escape` not allowed.

### Section 1 — Hero (`data-section="hero"` · ground `hl-blue` + sunset-pink glow overlay)

- **Layout:** left-anchored italic display, NOT centered. ~60% column anchored to left edge with `padding-inline-start: 8vw`. Right ~40% is the atmospheric placeholder (Lane 1 landscape) bleeding off the right edge.
- **Composition reading:** "horizon-line + wordmark"; the wordmark italic sits where the text rests on the implied horizon of the landscape.
- **Eyebrow:** mono ornament `&` SVG + mono micro-label `HOT SPRINGS, NC · ELEV. 4,140 FT` (sourwood-honey on hl-blue, ~6.3:1 AA).
- **Wordmark:** italic Playfair Display 144px `High Lonesome` (fiddle-bone on hl-blue, AAA). Mixed-case.
- **Tagline:** italic Spectral 26px lede `One voice in a wide place. Bottled bluegrass from a barn ten miles past anywhere.` (fiddle-bone on hl-blue).
- **CTAs:** primary fill `Visit the Shop` (fiddle-bone fill, hl-blue text, italic Playfair 20px); secondary italic text-link `read about the maker →` (mountain-laurel underlined). NOT a dual-fill pair.
- **Image placeholder:** Lane 1 cinematic landscape, 16:9 right-bleed. Placeholder visual signature per § Unsourced content below.
- **Padding:** 96px desktop, 72px tablet, 48px mobile.

### Section 2 — The Song (`data-section="song"` · ground `hl-blue` + mountain-laurel radial glow from center)

- **Layout:** centered narrow column 60–65ch. Single ornament-rule SVG above the eyebrow.
- **Eyebrow:** mono `TRACK 01 · THE SONG · SUNG BY SADIE GREENE` (sourwood-honey, 13px).
- **Display:** italic Playfair 80px `One voice in a wide place.` (fiddle-bone, AAA). Mixed-case. Centered.
- **Pull-quote:** italic Spectral 22px lede — the full Song quote from BRAND.md, ending `— Sadie Greene, sings while she works.` (fiddle-bone on hl-blue).
- **Link:** italic text-link `read the song in full →` (mountain-laurel underlined) → `/the-song`.
- **Padding:** 64px desktop (paired with hero's 96px to break the rhythm).

### Section 3 — The Gaps & the Still (`data-section="gaps"` · ground `hl-fiddle-bone` + sourwood-honey-mist horizontal band across middle · **first surface inversion**)

- **Layout:** asymmetric 5/7 split — text left (5 cols), Lane 1 vista placeholder right (7 cols, bleeds off right edge).
- **Eyebrow:** mono `TRACK 02 · THE PLACE · TRACK 03 · THE PROCESS` (cardinal-flash on fiddle-bone — restricted to mono micro-label only, ~5.4:1 AA).
- **Display:** italic Playfair 80px `The Gaps & the Still.` (barn-ink on fiddle-bone, AAA). Mixed-case.
- **Body:** Spectral 19px in barn-ink, 1.55 line-height — *"Forty miles outside Asheville. The gaps run cold even in July. The still is a copper kit a man in Tennessee sold me, built in 2019 in a barn ten miles past anywhere. I sing while I work. I think it goes in."* Numerics (`forty miles`, `2019`, `4,140 ft`) wrapped in inline `<span class="ds-mono">` rendering IBM Plex Mono.
- **Links:** TWO italic text-links inline at the end of the paragraph — `see the gaps ↗` and `see the still ↗` (cardinal-flash underlined).
- **Padding:** 96px desktop.
- **Surface-inversion note:** brand's first break from hl-blue dominance — reads as "stepping into a sunlit clearing" in the narrative.

### Section 4 — Three Bottles opener (`data-section="bottles-opener"` · ground `hl-blue` + cardinal+butterfly twin glows top-right and bottom-left)

- **Layout:** centered. Single ornament-rule SVG above the eyebrow + below the lede.
- **Eyebrow:** mono `TRACK 04 · TRACK 05 · TRACK 06` (sourwood-honey).
- **Display:** italic Playfair 80px `Three Bottles, bound in one cover.` (fiddle-bone). Mixed-case.
- **Lede:** italic Spectral 22px — *"Three small-batch botanicals, hand-foraged within forty miles. Each in its own ground."* (fiddle-bone).
- **Padding:** 64px desktop (paired short opener — narrative beat before three full-bleed bottle sections).

### Section 5 — Blue Ridge Blue (`data-section="bottle-1"` · ground `hl-butterfly` + hl-blue radial from bottom + fiddle-bone wash horizontal)

- **Layout:** 5/7 split — Lane 3 hand-painted label placeholder LEFT (5 cols, 4:5 vertical), copy RIGHT (7 cols).
- **Composition reading:** "label-as-object" — placeholder reads as a label pinned to a wall, not as a card.
- **Eyebrow:** mono `BOTTLE 01 · BLUE RIDGE BLUE · 14% ABV` (barn-ink on hl-butterfly, AAA).
- **Display:** italic Playfair 64px `Blue Ridge Blue` (hl-blue on hl-butterfly, ~5.5:1 AA). Mixed-case.
- **Body:** Spectral 19px in barn-ink — *"A cobalt-tinged aperitif. Butterfly pea flower and mountain mint, set against a single-vapor distillate. Drink before sundown."*
- **Pull-anchor:** italic Spectral 26px `Drink before sundown.` (hl-blue, italic emphasis on hl-butterfly).
- **CTA:** italic text-link `Buy a bottle ↗` (hl-blue underlined) → `/the-bottle#blue-ridge-blue`.
- **Padding:** 96px desktop. The brand's lightest section — a quiet bloom of cyan between two blues.

### Section 6 — The Gap (`data-section="bottle-2"` · ground `hl-cardinal` + mountain-laurel + sourwood-honey glow · **brand's loudest section, single instance**)

- **Layout:** INVERTED 7/5 — copy LEFT (7 cols), Lane 3 label placeholder RIGHT (5 cols, 4:5 vertical). Direction-flip vs section 5 prevents the bottles from reading as a card-grid template.
- **Eyebrow:** mono `BOTTLE 02 · THE GAP · 28% ABV` (fiddle-bone on hl-cardinal, ~4.6:1 AA — eyebrow size only).
- **Display:** italic Playfair 64px `The Gap` (fiddle-bone on hl-cardinal, AA). Mixed-case.
- **Body:** Spectral 19px in fiddle-bone — *"A sharp, bright high-elevation amaro. Wild ginger, black walnut, mountain mint. Forged at altitude — the bitter side of the harvest."*
- **Pull-anchor:** italic Spectral 26px `Forged at altitude.` (fiddle-bone italic emphasis on hl-cardinal).
- **CTA:** italic text-link `Buy a bottle ↗` (fiddle-bone underlined) → `/the-bottle#the-gap`.
- **Padding:** 96px desktop.
- **Loudness justification:** the brand's central tension demands a single saturated-flag moment. The Gap is the amaro — the sharpest bottle, the highest-elevation product. The visual loudness lands on the bottle that earns it.

### Section 7 — Deep Cove (`data-section="bottle-3"` · ground `hl-blue` + sourwood-honey radial from center + cardinal-deep from lower-left)

- **Layout:** 5/7 split — Lane 3 label placeholder LEFT (5 cols), copy RIGHT (7 cols). Returns to section-5 direction; the cardinal-flash interlude is bracketed by two hl-blue/leftward-image sections.
- **Eyebrow:** mono `BOTTLE 03 · DEEP COVE · 22% ABV` (sourwood-honey on hl-blue).
- **Display:** italic Playfair 64px `Deep Cove` (fiddle-bone on hl-blue). Mixed-case.
- **Body:** Spectral 19px in fiddle-bone — *"A dark, sweet cordial for winter. Wild persimmon, paw-paw, and black walnut hull, slow-steeped. For the long dark."*
- **Pull-anchor:** italic Spectral 26px `For the long dark.` (fiddle-bone italic emphasis on hl-blue).
- **CTA:** italic text-link `Buy a bottle ↗` (fiddle-bone underlined) → `/the-bottle#deep-cove`.
- **Padding:** 64px desktop.

### Section 8 — All Three Bottles → CTA band (`data-section="all-three-cta"` · ground `hl-fiddle-bone` + sourwood-honey + mountain-laurel atmospheric wash · **second surface inversion**)

- **Layout:** centered narrow column. Single ornament-rule SVG above the display.
- **Display:** italic Playfair 80px `All three, bound together.` (barn-ink on fiddle-bone, AAA). Mixed-case.
- **Body:** italic Spectral 22px lede — *"Cover the whole year, gap to deep cove."* (barn-ink).
- **CTA:** italic text-link 28px `Read the whole catalog ↗` (cardinal-flash on fiddle-bone, ~5.4:1 AA, with 2px underline). NOT a primary fill — keeps the CTA-pair count at one across the whole page.
- **Padding:** 64px desktop.

### Section 9 — Find a Pour (`data-section="pour-list"` · ground `hl-blue` + atmospheric mountain-laurel + butterfly-pea twin glows)

- **Layout:** centered liner-notes block — italic display header, then a 2-column list of 4 stockists, each row: bar name (italic Spectral 22px), location (mono 13px), Sadie's pour-note (italic Spectral 17px).
- **Eyebrow:** mono `TRACK 07 · WHERE TO FIND ME · WNC` (sourwood-honey).
- **Display:** italic Playfair 80px `Find a Pour.` (fiddle-bone). Mixed-case.
- **Stockists (placeholder content — see § Unsourced content):** 4 WNC bars, each as: `Bar Name` (italic Spectral 22px) · `Asheville, NC` (mono 13px) · `Sadie's note placeholder` (italic Spectral 17px).
- **CTA:** italic text-link `See all pours →` (cardinal-flash underlined on hl-blue) → `/where-to-find`.
- **Padding:** 96px desktop.

### Section 10 — Colophon footer (`data-section="colophon"` · ground `hl-blue` + subtle barn-ink atmospheric radial from lower-center)

- **Layout:** 3-column grid — Hours · Correspondence · Sung In By.
- **Each column:** mono uppercase eyebrow (13px sourwood-honey) + italic Spectral 17px body (fiddle-bone).
- **Hours:** `BARN HOURS · SATURDAY 2-6 PM` + appointment-only note.
- **Correspondence:** mono `sadie@highlonesome.com` + `+1 828 555 0214` + `@highlonesome_nc`.
- **Sung In By:** italic Spectral 22px `— Sadie` signature.
- **Footer rule:** italic Spectral 14px centered — `© High Lonesome 2026 · 21+ · LP-01 · Vol. I`.
- **Padding:** 96px desktop.

## Section-ground sequence summary

```
1  hero               hl-blue          96px
2  song               hl-blue          64px   ← padding break
3  gaps               hl-fiddle-bone   96px   ← first surface inversion
4  bottles-opener     hl-blue          64px   ← padding break
5  bottle-1 BR-Blue   hl-butterfly     96px   ← bloom of cyan
6  bottle-2 The Gap   hl-cardinal      96px   ← single loud-flag, inverted layout
7  bottle-3 D-Cove    hl-blue          64px   ← padding break
8  all-three CTA      hl-fiddle-bone   64px   ← second surface inversion
9  pour-list          hl-blue          96px
10 colophon           hl-blue          96px

Distinct grounds: 4 (hl-blue · hl-fiddle-bone · hl-butterfly · hl-cardinal). Sequence is asymmetric — not strict A/B alternation. Drenched intensity confirmed.
```

## Interaction model

- **Scroll-led.** No sticky nav, no on-scroll header collapse. The page is read as a single narrative scroll.
- **Top credits-bar.** Mono uppercase, 12px, sourwood-honey on hl-blue: `HIGH LONESOME · HOME · THE SONG · THE GAPS · THE BOTTLE · HYMNS · SHOP · CONTACT · VOL. I · NO. 1`. Inline as a single ribbon — not as a typical site nav.
- **Age gate first.** Section 0 modal renders before main content paints. Focus-trapped, keyboard-navigable, `Escape` blocked.
- **CTA hover state.** Primary fill: background transitions to `hl-honey`, `translateY(-1px)`. Italic text-links: underline thickens from 1px to 2px.
- **Image placeholders inert.** No hover state; reads as deliberate composition placeholder (see § Unsourced content).
- **`prefers-reduced-motion: reduce` honored** — atmospheric radial gradients are static; no parallax; no scroll-triggered reveals.

## Structural data attributes (every section)

Per `skills/stardust/reference/data-attributes.md`. Every `<section>` element must carry:

| section index | data-section | data-mode | data-ground |
|---|---|---|---|
| 0  | `age-gate`         | `modal`     | `hl-blue` |
| 1  | `hero`             | `landing`   | `hl-blue` |
| 2  | `song`             | `quote`     | `hl-blue` |
| 3  | `gaps`             | `split-5-7` | `hl-fiddle-bone` |
| 4  | `bottles-opener`   | `centered`  | `hl-blue` |
| 5  | `bottle-1`         | `split-5-7` | `hl-butterfly` |
| 6  | `bottle-2`         | `split-7-5` | `hl-cardinal` |
| 7  | `bottle-3`         | `split-5-7` | `hl-blue` |
| 8  | `all-three-cta`    | `centered`  | `hl-fiddle-bone` |
| 9  | `pour-list`        | `liner-notes` | `hl-blue` |
| 10 | `colophon`         | `tri-col`   | `hl-blue` |

`<body>` carries `data-route="home"` and `data-palette-deployment="drenched"`.

## Provenance block (first child of `<head>`)

```html
<!-- stardust:provenance
  writtenBy: impeccable:craft (via stardust:prototype)
  writtenAt: <ts>
  readArtifacts:
    - stardust/prototypes/home-shape.md
    - stardust/current/pages/home.json
    - PRODUCT.md
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
  againstDirection: stardust/direction.md#active (2026-05-12)
  renderedVia: impeccable:craft
  unsourcedContent: [6 image placeholders + 4 stockist placeholders — see _provenance.unsourcedContent in the rendered file]
-->
```

## Unsourced content (Mode A placeholder contract)

Greenfield workspace — no captured imagery to reuse. Every visual asset is a deliberate placeholder, **not** a synthesised photograph. Each placeholder is rendered with the visual signature below so reviewers see the gap rather than a fabricated photo.

### Placeholder visual signature (apply to all 6 images + 4 stockist rows)

- **Surface:** tinted slightly off the section ground — for hl-blue grounds use `color-mix(in oklch, var(--hl-blue) 92%, var(--hl-fiddle-bone))`; for fiddle-bone grounds use `color-mix(in oklch, var(--hl-fiddle-bone) 92%, var(--hl-blue))`; for hl-butterfly + hl-cardinal grounds use the same color-mix recipe with their respective neutrals.
- **Border:** 1px dashed in the section's text-color token.
- **Label:** centered IBM Plex Mono uppercase 12px tracking 0.08em — `AWAITING GEMINI · LANE N · <intent>` (N = imagery lane number from `_brand-extraction.json.imageryLanes`).
- **Dot marker:** 6px solid hl-cardinal disc top-right, inset 16px — this is the placeholder-instrumentation marker (NOT a UI loud element; readers should learn the dot means "render gap"). Single dot per placeholder. The cardinal-flash one-section-per-route rule applies to *section ground*, not to these placeholder dot markers — they remain on the placeholder surface, not the section ground.
- **Aspect ratio preserved:** the placeholder fills the box its final image will fill, so the surrounding composition reads correctly even with the gap.

### Placeholder roster

| # | Section | Lane | Intent | Aspect | Final source |
|---|---|---|---|---|---|
| 1 | hero | 1 | cinematic Blue Ridge landscape at dusk, right-bleed | 16:9 | Gemini Lane 1 |
| 2 | gaps | 1 | WNC gap vista — looking west from a bald | 7:5 | Gemini Lane 1 |
| 3 | bottle-1 | 3 | Blue Ridge Blue hand-painted label (Italian-pop style) | 4:5 | Gemini Lane 3 |
| 4 | bottle-2 | 3 | The Gap hand-painted label (Italian-pop style) | 4:5 | Gemini Lane 3 |
| 5 | bottle-3 | 3 | Deep Cove hand-painted label (Italian-pop style) | 4:5 | Gemini Lane 3 |
| 6 | (reserved) | — | unused this render | — | — |

### Text-content placeholders

| Section | Item | Placeholder |
|---|---|---|
| pour-list | Bar 1 name + location + Sadie note | `<Bar Name placeholder>` / `<Town, ST placeholder>` / `<Sadie's pour-note placeholder>` |
| pour-list | Bar 2 name + location + Sadie note | same |
| pour-list | Bar 3 name + location + Sadie note | same |
| pour-list | Bar 4 name + location + Sadie note | same |
| colophon | Barn hours specifics | `Saturday 2-6 PM <appointment-only placeholder>` |

The brief authorises rendering the placeholder text in italic Spectral wrapped with `[data-placeholder="true"]` and a subtle 1px dashed underline in `currentColor`, so readers see the gap as a writing TODO rather than misreading the placeholders as final copy.

## Key states (per impeccable craft contract)

- **Hover** — primary CTA: background hl-fiddle-bone → hl-honey, `translateY(-1px)`, 280ms ease-out-quart. Text links: underline thickens 1px → 2px, 200ms.
- **Focus** — visible 2px hl-honey outline-offset 4px on all interactive elements. Never `outline: none`.
- **Active** — CTA: `translateY(0)`, slight darken via `filter: brightness(0.95)`.
- **Reduced motion** — drop transforms, drop transitions; underline thickness change still applies (color-only change is reduced-motion-safe).
- **Loading** — N/A (single static page).

## Composition reading (what a designer should see)

A reader scrolling the page should perceive:

1. **First viewport (hero).** A deep mountain blue with a sunset blush burning off the upper-right edge; italic display wordmark anchored left, NOT centered. The wordmark sits where text would sit on a 1960s travel poster.
2. **Sections 2–4** (blue · cream · blue). A rhythm — the cream section reads as walking into sunlit clearing; flanking blue sections feel like returning to the canopy.
3. **Sections 5–7** (cyan-bloom · cardinal-flash · blue). The brand's loudest passage. The cardinal section is the single bright flag against two cooler bottle sections — earned visual loudness, not slop.
4. **Sections 8–10** (cream · blue · blue). Resolution back to the dominant ground. Cream interlude signals "we're closing"; the final two blue sections deliver the colophon as a long blue evening tone.

The page is meditative single-voice mountain music wearing Italian summer color. Both at full volume. Neither absorbing the other.

## Open questions

None. All composition decisions resolved from BRAND.md + CONTENT.md + DESIGN.md. The brief is ready for impeccable:craft.
