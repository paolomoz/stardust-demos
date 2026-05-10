# stardust-demos

This repo holds **demos for Stardust**. Each demo is a self-contained folder under `demos/<demo-name>/`. Demos are videos for now (recordings + supporting artifacts), but treat the folder layout as the source of truth — content type may grow later.

## Two framings to keep distinct

When discussing Stardust with the user, always be explicit about which framing you're in. Mixing them silently confuses scope.

1. **Stardust standalone** — Stardust as a design tool. Output is deployable static HTML. Audience is design-led. See `context/stardust.md`.
2. **Stardust in AEM EDS context** — Stardust → **Snowflake** → AEM Edge Delivery Services. Output is a live, authorable EDS site. Audience is enterprise / replatforming. See `context/stardust-aem.md`.

## Three demo use-case categories

Mapped in `context/use-cases.md`. In short:

- **UC1** — uplift an existing site/brand (the main pipeline today).
- **UC2** — generate a new design under designer direction (gap exists in today's pipeline; demo through it).
- **UC3** — generate a new site from a brief (md/PDF; gap exists; demo through it).

UC2 and UC3 are partially supported — when a demo hits a seam in the pipeline, **show the seam in the narration**, don't hide it. These demos double as roadmap signal.

## Where to read context — read these before proposing a demo

- `context/stardust.md` — the standalone tool, pipeline, slash commands, flags.
- `context/stardust-aem.md` — Snowflake bridge, AEM EDS, personas.
- `context/slicc.md` — SLICC's role as the visual demo surface; `slicc-handoff` flow.
- `context/whitepaper.md` — proposed-A/B/C variants, pull-quotes for narration.
- `context/use-cases.md` — UC1/UC2/UC3 detail and where the seams are.
- `context/references.md` — every external URL.
- `context/motion-demo-skill.md` — **living draft of a future skill** that codifies how we build demos here. Update it as we go (see below).

## Maintain `context/motion-demo-skill.md` during build

This doc is the seed for an eventual Claude Code skill that codifies "build a cinematic, motion-driven HTML demo." Update it inline whenever you:

- **Lock a decision** worth reusing (length, beat structure, brand layering, naming surface, audience tailoring)
- **Define a reusable pattern** (controller logic, cover screen, page-per-beat architecture, walk-out line)
- **Hit a gotcha** (bot detection, autoplay policy, browser quirk, pipeline order)

Update during the work, not at the end — value compounds when the entry is fresh and specific. After the first 1–2 demos ship, the doc should be ready to lift into a SKILL.md.

## Disambiguations (do not confuse)

- **"Snowflake"** in this project = `ai-ecoverse/snowflake`, the AEM EDS bridge. **Not** the cloud data warehouse.
- **Stardust v0.3.0** is a complete refactor. The pre-v0.3.0 "greenfield" tool is preserved separately and is **not** the current pipeline. UC3 (from-brief) sits closer to the legacy greenfield idea but should be demoed against the current toolchain.
- **SLICC does not run Claude Code.** SLICC is a browser-native agent. The bridge is the `slicc-handoff` skill (Claude-Code side) that pushes work into a SLICC browser session. For demo recording, SLICC is the camera target, Claude Code runs Stardust off-camera.
- **Stardust is built on `impeccable`.** Design opinions live in `impeccable`; Stardust is workflow + structure. If the user asks "where did the design choice come from," the answer is usually impeccable.

## Demo folder layout

```
demos/
  <demo-name>/
    README.md          # scenario, audience, build approach
    script.md          # beat-by-beat content + timing (medium-agnostic)
    experience/        # HTML-first build (source of truth — see UC1)
    recording/         # MP4 export + working files for distribution
```

Default build approach is **HTML-first**: a multi-page cinematic experience, screen-recorded to MP4 with music for distribution. Two viable wrapper-brand sources, picked per demo:

1. **Reference replication** — copy a polished existing brand artifact (e.g. an internal Adobe vision deck) and adapt it. Best for execs in the product's own org where instant brand recognition matters more than meta-coherence. **UC1 uses this** (modeled on the AI Factory Piñata).
2. **Stardust dogfood** — `/stardust:extract` against the product's own site → `/stardust:direct "<intent phrase>"` → `/stardust:prototype` per beat page. Best for designer/dev/PM audiences where "the demo about Stardust is made by Stardust" is part of the value.

Either way, a small hand-wired layer on top: autoplay timer, page-to-page transitions, key/wheel override, cover screen, beat-specific content (iframes, MP4 inserts), music bed.

Two brand surfaces stay separated: **outer** (the wrapper) and **inner** (whatever artifact the demo is presenting — its own brand, in an iframe). Don't conflate them.

When a demo specifically benefits from After Effects / video editing (heavy compositing, footage-heavy storytelling, voiceover-led), document that override in the demo's README.

See `context/motion-demo-skill.md` for the full pattern catalog (translate-Y page-wrap navigator, cover-screen + press-to-begin, page-per-beat architecture, reference-vs-dogfood tradeoff).

`artifacts/` and `outputs/` are optional — only add them if a demo runs Stardust live. UC1 references existing artifacts via absolute path (see `demos/uc1-uplift/script.md` and `README.md`) rather than co-locating them.

## Audience-facing language (load-bearing)

For any audience-facing demo surface — script narration, on-screen text, slide copy, voiceover — only **Stardust** and **AEM** appear by name.

- **Stardust** is the protagonist. Each demo is "the Stardust demo, for this use case."
- **AEM** is named only as the destination — "lands in AEM," "authorable in AEM."
- **Snowflake** (the ai-ecoverse bridge) is **never** named on screen.
- **Experience Modernization Agent (EMA)** is the AEM capability that ingests Stardust output. Not named on screen by default. Mention only if user explicitly asks.

The internal/audience split is a writing-surface rule, not a knowledge-suppression rule. `context/` files keep the technical truth (Snowflake, EMA, EDS) so we know what we're building. Demo `README.md` / production notes can use the technical names freely. `script.md` and any frame the camera sees can't.

If a demo specifically needs Snowflake or EMA on screen (e.g. a developer-targeted track), confirm before naming.

## When working in this repo

- Default to the two framings (standalone vs AEM context); ask which one when ambiguous.
- Quote distinctive language from `context/whitepaper.md` rather than paraphrasing in narration.
- For any new external source, add it to `context/references.md` rather than inlining the URL elsewhere.
- Keep `context/` files lean — they're decision support, not a knowledge dump. If something fits better in a demo's own README, put it there.
