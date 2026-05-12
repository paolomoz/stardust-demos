# Stardust seed + brief — living draft for the greenfield-entry commands

> Living capture of decisions, schema, mapping rules, patterns, and pitfalls from hand-authoring the greenfield entries to Stardust during the UC2+UC3 demo build. Eventual use: source material for the **`/stardust:seed`** and **`/stardust:brief`** plugin commands.
>
> **How to maintain:** update this doc inline whenever we (a) lock a decision worth re-using, (b) define a new mapping rule, (c) hit a gotcha. Don't wait until the end — value compounds when the entry is fresh. The pair-doc for the demo-building skill is `context/motion-demo-skill.md`; the patterns conventions match.

---

## Working name

`/stardust:seed` + `/stardust:brief` — the two paired greenfield-entry commands. Collective skill: the "greenfield-seed" capability that closes the gap UC1's `/stardust:extract` leaves when no source site exists.

## What they do

| Command | Reads | Writes |
|---|---|---|
| `/stardust:seed` | A brand-definition document (BRAND.md-shaped) + optional brand assets bundle (logo, imagery, voice notes) | The **brand half** of `stardust/current/` — `DESIGN.md`, `DESIGN.json`, `_brand-extraction.json`, `assets/logo.{svg,png}`, plus the Brand-Personality + Anti-references + Design-Principles + Register sections of `PRODUCT.md` |
| `/stardust:brief` | A site brief (SITE-BRIEF.md-shaped) + optional per-page content briefs (CONTENT.md-shaped) | The **briefing half** of `stardust/current/` — the Users + Product-Purpose + Accessibility sections of `PRODUCT.md`, `pages/<slug>.json` × N, `_extract-summary.json` |

The two outputs union into a complete `current/` directory equivalent to what `/stardust:extract` produces from a real site. Run-merge order is independent — whichever runs second appends or merges the union, never overwrites.

## When to invoke

**Use when:**
- No source site exists to crawl (UC2 + UC3 greenfield scenarios)
- A designer is bringing brand assets + intent only → `/stardust:seed`
- A writer / strategist is bringing a brief + page direction only → `/stardust:brief`
- A new launch / microsite / brand spin-off with no precedent

**Skip when:**
- A real source site exists → `/stardust:extract <URL>` instead
- The user wants a redesign of an existing site (extract then direct)
- Neither brand assets nor brief is available — no seeding signal exists; the user needs to author at least one before invoking

## Inputs

### `/stardust:seed` input shape

Required: a brand-definition document. Reference: `demos/uc2-uc3-greenfield/site/brand/BRAND.md`. Required sections:

- **Identity at a glance** — name, tagline, category, place, maker
- **The tension (central brand move)** — the brand's load-bearing tension, stated as two halves that sit on each other
- **The maker** — origin paragraph, voice calibration
- **Voice & copy rules** — do's, don'ts, voice anchors (5–10 verbatim phrases), tension-vocabulary table if applicable
- **Visual identity** — palette as token→hex map (6–10 tokens), typography as 3-tier hybrid (display / body / mono), imagery direction in 3 lanes
- **Logo direction** — variant options + prompt seed for external generation
- **Anti-patterns** — what the brand explicitly refuses (this is load-bearing — see "default-luxe-craft drift" gotcha)
- **Direction phrases for `/stardust:direct`** — 2–3 candidate intent phrases

Optional: a brand assets bundle (logo SVG/PNG, brand imagery per the imagery lanes, custom typeface files). Missing assets become `pending: true` placeholders downstream.

### `/stardust:brief` input shape

Required: a site brief document. Reference: `demos/uc2-uc3-greenfield/site/briefing/SITE-BRIEF.md`. Required sections:

- **Premise** — who, what, where, why (one paragraph)
- **Audience** — who's reading this (one paragraph)
- **What success looks like** — the walk-out line(s) the reader carries away
- **Voice and mode** — narrator stance, register
- **The N things that must be on the site** — load-bearing content beats (5 ± 1)
- **Tone reference** — positive and negative references
- **Format and constraints** — page count, special pages (age gate, legal), what's offloaded (e.g. shop subdomain)

