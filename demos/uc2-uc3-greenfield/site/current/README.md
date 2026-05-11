# `current/` — hand-authored proof-of-concept

> Holler & Hymn's "current state" — but there is no current site. This folder is the artifact a real `/stardust:extract` would have produced if a Holler & Hymn site existed to crawl. Hand-authored from `../brand/BRAND.md` + `../briefing/SITE-BRIEF.md` + `../briefing/CONTENT.md` as the proof-of-concept output of the future `/stardust:seed` (brand half) + `/stardust:brief` (briefing half) commands.

## What's here

| File | Real-command equivalent | Source of authoring |
|---|---|---|
| `PRODUCT.md`              | `/stardust:brief` | `briefing/SITE-BRIEF.md` + `briefing/CONTENT.md` |
| `DESIGN.md`               | `/stardust:seed`  | `brand/BRAND.md` |
| `DESIGN.json`             | `/stardust:seed`  | `brand/BRAND.md` (machine-readable mirror of DESIGN.md) |
| `_brand-extraction.json`  | `/stardust:seed`  | `brand/BRAND.md` (consolidated brand surface) |
| `_extract-summary.json`   | `/stardust:seed`+`/stardust:brief` | the page list from `briefing/CONTENT.md` |
| `pages/<slug>.json` × 9   | `/stardust:brief` | `briefing/CONTENT.md` per-page beats |
| `assets/logo.svg`         | `/stardust:seed`  | placeholder typographic stand-in pending Gemini |
| `assets/favicon.svg`      | `/stardust:seed`  | placeholder |
| `assets/screenshots/`     | n/a               | greenfield — no source pages to screenshot |
| `assets/media/`           | n/a               | imagery arrives from Gemini 3 Pro Image Preview |

## Self-referential provenance

Every file's `_provenance` block names `stardust:seed` and/or `stardust:brief` as the would-be author. The UC2+UC3 demo's beat 5 (the seam) names those same commands on screen as the *upcoming* gap-closing tools. So the artifacts here both **demonstrate the input/output schema** the commands will need to implement AND are **the proof-of-concept** for the demo's roadmap claim. The demo and the toolchain document each other.

## Schema fidelity

The structure mirrors a real `stardust:extract` output (reference: `/Users/paolo/excat/tmp/migrate-frescopa/stardust/current/`). Differences from a real extract:

- **No DOM-capture geometry.** Real extract pages carry `rect`, `domPath`, `cssVars`, `visibleText` synthesized from a live crawl. Our hand-authored pages stub these — `domPath` is shorthand, `cssVars` is omitted (the design tokens live canonically in `DESIGN.json`), `visibleText` is a section-level digest rather than a concatenation of rendered text.
- **No `_crawl-log.json` or `brand-review.html`.** Both are crawl-emitted; skipped for the greenfield case.
- **Image `pending: true` markers.** Where the real artifact pipeline would place a local `naturalW`/`naturalH` from disk, our pages carry `pending: true` and an `intent: lane-N` annotation. The user fills the local files in via Gemini.

Downstream `/stardust:direct` and `/stardust:prototype` should read these as fully-formed `current/` artifacts. If a schema field is missing that one of those commands needs, augment here rather than working around it downstream — that's a signal the proof-of-concept needs that field.

## Open

- Logo and brand imagery — placeholders. User-driven Gemini generation in parallel, drops into `assets/logo.svg` and `assets/images/*`.
- The twenty-seven botanicals — `pages/the-still.json` lists ~13; balance to be filled in pre-prototype.
- Cocktail name workshop — `pages/hymns.json` ships five draft cocktails; refine during prototyping if any read as too on-the-nose.
