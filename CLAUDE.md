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

## Disambiguations (do not confuse)

- **"Snowflake"** in this project = `ai-ecoverse/snowflake`, the AEM EDS bridge. **Not** the cloud data warehouse.
- **Stardust v0.3.0** is a complete refactor. The pre-v0.3.0 "greenfield" tool is preserved separately and is **not** the current pipeline. UC3 (from-brief) sits closer to the legacy greenfield idea but should be demoed against the current toolchain.
- **SLICC does not run Claude Code.** SLICC is a browser-native agent. The bridge is the `slicc-handoff` skill (Claude-Code side) that pushes work into a SLICC browser session. For demo recording, SLICC is the camera target, Claude Code runs Stardust off-camera.
- **Stardust is built on `impeccable`.** Design opinions live in `impeccable`; Stardust is workflow + structure. If the user asks "where did the design choice come from," the answer is usually impeccable.

## Demo folder layout (proposed)

```
demos/
  <demo-name>/
    README.md          # scenario, audience, narration outline
    script.md          # voiceover / on-screen text, beat-by-beat
    artifacts/         # pre-recorded inputs: target URLs, briefs, designer notes
    outputs/           # generated stardust/ outputs from the run (gitignored once large)
    recording/         # final video + intermediate captures
```

Don't scaffold this until the first demo is being made — wait for the user to pick UC1/UC2/UC3 and a target.

## When working in this repo

- Default to the two framings above; ask which one when ambiguous.
- Quote distinctive language from `context/whitepaper.md` rather than paraphrasing in narration.
- For any new external source, add it to `context/references.md` rather than inlining the URL elsewhere.
- Keep `context/` files lean — they're decision support, not a knowledge dump. If something fits better in a demo's own README, put it there.
