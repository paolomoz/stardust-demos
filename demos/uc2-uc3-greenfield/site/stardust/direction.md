<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-05-11T00:00:00Z
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/*.json
    - stardust/state.json
  synthesizedInputs:
    - user freeform intent
  stardustVersion: 0.3.0
  scope: reasoning trace — full audit of the resolved direction for this run
-->

# Direction — 2026-05-11

## Phrase (verbatim)

> *"rooted, irreverent, hand-made. Saturday night and Sunday morning at the same time."*

Plus production note from the user: *the stardust/ workspace lives at `demos/uc2-uc3-greenfield/site/stardust/`, not at the repo root; this is the Holler & Hymn greenfield brand hand-authored to bootstrap direct without an extract run.*

## Restatement in dimensional vocabulary

The phrase declares three properties of the brand explicitly, then states a central tension as a final clause:

- **"rooted"** — places the brand in a specific landscape (Wolfpen Holler, Madison County, NC, captured in `current/PRODUCT.md`). Pulls **distinctiveness** toward `singular`. Resists category-template / generic-craft execution.
- **"irreverent"** — declares the brand's tone as cheeky, willing to play on sacred / religious / revival vocabulary. Pulls **tone** toward `playful` with a specific flavor — *cheeky-irreverence*, not *approachable-friendly*.
- **"hand-made"** — declares the maker's hand visible in the artifact. Pulls **expressive axis** toward `drenched` — hand-lettered display, hand-painted ornament, irregular paint registration, no digital-perfect finish.
- **"Saturday night and Sunday morning at the same time"** — the central tension move. The brand sits on two halves at full volume: the HOLLER (outlaw, Saturday-night, hand-made, foraged) and the HYMN (heritage, Sunday-morning, ritual, revival-tent typography). The two halves alternate in the visual system as two surface registers — bulletin mode (cream / hymnal-black) and revival mode (hymnal-black / bulletin-cream). Reinforces every prior axis call and adds **register-flavor**: Memoir-adjacent (hymn side) × Tabloid-adjacent (holler side) alternating.

## Movements

| axis | from → to | source |
|---|---|---|
| distinctiveness | `familiar` → **`singular`** | "rooted" + the named place (Wolfpen Holler); the brand is unmistakable, not category-template |
| expressive | `restrained` → **`drenched`** | "hand-made"; hand-lettered display + saturated palette + hand-painted ornament |
| tone | `serious` → **`playful` (cheeky-irreverent)** | "irreverent"; sacred-and-profane wordplay engine |
| density | (unchanged — defaulted `balanced`) | phrase doesn't move density. Brand-register default = balanced (64px). Multi-audience hard floor applies (home has 7 sections; sectionPadding capped ≤ 64px, ≥ 40px) |
| audience | (inherited from `current/PRODUCT.md`) | three concentric — Asheville locals / WNC visitors / trade buyers outside the region |
| register | `brand` (inherited) | single-maker brand surface; not product |
| register-flavor | (rolled) → **Memoir × Tabloid alternation** | implied by the "Saturday night × Sunday morning" tension; two-register surface alternation |

## Gaps / clarifying questions

None asked. The phrase is rich enough (three explicit axis moves + a load-bearing tension clause), and the captured brand surface in `current/` resolves audience, register, and constraints. The two-question ceiling is left at zero.

Density tuning question was skipped because (a) brand-register multi-audience triggers the hard floor anyway (≤ 64px), and (b) `airy` is opt-in only — the user did not pin it. Defaulted to `balanced` and stamped `density: balanced (default)`.

## Mode detection

Read `stardust/current/_brand-extraction.json`:

- Palette: 6 distinct tokens (`hymnal-black #1a1410`, `barn-rust #7e1d12`, `gilt-gold #d4a45c`, `rhody-green #3e5a3e`, `bulletin-cream #e8d8b8`, `hellfire-neon #f04a26`). After dedup / exclude pure-black-or-white-only: 6 ≥ 3 distinct ✓
- Captured type families: 3 (hand-lettered display, hymnal serif, IBM Plex Mono) — at least one named ✓
- Notes do not flag the extraction as failed / login-walled / iframe-dominated.

**Signal classification:** `signal-strong`.

**Rebrand triggers checked:**
- Phrase contains no explicit rebrand signal (no "rebrand", "new brand", "clean slate", "start over", "from scratch", "replace the brand", "not brand-faithful", "editorial reimagination", "completely new", "redo the brand").
- `--rebrand` flag not passed.
- Captured signal is not `signal-absent`.

**Resolved mode:** **Mode A — brand-faithful.** Palette and type are pinned to the captured brand surface.

## Divergence (Mode A)

The seed is rolled for the non-locked dimensions (decade, craft, register-flavor, ground-family). Anchor references from `BRAND.md` and the central tension override the roll where they imply a specific value (Mode B-style anchor-reference precedence).

```
Divergence (brand-faithful mode):
  decade           ✓ rolled (anchored)  → 1940s revival-tent × 1970s outlaw country
                                          (anchor: BRAND.md cultural-references list — 1940s revival-tent posters,
                                          early-70s outlaw-country album sleeves)
  craft            ✓ rolled (anchored)  → hand-painted plywood signage / wood-block print
                                          (anchor: BRAND.md imagery Lane 3 — label art; hand-painted roadside signs
                                          on US-25 north of Asheville)
  register-flavor  ✓ rolled (implied)   → Memoir × Tabloid alternation
                                          (implied by central tension — Memoir-adjacent on the hymn side,
                                          Tabloid-adjacent on the holler side)
  ground-family    inherited (Mode C)   → two-register alternation (bulletin-cream + hymnal-black)
                                          (override: brand-faithful — the two-mode pattern is brand-native and
                                          load-bearing; seed roll yields)
  font deck        inherited            → 3-tier hybrid (hand-lettered display + hymnal serif + IBM Plex Mono)
  palette          inherited            → 6 brand tokens (verbatim from _brand-extraction.json)
```

### Brand-faithful inversions

The retentions worth recording — they explain why Mode A inheritance plus the seed roll did not produce a different visual register:

1. **Hymnal-black `#1a1410` retained over pure `#000000`.** The brand's darkest color is intentionally not digital-black; old-leather-Bible brown-black is part of the brand's character.
2. **Barn-rust `#7e1d12` retained as primary display.** The decade roll (1970s outlaw country) could have suggested a brighter rust or saturated red; the captured token is preserved verbatim.
3. **Ground-family override (Mode C).** Seed roll yielded to the brand's two-register alternation pattern (bulletin-cream / hymnal-black). Reason: `brand-faithful` — the two-mode pattern is brand-native and load-bearing.
4. **Hand-lettered display retained over standard sans.** Brand-faithful — the captured face character (revival-tent / state-fair signage) is the brand's distinctive mark.
5. **Hymnal serif body retained over neutral text serif.** Brand-faithful — the old-hymnbook-page register is part of the holler-and-hymn duality.
6. **IBM-Selectric mono retained as numerals tier.** Brand-faithful — the typewriter-mono = literalism rule is part of the voice.

Stored at `DESIGN.json.extensions.divergence.brand_faithful_inversions[]`.

### Image-reuse contract (Mode A)

Captured images are reused at the same semantic position. The brand has six hand-painted bottle labels declared in `current/pages/the-bottles.json` (PASS THE PLATE, TENT REVIVAL, THE BACKSLIDER, DRINK YE ALL OF IT, DEACON'S DRAUGHT, THE NO-SHOW) and several photographic-realistic placeholders (maker portrait, Wolfpen Holler landscape, copper still, mason-jar shelf, preacher's shed, etc.) marked `pending: true` awaiting Gemini 3 Pro Image Preview generation.

Under Mode A:
- Hand-painted labels stay as the per-product card imagery on the bottles page and home featured-products section.
- Maker portrait stays as the lead image on `the-holler` page.
- Copper still photograph stays as the lead on `the-still` page.
- Wolfpen Holler landscape stays as the lead-context image on `the-holler` and as background for the home "the holler" preview section.
- Barn-at-golden-hour stays as the lead on `visit` page.

Synthesised placeholders are forbidden under Mode A — when a captured image is `pending: true` and not yet available, the prototype shape brief declares the gap explicitly with `data-placeholder="true"` and a visible signature treatment so reviewers see the gap rather than a fabricated photo.

## Improvements list (Phase 2.5 — Mode A)

**Skipped, with rationale.** The improvements list assumes a captured-from-DOM site whose execution gap variant A would close. Holler & Hymn is greenfield — `current/` is hand-authored as the brand's desired target, not a real-execution-as-deployed snapshot. There is no execution gap to close because there is no deployment.

Surfaced honestly in the plan; user proceeded with reduced scope (Phase 2.5 skipped, single variant).

Implication for variant rendering downstream: `/stardust:prototype` writes shape briefs without an `<slug>-improvements.md` to cite. Each shape brief justifies its choices from `PRODUCT.md` + `DESIGN.md` + the per-page `current/pages/<slug>.json` directly.

## Variant fork

**Single variant** (no `3 variants` / `N variants` in the phrase). No multi-variant fork is initialized. `state.json.direction.variantMode = "single"`.

A multi-variant fork could be invoked later by re-running with `direct --re-direct` plus an explicit variant request. The current target is a single proposition — the holler × hymn duality at full conviction in one variant.

## Anti-toolbox audit

Checked items (from `divergence-toolkit.md` § 1 + universal hardening):

| anti-pattern | status |
|---|---|
| Generic-2026-SaaS silhouette (oversized centered sans, dual-CTA pair, sticky top nav, serial-marker footer) | clean — DESIGN.md Don'ts list it explicitly |
| Editorial-register vocabulary on non-editorial brand | clean — listed as Don't with one declared exception (the page named *Hymns* uses gospel/hymnal vocabulary by brand design, not appropriated editorial register) |
| Fabricated content (invented stats / awards / customer logos / dollar amounts / dates) | clean — Don'ts list it; prototype shape briefs will declare placeholder gaps with `data-placeholder="true"` |
| Hero text on photographic background without contrast scrim | clean — Don'ts list it with ≥ 4.5:1 contrast enforcement |
| Generic role names in palette (`Primary`, `Secondary`, `Alarm`, etc.) | clean — palette uses brand-native names (`hymnal-black`, `barn-rust`, `gilt-gold`, `rhody-green`, `bulletin-cream`, `hellfire-neon`) |
| Centered SaaS hero with dual-CTA pair | clean — Don'ts list it explicitly |
| C-cliff overshoot / Anonymous middle variant / Variant homogeneity | not applicable — single variant |
| Pure `#000000` | clean — No-Pure-Black Rule named; hymnal-black `#1a1410` is the darkest in the system |
| Purple / magenta | clean — outside palette, render-refused |

**Result:** clean. All items checked, none required removal.

## IA-priority audit (intent-dimensions § 8)

Trigger conditions checked against `current/pages/home.json`:

- **Audience-routing trigger** (>2 audience tracks above the fold): home renders 2 CTAs in the first viewport (`FIND A PEW`, `BOOK A SATURDAY TASTING`). Below the >2 threshold. **Not firing as hard constraint**, but recorded as a soft-preserve in `DESIGN.json.extensions.iaPriorities[]` — both CTAs stay visible in the first viewport on home.
- **Commercial-conversion trigger** (>3 product/program/service cards above the fold; configurator; primary-CTA verb of `buy` / `shop`): transactions are offloaded to a `.shop` subdomain by design; no product grid on home. **Not firing.**
- **Search-led IA** (search row in hero region): no search affordance in `current/pages/home.json`. **Not firing.**
- **Donation funnel** (primary CTA `donate` / `give` / `support`): not a nonprofit. **Not firing.**
- **Crisis affordance** (phone / hotline / immediate-services panel in first viewport): not an applicable category. **Not firing.**

**Recorded:** one soft-preserve entry in `iaPriorities[]` covering the two home audience-routing CTAs. Variants (if any) must keep both visible in the first viewport.

## Commands proposed and executed

The plan was:

1. Write `PRODUCT.md` at site/ root (target strategy).
2. Write `DESIGN.md` at site/ root (target visual system, Stitch frontmatter + 6 canonical sections).
3. Write `DESIGN.json` at site/ root (machine-readable mirror + extensions).
4. Write `stardust/direction.md` (this file — full reasoning trace).
5. Update `stardust/state.json`: 9 pages `status: extracted → directed`; record `direction` block.

User confirmed with "go". Executed in order.

## Outputs written

| Path | Status |
|---|---|
| `PRODUCT.md` | written |
| `DESIGN.md` | written |
| `DESIGN.json` | written |
| `stardust/direction.md` | written (this file) |
| `stardust/state.json` | updated (direction block + per-page status `extracted → directed`) |

## State

- 9 pages: `extracted → directed`
- 0 stale prototypes (none exist yet)
- `direction.variantMode = "single"`

## Next

`$stardust prototype` — defaults to home page. The shape brief will read from `PRODUCT.md` + `DESIGN.md` + `current/pages/home.json` directly (no improvements list to cite because Phase 2.5 was skipped per the greenfield rationale).

## Notes for the seed+brief skill living-draft

This run validates several decisions captured in `context/stardust-seed-brief-skill.md`:

- The hand-authored `current/` (proof-of-concept output of the future `/stardust:seed` + `/stardust:brief` commands) was readable as a fully-formed `current/` by `/stardust:direct`. The schema deltas vs. extract output (no `_crawl-log.json`, page-level `_provenance.source = "synthesized"`, `media.images[].pending: true`, no DOM-capture geometry) did not block any of direct's setup checks.
- `signal-strong` classification fired correctly against the hand-authored brand surface (6 palette tokens, 3 type families).
- Mode A activated automatically with no rebrand override.
- The Phase 2.5 improvements list correctly *could not* be authored against a greenfield hand-authored current/, and the skill's surfaced rationale (no execution gap to close) was the right answer.

Surface these in the living-draft's "Pitfalls" and "Decisions with reasoning" sections after this commit lands.
