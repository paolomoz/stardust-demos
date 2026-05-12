# Stardust prototype — living draft for the prototype-skill's improvements

> Living capture of failures, decisions, and proposed contract changes from running `stardust:prototype` against the Holler & Hymn, High Lonesome, and Chapitô greenfield brands. Eventual use: source material for upstream changes to the prototype skill (and/or to impeccable's craft + critique) that prevent the failure modes documented here.
>
> **How to maintain:** update inline whenever a `stardust:prototype` run produces output that fails one of the brand's own anti-references, or when the user calls out AI-slop in a render. Capture the failure mode, the contract gap, and the concrete addition.
>
> **Per-brand iteration logs** live alongside the brand workspace (e.g. `demos/uc2-uc3-greenfield/chapito/PROTOTYPE-NOTES.md`). When a fix observed in a per-brand log generalises across brands, promote it here as a failure mode + proposal.
>
> Pair-docs: `context/stardust-seed-brief-skill.md` (seed + brief commands; see § Reference-driven seed for the Chapitô-validated pattern of feeding `stardust:seed` a concrete visual reference); `context/motion-demo-skill.md` (demo-building skill).

## Scope reclassification — 2026-05-12

The proposals captured in this document (A–M plus subsidiary numbering) are now scoped to the **greenfield-pipeline implementation track**. They will be landed in the same upstream session that implements `/stardust:seed` and `/stardust:brief`, not as standalone changes to the existing `extract` → `direct` → `prototype` → `migrate` commands used by UC1 uplift flows.

Reason: every failure mode documented here surfaced from a greenfield build (Holler & Hymn, then High Lonesome) where the brand surface was hand-authored from a BRAND.md rather than crawled from a deployed site. Several proposals depend on greenfield-specific fields (`imageryLanes[].firstPassSource` + `.policy` + `.deployment`, `_brand-extraction.json.logo.pendingExternalGen`, `_provenance.synthesizedInputs[]`) that don't get populated by `stardust:extract` on a real site. Landing them as cross-cutting changes to the existing commands would couple UC1 (uplift of a real site) and UC2/UC3 (greenfield) in ways the validation case doesn't cover — UC1 has not been re-tested with these proposals applied.

The combined-session work plan lives at `context/stardust-greenfield-implementation-prompt.md`. Read that file before starting the implementation work; it sequences seed/brief + proposals A–M as a single coherent landing.

Cross-cutting proposals that *may* later be extended to UC1 once validated against a real-site extract:

- Proposal A (critique non-skippable)
- Proposal B (shape-brief anti-pattern audit)
- Proposal C (rendered-HTML anti-pattern scan)
- Proposal F.1–F.4 (font-availability + character audit)
- Proposal G.1–G.4 (multi-variant fork default)
- Proposal J.1–J.4 (brand-axis drift detector)
- Proposal M.1–M.5 (motion as first-render output)

These are the candidates that are conceptually UC1-applicable. The greenfield implementation lands them first; a follow-up effort can extend to UC1 after UC1-specific validation.

UC1-out-of-scope proposals (greenfield-only by design):

- Proposal D (seed → composition translation contract) — reads seed's rolled inputs
- Proposal G.5 (Phase 2.7 alternate-palette exploration) — exercises greenfield's palette-token flexibility
- Proposal H.1–H.5 (palette-deployment intensity axis) — depends on greenfield brand-tension language signals
- All Pattern 7 imagery proposals — depend on seed-authored `imageryLanes[].firstPassSource` fields

---

## Failure mode #1 — "the AI-craft reflex passes the audit"

### What happened

First run of `stardust:prototype home` against Holler & Hymn produced a tidy-craft-website render that hit five of the brand's own anti-references **and four of impeccable's universal absolute bans**, while the skill's planning artifacts reported the run as clean.

Render artifacts: `demos/uc2-uc3-greenfield/site/stardust/prototypes/home-proposed.html` (the first-pass render before the re-shape).

### The slop, named specifically

The rendered HTML hit, in one frame:

- **Generic-2026-SaaS silhouette** (centered massive sans-serif hero + dual-CTA pair + balanced section padding + serial-marker footer). Listed in `PRODUCT.md` Anti-references as a render-refusal condition. **Shipped.**
- **Kinfolk-luxe-minimal-craft** (1200px max-width container, 12-col grid with 24px gutter, 64px section padding everywhere, restrained system, generous white space, serif body paired with sans display). The brand's #1 stated anti-pattern. **Shipped.**
- **Identical card grids** (impeccable absolute ban). Three bottle cards in a row, same dimensions, same internal structure, repeated. **Shipped.**
- **Modern craft-beer label vernacular** (three vertical cream cards with image-on-top + name + description + meta — exactly the craft-beer can-website grammar). **Shipped.**
- **Hand-imperfect over digital-perfect** (BRAND.md design principle #2). The ornaments were geometric SVG strokes that read as Material-Design illustrations; the type was system-fallback Impact, not hand-lettered; nothing rotated, nothing rough, nothing painted. **Inverted — shipped digital-perfect.**

### Why the existing contract didn't catch any of it

1. **Phase 2.5 critique was hand-waved past.** The prototype SKILL explicitly says the critique pass is mandatory unless `--no-critique`. The agent (me) ran a "manual critique pass" and reported no P0/P1 findings, missing every violation above. **The skill's enforcement language assumed the automatic detector would run; when the agent substituted manual review, the gate failed silently.**

2. **The anti-toolbox audit ran against the planning artifacts, not the rendered HTML.** `DESIGN.json.extensions.divergence.antiToolboxAudit` reported "clean" because the audit list was a list of *names* (Generic-2026-SaaS, identical-card-grid, etc.) without a check against the actual rendered output. The names were on the audit; the patterns were in the HTML. **The audit field was paperwork, not a check.**

3. **The shape brief was the original sin.** The shape brief authored in Phase 1 specified `"hero centered, maker split 5/7, bottles 3-col grid, pews 2-col list, footer 3-col"` — that's the silhouette of every Kinfolk-adjacent brand site of the last five years. Craft then faithfully rendered the slop. The brief itself encoded the default-AI-craft-reflex; craft had nowhere else to go. **The brief is the load-bearing artifact; if it's slop-shaped, the render is slop-shaped, regardless of palette tokens.**

4. **Divergence machinery was decorative.** The seed roll's outputs (`1940s revival-tent × early-70s outlaw country × hand-painted plywood signage × Memoir × Tabloid alternation`) should have driven *radically different composition* — asymmetric, layered, full-bleed, type-breaks-the-rectangle. Instead they drove token replacement (different hexes in the same Bootstrap grid). The `brand_faithful_inversions[]` block was 6 retentions documented in JSON and zero retentions applied to layout. **Documentation in JSON doesn't drive divergence; specific composition constraints in the shape brief do.**

5. **The accept-as-prototyped gate fired on cosmetic fixes.** When the user surfaced the slop, the only P1 the agent had caught earlier was a hellfire-neon-count violation (3 dots in one viewport). That fix was a one-line CSS change. The deep-structure violations — SaaS silhouette, identical-card-grid, Kinfolk-template — never registered. **`prototyped` status was granted on what was effectively a token-rename of the AI-default render.**

### Proposed additions to the contract

#### A. Make critique non-skippable in spirit, not just in flag

Today: `--no-critique` skips Phase 2.5. The agent can also substitute "manual critique" silently — the skill text doesn't refuse this substitution explicitly.

Proposed:
- **Refuse `prototyped` status when Phase 2.5 ran in `manual` mode without the user explicitly invoking `--no-critique`.** The skill differentiates: automatic critique gate fires; manual critique is advisory only.
- **The `_provenance.critique[]` entry must carry `method: "automatic"` to count for the gate.** Manual reviews are recorded but don't satisfy the gate.

#### B. Audit the shape brief itself against anti-patterns *before* craft renders

The brief is where the slop originates. Today there's no audit of the brief.

Proposed Phase 1.5 — **shape-brief anti-pattern audit**. Run *between* Phase 1 (author brief) and Phase 2 (render). Specifically check:

1. **Hero composition naming.** If the brief specifies hero as `"centered stack"` + `"dual CTA pair"` + `"primary button + ghost outline"` and the brand register is `brand` and the rendered page is the home/landing, flag as **Generic-2026-SaaS-silhouette risk**. The brief must justify the centered hero against the brand's anti-references, or pick a different composition.

2. **Card-grid composition naming.** If the brief specifies a section as `"N-col grid of cards"` where the cards have identical structure (same fields, same dimensions, same image-aspect-ratio), flag as **identical-card-grid risk** (impeccable absolute ban). The brief must either: vary the cards substantively (`"3 cards but each composed differently — one wider, one with stamp, one with kraft-tape strip"`) or pick a different layout pattern entirely.

3. **Split composition naming.** If the brief specifies multiple sections as `"split 5/7"` / `"split 7/5"` with image-on-one-side text-on-other, flag as **Kinfolk-magazine-grammar risk**. The brief must either: collapse the parallel splits into a single asymmetric collage section, or justify the parallelism against the brand's tension move.

4. **Container + grid + padding sameness.** If the brief specifies a single `"1200px max-width container, 12-col grid, 64px section padding on every section"` with no per-section variation, flag as **Bootstrap-tidy-craft risk**. The brief must specify section-level deviations (full-bleed grounds, irregular padding, type-breaks-the-rectangle, etc.) or justify the uniformity.

5. **Ornament-vocabulary naming.** If the brief specifies section ornaments as `"geometric inline-SVG rule + centered glyph"`, flag against Anti-pattern #5 (hand-imperfect required, geometric SVG reads as Material-Design illustration). The brief must specify real-physical-object metaphors (tape, stamp, bunting, wax seal, hand-painted signage) per the brand's hand-imperfect principle.

The brief audit refuses by-fixing-the-brief, not by warning. If the brief contains the silhouette markers, Phase 2 does not render — the brief is rewritten first.

#### C. Audit the rendered HTML against anti-patterns, not just the planning artifacts

Today: `anti_toolbox_hits` is a list of names in `DESIGN.json.extensions.divergence`, not a check against rendered output.

Proposed Phase 2.5 enhancement: **rendered-HTML anti-pattern scan** before the critique pass. Specifically check the rendered HTML for:

1. **SaaS-silhouette markers, combined.** All of: (a) `<h1>` or hero heading centered (`text-align: center` or grid `justify-self: center`); (b) two CTAs in a row with `primary fill + ghost outline` pattern; (c) sticky-or-non-sticky-but-similar top nav; (d) three-or-more-column footer. **3 of 4 markers in one render = SaaS-silhouette hit.** Refuse to mark `prototyped`.

2. **Identical-card-grid markers.** All of: (a) N ≥ 3 sibling elements with same tag and same class; (b) each carries the same content slots (image + heading + 1-line + meta + link); (c) image aspect ratios all equal; (d) no per-card composition variation. **All 4 markers = identical-card-grid hit.** Refuse to mark `prototyped`.

3. **Kinfolk-luxe-minimal markers.** All of: (a) `max-width` ≤ 1280px on a `<main>` or content container; (b) `padding-block` value equal across ≥ 60% of `<section>` elements; (c) `gap` or `gutter` value equal across ≥ 60% of grid layouts; (d) no section uses `full-bleed` / `100vw` ground; (e) no element carries `transform: rotate()` (zero hand-imperfection). **4 of 5 markers = Kinfolk-tidy-craft hit.** Refuse to mark `prototyped`.

The audit catches the rendered HTML being slop even when the brief was clean — i.e. it catches craft's own reflexes, not just the brief's.

#### D. Seed-roll → composition translation contract

Today: the seed roll outputs (`decade × craft × register-flavor`) are recorded in `DESIGN.json.extensions.divergence.seed` but the prototype skill has no specified mapping from seed output → layout decisions. The seed informs colors and tokens; it doesn't drive composition.

Proposed: a **seed-to-composition table** in `reference/seed-composition-map.md` that translates rolled seed values into shape-brief constraints. Example entries the table should at minimum cover:

| Seed value | Implied composition constraints |
|---|---|
| `decade: 1940s revival-tent posters` | All-caps display, condensed slab/hand-lettered, asymmetric (left-anchored) layouts, marquee-tape ribbons, hand-painted plywood signage as motif. NOT centered SaaS-massive type. |
| `decade: 1970s outlaw country` | Album-sleeve composition (image full-bleed + title overlay diagonal), kraft-paper Polaroid cutouts, hand-cursive signature accents, wood-paneling textures. NOT clean grid layouts. |
| `craft: hand-painted plywood signage` | Hand-stenciled type, rough paint edges, irregular registration, weathered wood textures as section grounds (NOT cream / sage / beige). |
| `register-flavor: Memoir-adjacent` | First-person narration framed as letter / journal entry; handwritten signature; envelope corner / paper-on-table staging. NOT card-block "About Us" sections. |
| `register-flavor: Tabloid-adjacent` | Big display type, hand-painted call-outs, highlighter-marker emphasis, irreverent stickers / stamps / chips. NOT restrained tasteful type hierarchy. |
| `ground-family: two-register alternation (bulletin / revival)` | Sections commit to one or the other surface; section transitions are physical-object metaphors (tape, bunting, stamps), NOT geometric SVG rules. |

The shape-brief author *must* consult the table for each rolled seed value and translate the implications into the per-section composition. The brief audit (proposal B) checks that the implications were applied — if the brief specifies "centered hero" while the seed rolled "1940s revival-tent" + "outlaw country," the audit refuses.

#### E. Anti-toolbox audit moves from "names list" to "rendered-HTML check"

Today: `DESIGN.json.extensions.divergence.antiToolboxAudit.checked[]` is a flat list of pattern names. The audit reports `result: "clean"` if the list is filled; no actual check runs against the rendered output.

Proposed: the audit must report **per-pattern: matched (boolean) + evidence (DOM path or CSS-rule citation)**. A pattern marked `matched: true` with evidence refuses `prototyped`; `result: "clean"` is permitted only when every pattern has `matched: false` with the evidence-collection step having actually run.

#### F. The "first render is the slop render" expectation

The Stardust SKILL.md mentions iteration via `$impeccable live` as the polish path. The implicit expectation is that the first render is acceptable as a starting point.

Proposed: name explicitly that **the first render against a brand-faithful Mode A direction is likely AI-craft-default unless the shape brief encodes specific anti-reflex composition.** The prototype contract should:

1. Surface the slop-risk before the first render: *"Mode A + brand-register + balanced density + multi-audience IA is the highest-risk composition for AI-craft default. The shape brief must specify per-section composition that escapes the silhouette, or expect the first render to be slop."*
2. Encourage **brief-first iteration** when the first render is slop: re-author the shape brief with explicit anti-default composition, then re-render. Polish iterations on a slop-shaped render risk refining the silhouette, not escaping it.
3. Record both the original brief (slop-shaped) and the re-shaped brief in `<slug>-shape-v1.md`, `<slug>-shape-v2.md` with a `replacedBy` provenance link. The history is part of the artifact.

### Concrete additions, prioritized

If only one change ships, ship **(B) the shape-brief anti-pattern audit** — the brief is where the slop originates. Catching it pre-render is cheaper than catching it post-render and re-rendering.

If two: add **(D) the seed-roll → composition translation contract** — without it, the divergence machinery stays decorative no matter how rigorous the audit is.

If three: add **(C) the rendered-HTML anti-pattern scan** as the safety net for cases where the brief was fine but craft's own reflexes drifted to default.

---

## Failure mode #2 — placeholder dot violated the Hellfire-Neon Restraint Rule

### What happened

Same first prototype render: 3 placeholder image cards in the featured-bottles section, each carrying a hellfire-neon `::after` dot. Three neon dots simultaneously visible in one viewport, violating the brand's own *"at most one hellfire-neon per visible viewport"* rule.

### Why the contract didn't catch it

The placeholder visual signature was authored in the shape brief as *"hellfire-neon dot in the top-right corner of each placeholder as a 'shipping' signature."* Craft rendered the spec faithfully. The brief itself was at fault — it didn't consider what happens when N placeholders co-exist in one viewport.

### Proposed addition

Per-pattern **viewport-count audit** in the shape brief audit. When the brief specifies a recurring visual signature (placeholder dot, accent-color element, irreverence chip) AND a section that renders N ≥ 2 of that signature simultaneously, flag the multiplication. Force the brief to either: vary the signature across instances; demote N-1 to a different color; or remove the signature from one of the contexts.

### Fix applied this round

Demoted placeholder `::after` dot from `--hh-hellfire-neon` to `--hh-barn-rust` on cream surfaces, `--hh-gilt-gold` on hymnal-black. The hero ornament keeps the single neon dot as the only neon-per-viewport accent on the page.

---

## Failure mode #5 — palette inheritance defaults to restrained deployment when user wants maximalist

### What happened

The Holler & Hymn brand has a `signal-strong` 6-token palette (`hymnal-black`, `barn-rust`, `gilt-gold`, `rhody-green`, `bulletin-cream`, `hellfire-neon`) plus a 7th `tape-mustard` derived secondary. Through five rounds of palette swaps + iteration (cobalt-night, deep-woods, ember-ash, coral-piazza, teal-twilight, then teal-blocks and teal-saturated), the user converged on **teal-saturated** — six different saturated section grounds (deep-teal · cream-bone · mustard-yellow · vermilion · coral-pink · cyan) cycling asymmetrically across one page. He named the preference explicitly: *"diverse colors, prefer saturated, use a broader set of colors, break the rhythm."*

The first five palette renders all defaulted to **single-surface dominance** (one ground color across the whole page, palette tokens used only as accents). That's the natural LLM default for "apply a palette to a long-scroll page" — pick the darkest ground, the lightest text, the brightest accent, deploy as one-color-surface + 2-3-color-accents. It's *restrained-by-reflex*.

For a brand whose central tension is *"both halves at full volume"* (Holler & Hymn) and whose palette inheritance is *signal-strong with a neon accent*, the restrained-by-reflex default produces output that **looks brand-faithful at the palette-token level but is brand-quiet at the deployment level**. The brand wanted maximalism; the render shipped reserve.

### Why the existing contract didn't catch it

1. **Impeccable's shared-design-laws default is `Restrained`** (one accent ≤ 10%, tinted neutrals + one color). For product-register sites this is the right default. For brand-register Mode A with a saturated multi-token palette, it's the wrong default — but the skill doesn't differentiate the deployment intensity by register signal.

2. **The palette-picker / inheritance resolves which tokens to use, not how widely to deploy them.** A signal-strong palette with 6 distinct chroma-rich tokens can be deployed as `Restrained` (one dominant ground + accents) OR as `Drenched` (every section a different saturated ground). The brand-faithful inheritance pin doesn't dictate which.

3. **The user's "maximalist" signal lives in the brand's tension words, not in the phrase to `direct`.** Holler & Hymn's BRAND.md says "both halves at full volume" — that's a saturation signal at the brand-tension level. The skill doesn't read tension language as a palette-deployment cue.

4. **First-render restraint is hard to recover from.** Once a render lands with single-surface dominance, the user's iteration vocabulary ("more contrast", "more colors", "break the rhythm") describes the gap but the agent often interprets these as *adding* tokens to the palette rather than *deploying* the existing palette more widely. The fix is one level up — the agent's default deployment, not the user's correction.

### Proposed addition

#### H.1 — Palette-deployment intensity as a first-class axis

Add a new axis to `intent-dimensions.md`: **palette-deployment** (separate from `color-energy` which moves the palette *content*, not its *deployment*).

- Anchors: `held` (one dominant surface, accents only), `applied` (2-3 ground colors visible across the page), `drenched` (4+ different saturated section grounds across one page).
- Default for `product` register: `held`.
- Default for `brand` register with `signal-strong` palette AND ≥ 5 distinct-chroma tokens AND a documented "neon" or "accent-saturated" token: **`applied` or `drenched`**, not `held`.
- Default for `brand` register with brand-tension language signaling maximalism (e.g. *"both halves at full volume"*, *"unconventional"*, *"pop"*, *"saturated"*, *"loud"*): `drenched`.

The axis can be moved by the user's phrase: *"diverse colors / more colors / saturated / break the rhythm"* → moves toward `drenched`; *"quieter / restrained / hold the palette / tone it down"* → moves toward `held`.

#### H.2 — Section-ground variety target tied to palette-deployment

When the deployment axis resolves to `applied` or `drenched`, the prototype shape brief should specify per-section ground colors that achieve the target variety:

- `applied` → 2-3 ground colors visible across the page; 60-70% of sections share one dominant ground.
- `drenched` → 4+ ground colors; no single ground dominates > 40% of sections.

This is recorded in the shape brief and audited at render time.

#### H.3 — "Break the rhythm" as an explicit composition rule

Disciplined alternation (A/B/A/B section ground sequence) reads as conservative. Asymmetric cycling (A/B/C/D/A/C/B sequence — same colors but order broken) reads as confident. For `drenched` deployment in brand register, the shape brief should specify an **asymmetric ground-color sequence**:

- Bad: cream / teal / cream / teal / cream / teal / cream / teal (strict alternation)
- Good: teal / cream / mustard / vermilion / teal / coral-pink / cyan / cream / teal (broken cycle with repeats but no fixed pattern)

The asymmetric cycling is the rhythm. The same colors arranged in strict alternation versus broken cycling read as fundamentally different brand register.

#### H.4 — Palette-deployment audit at first render

Add to the Phase 2.5 audit checklist: count the number of distinct ground colors actually rendered across the page. Compare to the intended deployment intensity. If `drenched` was the intent but the render shows ≤ 3 ground colors, flag as **palette-deployment shortfall** and refuse `prototyped` until either: (a) the shape brief is amended with per-section ground assignments, or (b) the user explicitly downgrades the deployment intensity.

#### H.5 — Render saturated first

For brand register first-renders where palette-deployment intensity is ambiguous or unspecified, **default to `drenched` and let the user dial back**. The cost of "too loud, dial down" is one iteration. The cost of "too quiet, dial up" is the slow-iteration trap (Failure mode #1's silhouette-shaped failure manifested in palette form).

### Fix applied this round

Generated teal-saturated as a corrective variant after the user surfaced the saturation gap. Captured the user's preference as a cross-session feedback memory (`feedback_palette_saturation_preference.md` in user-level memory) so future renders default to maximalist deployment. The Holler & Hymn brand's documented palette and DESIGN.md will need amending separately (the brand pivot from rust-cream-Appalachian to teal-Mediterranean is a strategic decision, not just a palette swap; see § Brand pivot under deliberation below).

### Brand pivot under deliberation

Choosing `teal-saturated` as the winner implies a larger brand pivot from documented Appalachian outlaw-country (rust + cream + hymnal-black + small accents) to Mediterranean Italian-pop (teal + cream + vermilion + mustard + coral + cyan + ink-brown). The locked 6-token palette in `BRAND.md` / `DESIGN.md` needs replacement with the 7-token Mediterranean palette. The brand's reference points shift from *1940s revival-tent posters / 1970s outlaw country* to *Italian-pop maximalist editorial / Mediterranean saturated-color-block sections*. The maker's origin story may need adjusting to bridge Appalachian-rooted with Italian-American.

This is a brand pivot, not just a palette change. The next-step decision: amend BRAND.md to lock the new palette, OR keep BRAND.md as Appalachian and treat the chosen render as a creative exploration. The user can defer the pivot.

---

## Failure mode #6 — brand-evolution drift undetected at approval gate

### What happened

The user explored a Mediterranean-pop palette (extracted from a private reference image) so far from BRAND.md's documented Appalachian outlaw-country palette that committing would have required amending BRAND.md, DESIGN.md, and the brand's central tension. The user surfaced this *himself* and asked the agent to recommend a path; the agent surfaced two options (commit the pivot vs. preserve as exploration only) and let the user pick.

This worked, but **the agent had no skill-level mechanism for detecting the drift.** The brand-pivot detection lived entirely in the agent's manual reasoning. A less-careful agent invocation could have silently committed the new palette to canonical state without surfacing the strategic decision.

### Why the existing contract didn't catch it

1. **No drift detector at Phase 4 (approval gate).** The skill marks a variant `approved` if the user signals approval — there's no skill behaviour that compares the about-to-be-canonical variant against the brand's documented register and asks *"this variant drifts > N axes from BRAND.md; is this a brand pivot or an exploration?"*

2. **`brand_faithful_inversions[]` in DESIGN.json tracks intentional retentions, not measured drift.** The block records what the seed retained from the brand-faithful inheritance. It does not record how far a final approved variant *deviates* from the documented brand state at approval time.

3. **The pivot decision has high cost.** A silently-committed pivot affects every downstream artifact (other pages re-prototype against the new register, migrate produces new metadata, the brand's identity in PRODUCT.md drifts). Catching the pivot at approval gate is much cheaper than catching it after migrate has run.

### Proposed addition

#### J.1 — Brand-axis drift measurement at Phase 4

When a variant approaches `approved` status, run a **brand-axis drift audit** before transitioning state. The audit measures distance from BRAND.md / DESIGN.md / PRODUCT.md along five axes:

1. **Palette drift.** Count of documented brand tokens that are absent from the approved variant's CSS, plus count of tokens used by the variant that aren't in the documented palette. Score: 0 = perfect inheritance; high = significant palette pivot.
2. **Type-character drift.** Compare rendered display character (proposal F.2 audit) against `typographyMeta.expectedCharacter`. Score: pass / drift / reject.
3. **Register drift.** Compare the variant's section composition motifs against the documented register-flavor (e.g. *"Memoir × Tabloid alternation"*). LLM-as-critic perceptual check.
4. **Anti-reference proximity.** Count of brand anti-references the variant approaches (e.g. *"Kinfolk-luxe-minimal"* if the variant collapses toward a minimal-craft register).
5. **Voice drift.** Compare variant's body copy against `voice.examples.do[]` voice anchors. Score: load-bearing nouns preserved verbatim / paraphrased / substituted.

#### J.2 — Pivot-decision surface

When any axis scores above a documented threshold (default: palette drift ≥ 30% tokens swapped, type-character `reject`, register drift `high`, anti-reference proximity > 0, voice drift `substituted`), the skill refuses silent transition to `approved` and surfaces the pivot decision:

```
Brand-axis drift detected (3 of 5 axes):
  palette       45% tokens swapped (7 new, 4 unused from BRAND.md)
  type-character clean (within expected character)
  register      high drift (Mediterranean-pop register; BRAND.md documents Appalachian outlaw-country)
  anti-refs     0 hits
  voice         clean (load-bearing nouns preserved)

Approving this variant constitutes a brand pivot, not a render refinement.
Three paths:
  (a) commit pivot — amend BRAND.md/DESIGN.md/PRODUCT.md to reflect the new register; downstream pages re-prototype against the amended state
  (b) preserve as exploration — variant stays on disk; state.json records as parallel-exploration-not-canonical; canonical advances a different variant
  (c) discard — variant removed

Pick (a), (b), or (c):
```

#### J.3 — Drift artifact in state.json

Record the audit's findings in `state.json.pages[slug].brandAxisDrift = { axes: {...}, decision: "...", at: "..." }`. This makes the pivot decision part of the artifact history, not an undocumented agent reasoning step.

#### J.4 — Threshold defaults

The default thresholds are conservative — they fire on most genuine pivots but tolerate routine iteration. Per-brand override via `BRAND.md.driftThresholds` should be supported for brands that intentionally evolve fast (rebrand cycles, seasonal campaigns).

### Fix applied this round

Today the agent reasoned about the drift manually and surfaced the pivot to the user, who chose preservation (option (b)). The skill-contract gap was the load-bearing risk — without an explicit drift detector, this pattern depends on agent vigilance. Captured here as a proposal for the skill team to implement.

---

## Failure mode #4 — single-variant first-render forecloses direction exploration

### What happened

The Holler & Hymn home prototype was run as a **single-variant** Mode A render. v1 shipped slop; v2 shipped a strong re-shape (asymmetric collage / hand-painted plywood / revival-tent typography). The v2 is defensible standalone — but it is also **one specific point in the direction space**, picked without comparing to alternative starting compositions. The brand has multiple captured traits that could each carry the brand-faithful Mode A pin to genuinely different visual destinations:

- The HOLLER half amplified → outlaw-country album sleeve / atmospheric photographic-led / spare, cinematic, dark
- The HYMN half amplified → almanac-page / typeset-as-Foxfire-Book / column-led, hand-set, restrained
- The two-register alternation as central motif → collage / sticker-led / marquee-tape-heavy (the v2 chose this)

The user has no way to evaluate the chosen direction against alternatives without rendering them. Iterating on one variant ("make v2 quieter" / "make v2 more atmospheric") risks polishing in the wrong direction — the cost of *direction* error compounds across iterations.

### Why the existing contract didn't surface this

The skill's Phase 2.6 multi-variant fork exists, but is **opt-in only** — triggered by the user typing "3 variants" / "N variants" in their phrase. The default is single-variant. For brand-register Mode A first-renders, this gets the priority backwards: **direction-exploration is highest-value before deep divergence is applied to any single direction**. Polishing one variant deeply doesn't surface that a different starting composition would have been a better direction.

### Proposed addition

#### G.1 — 3-variant fork as the default for brand-register Mode A first-renders

Phase 2.6 default behaviour should flip for first-renders: when `state.json.pages[slug].history` has no prior `prototyped` entry AND register is `brand` AND mode is `Mode A`, **default to 3-variant fork**. Single-variant is opt-in via `--single-variant` flag.

Each variant amplifies a different captured trait per the existing variant role contract (Variant A = faithful + improvements, Variants B+ = one captured trait amplified). The role contract is unchanged; what changes is whether the fork runs by default.

#### G.2 — Sketch-depth, not polish-depth, for first-pass variants

Variants at first-render are **directional sketches**, not deeply-iterated artifacts. Each variant covers enough sections (hero + 2-3 anchors + footer) to make its direction legible. The user picks the winner; **then** deep iteration (anti-toolbox audits, typography fixes, ornament fidelity, etc.) applies to the chosen direction.

The cost of running 3 sketches at first render is lower than the cost of polishing 1 wrong direction. Per the C-cliff guidance, "three weak variants" is the failure mode for vague briefs — but for greenfield Mode A first-render, the brand surface has enough captured traits (palette, typography, voice, tension, motif catalog) to support 3 genuinely distinct sketches without inventing moves.

#### G.3 — Variant role per Mode A first-render

For brand-register Mode A greenfield first-renders, the suggested role allocation:

- **Variant A — faithful + improvements (the current default).** Apply the brief's stated composition direction (e.g. the v2's asymmetric collage / hand-painted plywood). This is the safest defensible direction.
- **Variant B — one captured trait amplified ("the quieter / typographic-led" direction).** Pick a captured trait that pulls toward restraint within the brand — the HYMN half, the hymnal/almanac register, the hand-set typographic motif. Variant B's job is to ask "what if we leaned typographic and restrained?"
- **Variant C — different captured trait amplified ("the louder / atmospheric direction").** Pick a captured trait that pulls toward atmosphere within the brand — the HOLLER half, the outlaw/album-sleeve register, the cinematic motif. Variant C's job is to ask "what if we leaned photographic and atmospheric?"

The three together span the brand's tension axis (HYMN ← centre → HOLLER). The user picks where on that axis the brand actually wants to sit.

#### G.4 — Direction-pick artifact

After the user picks the winning variant, record the pick in `state.json.pages[slug].direction_pick = { winner: "variant-b", reasonings: ["...user feedback..."], at: "2026-..." }`. Subsequent deep iteration replaces the winner's `home-shape-variant-X.md` with a canonical `home-shape.md` (carrying a `replacesVariants[]` history reference); the non-winning variants stay on disk as **discarded-but-preserved** artifacts for honesty (and for re-evaluation if the winner's deep-iteration trajectory disappoints later).

#### G.5 — Alternate-palette exploration on a winning composition (Phase 2.7)

After the user picks the composition winner (G.4) but before deep iteration commits, a cheap **palette-variant exploration step** can run on the winning composition. The structure stays fixed; only `:root` color tokens and atmospheric `rgba()` glow values substitute. This is materially cheaper than re-rendering whole compositions and lets the user evaluate the palette as a separate decision from the layout.

Procedure:
1. The agent generates 3–5 palette variants on the winning composition file. Each variant: (a) substitutes the `:root` palette tokens with an alternative palette, (b) substitutes the hardcoded `rgba()` atmospheric-glow gradients to match the new palette tokens, (c) preserves the full HTML structure unchanged.
2. The alternatives can be (a) seeded automatically from the palette-picker's nearby moves (cold-rotation, warm-rotation, desaturated, inverted-light, complementary), or (b) user-directed ("try this palette extracted from this reference image").
3. The user picks a palette winner. Combined with the composition winner, this becomes the canonical home-proposed.html.
4. Non-winning palette variants stay on disk as preserved exploration artifacts (see § F.5 for the parallel-exploration semantics).
5. If the user picks a palette that **drifts > N axes from the documented BRAND.md palette** (see Failure mode #6 below), surface the brand-pivot decision before committing.

Why this is cheap and worth offering: composition is the load-bearing creative decision (typography character, layout silhouette, motif vocabulary — see Failure mode #1). Palette is tunable downstream without re-composing. Today's Stardust pipeline treats palette as one-shot — set during `direct`, locked through `prototype` and `migrate`. Phase 2.7 introduces a cheap "try a few palettes" step at the moment the composition decision lands but before downstream commits.

**Implementation note:** the substitution can be a deterministic script (sed on `:root` tokens + the 5–7 atmospheric `rgba()` values) — no LLM call required. The hard part is *choosing which palettes to offer*, which is where the impeccable palette-picker (referenced as **F.2** above and `direct/reference/palette-picker.md`) feeds in.

### What this proposal would have prevented

The single-variant v1 → v2 trajectory cost a full failure-analysis cycle to discover that the v1 direction was wrong. If 3 sketches had been generated at first-render, the slop direction would have been **one of three options**, visibly comparable to two alternatives, and the user would have caught the silhouette-shaped slop by comparison rather than by absolute critique. Lower-cost direction-pick decision.

### Fix applied this round

Generated variants B and C **after** the v2 re-shape, surfaced for user comparison and direction-pick. The retroactive 3-variant fork is the corrective for the original single-variant miss. Renamed v2 to v2-Variant-A.

---

## Failure mode #3 — system-font fallback erases the brand's distinctive face

> **Severity recharacterized 2026-05-11 after user critique.** The original framing of this failure as "P2 advisory, defer to Phase 4 polish" understated the load-bearing nature of typography in brand-register Mode A runs. A token-perfect render in the wrong typeface character is the same severity-of-miss as the SaaS-silhouette layout miss documented in Failure mode #1 — both are render-refusal conditions, not advisories. The display type IS the brand's loudest surface; "deferrable" was the wrong default.

### What happened

The display type stack (`'Knockout', 'Saloon', 'Camp Type', 'Bebas Neue', 'Oswald', 'Impact', sans-serif`) listed hand-lettered revival-tent / state-fair-signage faces first. None are system-default on macOS / Linux. The render fell through to **Impact** (or Oswald on systems with it). Impact is heavy + condensed + all-caps-friendly — which fits *generic-bold-poster* — but the brand's reference points are **1940s revival-tent posters / Appalachian state-fair signage / hand-painted plywood roadside signs on US-25**. Impact reads as **News-Ad headline / NFL team / Tumblr meme**, not as the brand's references. The visual collapsed toward "tasteful bold magazine" with the right colors.

### Why the contract didn't catch it (precisely)

1. **The shape brief didn't specify a web-font loading strategy.** The DESIGN.json declared the stack; craft consumed it as `font-family` without bundling. No layer of the pipeline asked "where do these faces come from at render time?"

2. **No critique step checks loadability.** Phase 2.5 was supposed to catch P0/P1 issues; "is the first-listed font actually rendering?" wasn't on the checklist. The deterministic critique detector evaluates rendered HTML, but without a font-availability gate.

3. **The original framing as "P2 Phase 4 polish" was wrong.** The Phase 4 framing assumed typography was a refinement layer — colors and composition first, type later. For brand-register Mode A this gets the priority backwards: **the display type is the brand's loudest visible surface**, more load-bearing than any single section's layout. Recharacterizing as a P1 render-refusal condition aligns severity with brand-faithfulness.

4. **System-font character mismatch is hard to detect via regex/DOM.** Unlike SaaS-silhouette markers (countable layout patterns) or identical-card-grid markers (countable DOM siblings), font character is a perceptual judgment. The audit needs either: (a) explicit per-brand "expected face character" assertions in DESIGN.json that the audit checks against, or (b) an LLM-as-critic pass that compares "captured intent" to "rendered character."

### Proposed addition (sharpened)

#### F.1 — Mandatory font-availability audit in Phase 2.5

Render the page in a headless browser. After `load`, evaluate `document.fonts.check()` for each declared face in the `font-family` stacks. Report per-face:
- **Loaded:** explicit `@font-face`, web-font CSS link, or system-default available.
- **Fallback:** the first-listed face isn't loadable; the browser will fall through.
- **Cascade depth:** how deep into the stack the actual rendered face sits.

**Gate the `prototyped` status on cascade-depth-zero for the first-listed display face** when the brand register is `brand` and Mode A is active. If the brand's distinctive display face isn't loaded, refuse `prototyped` and require either: (a) the shape brief specify a web-font loading strategy (bundle / CDN link / base64 inline), or (b) the brand's DESIGN.json declare a stronger system-default fallback character that passes the "expected face character" assertion.

#### F.2 — Expected face character assertions in DESIGN.json

Add `typographyMeta.expectedCharacter` per tier — a short string naming the brand-intent character (not just family name):

```json
"typographyMeta": {
  "display": {
    "fontFamily": "'Smokum', 'Knockout', ...",
    "expectedCharacter": "1940s revival-tent poster / hand-painted plywood signage / decorative slab with bracketed serifs",
    "fallbackCharacter": "heavy condensed display (acceptable degradation)",
    "rejectedCharacters": ["modern geometric sans (Impact, Oswald)", "humanist sans", "thin display", "ITC-style decorative cursive"]
  }
}
```

The audit reads `rejectedCharacters[]` and refuses `prototyped` if the rendered face matches a rejected character category (perceptual check; LLM-as-critic or human review).

#### F.3 — The "font-fallback ≈ silhouette miss" severity rule

Add to the prototype SKILL.md's failure-modes section: **"Render-character violations are equal in severity to render-composition violations."** Both are render-refusal conditions for Mode A brand-faithful runs. A page with the correct palette + the correct composition + the wrong typeface character is no more "brand-faithful" than a page with the correct palette + the wrong composition + the right typeface. Both collapse the brand surface.

#### F.4 — Web-font deviation from "self-contained"

The impeccable SKILL says "self-contained: no external CSS." The Stardust prototype contract should explicitly carve out an exception for **web-font CDN links** when the brand register is `brand` Mode A and the brand's typography is load-bearing. Document the exception:
- A single `<link>` to Google Fonts (or equivalent) is acceptable.
- The provenance comment names the deviation and the reason ("brand display character cannot be carried by system fallbacks").
- `migrate` later bundles the WOFF2 files as self-hosted assets — but the prototype prioritizes the brand character over the self-contained rule.

### Fix applied this round

Updated `home-proposed.html` to load Smokum (display) + Lora (body) + Caveat (script) + IBM Plex Mono (mono) via Google Fonts `<link>`. Provenance comment documents the deviation from "self-contained." Stack ordering preserves system fallbacks. The display character now renders as decorative-revival-poster (Smokum), not generic-bold-poster (Impact). Re-screenshot to verify the brand character lands.

---

## Failure mode #7 — pipeline structure ≠ slop prevention (validated against High Lonesome)

> **Severity: contract-shaping.** This entry validates Failure modes #1–#6 by running the full Stardust pipeline (`seed` + `brief` + `direct` + `prototype` + `craft` + `critique`) end-to-end on a *second* brand (High Lonesome, the Mediterranean-pop variant of the WNC mountain-spirits direction). The render avoided every documented slop pattern from Failure mode #1 — but **only because the agent applied the documented learnings actively as input to the pipeline**, not because the pipeline itself caught them. Names the gap between "the proposals are tracked" and "the proposals are enforced."

### What happened

High Lonesome run, 2026-05-12. Single-variant Mode A render of the home page. Outputs:

- `demos/uc2-uc3-greenfield/highlonesome/PRODUCT.md` + `DESIGN.md` + `DESIGN.json`
- `demos/uc2-uc3-greenfield/highlonesome/stardust/direction.md`
- `demos/uc2-uc3-greenfield/highlonesome/stardust/prototypes/home-shape.md`
- `demos/uc2-uc3-greenfield/highlonesome/stardust/prototypes/home-proposed.html`

The rendered HTML cleared every anti-pattern from Failure mode #1 (no centered SaaS hero, no identical-card-grid, no Kinfolk-luxe-minimal, no all-caps display, drenched palette across 4 grounds, single cardinal-flash flag-section, italic-classical-serif display loaded via Google Fonts, italic-at-display preserved, Mode A placeholder visual signature for greenfield-missing imagery). Phase 2.5 critique returned 0 P0, 1 P1 (age-gate accessibility regression — caught + fixed pre-`prototyped` gate), 2 P2 (em-dash in `<title>` + cardinal-ground eyebrow contrast borderline), 3 P3 (advisory).

### Where each learning lived during this run

| Learning (from prior failure modes) | Where it actually lived this round |
|---|---|
| Drenched palette deployment (Failure mode #5) | `DESIGN.json.extensions.paletteDeployment.intensity = "drenched"` + `.targetGroundCount = 4` + `.homeSectionGroundSequence = [...]` — new fields per proposal H, applied as proof-of-concept ahead of skill landing |
| Render-character violations = composition violations (Failure mode #3) | `DESIGN.json.extensions.typographyMeta.expectedCharacter` + `.loadBearingRule` — new fields per proposal F.2, applied; the craft invocation passed Google Fonts `<link>` as a hard rule |
| Anti-default composition must be encoded explicitly (Failure mode #1) | `home-shape.md` § Anti-patterns to render-refuse — the brief itself encoded 9 anti-pattern names + the craft invocation passed 12 hard rules and an explicit RENDER-REFUSAL anti-pattern list |
| Greenfield Mode A image-reuse contract | `home-shape.md` § Unsourced content — placeholder visual signature (tinted-off-ground + 1px dashed + mono label + hl-cardinal instrumentation dot) applied to all 6 image placeholders + 4 text placeholders |
| Cardinal-flash one-section-per-route | `DESIGN.json.extensions.paletteDeployment.cardinalFlashRule` + render-refusal hard rule + locked section-ground sequence |
| First-render is the slop render unless brief encodes anti-reflex composition (proposal F) | The shape brief explicitly named "anti-patterns to render-refuse" and "what a designer should see" — the brief did the work proposal F asks the skill to do |

### What the pipeline structurally prevented (for free)

Validation gates the agent did not have to remember:

- `:root` token contract — caught at validation
- Data attributes on every section + `<body>` `data-route` / `data-palette-deployment` — caught at validation
- Provenance comment first child of `<head>` — caught at validation
- Content sourcing scan (would have caught fabricated stockist data; the prototype renders them as `[data-placeholder="true"]` per the contract)
- Phase 2.5 critique gate fired automatically — caught the P1 age-gate regression that the agent would otherwise have shipped silently

### What the pipeline did NOT prevent

The composition-level slop that Failure mode #1 documented (centered SaaS hero, identical-card-grid, Kinfolk-luxe-minimal, all-caps display, ornament-as-Material-Design-illustration, restrained palette deployment) was prevented this round **only because**:

1. The shape brief authored a render-refusal anti-pattern list inline (the agent applied proposals B + C ahead of skill landing).
2. The craft invocation passed 12 hard rules + an explicit "RENDER REFUSAL" anti-pattern list as direct constraints.
3. The DESIGN.json fields (paletteDeployment.intensity, typographyMeta.expectedCharacter, cardinalFlashRule) were authored in the proposed-stage shape so craft could consume them as hard rules.

A naive `/stardust:prototype home` invocation **against the same DESIGN.json** but with a shape brief that omitted the anti-pattern list would still risk slop. The skill alone doesn't enforce the composition-level discipline — it enforces structural + provenance discipline. Composition-level discipline still lives in the agent's hands until proposals B (shape-brief audit), C (rendered-HTML scan), D (seed-to-composition table), F (font-character audit), H.4 (palette-deployment audit), and J.1 (brand-axis drift detector) actually land as skill behavior.

### Validation of the proposed-stage DESIGN.json fields

The proof-of-concept fields applied this round (paletteDeployment, typographyMeta.expectedCharacter + .rejectedCharacters + .loadBearingRule, cardinalFlashRule) all worked as **consumer contracts**:

- They lived in DESIGN.json adjacent to the existing `divergence` block.
- The craft invocation read them as hard-rule passthroughs.
- The rendered HTML respected them (cross-checked via grep / contrast roster / structural data-attribute scan).
- The Phase 2.5 critique gate fired correctly when one was violated (P1 accessibility regression).

Proposal-stage fields are not just paperwork. They become enforceable the moment any downstream consumer (craft, critique, migrate) reads them. The upstream skill upgrade is the *automation* — but the field schema is already validated.

### The remaining gap, sharpened

The minimum skill change that would close the slop-prevention gap **for naive invocations** is:

- **Phase 1 shape-brief authoring should auto-populate the "anti-patterns to render-refuse" section** when Mode A + signal-strong + drenched fire, sourced from `PRODUCT.md` § Anti-references + the universal-hardening anti-toolbox list. The agent's job becomes adding brand-specific refinements; the boilerplate render-refusal list lands automatically.
- **Phase 2 craft invocation should auto-include the hard-rule list** when DESIGN.json carries the proposed-stage fields. Craft today receives the shape brief as freeform feature description; it should also receive a structured `hardRules[]` array derived from DESIGN.json + the shape brief's anti-pattern section.
- **Phase 2.5 critique should add a brand-axis drift summary** (proposal J.1) and a "render character vs. expected character" perceptual check (proposal F.2 audit), not just the deterministic detector.

Until those land, the cross-session memory + this draft + the agent's vigilance constitute the slop-prevention layer. The High Lonesome render is evidence the layer works — and evidence it is still load-bearing.

### What this proposal would have changed about the High Lonesome run

If proposals B + F.2 + H.4 + J.1 had landed:

- The shape brief's anti-pattern list would have been pre-filled by the skill (Phase 1.5 audit) rather than authored by the agent.
- The Phase 2.5 critique would have emitted a brand-axis drift summary as a first-class artifact (zero drift, since this is a single-variant first-render).
- The cardinal-ground eyebrow contrast P2 would have been caught by the contrast-roster audit (proposal F.1 extended) and not just by the deterministic critique.
- The agent would have shipped the same render — but without holding the slop-prevention layer in its head.

The fact that the run shipped clean **despite** the proposals being proposal-stage validates the *content* of the proposals (the rules work). The gap is the *automation* (the agent still has to assemble them per-run). Until the gap closes, treat this draft + the memory files as the authoritative source — re-applied every run.

---

## Failure mode #8 — static first-render leaves brand energy on the table

> **Severity: contract-shaping.** A token-perfect, composition-correct, brand-faithful first render that ships without motion reads as a *brochure* of the brand, not the brand itself. The page can be excellent typographically and color-wise and still feel inert. Motion is what makes a render feel like a designed site, not a designed page.

### What happened

The High Lonesome first render (validation case in Failure mode #7) shipped with zero motion: no scroll-reveal, no entrance choreography, no hover micro-interactions, no atmospheric movement, no age-gate fade. The page rendered correctly but felt static when the user opened it. The cluster of three bottles, in particular, sat in place from page-load — losing the "specimens-being-placed" reading the composition intended.

User feedback: *"now add some motion to make the site more interactive and entertaining."*

Validated motion package (2026-05-12) for the High Lonesome home prototype — 5 items chosen for the brand's "slow, joyful, reverent" register:

1. **Scroll-reveal** — every below-fold section fades + slides up 28px on intersection. 900ms duration, `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo). Threshold 0.12, root-margin `0px 0px -8% 0px`.
2. **Bottles-cluster fan-in choreography** — the three labels enter from below with stagger: center label 80ms delay (1200ms), left/right labels 380ms delay (1300ms each). Each animates from `translateY(60-90px) scale(0.92)` to final rotated/elevated state. The center bottle leads, the side bottles follow — reads as "specimens placed on the surface, center first, then flanking."
3. **Hero copy stagger** — eyebrow / wordmark / tagline / CTAs reveal in sequence on initial load (350ms / 500ms / 700ms / 900ms delays). 1100ms duration. Establishes the brand voice before any scroll.
4. **Ornament-rule SVG draw-in** — hand-painted SVG paths inside `[data-reveal]` sections paint themselves via `stroke-dashoffset` (240 → 0) on intersection. 1600ms duration with 300ms delay. The hand-painted ornament *appears* hand-painted because it's drawing in real time.
5. **Cluster hover micro-interaction** — hovering over any of the three bottle labels lifts it 8-36px and scales 1.02. 320ms ease-out. Rewards interaction without disturbing the composition.

Plus age-gate fade-out (720ms) replacing the previous instant `display: none` dismiss.

### Why the brand register survives motion

The brand is "meditative mountain music wearing Italian summer color. Single voice in a wide place. Saturated, joyful, slow." A naive motion package would default to SaaS-pattern motion: 200-300ms tight ease curves, bounce-on-click, parallax everywhere. That would break the brand register entirely.

The High Lonesome motion package survives the register because:

- **Durations are long.** 900-1600ms for reveals, not the 200-300ms SaaS default. The page feels slow and deliberate, matching "slow declaratives."
- **Easing curves are exponential out, no bounce, no elastic.** `cubic-bezier(0.22, 1, 0.36, 1)` lands softly, no spring. Matches "reverent, not irreverent."
- **Choreography respects composition.** The cluster fan-in lands at the same final rotated/elevated state the composition specifies — motion *delivers* the composition, doesn't replace it.
- **Atmospheric movement, not theatrical movement.** No parallax, no Ken Burns, no fixed-position elements. The motion is the page coming into being, not the page performing.
- **`prefers-reduced-motion: reduce` is fully honored.** JS short-circuits before adding `has-motion` class; CSS rules under `body.has-motion` never fire. Users who prefer no motion get the static composition unchanged.

The result: motion *amplifies* the brand register rather than fighting it.

### Why the contract didn't surface this

The prototype skill's current contract authors `home-proposed.html` as a static composition. Motion is treated as a Phase 4 iteration concern (via `$impeccable animate` chat-driven refinement), not a first-render requirement.

For brand-register Mode A first-renders against a `signal-strong` brand surface, this gets the priority backwards: **a static-first render is incomplete for brand register, the same way a flat-color render is incomplete for drenched-palette intent.** The motion isn't decoration; it's how the design language deploys *over time*.

### Proposed addition: motion-by-default for brand-register Mode A first-renders

#### M.1 — Motion package as a first-render contract output

When the resolved direction is brand-register Mode A with `signal-strong` brand surface, the prototype skill should author motion as part of the proposed file, not as a later iteration. Specifically, the shape brief should specify:

- **Section reveal policy** — which sections reveal on scroll (default: all below-fold); duration, easing, stagger.
- **Composition entrance choreography** — for any section whose composition is itself the brand moment (hero, the cluster section, the loud-flag CTA section), specify a choreographed entrance: per-element delays, transform/opacity keyframes, total duration ≤ 1500ms.
- **Ornament motion** — if the brand uses hand-painted ornament SVGs (per BRAND.md imagery lanes or DESIGN.md ornament-rule), they should draw in on reveal via `stroke-dashoffset`.
- **Hover micro-interactions** — at minimum on primary interactive composition elements (CTA, cluster labels, primary navigation). Subtle, ≤ 400ms.
- **Initial-load reveal** — for content above the fold (hero), a staggered fade-in sequence rather than instant render. Establishes the brand voice through pace.
- **`prefers-reduced-motion: reduce` honored** — gated via `body.has-motion` class added by JS only when motion is preferred; all motion CSS scoped under that class.

The motion package is **brand-tuned, not template**. The shape brief author picks duration / easing / choreography based on the brand's tone axis (slow / fast), register axis (memoir / tabloid / catalogue), and tension language ("at full volume" → bolder motion; "hushed" → barely-there motion).

#### M.2 — Easing curve register-mapping table

Per the brand's resolved register / tone axes, pick the motion easing from:

| Register / tone | Curve | Duration window | Notes |
|---|---|---|---|
| Memoir / contemplative / slow | `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo) | 900-1500ms | High Lonesome default |
| Tabloid / urgent / loud | `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart) | 400-700ms | Holler & Hymn-shaped |
| Editorial / luxe / restrained | `cubic-bezier(0.4, 0, 0.2, 1)` (Material-standard) | 600-900ms | When restraint is intentional |
| Catalogue / functional / direct | `cubic-bezier(0.32, 0.72, 0, 1)` | 300-500ms | Product-register adjacent |

Bounce / elastic / overshoot curves are NEVER picked for brand-register. They read as Web-2010-jQuery slop.

#### M.3 — Composition choreography as a first-class artifact

Sections whose composition is the brand moment (hero, the cluster section, the loud-flag CTA, any "specimen plate" or "tasting flight" arrangement) need explicit entrance choreography in the shape brief. Without it, craft renders them as static and the user has to ask for motion as a follow-up.

Suggested choreography patterns per section archetype:

- **Full-bleed hero with overlaid copy** — copy staggers in (eyebrow → wordmark → tagline → CTAs) on initial load. Background photo holds.
- **Specimen-plate / cluster arrangement** — center subject enters first (the brand's "primary" specimen), flanking subjects follow with delay. Each element animates from a "before placement" state to its final composed position. Total duration ≤ 1500ms.
- **Cardinal-flash flag-section** — section ground fades up. CTA pulses gently on hover. No additional motion (the loud color carries the energy).
- **Cream interlude / surface inversion** — fade + slow rise. Reads as "a quieter page being turned."
- **Long-form text section** — fade + slide-up uniformly. No staggered reveal of paragraphs (reads as gimmick).
- **Footer / colophon** — minimal motion. Fade only, no slide.

#### M.4 — JS contract for motion

The motion JS should:

1. Short-circuit when `matchMedia('(prefers-reduced-motion: reduce)').matches`.
2. Add `body.has-motion` class to scope all motion CSS.
3. Use `IntersectionObserver` (with feature-check fallback) for scroll-reveal triggers, `threshold: 0.12`, `rootMargin: '0px 0px -8% 0px'` (reveal slightly before the bottom edge so motion completes before the user scrolls past).
4. Observe all `[data-reveal]` elements once; `unobserve` after first reveal.
5. Stay inline at end of `<body>` — no external script dependencies (preserves "self-contained" prototype contract).

#### M.5 — Render-validation check

Phase 2 validation should add: **does the prototype carry motion?** If `signal-strong` brand surface + Mode A + no rebrand override, motion is required. Validation fails if:

- No `[data-reveal]` attributes on sections.
- No `prefers-reduced-motion` media query handling.
- No JS-driven motion gating (motion would fire even when user prefers reduce).

### What this proposal would have changed about the High Lonesome run

If proposal M had landed:

- The shape brief's "Interaction model" section would have specified the 5-item motion package per the register-mapping table.
- Craft would have rendered the motion as part of the first proposed file.
- The user wouldn't have needed to ask for motion as a follow-up.
- The cluster fan-in choreography would have been a load-bearing artifact (specified in the brief, validated at render), not an after-thought iteration.

The High Lonesome motion work this round (commit pending) is the validation: same brand, same composition, with motion vs. without — and "with motion" reads as a designed site, "without" reads as a flat composition. Motion is brand-load-bearing for brand-register Mode A.

### Source

High Lonesome home prototype iteration, 2026-05-12. User feedback drove the addition; motion package validated end-to-end via Playwright (initial-state opacity 0 / translateY 28px, scroll-trigger fires, final state matches composition, prefers-reduced-motion suppresses all motion correctly).

---

## Failure mode #9 — brand-fidelity crowds out a11y when the motif catalog is the brief's primary contract

### What happened

Chapitô (2026-05-12). The prototype skill (run via hand-authored render) executed every motif from the brand's load-bearing catalog — sunburst hero, X-marquee, highlighter manifesto, 4 color-block sections, chip-tag cluster, big-dark bottle hero, medallion footer, persistent bottom bar. Visual fidelity to the brand register was strong. But when `impeccable:audit` ran against the rendered HTML, it flagged:

- **Missing `<h1>`** — the medallion image was the *de-facto* page title but no h1 existed. AT users got no document title.
- **No `lang=` attribute on any of 18 dual-language spans** — the prototype's EN/PT toggle used `data-lang` data attributes + CSS visibility, but no `lang="en"` / `lang="pt-PT"` markers. Screen-reader voice synthesis would pronounce all content in the document's root language regardless.
- **Touch targets <44px** — the persistent bottom bar (36px tall), the iconlinks footer (24px hit-box), the lang-toggle pill (16×40px) all below WCAG 2.5.5 AA Enhanced.
- **Bottle PNGs eager-loaded with no `width`/`height`** — six 600KB–1.2MB images on initial paint, layout shift inevitable.

The render had executed the **brand contract** (motif catalog + color tokens + typography) but not the **document contract** (semantic skeleton + image perf + i18n markup).

### Why

The shape-brief + render contract emphasises the motif catalog as the brand's load-bearing surface. Each motif is described in DESIGN.json + home-shape.md + direction.md — multiple-source pressure on the cosmetic layer. The semantic skeleton (heading hierarchy, lang attrs, list semantics, touch sizing) is not described per-brand; it sits in PRODUCT.md § Accessibility & Inclusion as a one-paragraph nod, but doesn't propagate into the per-page shape brief or the render contract.

LLM renderers consistently prioritise the *named* contract over the *implied* contract.

### Contract change — semantic skeleton becomes a render-time requirement

The shape brief (`stardust/prototypes/<slug>-shape.md`) needs a new section that's mandatory alongside the motif list:

```markdown
## Semantic skeleton (LOAD-BEARING)

- The page has exactly one `<h1>`. (Specify: visible or visually-hidden; what it contains.)
- The page has the following landmarks: header, main, footer (each with appropriate role or aria-label).
- Heading hierarchy: h1 → h2 per section → h3 per sub-section. No jumps.
- All interactive elements have a min touch-target of 44×44px (or 24×24 with sufficient spacing per WCAG 2.5.5).
- All decorative images use `alt=""`; informational images use descriptive alt.
- All images have explicit `width` and `height` attributes.
- All below-the-fold images use `loading="lazy"`.
- For bilingual / multilingual pages: every translatable element has a `lang=` attribute matching its visible language.
- Focus-visible state defined globally (matches DESIGN.md § Accessibility).
```

This becomes a non-optional render-output requirement, sibling to the motif catalog. The prototype skill validates against it (audit-style check) before emitting `<slug>-proposed.html`.

### Proposal scope

This change is a small extension to the existing shape-brief contract. It lives in `prototype` (not `direct`, not `migrate`) because the per-page semantic skeleton is per-page knowledge. Landed alongside the proposals A–M; doesn't require new fields in DESIGN.json (the rules are document-level, not token-level).

### Cross-references

- Proposal C (rendered-HTML anti-pattern scan) already runs at render time; extend it to flag missing-h1 / missing-lang-attrs / sub-44px-touch-targets.
- This proposal can be auto-enforced once the prototype skill calls `impeccable:audit` as a closing phase (see failure mode #10 below — "impeccable as final-pass contract").

## Failure mode #10 — `impeccable:critique` + `audit` catch brand-rule violations that the LLM render misses

### What happened

Chapitô (2026-05-12). The render produced 8 motifs faithfully, but `impeccable:critique` and `impeccable:audit` caught two load-bearing rule violations the render had passed over:

- **Italian-language leak in section 6 heading** — PT mode showed *"Prendete, e Provai"*. "Prendete" is Italian imperative. BRAND.md anti-references explicitly forbid Italian-language words anywhere in copy. The render had inherited the phrase from a draft CONTENT.md without rotating it.
- **Drop-shadow on bottle hover** — `.bottle-slot:hover>*{filter:drop-shadow(...)}`. DESIGN.md §4 Elevation: "flat by conviction. No drop shadows." The render had added the hover state without checking the rule.

Neither violation was visible at first-render review. Both were caught by the critique pass running against the brand-rule contracts.

### Why this matters

Running `impeccable` against a Stardust render is fundamentally different from running it against a generic frontend. The brand-faithful contract in PRODUCT.md + DESIGN.md provides specific rules to test against (anti-references list, palette deployment rules, typography rules, elevation rule). The pipeline's value is highest when it has these rules as inputs, not when it's run blind.

### Contract change — `impeccable:critique` + `audit` + `adapt` as the closing phase of `/stardust:prototype`

After the render completes (`<slug>-proposed.html` is written), the prototype skill chains into:

1. `impeccable:critique <slug>-proposed.html` — runs LLM-design-review + deterministic-detector, produces a critique report.
2. **Auto-fix the P0/P1 brand-rule violations** the critique surfaces (the ones tied to explicit BRAND.md anti-references or DESIGN.md named rules). Don't touch the P2/P3 stylistic findings without user input.
3. `impeccable:audit <slug>-proposed.html` — runs the 5-dimension technical audit (a11y, perf, theming, responsive, anti-patterns).
4. **Auto-fix the P0/P1 audit findings** scoped to a11y + image-perf + theming (the deterministic categories). Leave P2/P3 responsive nits for the user.
5. `impeccable:adapt <slug>-proposed.html` — runs the responsive / multi-device pass. Auto-applies if the audit found `Responsive ≤ 2/4`.

This means a `/stardust:prototype` invocation produces TWO artifacts: the initial render AND the impeccable-polished render. The motif catalog stays load-bearing for the first render; the impeccable contracts stay load-bearing for the polish pass.

### Proposal scope

This is a workflow change to the prototype skill's exit phase. Doesn't change the render contract; only adds the closing-pipeline call. The skill needs to know which P0/P1 categories are auto-fixable (a11y semantic skeleton, brand-rule violations against explicit anti-references) vs which need user input (composition rhythm, palette deployment intensity).

Validated against Chapitô; saved 4 critique fixes (Italian leak, drop-shadow, cravo bookend monotony, chip readability) + 9 audit fixes (h1, 18× lang attrs, touch targets, image dims, role=list, aria-label, etc.) + 5 adapt fixes (mobile bottle text, mobile tape rotation, mobile cutout retention, credits-bar simplification, safe-area-inset).

## Pitfalls / gotchas (cross-cutting)

### CSS specificity tie — stagger-reveal overrides positioning transforms

`[data-stagger].in>*` has specificity (0,2,0): one attribute selector + one class. So does any `.bottle-slot.bX` (or equivalent) rule with two classes. When both target the same element, **source order decides** — and the stagger CSS is usually declared *later* (in the reveal section near the bottom of the stylesheet), so it wins on the tie. The stagger rule sets `transform: translateY(0)`, which **overrides the positioning transform** the element relies on for its layout (e.g. `translate(-50%,-50%) rotate(Xdeg) translateY(-200%) rotate(-Xdeg)` for a radial slot).

**Symptom:** elements with positioning transforms collapse to viewport center / corner when the stagger reveal completes.

**Fix:** for elements that have their own positioning transforms, use `data-reveal` on the *parent* (single fade-in via opacity) instead of `data-stagger` on the parent (cascade-fade via transform on every child). The reveal CSS for `[data-reveal]` only sets transforms on the reveal element itself, not its children, so positioning transforms on children survive.

**Validated:** Chapitô iteration 2. The 6-bottle orbit broke when I switched `data-stagger` to `.orbit` instead of `.hero-ring`. Bottles stacked at center. Fix: `data-reveal` on `.orbit` (the parent fades in as a unit; bottles inside keep their positioning transforms).

### Radial composition rotation: carousel vs ferris-wheel

Two distinct rotation patterns for radial-arranged elements (bottles around a medallion, pendants around a center, badges around an anchor). The choice tracks the brand register; pick deliberately, document the choice in the shape brief.

**Carousel pattern (top points inward).** Each element's "top" axis faces the center of rotation. The element rotates *with* the ring — as the ring turns, each element's local orientation updates. This is the *merry-go-round* feel — horses face inward, carriages tilt with the ring. Brand register: fairground, big-top, ornament-led.

- CSS: each slot's static transform ends with `rotate(180deg)` (so the element's "up" axis points radially inward from its position).
- No counter-rotation animation on the inner content.
- The ring's `animation: orbit-spin Xs linear infinite` carries the slots with it.

**Ferris-wheel pattern (top stays upright).** Each element's "top" axis stays vertical in world frame. The ring rotates; the elements counter-rotate at the same rate so they always read upright. This is the *Ferris wheel* feel — gondolas swing to stay level even as the wheel turns. Brand register: modern, clean, label-readable.

- CSS: each slot's static transform ends with `rotate(-Xdeg)` (counter-rotates the slot's static angular position).
- Plus an `animation: orbit-counter Xs linear infinite` on the inner content, opposite direction to the ring.
- Math: at any time `t`, the inner content's net rotation is `ring_rotation_at_t + slot_static + inner_counter_at_t = 0` (upright).

Both patterns are validated. Chapitô used carousel (top inward). High Lonesome would use ferris-wheel if it had a radial composition.

### `display: none` hides text from sighted users but leaks to some screen readers; pair with `aria-hidden` for bilingual systems

When implementing a multilingual page with parallel-content spans (e.g. `<span data-lang="en">...</span><span data-lang="pt">...</span>`) toggled via CSS `display: none`, modern engines DO remove the hidden span from the accessibility tree. But:

- Some legacy screen readers ignore the CSS state and announce both spans.
- "Read all" reader-modes in browsers (Safari, Firefox) sometimes read hidden content.
- SEO crawlers count hidden text against the page's word inventory.

**Belt-and-braces:** every translatable element gets a `lang=` attribute matching its visible language (`lang="en"` / `lang="pt-PT"` / etc.). The non-active span(s) ALSO get `aria-hidden="true"` toggled dynamically by the language-toggle script, in addition to the CSS `display:none`.

For the language toggle button itself: the visible text alternates ("PT" when EN is active, "EN" when PT is active), so set a dynamic `aria-label` ("Switch to Portuguese" / "Switch to English") via JS — the visible text inside the button is `aria-hidden="true"` since it's decorative shorthand for the action.

**Validated:** Chapitô iteration 3. Audit P0 finding ("Hidden-language DOM leaks to screen readers"). Fix added `lang=` attrs to all 18 dual-language spans + `aria-hidden=true` on toggle text + dynamic aria-label refresh on toggle click.



- **The agent will substitute "manual critique" for "automatic critique" when fast iteration is wanted.** The skill should refuse to mark `prototyped` when the automatic detector didn't run unless `--no-critique` was the user's explicit instruction.
- **Token-perfect ≠ brand-faithful.** Mode A pins palette and type. Mode A does *not* automatically pin composition, hierarchy, density, motif, or layout pattern. The seed roll's other dimensions are supposed to drive those — but only if there's a translation contract (proposal D).
- **The shape brief is the load-bearing artifact.** Slop-in / slop-out. The audit (proposal B) is the cheapest place to catch the failure.
- **Critique findings on cosmetic issues (color counts, contrast) do not exonerate the render from silhouette-level issues.** A P1 fixed on the neon-dot count doesn't mean the render is brand-faithful. The deep-structure audits (C) are independent.
- **"First render is the brief made literal."** A polished render on a default-shape brief is still slop, just polished slop. Re-author the brief, don't iterate the render.

---

## Open questions / TBD

- Should the brief audit (proposal B) refuse-and-rewrite, or refuse-and-ask? Refuse-and-rewrite is faster but less under-the-user's-control. Refuse-and-ask preserves brief-author agency.
- The seed-to-composition table (proposal D) — what's the canonical home for it? Inside `prototype/reference/seed-composition-map.md`, or as a sibling reference shared with `direct`? Probably the latter, since `direct` is where the seed rolls and should be aware of the composition implications.
- Anti-toolbox audit detection: regex / DOM-walk in JS, or LLM-as-critic? Regex is deterministic but brittle; LLM-as-critic catches subtler hits but is non-deterministic. Hybrid (regex first-pass + LLM for the remainder) probably wins.
- Should `--no-critique` exist at all for Mode A brand-faithful first runs? The skill could refuse the flag when the run is first-render against a `signal-strong` brand surface. Inconvenient for the agent; safer for the output.

---

## Reference materials

- **Worked example, slop side:** `demos/uc2-uc3-greenfield/site/stardust/prototypes/home-proposed.html` v1 (the first render — the one this doc analyzes).
- **Worked example, re-shape draft (composition):** the re-shape brief in the conversation that triggered this doc — captures the corrective composition direction per section.
- **Slop-recognition cues:** the `What I shipped` table in the user's correction message — the table maps the brand's stated anti-references to the rendered output 1:1.
- **Sibling living-drafts:** `context/stardust-seed-brief-skill.md` (greenfield-entry commands); `context/motion-demo-skill.md` (demo-building skill).

## Brands this draft is based on

- **Holler & Hymn** (first failure case). The brand's documented anti-references (Kinfolk-luxe-minimal, Brooklyn industrial, Wes Anderson costume, Etsy folk, generic country signage, craft-beer label, Generic-2026-SaaS, identical-card-grid, hand-imperfect-required) constituted the entire failure surface. Five of nine anti-references were directly shipped. The contract additions above are meant to catch precisely this pattern.

- **High Lonesome** (validation case, 2026-05-12). Mediterranean-pop variant of the WNC mountain-spirits direction. Single-variant Mode A render through the full Stardust pipeline (seed + brief + direct + prototype + craft + critique). Validated Failure mode #7: when the agent applies the documented learnings actively (anti-pattern render-refusal list in the shape brief, hard-rule passthrough in the craft invocation, paletteDeployment + typographyMeta proposed-stage fields in DESIGN.json), the pipeline shipped a clean render. The same pipeline without those active inputs would still risk slop. The brand's render-refusal list (drenched palette deployment, italic-at-display, cardinal-flash one-section-per-route, no SaaS hero, no 3-col card grid, no all-caps display, Mode A placeholder visual signature) all landed correctly.

  Subsequent iterations on the same prototype validated additional failure modes / proposals:
  - **Pattern 7 (workflow-patterns) — image as atmospheric texture, not as inline object.** First-pass imagery (Unsplash for atmospheric/landscape lanes, Gemini 3 Pro Image Preview for hand-painted bottle labels) wired into 4 sections via section-background + scrim + atmospheric overlay; sharpened the brand-owner-authored bright-line to "final brand artifacts only; first-pass exploration acceptable as draft when clearly marked."
  - **Pattern 8 / Failure mode #8 — motion as a brand-faithful first-render output.** 5-item motion package (scroll-reveal, cluster fan-in choreography, hero copy stagger, ornament SVG draw-in, hover micro-interactions) landed with `prefers-reduced-motion` respect. Drove the proposal M (motion-by-default for brand-register Mode A).
  - **`impeccable:adapt` for mobile.** Tap-target audit (19/20 below 44pt initial → 20/20 effective after `::before` hit-area expansion pattern); credits-bar mobile padding; photo credit chips mobile bump. Desktop layout fully preserved (verified via Playwright pre/post measurement).

Add new entries when subsequent brands surface a new failure mode or validate a proposed addition.
