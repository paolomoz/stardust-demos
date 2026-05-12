# Stardust workflow patterns — living draft

> Meta-patterns surfaced while building Holler & Hymn that don't fit neatly into the per-skill living-drafts (`stardust-seed-brief-skill.md` / `stardust-prototype-skill.md` / `motion-demo-skill.md`). These are cross-cutting workflow behaviours and user-preference shapes that the agent + skill should support, captured as standalone patterns for the upstream skill team and for future builds in this project.
>
> **How to maintain:** update inline whenever a build surfaces a workflow pattern that recurs but isn't skill-specific. Pair-docs cross-reference where the pattern intersects with a skill's contract.

---

## Pattern 1 — Private brand reference for taste-calibration

A brand build is often inspired by an existing brand artifact (a website, an album cover, a magazine spread) whose tonal qualities the user wants to channel but whose identity must **not surface** in the new brand's committed copy or artifacts.

### When this applies

- The user provides a private reference URL / image / file as direction.
- The user says some variant of *"never make it explicit that we're inspired by this"* / *"don't name this reference"* / *"private reference"*.
- The new brand's documented identity should read as original, not derivative.

### How to handle it

- **Drop the reference into a non-committed location.** Recommended: `site/brand/_private/` (or equivalent path under the project), added to `.gitignore`. The agent reads from it freely for tonal calibration; the path stays out of git history.
- **Reference it in the agent's reasoning, not in committed artifacts.** When the agent reasons publicly about brand direction (per Stardust's "open and reasoned" principle), the reference can be named in the conversation. When the agent writes to `BRAND.md` / `PRODUCT.md` / `DESIGN.md` / `direction.md` / page copy, the reference is **never named**. The brand's documented references list (in BRAND.md) lists abstracted source material the brand belongs to ("1940s revival-tent posters", "old WNC fruit-crate labels") — not the specific reference artifact.
- **Brand anti-references can borrow from the reference's anti-patterns indirectly.** If the reference brand explicitly refuses Kinfolk-luxe-minimal, the new brand can refuse the same — but the documentation should phrase the refusal in the new brand's own terms.
- **In skill provenance:** the `_provenance.synthesizedInputs[]` array can include the private reference path *only if* the path is gitignored. Otherwise: omit.

### Why this matters

LLMs trained on the broader web will recognize references from a few visual cues; naming the reference in committed copy creates discoverable links between the new brand and the inspiration. The agent's job is to channel the reference's *register* (the central tension, the visual rhythm, the irreverence engine) without producing a discoverable derivative.

### Source

