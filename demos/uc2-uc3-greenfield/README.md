# UC2 + UC3 — Greenfield (no source site)

> Vision demo, working product, VP+ audience. Companion to `uc1-uplift`. Where UC1 was an enterprise replatform, this one shows Stardust building a brand-new site from scratch — two ways in, one destination.

## Scenario

There is no site to uplift. A small, brand-led project needs a site. Two front doors into Stardust:

- **UC2 — Direction path.** A designer brings brand assets and a short intent phrase. Stardust resolves it to a deterministic design system.
- **UC3 — Brief path.** A strategist drops a written brief. Stardust synthesises product surface, design system, and page list from the prose.

Both paths converge on `prototype → migrate` and land on the same generated site. The middle of the demo is honest about the seams in today's pipeline; the back half names the commands that close them.

## Audience and intent

- **Audience:** VP and above, same as UC1. Mostly non-technical. Series-aware (this is "the second Stardust demo").
- **Intent:** widen Stardust's perceived reach beyond uplift. Make "and we can also start from nothing" feel inevitable, not aspirational.
- **Not the goal:** prove that today's pipeline does this end-to-end without seams. It doesn't. The seam is part of the message — it doubles as roadmap signal.

## Constraints (from brief)

- 90s, locked.
- Series continuity with UC1: same Adobe Piñata wrapper, same `extract → direct → prototype → migrate` rail, same starfield bookend, same "Lands in AEM" beat, same series-close line.
- **One real generated site** powers both paths. The artifacts shown on screen are produced by Stardust against a real invented brand — not mocked.
- The seam beat is the payoff. It replaces UC1's "ongoing capability" beat as the VP-level moment.

## Length budget

Target: **90s** (locked). Same upper-edge text-only kinetic budget as UC1, justified by the same logic: cinematic HTML format carries the audience past the usual text-only drop-off, internal Adobe audience has context.

## Decisions locked