Optional: per-page content briefs. Reference: `demos/uc2-uc3-greenfield/site/briefing/CONTENT.md`. Each page block contains:

- **Purpose** (one line)
- **Hero beat** (the one thing the reader takes away)
- **Sections** (in order, with bgMode hints if the brand uses register alternation)
- **Load-bearing nouns** (verbatim-required names, places, products)
- **Voice sample** (one or two sentences in the maker's voice as anchor)
- **What NOT to include** (anti-patterns specific to this page)

If per-page CONTENT.md is omitted, `/stardust:brief` synthesizes a default page taxonomy from the site brief + the brand category (e.g. "single-maker spirits" → home / about / process / products / where-to-find / visit / contact).

## Outputs — the `current/` schema

Reference: `/Users/paolo/excat/tmp/migrate-frescopa/stardust/current/` (the real `stardust:extract` output that this skill's output must match). Combined seed + brief output:

```
current/
├── PRODUCT.md                 ← MERGED: brand sections (seed) + briefing sections (brief)
├── DESIGN.md                  ← seed-only
├── DESIGN.json                ← seed-only
├── _brand-extraction.json     ← seed-only
├── _extract-summary.json      ← brief-only
├── pages/<slug>.json × N      ← brief-only
└── assets/
    ├── logo.{svg,png}         ← seed-only (or pending)
    ├── screenshots/           ← empty (greenfield)
    └── media/                 ← seed-supplied or pending
```

Reference output written by hand: `demos/uc2-uc3-greenfield/site/stardust/current/`. Treat as the worked-example schema until the commands are implemented.

### Schema deltas — greenfield vs. extract

Most fields are identical to extract's output. The deltas are confined to:

| Field | Real extract | Greenfield seed+brief |
|---|---|---|
| `_provenance.writtenBy` | `stardust:extract` | `stardust:seed` and/or `stardust:brief` (per file based on which command wrote it) |
| `_provenance.source` (in page json) | source URL | `"synthesized — no source URL; greenfield brand"` |
| `_provenance.synthesizedInputs` | empty array | references to input docs (`BRAND.md`, `SITE-BRIEF.md`, `CONTENT.md`) |
| `pages/<slug>.json.sections[].rect`, `domPath` | rendered geometry from live DOM | stubbed (`domPath` as shorthand selector) or omitted |
| `pages/<slug>.json.cssVars[]` | extracted CSS custom properties | **omitted** — canonical tokens live in DESIGN.json, no DOM to inspect |
| `pages/<slug>.json.visibleText` | rendered text concatenation | section-level digest: `"Hero · Maker · The Holler · ..."` |
| `pages/<slug>.json.media.images[].naturalW/H` | local image dims from disk | absent when `pending: true`; populated when asset is on disk |
| `pages/<slug>.json.media.images[].pending` | absent | **new field** — `true` when asset awaits external generation |
| `pages/<slug>.json.media.images[].intent` | absent | **new field** — `"lane-N <description>"` annotation for downstream `prototype` |
| `assets/screenshots/` | per-page PNG captures | empty (no source to screenshot) |
| `_brand-extraction.json.logo.synthesized` | `false` | `true` |
| `_brand-extraction.json.logo.synthesizedBasis` | absent | the brief description from BRAND.md's logo direction |
| `_brand-extraction.json.logo.pendingExternalGen` | absent | **new field** — names the external tool when generation is pending (e.g. `"Gemini 3 Pro Image Preview — see BRAND.md logo prompt seed"`) |
| `_brand-extraction.json.palette[]` | extracted from rendered CSS, sorted by occurrence | brand tokens lifted verbatim from BRAND.md palette block (typically 6 entries) |
| `_brand-extraction.json.site.originUrl` | source URL | `null` |
| `_brand-extraction.json.imageryLanes` | absent | **new field** — array of {lane, description}, mirrors BRAND.md imagery direction |
| `_brand-extraction.json.antiReferences` | absent | **new field** — array of forbidden registers / aesthetics |
| `_crawl-log.json` | present | **absent** |
| `brand-review.html` | present (HTML report) | optional |
| `_extract-summary.json.successes[]` | `{slug, url, waitMs, waitMode}` | `{slug, url, source: "synthesized", originDoc: "CONTENT.md#<anchor>"}` |

Downstream `direct`, `prototype`, `migrate` must treat all of the above deltas as valid `current/` shapes — no command should reject a greenfield input because geometry fields are absent or `pending: true` markers are present.

## Mapping rules — input section → output field

The compile step both commands perform.

### `/stardust:seed` mappings (brand half)

| Input section (`BRAND.md`) | Output |
|---|---|
| Visual identity → palette | `DESIGN.md` colors / `DESIGN.json` colors / `_brand-extraction.json.palette[]` / `DESIGN.json.extensions.brandTokens` |
| Visual identity → typography (3-tier) | `DESIGN.md` typography block / `DESIGN.json.typography` (one role per tier) |
| Components / motifs (implied by central tension) | `DESIGN.json.components` + `extensions.componentStyle` + `extensions.motifs.patterns` (the tension's signature pattern becomes a motif) |
| Voice & copy rules | `DESIGN.json.extensions.voice` (do / dont / examples / rules) + `PRODUCT.md` Brand Personality section |
| Anti-patterns | `PRODUCT.md` Anti-references section + `DESIGN.md` Do's-and-Don'ts section |
| Central tension move | `DESIGN.md` Overview "Creative North Star" line + a corresponding `extensions.motifs.patterns` entry |
| Logo direction | `assets/logo.svg` (synthesized placeholder or generated) + `_brand-extraction.json.logo.synthesizedBasis` |
| Imagery direction (3 lanes) | `_brand-extraction.json.imageryLanes[]` + propagated as `intent: lane-N` annotations on per-page `media.images[]` entries (cross-cutting with brief) |
| Direction phrases for `/stardust:direct` | preserved as a comment in `current/README.md` for the downstream direct call |
| Identity at a glance → register | `PRODUCT.md` Register (one word) + `DESIGN.json.extensions.register` |

### `/stardust:brief` mappings (briefing half)

| Input section | Output |
|---|---|
| Site brief → Premise | `PRODUCT.md` Product Purpose |
| Site brief → Audience | `PRODUCT.md` Users |
| Site brief → What success looks like | quoted in `current/README.md` as the brand's walk-out line(s) |
| Site brief → Constraints (single-page-scroll, age gate, etc.) | `PRODUCT.md` Design Principles + per-page `widgets`, `landmarks` hints |
| Site brief → Format (page count) | `_extract-summary.json.successes[]` length + the corresponding `pages/*.json` files |
| Per-page brief → Purpose | `pages/<slug>.json.meta.description` |
| Per-page brief → Hero beat | `pages/<slug>.json.headings[0]` (h1) + first `sections[0]` |
| Per-page brief → Sections (in order) | `pages/<slug>.json.sections[]` (bgMode + childTextSnippet) |
| Per-page brief → Load-bearing nouns | preserved verbatim in headings, section snippets, CTA labels — see "verbatim guarantee" pattern below |
| Per-page brief → Voice sample | embedded in `sections[].childTextSnippet` as quoted Wendell-voice line |
| Per-page brief → What NOT to include | flagged on the page as `_avoid: [...]` (new field; needs implementation buy-in) |
| Brief constraints → Accessibility | `PRODUCT.md` Accessibility & Inclusion |

### Shared mappings (both commands touch)

- **PRODUCT.md is merged.** Brand sections (seed) + briefing sections (brief). Whichever runs second appends or merges — neither overwrites. See "PRODUCT.md is split" decision below.
- **The page-list comes from CONTENT.md (brief), but seed contributes the bgMode hints** when the brand has a register-alternation pattern (e.g. Holler & Hymn's bulletin/revival). Brief writes the page; seed annotates which sections get which mode.

## Decisions with reasoning

### Two commands, not one

Considered: a single `/stardust:bootstrap` with `--brief` / `--direction` / `--assets` flags. Rejected because:

- The demo's narrative (two visible commands typing in the seam beat) is sharper with two names.
- The two inputs are produced by different roles (designer brings assets + intent; writer/strategist brings the brief) often at different times.
- A team might run only one (e.g. a microsite for an existing brand → only `/stardust:brief`).
- Internal implementation can share most of the code; the user-facing surface stays two commands.

### `seed` = brand, `brief` = briefing (the rename from `from-direction` / `from-brief`)

Earlier draft used `/stardust:from-direction` + `/stardust:from-brief`. Renamed because:

- "Seed" and "brief" read cleanly as paired verbs.
- They map to the on-disk file structure (`site/brand/` vs `site/briefing/`).
- They match the output artifact split (DESIGN/brand-extraction is brand-side; PRODUCT-pages is briefing-side).
- "From-direction" / "from-brief" leaked implementation-detail input-shape into the user-facing name.

### Self-referential provenance

Every output file's `_provenance.writtenBy` names the would-be authoring command. When the commands are implemented, they will write the same field. The hand-authored artifacts shipped today and the eventual machine output share the same provenance contract — demo artifacts are forward-compatible with tomorrow's command output. The cost of this contract is zero; the value is downstream compatibility and demo-as-documentation.

### PRODUCT.md is split between seed and brief

Counter-intuitively, `PRODUCT.md` is produced by **both** commands:

- **Brand Personality, Anti-references, Design Principles, Register** ← `/stardust:seed`
- **Users, Product Purpose, Accessibility & Inclusion** ← `/stardust:brief`

Reasoning: a "product description" inherently spans brand attributes (what kind of product is this? what's its voice?) and product attributes (who uses it? what does it do?). Separating them across the two commands is the cleanest way to keep responsibilities aligned with the input role (designer vs. strategist).

Implementation note: the merge must be commutative — order-of-run-independent.

### Greenfield-specific schema fields (the new fields)

Added fields not in extract's output:

- `pages/<slug>.json.media.images[].pending` — awaiting external generation
- `pages/<slug>.json.media.images[].intent` — imagery-lane annotation
- `pages/<slug>.json._avoid` — content anti-patterns for this page (open question: real-extract fields don't have a parallel)
- `_brand-extraction.json.logo.synthesized` (already exists in extract schema as boolean — repurposed)
- `_brand-extraction.json.logo.synthesizedBasis` — string description of what the synthesized logo should look like
- `_brand-extraction.json.logo.pendingExternalGen` — string naming the external tool when generation is pending
- `_brand-extraction.json.imageryLanes[]` — the three-lane imagery direction
- `_brand-extraction.json.antiReferences[]` — forbidden registers

Downstream `direct`/`prototype` need to know about these. Document at the seam.

## Patterns (reusable)

### `pending: true` + `intent: lane-N` for awaiting external generation

When an asset is required but will be generated externally (Gemini, hand-illustration, photography):

```json
{ "src": "/assets/images/maker-portrait.jpg", "alt": "...", "intent": "lane-1 portrait", "pending": true }
```

Downstream `prototype` renders the page structure, leaves a marked spot, doesn't fail. The `intent: lane-N` connects back to `_brand-extraction.json.imageryLanes` so the prototype can render an appropriate placeholder treatment per lane.

### Section-level visibleText digest

For greenfield, `pages/<slug>.json.visibleText` is a digest like *"Hero · Maker · The Holler · The Still · The Bottles · Find a Pew"* — section names joined by `·`. Real extract produces rendered text concatenation. Downstream consumers (preview generators, AI summarizers) should accept the digest form. If they need fuller text, they should read `sections[].childTextSnippet`.

### Voice anchor phrases as verbatim copy

`DESIGN.json.extensions.voice.examples.do[]` carries 5–10 verbatim voice anchors lifted from `BRAND.md`. `/stardust:prototype` should weave these into copy wherever possible — they're the load-bearing voice samples. Same pattern as Frescopa's *"Your perfect coffee is four questions away!"* — captured copy preserved through redesign.

### Two-register sectioning (when the brand's tension uses surface inversion)

For brands whose central tension splits across two visual registers (e.g. Holler & Hymn's bulletin/revival mode), each section carries a `bgMode` field:

```json
{ "bgMode": "bulletin", "bgColor": "#e8d8b8", "colorMode": "#1a1410" }
{ "bgMode": "revival",  "bgColor": "#1a1410", "colorMode": "#e8d8b8" }
```

`/stardust:prototype` reads `bgMode` to decide which `DESIGN.json` `banner-*` component to instantiate. More general than the holler-hymn case — any brand with a two-mode pattern uses this field. Brands without register-alternation set `bgMode: null` everywhere.

### Load-bearing nouns verbatim guarantee

CONTENT.md per-page briefs list **load-bearing nouns** (names, places, products) that must appear verbatim in the rendered page. `/stardust:brief` preserves them in:

- `pages/<slug>.json.headings[].text`
- `pages/<slug>.json.sections[].childTextSnippet`
- `pages/<slug>.json.ctas[].label`

Downstream `direct` and `prototype` MUST NOT paraphrase these — the page loses its identity if "Wolfpen Holler" becomes "the holler" or "PASS THE PLATE" becomes "the plate amaro." Add a `verbatim: true` flag on these entries when implemented, or a schema field listing the load-bearing-nouns separately for downstream commands to compare against.

### Reference-output-as-spec

A worked example of the output schema in `demos/uc2-uc3-greenfield/site/stardust/current/` is more useful as an implementer's spec than any abstract description. When implementing the commands, run them against the worked-example inputs and diff the output against the worked-example outputs — anywhere they diverge is a decision worth recording. The artifacts are the test fixtures.

### Forward-compatible provenance contract

Hand-authored artifacts use the same `_provenance.writtenBy` field name and the same input-document reference shape that the real commands will use. This means migrating from hand-authored to command-generated `current/` is a one-shot replacement — no schema rewrite. The risk: if the implementation later changes the provenance contract, the hand-authored fixtures need updating. Mitigation: define provenance schema before implementation, store as a JSON Schema doc in `context/`.

## Pitfalls / gotchas

- **Seed without imagery is incomplete but valid.** A run of `/stardust:seed` with no logo or brand imagery should produce a working `current/` with placeholder assets marked `pending: true`. Downstream commands must handle this without crashing.

- **Brief without per-page CONTENT.md needs sensible defaults.** If only SITE-BRIEF.md is provided, `/stardust:brief` should synthesize a default page taxonomy from the site brief + brand category, not fail. Default taxonomy is brand-category-aware: a spirits maker gets `home / about / process / products / where-to-find / visit / contact`; a SaaS startup gets `home / product / pricing / docs / blog / contact`; etc.

- **The default-luxe-craft drift.** LLMs default to Kinfolk-minimal-craft when rendering "artisanal" brands. The `BRAND.md` Anti-patterns section is the load-bearing defense against this. Implementation must consume the anti-patterns *before* generating any visual decision, and propagate them verbatim into `DESIGN.md` Do's-and-Don'ts. Test fixture: run the commands against Holler & Hymn and verify the output does not drift toward beige-and-sage.

- **Place names need real-feeling specificity.** Fictional but real-feeling place names (Wolfpen Holler) work better than fully-generic or fully-real-but-borrowed-from-elsewhere. The command should accept place names verbatim from `BRAND.md` and never invent its own. If the brand says "Madison County, NC, 40 minutes outside Asheville," that is the place — don't paraphrase to "rural Western North Carolina."

- **The three-imagery-lane convention.** Most brands need exactly 3 lanes. Fewer collapses imagery variety; more dilutes lane identity. Document the convention but don't enforce — some brands might need 2 or 4 lanes.

- **`/stardust:direct` after greenfield-seed needs special handling.** `/stardust:direct` is designed to *transform* current → target. After seed+brief, current already *is* target. `/stardust:direct` in this case behaves as a near-identity transform — or arguably should be skippable. Open question: should the seed+brief commands optionally also write to `target/`, allowing the user to skip direct?

- **The `extensions.systemComponents` field can be empty or estimated.** Real extract counts occurrences of system components across crawled pages. Greenfield has nothing to count. Two options: (a) synthesize estimated counts from the page list (e.g. header appears on every page → count = N), or (b) use string sentinels (`"occurrences": "synthesized"`). The Holler & Hymn proof-of-concept uses (a) for clarity.

- **PDF brief parsing is harder than markdown.** UC3's demo narrative shows a `brief.pdf` landing and Stardust parsing it. For implementation, `/stardust:brief` should accept both `.md` and `.pdf` (with PDF text extraction). Start with markdown-only; add PDF after the first runtime ships. The demo prop can be a PDF rendering of a markdown brief.

- **Iterative refinement re-runs.** If a user runs `/stardust:seed` once and then edits `BRAND.md`, they should be able to re-run incrementally. The provenance comment in each file lets the command detect "I wrote this before; should I regenerate?" Open question: explicit `--re-seed` flag, or auto-detect from provenance timestamps.

- **The "load-bearing nouns" guarantee is only as strong as the schema.** Without a `verbatim: true` flag (or similar), downstream commands might paraphrase. The fix is structural — surface the load-bearing-noun list as a dedicated field in `pages/<slug>.json` that `direct` and `prototype` are contractually required to honor.

- **Logo `pendingExternalGen` field needs downstream policy.** Today the user manually drops the generated logo into `assets/logo.svg` after running Gemini. A more rigorous flow would have the commands surface the Gemini prompt + accept the user pasting the result, or hand off to a sibling skill. Out of scope for the first implementation.

- **Anti-patterns must read as concrete refusals, not abstract style guidance.** `BRAND.md` Anti-references like "Etsy folk-craft" only work if the implementation reads them as **concrete forbidden registers**, not as suggestions. Lift them verbatim into `PRODUCT.md` and `DESIGN.md` so downstream commands can refuse outputs that resemble them. (Future feature: an `anti-pattern checker` that scores prototypes against the anti-references.)

## Open questions / TBD

- Should `/stardust:direct` be skippable after seed+brief, or always run? Today's pipeline assumes current → target is a transform; greenfield breaks that assumption.
- Should `/stardust:brief` support PDF input directly, or markdown-only first?
- Iterative re-runs: explicit `--re-seed` flag, or auto-detect from provenance?
- Where do command runs store their input-doc references for re-runs? Inside `_provenance.synthesizedInputs[]` is the data, but a persisted `seed-config.json` / `brief-config.json` might help iterative-edit workflows.
- Hybrid flow: can `/stardust:seed` augment an existing extracted `current/`? E.g. brand exists already but you want to add new pages from a brief.
- Imagery flow: should `pending: true` images carry a `geminiPrompt` field with the actual prompt the user should run? Would make brand → prompts → assets loop more legible. Could also enable a sibling skill (`/stardust:gen-imagery`) that takes the prompt and runs the generation.
- The `verbatim: true` guarantee — implement as a dedicated field, or as a regex of "load-bearing nouns" extracted into `_brand-extraction.json`?
- Should anti-references be enforced by an automated anti-pattern checker, or by careful prompt engineering in `prototype`?
- The `pages/<slug>.json` schema has DOM-capture fields that don't apply to greenfield. Should we ship a tighter "greenfield page schema" (smaller, fewer optional fields), or keep schema parity with extract and accept the empty fields? Schema parity won (parity makes downstream commands simpler), but worth revisiting if the empty fields become a usability problem.
- Could `/stardust:seed` and `/stardust:brief` share implementation under the hood and only differ at the CLI? Probably yes — most of the work is "compile structured documents → JSON/markdown schema." The split is at the user-facing surface, not the internals.
- Should there be a third sibling command, `/stardust:assets` or `/stardust:gen-imagery`, that handles the external-generation handoff? Currently the user manually generates with Gemini and drops files in. A sibling command could surface the prompts + accept output.

## Downstream consumer contract — what `direct` / `prototype` / `migrate` need from seed+brief output

The output schema isn't free-form documentation; downstream skills have specific reads against it. This section names every load-bearing field a downstream skill consumes, with the audit / decision it powers. The pair-doc `context/stardust-prototype-skill.md` proposals reference these fields explicitly; when the upstream skill team implements seed+brief, the schema is constrained by what these reads require.

### Fields `direct` reads

- `PRODUCT.md` § Register → resolves the divergence-toolkit's register-axis pin (`brand` / `product`). When seed authors PRODUCT.md, it must commit to a register; downstream `direct` does not infer from copy.
- `PRODUCT.md` § Anti-references → propagated verbatim into `direct`'s anti-toolbox audit list. Brand-specific anti-patterns (e.g. *"Kinfolk-luxe-minimal-craft"* for Holler & Hymn) are the only mechanism that prevents `direct` from defaulting to LLM-craft-reflex on its own initiative.
- `DESIGN.json.colors` + `extensions.brandTokens` → palette signal-strength classification (`signal-strong` / `signal-thin` / `signal-absent` per `direct` § Setup step 5). Mode A (brand-faithful) defaults from this read.
- `DESIGN.json.typography` per-tier `fontFamily` + (new field, see below) `typographyMeta.expectedCharacter` → consumed by `prototype` proposal F.2 to verify the rendered face character matches brand intent. Seed must author both.

### Fields `prototype` reads (and the audits they power)

- `current/pages/<slug>.json.sections[].bgMode` — load-bearing for **prototype proposal H.2** (palette-deployment-intensity audit). Each page-section's `bgMode` field declares its assigned register-side (e.g. `bulletin` / `revival` for Holler & Hymn's two-register pattern), which the prototype skill reads to assign per-section ground colors. Brief must populate this for every section.
- `current/pages/<slug>.json.headings[].text` + `sections[].childTextSnippet` + `ctas[].label` — **load-bearing nouns guarantee** for `prototype`'s downstream rendering. Verbatim preservation contract (see *verbatim guarantee* pattern). Brief must mark which content slots are load-bearing.
- `current/pages/<slug>.json.media.images[].pending` + `intent` — **load-bearing for prototype's placeholder-signature renderer** (variant C of `before-after-shell.md`). When `pending: true`, prototype renders the `[data-placeholder]` visual signature per F-002 contract instead of fabricating content. Brief authors these fields directly.
- `DESIGN.json.extensions.divergence.brand_faithful_inversions[]` — feeds **prototype proposal G.3** (variant role allocation). The retentions list informs which inversions are deliberate (and thus immune to "make it bolder" iteration) vs. inheritances (which can be opened up if direction changes).
- `DESIGN.json.extensions.colorMeta.quarantined[]` — **load-bearing for prototype's anti-toolbox audit** (proposal C). Quarantined-token rules (e.g. "rhody-green only in botanical-context content") are enforced at render time; seed must populate the quarantine rules.
- `DESIGN.json.extensions.voice.do[]` + `dont[]` + `examples.do[]` — feeds craft's copy-generation. Seed must lift verbatim from BRAND.md.

### New fields the schema needs (added by these proposals)

Seed's output should include the following fields beyond what `extract` currently produces. These are required because the prototype skill's proposals (per `context/stardust-prototype-skill.md`) read them at audit time:

- `DESIGN.json.typography.<tier>.expectedCharacter` (string) — brand-intent description per tier; consumed by prototype proposal F.2 (font-availability + character-appropriateness audit). Example: *"hand-lettered revival-tent / hand-painted plywood signage / decorative slab with bracketed serifs."*
- `DESIGN.json.typography.<tier>.rejectedCharacters` (array of strings) — character categories that fail the brand at audit time. Example: *["modern geometric sans (Impact, Oswald)", "ITC-style decorative cursive", "humanist sans"]*.
- `DESIGN.json.extensions.paletteDeployment.intensity` (`held` / `applied` / `drenched`) — intended palette-deployment intensity; consumed by prototype proposal H.4 (palette-deployment audit). Derived from brand tension language in BRAND.md ("both halves at full volume" → `drenched`; "restrained, ritual, hushed" → `held`).
- `DESIGN.json.extensions.paletteDeployment.targetGroundCount` (integer) — minimum distinct section grounds across the long-scroll home; audited at render time.
- `pages/<slug>.json.sections[].bgMode` (already documented; now formally required) — register-side assignment per section; consumed by prototype's two-register-section pattern (proposal D — seed-to-composition translation).
- `pages/<slug>.json.sections[].verbatim` (boolean) — when `true`, the section's headings + childTextSnippet + cta labels must render unchanged by downstream commands; prototype refuses any paraphrasing. Authored by brief.

### Why this contract matters for the skill's design

Without this consumer contract, prototype's audits would have no machine-readable assertions to check against; they'd fall back to LLM-as-critic perceptual judgment for everything. The contract makes the audits **deterministic** for the brand-specific assertions (palette, type, voice, quarantine rules) and leaves LLM-as-critic for the cases that genuinely require perceptual judgment (overall composition, register match).

When seed+brief are implemented, **the schema additions above are not optional fields** — they're required for the prototype skill's gate behaviour to function. If seed doesn't author them, prototype falls back to today's reflex-defaults and the AI-slop failure modes return.

## Reference materials

- **Worked example, input side:** `demos/uc2-uc3-greenfield/site/brand/BRAND.md`, `demos/uc2-uc3-greenfield/site/briefing/SITE-BRIEF.md`, `demos/uc2-uc3-greenfield/site/briefing/CONTENT.md`.
- **Worked example, output side:** `demos/uc2-uc3-greenfield/site/stardust/current/` (12 files: `PRODUCT.md`, `DESIGN.md`, `DESIGN.json`, `_brand-extraction.json`, `_extract-summary.json`, `README.md`, 9× `pages/*.json`, plus 2 placeholder SVGs in `assets/`).
- **Schema reference (real extract output):** `/Users/paolo/excat/tmp/migrate-frescopa/stardust/current/`.
- **Demo where these commands are named on screen:** `demos/uc2-uc3-greenfield/script.md` beat 5 + `README.md` narration outline.
- **Use-case framing:** `context/use-cases.md` UC2 and UC3 sections (both reference the commands).
- **Sibling living-draft:** `context/motion-demo-skill.md` (the demo-building skill); same convention.

## Brands this draft is based on

- **Holler & Hymn** — small-batch Appalachian botanical-liqueur house, single maker, central tension is *Saturday-night sin × Sunday-morning hymn*. Hand-authored proof-of-concept for both commands. Tested input-shape decisions: how richly to describe the central tension, how literally to bind anti-references, how to handle the imagery-lane convention when one lane (botanical/process) requires real outdoor photography and another (label art) requires hand-painted output. Tested output-shape decisions: the seed/brief split of `PRODUCT.md`, the `bgMode` field for two-register sections, the `pending: true` + `intent: lane-N` pattern for awaiting-external-generation assets.

- **High Lonesome** (validation case, 2026-05-12) — Mediterranean-pop variant of the WNC mountain-spirits direction (Hot Springs, NC; saturated 7-token palette; italic-classical-serif display tier; central tension *auditory solitude × visual joy*). Hand-authored proof-of-concept artifacts at `demos/uc2-uc3-greenfield/highlonesome/` ran through the full downstream pipeline (`stardust:direct` → `stardust:prototype` → `impeccable:craft` → `impeccable:critique`) without seam. Validated:
   - The seed-output `_brand-extraction.json` schema (palette role-naming, `imageryLanes[]`, voice anchors, anti-references) feeds `stardust:direct` correctly without translation.
   - The brief-output `pages/<slug>.json` schema (sectionGroundSequence, distinctGrounds, paletteDeploymentIntensity) carries directly into the shape brief.
   - The consumer-contract fields (`typographyMeta.expectedCharacter` + `.rejectedCharacters` + `.loadBearingRule`, `extensions.paletteDeployment.intensity` + `.targetGroundCount` + `.cardinalFlashRule` + `.homeSectionGroundSequence`) are read by craft as hard-rule passthroughs and respected by the rendered HTML. Proposal-stage fields are enforceable consumer contracts today, ahead of the upstream skill landing.
   - The greenfield placeholder visual signature (tinted-off-ground + 1px dashed + mono label + hl-cardinal instrumentation dot) maps cleanly from brief's `pending: true` / `intent: lane-N` markers to the rendered prototype's `[data-placeholder]` elements.

Add new entries when subsequent brands surface a new rule, decision, or gotcha.
