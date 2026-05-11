# UC2 + UC3 Greenfield — Script v1

**Length:** 90s · **Audience:** VP+ · **Mode:** kinetic typography over real artifacts; **text-only** over music · **Target:** a new invented brand (no precedent, no site to extract) · **Implementation:** Adobe-branded HTML build in `experience/`, same Piñata-cloned wrapper as `uc1-uplift`

> Audience-facing names only: **Stardust** and **AEM**. (Snowflake/EMA stay in production notes — see CLAUDE.md.)
> Walk-out line **"One prompt · one website."** is from the whitepaper. Series-close **"Ship the demo before the deck."** matches UC1 by design.
> The inner artifact on screen — the generated artisan site — is built for real with Stardust. Pages shown in beats 4 and 6 are live iframes of that build, not mocks.

---

## 00:00 – 00:10 · COLD OPEN

**Visual:** the same Stardust starfield bookend that opened UC1. The familiar `extract → direct → prototype → migrate` pipeline diagram from UC1's beat 2 materialises at the centre — small, glanced, instantly recognisable. After ~1s, `extract` dims to a grey ghost. A red question mark hovers where the URL would go.

Two inputs slide in from the sides where the URL was, taking its place:

- Left side: a small **asset bundle** — a logo, three colour swatches, a stack of three mood images.
- Right side: a **document** icon — `brief.pdf`.

**On screen:**

> What if there's nothing to extract?

Hold one beat longer than feels comfortable. The two inputs pulse gently.

---

## 00:10 – 00:30 · UC2 — THE DIRECTION PATH

**Visual:** the right side of the screen fades. The asset bundle on the left expands to centre stage, taking the full frame. Cards deal themselves out across a designer's workbench:

- Logo mark (the invented brand's wordmark) lands first.
- Three colour swatches slide in beneath it.
- Three mood images settle in a loose arrangement — generated imagery, not stock.
- Three voice notes appear as small typeset cards: short, atmospheric, intent-shaped (e.g. *"slow"*, *"made by hand"*, *"warm rooms"*).

Above the workbench, a single line types as if dictated:

> *"slow, considered, made by hand."*

The typing finishes. A faint pulse runs through the assets.

Then the resolution happens: a thin column slides in from the right and `DESIGN.json` flickers into view. Real tokens from the generated artisan brand — not placeholders. Surface temperatures, register, voice tags, the chosen accent token. Tokens fade in with varied delays (`0.45 / 0.62 / 0.78 / 0.95 / 1.18 / 1.40s`) — same stagger-pacing-as-message rule used in UC1's trap beat.

**Tiny caption beneath the workbench:**

> *Intent → tokens. Automatic.*

(Same caption UC1 used on its direct beat — by design. It is the Stardust thesis, restated.)

---

## 00:30 – 00:50 · UC3 — THE BRIEF PATH

**Visual:** the workbench wipes out with a top-to-bottom scan (a fresh mask — not reused from any UC1 beat or from beat 2). On the empty frame, `brief.pdf` lands centre, large, with weight — like a folder hitting a table.

The PDF opens. A few real lines of brief prose are visible: the brand's premise, audience, voice, ambition. *(Content reverse-engineered from the generated brand's PRODUCT.md — see production notes.)*

Then Stardust parses it. Lines from the document lift off as tokens and migrate to three new columns sliding in from below:

- **PRODUCT.md** — a short list: positioning, audience, voice, ambition.
- **DESIGN.md** — register, mood words, temperature, motion register.
- **Page list** — `home / atelier / objects / story / press / contact` (or whatever the real generated site's pages are; align after the site is built).

Page-list items materialise with a sequential left-to-right cascade — same pacing-as-message rule, here saying "process / pipeline / time-as-direction."

**Tiny caption:**

> *Prose → product surface. Synthesised.*

---

## 00:50 – 01:02 · CONVERGE

**Visual:** the three columns from beat 3 and the `DESIGN.json` column from beat 2 reappear at the edges of the frame, all at quarter-opacity. The centre clears.

The UC1 pipeline diagram returns from beat 1, but now with two front-door arrows feeding in from the left side where `extract` used to live: one labelled *direction*, one labelled *brief*. They merge into `prototype → migrate`. The merge is a beat — a small visual handshake, not a fade.

`prototype → migrate` lights up. Pages of the generated artisan site bloom out one by one across a grid: home, atelier, objects, story, press, contact. (Live iframes — same pattern as UC1's beat 3 reveal.) The grid is loose and editorial, matching the brand's register — not a uniform thumbnail wall.

**On screen, low and small (does not own the frame):**

> Same destination. Two ways in.

---

## 01:02 – 01:18 · THE SEAM (the payoff)

**Visual:** the grid recedes. The pipeline diagram returns, large, centre. The two front-door arrows from the converge beat now have dashed outlines, marked with a small *today: hand-edited* tag.

**On screen, in two short hits:**

> Today: a hand-edited entry.
> Tomorrow: the front door types itself.

Beat. Then a small terminal frame slides up from the bottom of the screen and types — actually types, terminal-grade, slow enough to read — two commands in sequence:

```
/stardust:from-direction
/stardust:from-brief
```

A small chip appears alongside, in Adobe red:

> *shipping.*

The dashed outlines on the two front-door arrows solidify as the commands finish typing. A faint pulse runs through the whole pipeline diagram.

**On screen, full frame, takes the screen:**

> Stardust is going to start anywhere.

(Tiny line beneath, optional — A/B during build:)

> *Direction in. Brief in. Site out.*

---

## 01:18 – 01:26 · LANDS IN AEM

**Visual:** same two-frame transition as UC1.

1. Stardust output folder visible: `stardust/migrated/` — but the page filenames are the artisan site's pages (`home.html`, `atelier.html`, `objects.html`, ...).
2. Cut into an AEM authoring view of one of those migrated pages — in-page editing affordances visible (marketer hover state on a hero), small green "Published" pill in the corner.

**On screen:**

> Lands in AEM.
> Authorable on day one.

(Same two lines as UC1, by design — series continuity.)

---

## 01:26 – 01:30 · THE LINE + CLOSE

**Visual:** pull camera back. The Stardust starfield returns — same canvas-painted bookend that opened the demo. Centre frame, large, takes the screen:

> One prompt · one website.

Beat. Then, smaller, beneath:

> Ship the demo before the deck.

Stardust mark below the line, small. Cut to black.

*(Walk-out line is from the whitepaper. Series-close line matches UC1 on purpose — the two demos read as a pair.)*

---

## Production notes

### Asset strategy

This demo is the **dogfood case** for the series. The inner artifact — the generated artisan site — is built for real by running Stardust against an invented brand. That site:

- Renders live in beat 4 (converge grid) and beat 6 (AEM frame).
- Supplies real DESIGN tokens for beat 2's `DESIGN.json` resolution.
- Supplies the real `PRODUCT.md` from which beat 3's `brief.pdf` is **reverse-engineered**, so the brief→site mapping shown on screen is internally consistent.

Imagery used in beat 2's "designer assets" is generated externally and fed in as brand assets during the real Stardust run, so the same images live in the brand's mood pile and in the generated pages.

### Mapping artifacts → beats

| Beat | Source artifact |
|---|---|
| 1 — Cold open | UC1's pipeline-diagram primitives + the Stardust starfield canvas, reused from `uc1-uplift/experience/`. New: the two-input animation (asset bundle + brief.pdf). |
| 2 — Direction | `assets/brand-images/*.{png,jpg}` (generated), the invented brand's logo (generated), the artisan brand's real DESIGN tokens from `assets/artisan-site/DESIGN.json`. |
| 3 — Brief | `assets/brief.pdf` (reverse-engineered from the brand's PRODUCT.md), the brand's real PRODUCT.md / DESIGN.md / page list from `assets/artisan-site/`. |
| 4 — Converge | Live iframes of `assets/artisan-site/<page>.html` for each page of the generated site. |
| 5 — Seam | New typewriter inserts of `/stardust:from-direction` and `/stardust:from-brief`. Either recorded in a terminal frame or rendered as HTML typewriter (same pattern as UC1's beat 2 prompt typing). |
| 6 — AEM landing + close | AEM authoring view (TBD — may be a still). Same starfield bookend from beat 1, reused. |

### Music and pacing

- Single bed; cuts on beat. No VO.
- Direction: same **editorial-restrained** register as UC1 but a different melody. Resolves on the converge (beat 4). Gains weight on the seam beat (beat 5) — this is the demo's emotional peak. Lands quiet on the walk-out (beat 6).
- The seam beat needs music to confer **forward-motion**, not melancholy. *"Shipping"* is the operative word.

### Internal stack note (do not surface in the cut)

Same as UC1. "Lands in AEM" is technically AEM ingesting Stardust output via the Experience Modernization Agent, with the underlying conversion in the Snowflake bridge. None of this appears on screen.

### Naming surface — note on the future commands

`/stardust:from-direction` and `/stardust:from-brief` are **named on screen**. This is deliberate and breaks the usual "only product + destination" rule because the entire point of beat 5 is to make the upcoming product surface visible. The override is approved within this beat only — production notes can also use these names; nothing outside beat 5 should.

### Why this script differs structurally from UC1

UC1's spine was *one path, fully shipped, then ongoing capability as payoff.* UC2+UC3's spine is *two paths, partly shipped, with the closing of the seams as payoff.* The structural inversion is intentional: UC1 sells **completeness**, UC2+UC3 sells **reach** — and a near-future reach where the audience can see what's coming.

## TBD before recording

- [x] Audience → same VP+ as UC1
- [x] Seam stance → honest seam (today vs. tomorrow)
- [x] Wrapper brand → reuse UC1 Adobe Piñata wrapper
- [x] Inner brand → invented artisan brand, built for real with Stardust
- [x] Walk-out line → "One prompt · one website." (whitepaper)
- [x] Series-close line → "Ship the demo before the deck." (matches UC1)
- [ ] Confirm the invented brand's name + page list (set during phase 1 build of the real site)
- [ ] Confirm beat 3 brief.pdf content reads as authored, not synthesised
- [ ] Confirm music bed melody and timing of the seam-beat weight increase
- [ ] AEM authoring frame for the artisan site — still or live capture
- [ ] Internal Adobe clearance — light-touch (no real Adobe property depicted as redesigned)
