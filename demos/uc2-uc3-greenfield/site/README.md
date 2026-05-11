# site/ — Holler & Hymn

The artisan brand built for real, to power the UC2 + UC3 demo. The generated site that lives here is the artifact shown on screen in beats 4 and 6, and the source of the real DESIGN tokens / PRODUCT.md / page list that the demo presents in beats 2 and 3.

## Layout

```
site/
├── README.md                       — this file
├── brand/
│   ├── BRAND.md                    — source brand definition (locked: HOLLER & HYMN)
│   └── brand-alternates.md         — Whippoorwill + High Lonesome, saved for future use
├── briefing/
│   ├── SITE-BRIEF.md               — one-page narrative brief
│   └── CONTENT.md                  — per-page content briefs (9 pages)
├── assets/
│   └── gemini-prompts.md           — Gemini 3 Pro Image Preview prompt pack (preamble + logo + 3 imagery lanes)
└── stardust/                       — Stardust working folder (the CLI runs from this directory's parent)
    ├── state.json                  — pipeline state (hand-authored as proof-of-concept for seed+brief)
    ├── current/                    — the "current state" — hand-authored equivalent of an extract artifact
    │   ├── README.md
    │   ├── PRODUCT.md
    │   ├── DESIGN.md
    │   ├── DESIGN.json
    │   ├── _brand-extraction.json
    │   ├── _extract-summary.json
    │   ├── pages/*.json            — 9 page descriptors
    │   └── assets/
    │       ├── logo.svg            — typographic placeholder until Gemini lands
    │       ├── favicon.svg
    │       ├── images/             — Gemini-generated brand imagery (drops here)
    │       └── screenshots/        — empty (greenfield — nothing to capture)
    ├── target/                     — created by /stardust:direct (PRODUCT.md, DESIGN.md, DESIGN.json, direction.md)
    └── prototypes/                 — created by /stardust:prototype (per-page renderings)
```

## Build order

1. **Brand definition** (`brand/BRAND.md`) — locked. Becomes the input to the would-be `/stardust:seed`.
2. **Content briefing** (`briefing/SITE-BRIEF.md` + `briefing/CONTENT.md`) — direction for each page on the site. Becomes the input to the would-be `/stardust:brief`.
3. **Logo + brand imagery** (`assets/gemini-prompts.md` → external Gemini session → drop into `stardust/current/assets/`).
4. **Hand-authored `stardust/current/`** — instead of building a placeholder site + crawling it with `/stardust:extract`, we author `current/{PRODUCT.md,DESIGN.md,DESIGN.json,pages/*.json,assets/}` directly from the brand + briefing documents. This is the proof-of-concept output of `/stardust:seed` + `/stardust:brief`. Provenance comments in each file call out the would-be commands. Schema mirrors a real `extract` artifact.
5. **Hand-authored `stardust/state.json`** — bootstraps the Stardust pipeline. Marks all 9 pages `status: "extracted"` so `/stardust:direct` will run.
6. **Stardust direction** (`/stardust:direct`) — run from `site/` as cwd. Produces `stardust/target/PRODUCT.md`, `stardust/target/DESIGN.md`, `stardust/target/DESIGN.json`, and `stardust/direction.md` from a short intent phrase + the hand-authored `current/`.
7. **Stardust prototype** (`/stardust:prototype`) per page — produces `stardust/prototypes/<slug>.html`.
8. **Brief reverse-engineered** — once `target/PRODUCT.md` exists, derive UC3's `brief.pdf` from it so brief → site reads internally consistent in the demo.

The generated site (the `stardust/prototypes/*.html` files) is iframed by the demo at `demos/uc2-uc3-greenfield/experience/` beats 4 and 6.

## Why this build order is itself part of the demo

The UC2+UC3 demo's seam beat (beat 5) names `/stardust:seed` and `/stardust:brief` as the upcoming commands that will close the greenfield gap. Hand-authoring `current/` from `brand/` + `briefing/` documents — and saying so in the provenance comments — is the proof-of-concept for both. The artifacts the demo names as "tomorrow's" output are the artifacts we ship today, by hand. The demo and the toolchain document each other.

## Private reference

The brand's tonal reference lives outside this repo. Do not name it in any committed file. Brand work refers to "the reference brand" if needed.