- **Audience:** same VP+ as UC1.
- **Seam stance:** **honest seam** — show what's missing today and the commands that close it. ~16s dedicated beat.
- **Wrapper brand:** **reuse the UC1 Adobe Piñata wrapper.** Zero rebuild, maximum series continuity.
- **Inner brand:** a new invented artisan brand, built for real with Stardust. Visual register deliberately the opposite of UC1's enterprise target — atelier, slow, human-led — so the series reads as "Stardust spans the spectrum."
- **Narration mode:** text-only over a single music bed, same grammar as UC1.
- **Length:** 90s.
- **Audience naming:** Stardust + AEM only on screen. (Per CLAUDE.md.)
- **Walk-out line:** "One prompt · one website." (from whitepaper).
- **Series-close line:** "Ship the demo before the deck." (same as UC1).
- **Build medium:** HTML, same Piñata-cloned wrapper as UC1 (`experience/` mirrors UC1's structure).

## Narration outline (the spine)

1. **Cold open** — *"What if there's nothing to extract?"* The UC1 pipeline diagram reappears with `extract` dimmed. Two inputs hover where a URL would go: a designer's asset bundle, a brief document.
2. **UC2 — Direction path.** Designer's assets drop in (logo, swatches, a few mood images, voice notes). A short intent phrase types. `DESIGN.json` resolves on screen — tokens, surface temperatures, register.
3. **UC3 — Brief path.** `brief.pdf` lands. Stardust parses to `PRODUCT.md` + `DESIGN.md` + a page list, which spreads across the frame.
4. **Converge.** Two streams merge into `prototype → migrate`. Pages bloom into a grid of the actual generated site.
5. **The seam (the payoff).** *"Today: a hand-edited entry."* Then `/stardust:from-direction` and `/stardust:from-brief` type as preview commands. Tag: *shipping.* This is the VP-level moment.
6. **Lands in AEM + walk-out.** AEM authoring frame. Walk-out: *"One prompt · one website."* Series-close: *"Ship the demo before the deck."*

Beat-by-beat in `script.md`.

### Why the seam beat is the key (instead of UC1's ongoing-capability beat)

UC1's payoff was about repetition: "the uplift is just the start." UC2+UC3's payoff is about **reach**: today Stardust starts from extract; tomorrow it starts from anything. Naming the next two commands on screen — `/stardust:from-direction`, `/stardust:from-brief` — is the moment a VP sees the *product surface* expand. It is also the demo's load-bearing roadmap signal, per `CLAUDE.md` ("show the seam, don't hide it").

## Build approach: HTML-first, MP4 as artifact

Same model as UC1. The demo is the same Piñata-cloned cinematic wrapper, re-skinned per-beat for the new narrative. The MP4 is a screen recording of the HTML experience with music mixed in.

### Why this works as a series

- **Outer wrapper unchanged.** Same Adobe red, same near-black, same Adobe Clean type, same translate-Y page-wrap navigator, same cover screen + press-to-begin, same starfield bookend. A VP who has seen UC1 immediately reads this as part of the same body of work.
- **Inner artifact deliberately new.** The artisan brand's pages render live inside the wrapper. Two registers (Adobe / artisan) sitting next to each other tell the "spans the spectrum" story without narration.
- **Same `extract → direct → prototype → migrate` rail.** The pipeline diagram is the demo series' visual signature. UC1 used the whole rail. UC2+UC3 dims `extract` and lights up two alternative front doors — same grammar, different routing.

### Page architecture (90s mapped to 6 pages)

| # | Page | Beats | Approx duration |
|---|------|-------|-----------------|
| 1 | `01-cold-open.html` | Cold open + framing ("no site to extract") | 0:00 – 0:10 (10s) |
| 2 | `02-direction.html` | UC2 — Direction path (assets in → DESIGN.json out) | 0:10 – 0:30 (20s) |
| 3 | `03-brief.html` | UC3 — Brief path (brief.pdf in → PRODUCT/DESIGN/page list out) | 0:30 – 0:50 (20s) |
| 4 | `04-converge.html` | Converge — both flows hit `prototype → migrate`; the generated site blooms | 0:50 – 1:02 (12s) |
| 5 | `05-seam.html` | The seam — today vs. tomorrow; preview commands | 1:02 – 1:18 (16s) |
| 6 | `06-aem-close.html` | Lands in AEM + walk-out line + series-close | 1:18 – 1:30 (12s) |

Transitions, controller, particles, cursor glow, starfield — all reused from UC1 unchanged. Each beat brings its own reveal mechanic (per the motion-demo-skill rule: never repeat a mask).

### Playback model

Identical to UC1: cover screen with "press space to begin", autoplay timer with key/wheel override, `prefers-reduced-motion` jump-to-resolved-state fallback, music bed in HTML so screen recording captures it in sync.

### Brand sources

Two surfaces stay separated, same pattern as UC1.

- **Outer — the wrapper.** Adobe-branded, Piñata grammar. Reuse UC1's `tokens.css`, `base.css`, `motion.css`, `controller.js`, `particles.js`, `cursor-glow.js` verbatim. Per-beat CSS/JS modules are new.
- **Inner — the generated site.** A new invented artisan brand, built for real with Stardust against a private reference (kept out of repo and off-screen). Renders live in iframe at Beat 4 (converge) and Beat 6 (Lands in AEM).

The artisan brand's identity, voice, page list, and DESIGN tokens are produced by the actual Stardust pipeline. Imagery is generated separately and fed in as brand assets. The brief shown in UC3 is **reverse-engineered from the brand's real PRODUCT.md** so the brief→site mapping shown on screen is internally consistent: if `/stardust:from-brief` existed, this brief would produce that site.

### What we hand-wire on top of the UC1 wrapper

- Six new per-beat HTML sections + their CSS/JS modules
- Beat 2 designer-asset card stack + intent-phrase typewriter
- Beat 3 brief-document prop + page-list materialise animation
- Beat 4 live iframe of the generated artisan site + grid spread
- Beat 5 preview-command typewriter for `/stardust:from-direction` and `/stardust:from-brief` with a *"shipping"* tag
- Beat 6 AEM authoring frame for an artisan-site page (or screenshot if live AEM frame is impractical)
- Music bed (separate cue from UC1; same editorial-restrained register, different melody)

### Repo layout for this demo

```
demos/uc2-uc3-greenfield/
├── README.md                    # this file
├── script.md                    # beat-by-beat content + timing
├── experience/                  # the deliverable HTML build
│   ├── index.html               # cover screen + autoplay controller mounts
│   ├── styles/
│   │   ├── tokens.css           # symlink or copy from uc1-uplift
│   │   ├── base.css             # symlink or copy from uc1-uplift
│   │   ├── motion.css           # symlink or copy from uc1-uplift
│   │   └── beats/<n>.css        # new per-beat layout (1..6)
│   ├── scripts/
│   │   ├── controller.js        # symlink or copy from uc1-uplift, retimed
│   │   ├── particles.js         # symlink or copy from uc1-uplift
│   │   ├── cursor-glow.js       # symlink or copy from uc1-uplift
│   │   └── beats/<n>.js         # new per-beat behaviors (2, 3, 4, 5)
│   ├── beats/
│   │   ├── 01-cold-open.html
│   │   ├── 02-direction.html
│   │   ├── 03-brief.html
│   │   ├── 04-converge.html
│   │   ├── 05-seam.html
│   │   └── 06-aem-close.html
│   └── assets/
│       ├── artisan-site/        # the generated site, iframed in beats 4 + 6
│       ├── brand-images/        # generated imagery used as assets in Beat 2
│       ├── brief.pdf            # the brief document shown in Beat 3
│       ├── inserts/             # short MP4s if needed (preview-command type-in, etc.)
│       └── audio/               # the music bed
└── recording/                   # MP4 export + working files
    └── uc2-uc3-greenfield-90s.mp4   # the deliverable
```

Beats may be inlined as `<section>`s in `index.html` rather than separate files — finalise during build.

### Required assets (status)

- ❌ **Generated artisan site** — produced by running Stardust against an invented brand. Lives under `assets/artisan-site/`. Iframed at beat 4 and beat 6.
- ❌ **Brand imagery** — generated externally (image model). Used as drop-in assets in Beat 2 (the designer's mood pile).
- ❌ **Brief PDF** — `brief.pdf`. Reverse-engineered from the brand's real PRODUCT.md after the site is built, so brief→site is internally consistent.
- ❌ **Preview-command typewriter inserts** — short clips of `/stardust:from-direction` and `/stardust:from-brief` typing in a terminal frame. ~1.5s each.
- ❌ **AEM authoring frame for an artisan-site page** — same constraint as UC1; may be a single still if live capture is impractical.
- ❌ **Music bed** — same editorial-restrained register as UC1; new melody. Resolves on the converge (beat 4), gains weight on the seam beat (beat 5), lands quiet on the walk-out (beat 6).
- ✅ **Wrapper plumbing** — all of UC1's `tokens.css`, `base.css`, `motion.css`, `controller.js`, `particles.js`, `cursor-glow.js`, the starfield, the cover screen, the press-to-begin gesture. Reuse as-is.

### Build phases

0. **Wrapper skeleton** — clone UC1's `experience/` plumbing into this demo. Six beats stubbed with placeholder headlines. Controller retimed to the schedule above. Cover screen + press-to-begin in.
1. **Generate the artisan site** — run Stardust against the invented brand: produce DESIGN tokens, page list, prototype HTML. Generate imagery externally and feed back in. **This is the longest phase** — output is both an asset for the demo and a working dogfood of the toolchain.
2. **Reverse-engineer the brief** — derive `brief.pdf` from the real PRODUCT.md so UC3's brief→site reads as internally consistent. Brief stays *intent-led*, not template-led.
3. **Beat content** — fill each beat per `script.md`. Wire Beat 4's live iframe of the artisan site. Capture beat 5's preview-command typewriter. Place the AEM frame in beat 6. ~1 day.
4. **Polish + record** — pacing, music sync, cross-browser sanity check (Chrome + Safari), screen-record at 1920×1080 60fps, mix audio, export MP4. ~½ day.

Phase 1 is the dependency that paces everything. Phases 0 and 2 can start in parallel.

### Running the skeleton

Same as UC1. Serve over HTTP (web fonts CORS-block under `file://`) and pick a fresh port (something around `9030+`) to avoid colliding with UC1's local server.

```
cd demos/uc2-uc3-greenfield/experience
npx serve            # or: python3 -m http.server 9030
# open the printed URL in Chrome
# press Space to begin; ArrowRight / ArrowLeft / PageUp / PageDown / Home / End to navigate
```

### Internal clearance

The demo shows an invented brand (not Adobe-owned). The outer wrapper is Adobe-branded. Same internal-clearance call as UC1 before external distribution; lighter weight here because no real Adobe property is depicted as redesigned.
