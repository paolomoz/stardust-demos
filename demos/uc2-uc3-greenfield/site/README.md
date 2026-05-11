# site/ — Holler & Hymn

The artisan brand built for real, to power the UC2 + UC3 demo. The generated site that lives here is the artifact shown on screen in beats 4 and 6, and the source of the real DESIGN tokens / PRODUCT.md / page list that the demo presents in beats 2 and 3.

## Layout

```
site/
├── README.md                       — this file
├── brand/
│   ├── BRAND.md                    — source brand definition (locked: HOLLER & HYMN)
│   └── brand-alternates.md         — Whippoorwill + High Lonesome, saved for future use
├── briefing/                       — content briefing (per-page direction; will become UC3's brief.pdf)
└── assets/
    ├── logo/                       — Gemini-generated logo variants (user-driven)
    └── images/                     — Gemini-generated brand imagery (user-driven)
```

Once Stardust runs against the brand, expect additional folders:

```
├── current/                        — placeholder site that /stardust:extract crawls
├── target/                         — PRODUCT.md, DESIGN.md, DESIGN.json after /stardust:direct
└── redesign/                       — prototype pages after /stardust:prototype
```

## Build order

1. **Brand definition** (`brand/BRAND.md`) — locked. Becomes the input to the would-be `/stardust:seed`.
2. **Content briefing** (`briefing/SITE-BRIEF.md` + `briefing/CONTENT.md`) — direction for each page on the site. Becomes the input to the would-be `/stardust:brief`.
3. **Logo + brand imagery** (`assets/`) — generated externally with Gemini 3 Pro Image Preview, dropped in here.
4. **Hand-authored `current/`** — instead of building a placeholder site + crawling it with `/stardust:extract`, we author `current/{PRODUCT.md,DESIGN.md,DESIGN.json,pages/*.json,assets/}` directly from the brand + briefing documents. This is the proof-of-concept output of `/stardust:seed` + `/stardust:brief`. Provenance comments in each file call out the would-be commands. Schema mirrors a real `extract` artifact.
5. **Stardust direction** (`/stardust:direct`) — produces `target/PRODUCT.md`, `target/DESIGN.md`, `target/DESIGN.json` from a short intent phrase + the hand-authored `current/`.
6. **Stardust prototype** (`/stardust:prototype`) per page — produces `redesign/<page>.html`.
7. **Brief reverse-engineered** — once `target/PRODUCT.md` exists, derive UC3's `brief.pdf` from it so brief → site reads internally consistent in the demo.

The generated site is iframed by the demo at `demos/uc2-uc3-greenfield/experience/` beats 4 and 6.

## Why this build order is itself part of the demo

The UC2+UC3 demo's seam beat (beat 5) names `/stardust:seed` and `/stardust:brief` as the upcoming commands that will close the greenfield gap. Hand-authoring `current/` from `brand/` + `briefing/` documents — and saying so in the provenance comments — is the proof-of-concept for both. The artifacts the demo names as "tomorrow's" output are the artifacts we ship today, by hand. The demo and the toolchain document each other.

## Private reference

The brand's tonal reference lives outside this repo. Do not name it in any committed file. Brand work refers to "the reference brand" if needed.
