# Stardust (standalone)

> A Claude Code plugin that "redesigns an existing website to make it better."
> Built on the `impeccable` plugin (which carries the design opinions). Stardust itself is workflow + structure.

Source: <https://github.com/adobe/skills/tree/main/plugins/stardust>
Site: <https://paolomoz.github.io/stardust-site/>
Docs: <https://paolomoz.github.io/stardust-site/docs/>
Version note: v0.3.0 is a complete refactor. Earlier "greenfield design tool" is preserved separately — don't confuse the two.

## Pitch in one line

> "Math, not mysticism." Deterministic, reproducible brand expressions rendered as deployable HTML.

## What it produces

Static HTML — framework-agnostic, no build step required, deployable anywhere.

Three design variants per page across desktop / tablet / mobile. Curated palette pool of 127. Every design choice carries provenance.

## The seed

A deterministic hash — `md5(brand · date)` — picks "decade × craft × register × ground for today, only today." Same inputs → identical output.

## The pipeline

```
extract  →  direct  →  prototype  →  migrate
```

Each step writes artifacts to a `stardust/` folder so the next step has structured input.

## Slash commands

Source of truth: `plugins/stardust/skills/` in the adobe/skills repo. The folders are: `extract`, `direct`, `prototype`, `migrate`, `prepare-migration`, `stardust`.

| Command | Purpose | Key outputs |
|---|---|---|
| `/stardust` | Status report; intent reasoning; recommends next step | — |
| `/stardust:extract [url]` | Crawl URL; capture palette, typography, voice, motifs | `stardust/current/PRODUCT.md`, `DESIGN.md`, `brand-review.html`, `pages/<slug>.json`, `state.json` |
| `/stardust:direct "<phrase>"` | Resolve redesign intent into target spec | `PRODUCT.md`, `DESIGN.md`, `DESIGN.json` (root), `stardust/direction.md` |
| `/stardust:prototype [slug]` | Generate proposed redesigns (per-page) | `stardust/prototypes/<slug>-shape.md`, `<slug>-proposed.html`, `<slug>.html` (viewer) |
| `/stardust:migrate [slug]` | Emit deployable static HTML from approved prototypes | `stardust/migrated/<slug>.html`, `stardust/migrated/assets/` |
| `/stardust:prepare-migration` | Orchestrate the migrate-prep cascade with confirmation gates | structured data for migrate |

Common flags worth knowing for demos:
- `extract --cap <N>` / `--all` / `--pages <slug,…>` / `--refresh <slug>` / `--wait <fast|medium|spec|auto>`
- `direct --re-direct` / `--rebrand` (force full divergence, no brand inheritance)
- `prototype --refresh-stale` / `--no-iterate` / `--no-critique`
- `migrate --refresh-stale` / `--force` / `--require-approved` / `--strict-canon`

## Install

```
claude plugin marketplace add adobe/skills
claude plugin install stardust@adobe-skills
claude plugin marketplace add pbakaus/impeccable
claude plugin install impeccable@impeccable
```

## Scope limits (intentional)

- No own design language — design opinions live in `impeccable`.
- No production CMS output — outputs static HTML; CMS wiring is Snowflake's job.
- No closed intent vocabularies — `/stardust:direct` accepts freeform phrases.

## Distinctive language to preserve in narration

- "Math, not mysticism."
- "Decade × craft × register × ground."
- "Divergence toolkit" (counters predictable AI design patterns).
- "Tokens, not templates."
- "Every page can be its own page again."