Holler & Hymn used a private reference (an Italian artisanal-liqueur house's website) as inspiration. The brand's central tension, the irreverent product-naming wordplay, and the imagery direction were channelled from this reference. The reference is named nowhere in any committed file under `demos/uc2-uc3-greenfield/`. The agent inspected it once via Playwright (under `/tmp/`, non-committed) for tonal calibration.

### Proposed skill integration

`/stardust:seed` should support a `--private-reference <path>` flag that:
- Reads from a gitignored path
- Uses for tonal calibration in the agent's reasoning
- Does NOT surface in `_provenance.synthesizedInputs[]` unless explicitly opt-in (e.g. `--private-reference-allow-provenance`)
- Surfaces a confirmation prompt: *"the reference at <path> is being used for direction but will not appear in any committed artifact. Confirm?"*

---

## Pattern 2 — Palette extraction from a reference image

Users sometimes provide a screen capture / mood board / album cover and ask for a brand palette derived from it. This is a distinct workflow from impeccable's palette-picker (which rolls palettes from named style references) — it requires deriving tokens from pixel data + naming them per the brand-native naming rule.

### Procedure (manual, when an automated extractor isn't available)

1. **Inspect the image** for distinct color regions: dominant page surface, primary accents, secondary accents, gilt-equivalent, neon-equivalent, body text color, decorative motifs.
2. **Identify 6–10 tokens** by tonal role (not just by sampling random pixels). Each token gets:
   - role name in the new brand's vocabulary (per the brand-native naming rule — never `Primary`, `Secondary`, `Alarm`)
   - hex value
   - intended usage rule (where in the design system it appears, where it does NOT appear)
3. **Validate the palette as a deployable system.** Check:
   - Contrast ratios between proposed text-on-surface pairs (WCAG AA minimum 4.5:1 for body)
   - Whether each token has a distinct semantic role (no two tokens fighting for the same context)
   - Whether the palette covers the design system's needs (ground, surface, body text, primary accent, secondary accent, gilt, alert/neon)
4. **Document the palette in DESIGN.md / DESIGN.json** with Named Rules per quarantined token.

### Distinction from impeccable's palette-picker

Impeccable's palette-picker rolls palettes from named style references (e.g. *"Brutalist Dawn"*, *"Cottage Industry"*) — it ships a small library of curated palettes the agent picks from. Image-derived palette extraction is a different workflow: the user provides the source, the agent derives tokens. Both should coexist in the toolchain.

### Source

Today's session: 7-token Mediterranean-pop palette extracted from a private reference screen capture of an Italian liqueur house's home page. Palette tokens (coral-pink `#f0a99e` · vermilion `#e54a1c` · mustard-yellow `#eac246` · cyan `#5cc1c0` · teal-deep `#1d4250` · cream-bone `#f9efd8` · ink-brown `#2d1a14`) were authored as a brand-direction exploration, not committed to Holler & Hymn's canonical palette.

### Proposed skill integration

A new sub-skill `/stardust:extract-palette <image-path>` that:
- Accepts a local image file or a private URL
- Returns 6–10 tokens with role-name suggestions + hex + WCAG validation
- Surfaces the palette as a candidate for `/stardust:seed` input or as a Phase 2.7 alternate-palette exploration (per `stardust-prototype-skill.md` proposal G.5)
- Records the extraction in `_provenance.extractedFrom` with the source path (subject to the private-reference rule above)

---

## Pattern 3 — Render-before-discussing (user-preference signal)

The documented Stardust + impeccable flow assumes the agent surfaces a plan / brief / shape and waits for the user's `"go"` before rendering. For some users this is the right pace; for others, **render-first** is more productive — they want to see the artifact and react, not discuss the brief in depth.

### How to detect the preference

Signals that the user prefers render-before-discussing:
- Short `"go"` / `"yes"` answers to plan-confirmation prompts without detailed feedback
- Requests to *"just show me"* / *"render it"* / *"start with X"* / *"open it"*
- Iteration vocabulary that describes the artifact ("the bottles section is bland"), not the plan ("the bottles section should be a grid")
- Multiple consecutive `"commit"` / `"push"` / `"go"` directives indicating high velocity preference

When 2+ signals fire in a session, treat the user as **render-first preference** and bias toward shorter plan-confirmation surfaces.

### Render-first mode behaviours

When this preference is detected, the agent should:

- **Compress plan-confirmation surfaces.** Instead of authoring a 1000-word shape brief and waiting for full review, surface a 200-word summary with explicit decisions and ask for redirection on specific points only.
- **Render at sketch-depth first.** Per the 3-variant fork pattern (`stardust-prototype-skill.md` proposal G.1), default to 3 sketches at first-render rather than one polished variant.
- **Iterate via re-render, not via discussion.** When the user surfaces feedback, default to producing a new render rather than authoring a new shape brief and asking for re-confirmation. The shape brief still gets updated, but in parallel to the render — not as a gate.
- **Surface decision-points concisely.** Use comparison tables, viewport screenshots, and short-form trade-offs. Long prose that walks through the agent's reasoning slows render-first users down.

### Risks and mitigations

- **Risk:** render-first wastes effort when the direction is wrong (one whole render down the drain).
- **Mitigation:** 3-variant fork at first-render surfaces multiple directions cheaply, so one of them is more likely to be close.
- **Risk:** under-discussion leaves brand-specific constraints unexamined (e.g. the user doesn't see that the brief is slop-shaped before craft renders it).
- **Mitigation:** the prototype skill's proposed shape-brief anti-pattern audit (`stardust-prototype-skill.md` proposal B) catches slop-shaped briefs pre-render even when the user has skipped detailed review.

### Source

Today's session: the user moved fast through multiple `"go"` / `"yes"` / `"commit and push"` / `"open it"` directives, redirected after seeing renders rather than via plan discussion, and surfaced critique through artifact comparison rather than brief review. The user-preference signal was clear; the agent's documented "wait for go" flow was friction. Adjusted in real-time but not formalized as a skill behaviour until now.

### Proposed skill integration

Detect the signal automatically over the first 3–4 turns of a session. When detected, switch the agent into render-first mode for the remainder of the session. The mode can be force-enabled via `--render-first` flag on any Stardust sub-command, force-disabled via `--discuss-first`.

State this in the skill's user-facing routing: *"Stardust will adjust pacing based on your iteration style — short / fast / 'go' signals enter render-first mode; detailed / interview-driven signals stay in discuss-first mode. Override with `--render-first` or `--discuss-first` on any sub-command."*

---

## Pattern 4 — Brand-pivot as a first-class decision artifact

(Cross-references `stardust-prototype-skill.md` § Failure mode #6 — proposal J.)

When a user's iteration drifts the rendered output far from the documented brand state, the **decision to pivot the brand vs. preserve the exploration** is a first-class artifact, not an undocumented agent reasoning step. Today's session surfaced this manually; the skill should formalize it.

### What lives in state.json

After a brand-axis drift detector fires (proposal J.1 in the prototype draft), the user's decision is captured per `state.json.pages[slug].brandAxisDrift`:

```json
"brandAxisDrift": {
  "detectedAt": "2026-05-12T00:00:00Z",
  "axes": {
    "palette":       { "score": "high", "evidence": "45% tokens swapped (7 new, 4 unused)" },
    "type-character": { "score": "clean" },
    "register":       { "score": "high", "evidence": "Mediterranean-pop vs. documented Appalachian outlaw-country" },
    "anti-refs":      { "score": "clean" },
    "voice":          { "score": "clean" }
  },
  "decision": "preserve",     // or "commit-pivot" or "discard"
  "decisionReasoning": "User feedback verbatim...",
  "preservedAs": "parallel-exploration"
}
```

### Why this matters

Without an explicit drift artifact, the pivot decision is recoverable only by reading the conversation history (which the next session can't access). The state-captured drift makes the decision durable — future iterations know that the teal-saturated artifact is a *parallel exploration*, not a stale-but-still-canonical render.

### Source

Today's session: explored 7 palette variants on the variant-c composition, converged on teal-saturated, then declined to commit the implied brand pivot. The decision is recorded in `demos/uc2-uc3-greenfield/site/stardust/state.json.direction.explorationOutcome` — formalized today, will need migration to the standardized schema when the prototype skill's proposal J ships.

---

## Pattern 5 — Living-draft maintenance discipline

(Cross-references `motion-demo-skill.md` and the pair-docs.)

The three living-draft files in `context/` (`motion-demo-skill.md`, `stardust-seed-brief-skill.md`, `stardust-prototype-skill.md`) are the source material for eventual skill ships. They work because they're updated **inline during work**, not at the end of a session. This pattern is its own discipline:

- **Lock a decision worth reusing → add it to the relevant draft inline.**
- **Define a reusable pattern → add it inline.**
- **Hit a gotcha → add it inline.**
- **Cross-cutting patterns** (this file) capture things that don't fit a single skill.

Updating at end-of-session loses 50% of the value because specifics decay. The drafts compound when fresh.

### Pair-doc cross-references

The three skill drafts intersect at concrete proposals. Maintain explicit cross-references:

- **seed-brief.md § Downstream consumer contract** → points at prototype-skill's proposals B, C, F.2, H.4, J.1 that read seed's output
- **prototype-skill.md § Failure mode #3 (font character)** → points at seed-brief's `typographyMeta.expectedCharacter` field that the audit reads
- **prototype-skill.md § Failure mode #5 (palette deployment)** → points at seed-brief's `extensions.paletteDeployment` field
- **workflow-patterns.md (this file) § Pattern 4 (brand-pivot)** → points at prototype-skill's § Failure mode #6 proposal J

### Source

This project maintains three living-drafts continuously. Today's update added cross-reference scaffolding so the docs cite each other concretely, not just by file name.

---

## Pattern 6 — Pipeline-as-scaffolding vs. learnings-as-substance

(Cross-references `stardust-prototype-skill.md` § Failure mode #7 — the validation case.)

The Stardust pipeline (`seed` + `brief` + `direct` + `prototype` + `craft` + `critique`) provides **scaffolding**: structural validation (token contract, data attributes, provenance), gates (Phase 2.5 critique, content sourcing scan, anti-toolbox audit), and slots (DESIGN.json extensions, shape brief sections). The pipeline does **not** provide the **substance** that prevents composition-level slop — anti-pattern render-refusal lists, hard-rule passthrough to craft, perceptual brand-character checks. Substance still lives in the agent's hands until the proposed prototype-skill upgrades land.

### Why this pattern matters

When a user observes a clean render coming out of the Stardust pipeline, the temptation is to conclude "the pipeline did it." This is half-true:

- **The pipeline did the structural enforcement** (token contract, data attributes, validation gates).
- **The agent did the composition enforcement** (anti-pattern render-refusal in shape brief, hard rules in craft invocation, applying learnings from prior failures).

Conflating the two understates how much agent vigilance the pipeline requires today. A naive invocation of `/stardust:prototype` without the agent actively applying the documented learnings would still risk producing the slop that Failure mode #1 documented.

### How to apply this pattern

- **Treat the proposed-stage DESIGN.json fields as load-bearing.** `extensions.paletteDeployment`, `extensions.typographyMeta.expectedCharacter`, `extensions.iaPriorities[]`, and equivalents are not paperwork; they become enforceable the moment a downstream consumer (craft, critique, migrate) reads them. Author them.
- **Treat the shape brief as the slop-prevention surface.** The brief's § Anti-patterns to render-refuse section is what the craft invocation passes as hard rules. If that section is missing, slop is on the table.
- **Treat the craft invocation as the hard-rule contract.** Pass the anti-pattern list, the seven brand tokens, the typography stacks, the placeholder visual signature spec, the section-ground sequence, and the render-refusal conditions verbatim. Craft is creative-but-faithful; the constraints have to be in the input.
- **Treat the critique pass as the last-mile gate.** P0/P1 findings must gate `prototyped`. Manual critique substitution is not enforcement — only the automatic detector counts.

### Distinction from "the pipeline is broken"

The pipeline is not broken. It does what its current contract specifies: structural validation + provenance + critique-gate-on-detector-findings + state machine. The gap is that the prototype-skill upgrades documented in `stardust-prototype-skill.md` (proposals B, C, D, F.2, H.4, J.1) haven't landed yet. When they land, substance moves from agent-hands to skill-enforcement. Until then, the agent + this draft + the memory files constitute the slop-prevention layer.

### Source

The High Lonesome run validated this pattern directly. Same pipeline as Holler & Hymn's v1 (which shipped slop) — different output because the agent applied the learnings actively this round. Documented in detail in `stardust-prototype-skill.md` § Failure mode #7.

### Proposed skill integration

The Stardust master skill (`skills/stardust/SKILL.md`) should carry a top-level note distinguishing pipeline-enforced from agent-enforced behavior, so future agent invocations don't assume "the pipeline catches slop" without reading the prototype skill's failure-modes section. The note can be removed when proposals B + C + D + F.2 + H.4 + J.1 land — at that point the distinction is no longer load-bearing.

---

## Pattern catalog (for next session's quick reference)

| Pattern | Living-draft | Source built in |
|---|---|---|
| Two-layer brand separation (outer wrapper / inner artifact) | `motion-demo-skill.md` | UC1 |
| Cover-screen + press-to-begin | `motion-demo-skill.md` | UC1 |
| Page-per-beat architecture | `motion-demo-skill.md` | UC1 |
| Seam-beat as VP-level payoff | `motion-demo-skill.md` | UC2+UC3 demo |
| Two ways in, one destination (multi-UC demo) | `motion-demo-skill.md` | UC2+UC3 demo |
| `pending: true` + `intent: lane-N` for awaiting external generation | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Voice anchor phrases verbatim | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Two-register `bgMode` sectioning | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Load-bearing nouns verbatim guarantee | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Reference-output-as-spec | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Forward-compatible provenance contract | `stardust-seed-brief-skill.md` | Holler & Hymn |
| Shape-brief anti-pattern audit (Phase 1.5) | `stardust-prototype-skill.md` § F-mode 1 | Holler & Hymn |
| Rendered-HTML anti-pattern scan | `stardust-prototype-skill.md` § F-mode 1 | Holler & Hymn |
| Seed-to-composition translation table | `stardust-prototype-skill.md` § F-mode 1 | Holler & Hymn |
| Per-pattern viewport-count audit | `stardust-prototype-skill.md` § F-mode 2 | Holler & Hymn |
| Font character ≈ silhouette severity | `stardust-prototype-skill.md` § F-mode 3 | Holler & Hymn |
| 3-variant fork as default for brand Mode A | `stardust-prototype-skill.md` § F-mode 4 | Holler & Hymn |
| Alternate-palette exploration on a winning composition (Phase 2.7) | `stardust-prototype-skill.md` § F-mode 4 G.5 | Holler & Hymn |
| Palette-deployment intensity axis (held / applied / drenched) | `stardust-prototype-skill.md` § F-mode 5 | Holler & Hymn |
| Render saturated first | `stardust-prototype-skill.md` § F-mode 5 H.5 | Holler & Hymn |
| Brand-axis drift detector at approval gate | `stardust-prototype-skill.md` § F-mode 6 | Holler & Hymn |
| **Private brand reference for taste-calibration** | `stardust-workflow-patterns.md` § Pattern 1 *(this file)* | Holler & Hymn |
| **Palette extraction from reference image** | `stardust-workflow-patterns.md` § Pattern 2 *(this file)* | Holler & Hymn |
| **Render-before-discussing user-preference detection** | `stardust-workflow-patterns.md` § Pattern 3 *(this file)* | Holler & Hymn |
| **Brand-pivot as first-class decision artifact** | `stardust-workflow-patterns.md` § Pattern 4 *(this file)* + prototype-skill § F-mode 6 | Holler & Hymn |
| **Living-draft maintenance discipline** | `stardust-workflow-patterns.md` § Pattern 5 *(this file)* | meta |
| **Pipeline-as-scaffolding vs. learnings-as-substance** | `stardust-workflow-patterns.md` § Pattern 6 *(this file)* + prototype-skill § F-mode 7 | High Lonesome |

---

## Source builds this draft is based on

- **Holler & Hymn** (Madison County, NC; a single-maker Appalachian botanical-liqueur house) — the inner brand built for the UC2+UC3 demo. Surfaced every pattern documented in this file plus 5 failure modes in the prototype skill draft. Build span: 2026-05-11 to 2026-05-12.

- **High Lonesome** (Hot Springs, NC; Mediterranean-pop variant of the WNC mountain-spirits direction) — the validation build run through the full Stardust pipeline (seed + brief + direct + prototype + craft + critique). Surfaced Pattern 6 (pipeline-as-scaffolding vs. learnings-as-substance) and validated the proposed-stage DESIGN.json fields (paletteDeployment, typographyMeta.expectedCharacter, cardinalFlashRule) as enforceable consumer contracts. Build date: 2026-05-12.

Add new entries when subsequent builds surface patterns that don't fit existing skill drafts.
