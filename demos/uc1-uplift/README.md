# UC1 — Uplift an existing site

> Vision demo. Working product. VP+ audience. Unconventional spirit where it earns it.

## Scenario

A real, tired-looking enterprise site is uplifted end-to-end with Stardust. Brand DNA preserved; surface modernized. Demo lands the *idea* and the *outcome* — not the steps, not real-time.

## Audience and intent

- **Audience:** VP and above. Mostly non-technical. Walk-out memorable line matters more than the CLI.
- **Intent:** make replatforming-as-brand-refresh feel cheap, fast, and inevitable. Get them to repeat one line in their next meeting.
- **Not the goal:** prove the toolchain step-by-step. The toolchain is glanced, not narrated.

## Constraints (from brief)

- Quick. Heavy cuts. **Not real-time.** No full step-throughs.
- Process visible enough that "this is real" is undeniable. **Built with the working product** — artifacts on screen are actually generated, not mocked.
- Unconventional in voice where it earns the laugh. Restrained otherwise.

## Length budget

Target: **90s** (locked). For text-only at VP+ level this is the upper edge of the attention window — 75s is the safer standard for kinetic typography without voice. 90s is workable here because the cinematic HTML format gives the visual enough rhythm to carry the audience past the usual drop-off, and the audience is Adobe-internal (already has context).

## Decisions locked

- **Target:** `business.adobe.com` — Adobe-on-Adobe. Gives license to a self-aware cold open ("hundreds of pages, twelve templates"). No external legal risk; flag internal clearance before public use.
- **Narration mode:** text-only over a single music bed. Type carries the lines.
- **Length:** 90s, with the ongoing-capability beat as the back-half payoff.
- **Audience naming:** Stardust + AEM only. No Snowflake/EMA on screen. (See CLAUDE.md.)
- **Asset strategy:** montage from existing artifacts; record only short "system-running" inserts (prompt press, file-tree blip) fresh.
- **Build medium: HTML, not video.** The demo is a multi-page cinematic HTML experience built on the same motion stack as the redesign (Lenis + GSAP + ScrollTrigger + CSS scroll-driven). The MP4 is a screen recording of that experience with music mixed in, for distribution where HTML can't go (email, decks).

## Narration outline (the spine)

1. **Cold open** — page volume confession (hundreds of pages, twelve templates).
2. **The trap** — unique-or-consistent: pick one.
3. **The turn** — single prompt against business.adobe.com.
4. **Pipeline montage** — four glances: extract, direct, prototype, migrate. ~6s each.
5. **The reveal** — before/after, then the whole site, brand intact.
6. **Lands in AEM** — authorable on day one. (Compressed, single beat.)
7. **The ongoing capability** — after-uplift beat. New launches / campaigns / regions, same rules, team size unchanged. *"Not a project. A capability."* This is the VP+ payoff.
8. **The line** — "Math, not mysticism."
9. **Close** — logo, "Ship the demo before the deck."

Beat-by-beat in `script.md`.

### Why the ongoing-capability beat is the key

Site owners — including business.adobe.com — don't have big design resources. A one-time uplift is a project; a continuous design-generation capability is a budget line. For a VP+ audience, the question after "this looks great" is always "and then what?" — this beat answers it. It reframes Stardust from **event** to **capability**, which is what justifies investment.

## Build approach: HTML-first, MP4 as artifact

The demo is built as a cinematic, multi-page HTML experience — *not* assembled in After Effects. The MP4 is a screen recording of the HTML experience, with the music bed mixed in, for distribution.

### Why HTML

- **Medium = message.** Stardust generates HTML; the demo *about* Stardust being made of HTML closes the loop.
- **Stardust designs the demo itself.** The wrapper isn't hand-coded — it's Stardust prototypes. The demo about Stardust is *made by* Stardust. Maximum dogfood.
- **Live iframe** for the reveal: the business.adobe.com redesigned page renders *live* inside the demo, not as a screenshot. That's the strongest possible "this is real" beat.
- **Iteration speed.** Re-running `/stardust:direct` with a tweaked phrase regenerates the whole wrapper. A line edit is a code edit.

### Page architecture (90s mapped to 6 pages)

| # | Page | Beats | Approx duration |
|---|------|-------|-----------------|
| 1 | `01-cold-open.html` | Cold open + Trap | 0:00 – 0:14 (14s) |
| 2 | `02-pipeline.html` | Turn + 4-beat montage (extract / direct / prototype / migrate) | 0:14 – 0:46 (32s) |
| 3 | `03-reveal.html` | Reveal — before/after + grid (live iframe of redesign) | 0:46 – 1:00 (14s) |
| 4 | `04-aem.html` | Lands in AEM | 1:00 – 1:08 (8s) |
| 5 | `05-ongoing.html` | The ongoing capability | 1:08 – 1:22 (14s) |
| 6 | `06-close.html` | The line + Close | 1:22 – 1:30 (8s) |

