# Demo use cases

Three high-level use cases drive the demos. Each can be filmed in two framings: **standalone** (Stardust by itself, output = static HTML) or **AEM context** (Stardust → Snowflake → AEM EDS).

## UC1 — Uplift an existing site or brand

> The main pipeline as it exists today.

The classic flow. Pipeline maps cleanly:
`extract <url>` → `direct "<intent>"` → `prototype <slug>` → `migrate`.

**Inputs:** existing live site URL, optional intent phrase.
**Outputs:** before/after prototypes, then deployable HTML (standalone) or EDS pages (AEM context).
**Narration angle:** "Same brand, modernized." Provenance from extract preserves identity; direct lets the designer steer.
**Demo risks:** the source site has to crawl cleanly and be visually interesting; pick one with a strong existing palette.

**Standalone demo target:** record `extract → direct → prototype` on a chosen site, end on side-by-side viewer.
**AEM-context demo target:** continue from `migrate` into Snowflake conversion and `aem up` running locally; close with marketer in-page edit.

## UC2 — Generate a new design under designer direction

> Not fully supported in today's pipeline — needs a demo to make the case.

Today the pipeline assumes you have a site to extract. For a designer-led "new design from scratch under brand rules," the gap is the entry point: there's no first-class "no extract" path. Workable approximations to demo today:

- Run `extract` on a thin placeholder (logo + a few brand assets on a static page) so `stardust/current/` exists with minimal content.
- Then drive everything through `/stardust:direct` with rich phrasing (palette, decade, register, motif), optionally `--rebrand` to force divergence, and use designer-edited `DESIGN.md` / `DESIGN.json` as the steering surface.
- `prototype` and `migrate` then operate normally.

**Inputs:** brand assets (logo, palette intent, voice notes), designer's direction phrase, hand edits to `DESIGN.md`.
**Outputs:** prototypes that reflect the designer's intent; the path to deployable HTML or EDS is the same as UC1.
**Narration angle:** "Designer in the loop. Stardust as instrument, not author."
**What a future-state demo would need:** a `/stardust:from-direction` (or similar) entry point that skips extract; or a stronger `--rebrand` story that builds `current/` from designer inputs alone. Worth flagging in narration as the upcoming capability.

## UC3 — Generate a new site from a brief (Markdown / PDF / other)

> Greenfield from a written brief. Today's pipeline doesn't ingest briefs directly.

The pre-v0.3.0 "greenfield" tool covered something close to this; it's preserved separately but not in the current pipeline. Today's path likely requires a custom pre-step:

- Parse the brief (md/PDF) → produce a synthetic `PRODUCT.md` + `DESIGN.md` + a page list.
- Drop those into the structure that `direct`/`prototype` expect.
- Run `prototype` per page; then `migrate`.

**Inputs:** brief document (md/PDF), optional reference images.
**Outputs:** a multi-page site with no prior brand to inherit from.
**Narration angle:** "From document to deployable site." Best-suited to startup/launch storyline.
**What a future-state demo would need:** a `/stardust:from-brief` entry point that ingests the brief, picks pages, seeds `current/` synthetically. Like UC2, this is part of the demo's *story* — show the seam, not hide it.

## Cross-cutting concerns for any demo

- **Determinism narration:** the seed reproduces the same output. Great visual moment when re-running shows identical artifacts.
- **Provenance:** every choice has a source. Surface this in the prototype viewer.
- **Three variants × three viewports:** the matrix is a rich visual; don't waste it.
- **SLICC framing:** for any demo with on-screen interaction, prefer SLICC as the camera target. See `slicc.md`.
- **AEM combo close:** end the AEM-context demos on `aem up` running and a marketer making an edit live.