Page transitions: full-bleed crossfade or scale-and-clip, ~400ms. Each page can use scroll-driven reveals *internally* for its sub-beats (the redesign's grammar — text-animator cascade, stagger-reveal, hero-mosaic spread→tight, garage-door, etc.).

### Playback model

**Default: autoplay with manual override.**

- Cover screen (`index.html`) with a "press space to begin" affordance — satisfies browser autoplay-with-sound policies and gives a clean first frame for the recording.
- Once started: autoplay timer advances pages on a fixed schedule (matching the script's beats).
- User can override: `→` / `space` advances, `←` rewinds, `wheel` drives intra-page scroll-reveals at the user's pace before auto-advance kicks in.
- Internal scroll-reveals respect `prefers-reduced-motion` (jump to resolved state) — required by the redesign's animation contract.

### Brand source: two layers, cleanly separated

The demo has two brand surfaces. Don't conflate them.

**Outer — the wrapper (Stardust's brand).** The demo experience itself is a Stardust product expression, so it inherits Stardust's brand:

```
/stardust:extract https://paolomoz.github.io/stardust-site/
/stardust:direct  "feel modern. cinematic, confident. let motion carry it."
/stardust:prototype <beat>          # for each of the six beat pages
```

The extract captures Stardust's palette, type, voice, motifs. The direct phrase asks for a cinematic, motion-led expression of *that* brand. The prototypes that come out are Stardust-branded, cinematic by direction. That's the wrapper.

**Inner — Beat 3 content (business.adobe.com redesign).** Rendered live in an iframe inside the wrapper. Carries its own brand, its own tokens, its own design system (the existing `stardust/target/DESIGN.json` from `/Users/paolo/excat/tmp/redesign-businessadobe/`). It's the *artifact* on display, not the frame.

Mental model: the wrapper is the gallery; the iframe is the painting. Different brand surfaces, layered correctly.

### Motion stack

Stardust's prototypes will land on a motion stack for us. The redesign's stack (Lenis + GSAP + ScrollTrigger + CSS `animation-timeline: view()` + custom rAF) is a known-good reference if Stardust's output needs supplementing for cinematic beats — but don't pre-commit; let Stardust resolve motion against its own brand first, then layer in only what's missing.

What we *will* hand-wire on top of Stardust's output:
- The autoplay controller (timer + key/wheel override + page transitions)
- The cover screen and "press space to begin" gesture
- The Beat 3 iframe wiring (load the business-adobe redesign page; before/after slider over it)
- Reduced-motion fallbacks where Stardust prototypes don't already provide them

### Repo layout for this demo

```
demos/uc1-uplift/
├── README.md                    # this file
├── script.md                    # beat-by-beat content + timing
├── stardust/                    # Stardust artifacts (the wrapper's design source)
│   ├── current/                 # output of /stardust:extract on stardust-site
│   ├── direction.md             # output of /stardust:direct
│   ├── PRODUCT.md / DESIGN.md / DESIGN.json  # post-direct, at this folder's root
│   └── prototypes/              # six beat pages, Stardust-generated
│       ├── 01-cold-open-proposed.html
│       ├── 02-pipeline-proposed.html
│       ├── 03-reveal-proposed.html
│       ├── 04-aem-proposed.html
│       ├── 05-ongoing-proposed.html
│       └── 06-close-proposed.html
├── experience/                  # deliverable HTML build (Stardust prototypes + hand-wired layer)
│   ├── index.html               # cover screen + autoplay controller
│   ├── 01..06.html              # migrated/edited copies of the prototypes
│   ├── controller.js            # timer + key/wheel override + page transitions
│   ├── assets/
│   │   ├── inserts/             # short MP4s: prompt press, file-tree blip
│   │   ├── captures/            # business.adobe.com live + redesign screenshots
│   │   ├── audio/               # the music bed
│   │   └── business-adobe-redesign/   # iframed in Beat 3 (copy or symlink)
│   └── vendor/                  # only what Stardust didn't provide
└── recording/                   # MP4 export + working files
    └── uc1-uplift-90s.mp4       # the deliverable
```

### Required assets (status)

- ❌ **Stardust extract of `paolomoz.github.io/stardust-site/`** — primary wrapper brand source. Run first.
- ❌ **Stardust prototypes** for the six beat pages — produced by `/stardust:prototype`. Phase 0.
- ✅ Business.adobe.com redesign — already exists at `/Users/paolo/excat/tmp/redesign-businessadobe/`. Will be iframed inside Beat 3.
- ✅ Redesign captures — done (`/tmp/uc1-captures/redesign-*.png`).
- ❌ Live `business.adobe.com` capture — Playwright headless bot-detected. Plan: real-browser screen capture (5–8s of fast scroll-down through the live site) for cold open + Beat 1.
- ❌ Short "system-running" inserts (~1–2s each): prompt press, file-tree reveal, optional seed-string flicker.
- ❌ AEM authoring screen — needs one frame; check existing artifact set first.
- ❌ Ongoing-beat post-uplift expressions — confirm coverage in existing artifacts; otherwise reframe prototype variants.
- ❌ Music bed — direction proposed: editorial-restrained, slight tension in trap, resolves on reveal, urgency in ongoing, lands quiet on the close.

### Build phases (proposed)

0. **Stardust dogfood** — `/stardust:extract https://paolomoz.github.io/stardust-site/` → `/stardust:direct "feel modern. cinematic, confident. let motion carry it."` → `/stardust:prototype` for each of the six beat pages. Stardust does the visual design and motion grammar. ~½ day (mostly waiting on prototype runs).
1. **Migrate to experience/** — copy prototypes into `experience/`, add the autoplay controller (timer + key/wheel override + page transitions), wire the cover screen. ~½ day.
2. **Beat-specific content** — fill each page with its on-screen text and assets per `script.md`. Wire the Beat 3 iframe of the business-adobe redesign with a before/after slider. Place inserts. ~1 day.
3. **Polish + record** — pacing, music sync, cross-browser sanity check, screen-record at 1920×1080 60fps, mix audio, export MP4. ~½ day.

Total: ~2.5 days, less than the previous estimate because Stardust takes the design weight.

### Internal clearance

Confirm Adobe legal/comms is fine with `business.adobe.com` in the recorded demo before any external distribution. Should be straightforward for an Adobe-internal context.
