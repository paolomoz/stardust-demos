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
- **Build medium: HTML, not video.** The demo is a multi-page cinematic HTML experience modeled on the AI Factory Piñata reference (translate-Y page-wrap snap, vanilla CSS animations + canvas particles + cursor glow). The MP4 is a screen recording of that experience with music mixed in, for distribution where HTML can't go (email, decks).

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

- **Medium = message.** Stardust generates HTML; demoing it via HTML closes the loop.
- **Live iframe** for the reveal: the business.adobe.com redesigned page renders *live* inside the demo, not as a screenshot. That's the strongest possible "this is real" beat.
- **Iteration speed.** A line edit is a code edit. No render pipeline.
- **Brand inheritance via reference replication.** Wrapper is Adobe-branded, modeled on a polished internal reference (see below) — instant brand recognition for an Adobe VP+ audience, no exploration cost.

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

### Brand source: AI Factory Piñata (reference replication)

> Reference: `~/Desktop/preso/AI Factory Piñata — Adobe.html` (a polished Adobe-internal vision deck — saved page, ~17 MB, all assets inlined).

The wrapper is **Adobe-branded**, modeled directly on the Piñata. We don't dogfood Stardust here because the audience is internal Adobe VPs — they read the Piñata's visual language as "polished Adobe internal," and copying it gives the demo instant credibility.

Two brand surfaces stay separated:

- **Outer — the wrapper.** Adobe-branded, Piñata grammar (translate-Y page-wrap snap, near-black surfaces, Adobe red accent, Adobe Clean type, ambient particles, cursor glow).
- **Inner — Beat 3 content.** business.adobe.com redesign (`from-modules-faithful.html`) rendered live in an iframe, carries its own design system. The *artifact*, not the frame.

#### Piñata grammar — what we replicate

**Color tokens (CSS vars):**

```css
--bg:        #0a0a0a;            /* near-black background */
--surface:   #111111;            /* slightly lighter card surface */
--surface2:  #1a1a1a;            /* lighter still */
--red:       #eb1000;            /* Adobe red — primary accent */
--red2:      #ff3320;            /* hover/secondary red */
--text:      #e8eef8;            /* cool off-white body */
--muted:     rgba(232,238,248,0.68);
--dim:       rgba(232,238,248,0.45);
--border:    rgba(235,16,0,0.15);    /* red @ 15% */
--border2:   rgba(255,255,255,0.06); /* white @ 6% */
```

**Typography:**

- Adobe Clean (custom @font-face from `db.onlinewebfonts.com`), weights 400 / 700 / 800
- Source Code Pro for monospace eyebrows
- H1: `clamp(2.94rem, 8vw, 7.14rem)`, weight 800, line-height 0.92, letter-spacing -0.03em
- H2: `clamp(2.37rem, 4.5vw, 3.544rem)`, weight 800, letter-spacing -0.025em
- Big number: 5.906rem, weight 800, letter-spacing -0.04em, color `--red`
- Eyebrow: 0.7–0.81rem, uppercase, letter-spacing 0.12–0.14em, monospace, color `--red2`
- Body: 1.1rem, color `--muted`, max-width 500–560px, line-height 1.75
- Adobe red highlight inside heading via `<span class="red">word</span>`

**Surfaces and components:**

- Top nav: fixed, full-bleed, `rgba(7,9,15,0.85)` + `backdrop-filter: blur(20px)`, slides down on load. Logo "Adobe (red) | Project Name (white)" on left; menu links + red CTA on right.
- Card: `--surface` background, 1px border (`--border` or `--border2`), 4px radius, 3rem padding. `::before` red accent line at top, scaleX(0)→scaleX(1) on `.in` activation (0.5s `cubic-bezier(0.16, 1, 0.3, 1)`).
- Buttons: red filled (`--red`) with `translateY(-3px)` hover + diagonal sheen sweep, OR ghost with `--border2` border that turns red on hover.
- Bottom-right circular nav arrow that flips on the last slide.

**Motion vocabulary (21 keyframes in source):**

`fadeUp`, `slideDown`, `heroReveal`, `glitch`, `blink`, `breathe`, `gridPulse`, `scanline`, `scanDown`, `pulseRing`, `redGlow`, `pinataSway`, `flipIn`, `wordIn`, `charIn`, `confDrop`, `floatUp`, `tlPulse`, `ticker`, `beamSweep`. Hero typography fades up in a stagger (0.4 / 0.6 / 0.8 / 1.1 / 1.3 / 1.5s delays). Red word in the hero glitches every 7s. Background grid pulses subtly. Hero glow breathes. 160 ambient particles in 3 types (ember / orb / streak) on a fixed canvas, mouse-attracted within 900px radius.

**Navigation pattern (the load-bearing one):**

- Single `#page-wrap` with sections inside.
- `wrap.style.transform = translateY(-secs[i].offsetTop + 'px')` snaps to section `i`.
- `transition` on the wrap; 900ms busy-lockout to prevent input pile-up.
- `wheel` event has accumulator (`±60` deltaY threshold) → `goTo(cur ± 1)`.
- `keydown` on `ArrowDown`/`PageDown`/`ArrowUp`/`PageUp` → `goTo(cur ± 1)`.
- Touch swipe (>50px) → `goTo(cur ± 1)`.
- Each `goTo()` toggles `.in` on `.reveal`, `.reveal-left`, `.level-node` (150ms stagger), `.val-item` (60ms stagger), `.stat-card,.comp-card,.nstep,.road-card,.trust-row` (100ms stagger). Numeric `[data-target]` count-ups run 1400ms ease-out-quart.

For our demo we **keep** this skeleton and **replace** wheel/key triggers with an autoplay timer (per-beat duration from `script.md`), preserving the keyboard override (`→`/space, `←`) for live navigation.

### What we hand-wire on top of the Piñata clone

- Autoplay timer that calls `goTo(i+1)` on a per-beat schedule
- Cover screen (`index.html`) with "press space to begin" — satisfies autoplay-with-sound policy + clean recording first frame
- Beat 3 iframe of `from-modules-faithful.html` + before/after slider over it
- Music bed `<audio autoplay>` (gated by the cover-screen gesture) so the screen recording captures it in sync
- `prefers-reduced-motion` fallback (jump to resolved state per section)

### Repo layout for this demo

```
demos/uc1-uplift/
├── README.md                    # this file
├── script.md                    # beat-by-beat content + timing
├── reference/                   # Piñata reference + analysis artifacts
│   └── pinata-captures/         # screenshots per section (one per beat candidate)
├── experience/                  # the deliverable HTML build (Piñata-cloned wrapper)
│   ├── index.html               # cover screen + autoplay controller mounts
│   ├── styles/
│   │   ├── tokens.css           # CSS vars lifted from Piñata (--bg, --red, --text, ...)
│   │   ├── base.css             # nav, sections, cards, buttons
│   │   ├── motion.css           # all 21 keyframes
│   │   └── beats/<n>.css        # per-beat layout
│   ├── scripts/
│   │   ├── controller.js        # autoplay + key override + goTo() + reveals
│   │   ├── particles.js         # 160-particle ambient canvas
│   │   ├── cursor-glow.js       # mousemove follower
│   │   └── beats/<n>.js         # per-beat behaviors (count-ups, iframes)
│   ├── beats/
│   │   ├── 01-cold-open.html    # included as <section> fragments via JS templating, or inlined
│   │   ├── 02-pipeline.html
│   │   ├── 03-reveal.html
│   │   ├── 04-aem.html
│   │   ├── 05-ongoing.html
│   │   └── 06-close.html
│   ├── assets/
│   │   ├── inserts/             # short MP4s: prompt press, file-tree blip
│   │   ├── captures/            # business.adobe.com live + redesign screenshots
│   │   ├── audio/               # the music bed
│   │   └── business-adobe-redesign/  # iframed in Beat 3 (copy or symlink)
│   └── vendor/                  # any external libs (likely just font CDN URLs in CSS)
└── recording/                   # MP4 export + working files
    └── uc1-uplift-90s.mp4       # the deliverable
```

(Implementation may inline beats as `<section>`s in `index.html` rather than separate fragment files — final structure decides during build phase.)

### Required assets (status)

- ✅ **Piñata reference** — at `~/Desktop/preso/AI Factory Piñata — Adobe.html`. Source read; tokens, motion vocabulary, and navigation pattern documented above.
- ✅ **Piñata captures** — `/tmp/uc1-pinata-captures/sec-00..10.png`, one per section. (Move into `reference/pinata-captures/` during scaffold.)
- ✅ Business.adobe.com redesign — exists at `/Users/paolo/excat/tmp/redesign-businessadobe/`. Will be iframed inside Beat 3.
- ✅ Redesign captures — `/tmp/uc1-captures/redesign-*.png`.
- ❌ Live `business.adobe.com` capture — Playwright headless bot-detected. Plan: real-browser screen capture (5–8s of fast scroll-down) for cold open + Beat 1.
- ❌ Short "system-running" inserts (~1–2s each): prompt press, file-tree reveal, optional seed-string flicker.
- ❌ AEM authoring screen — needs one frame.
- ❌ Ongoing-beat post-uplift expressions — confirm coverage in existing artifacts; otherwise reframe prototype variants.
- ❌ Music bed — direction proposed: editorial-restrained, slight tension in trap, resolves on reveal, urgency in ongoing, lands quiet on the close.

### Build phases (proposed)

0. **Wrapper skeleton** — scaffold `experience/`. Lift Piñata tokens → `tokens.css`; lift Piñata layout primitives (nav, sections, cards, buttons) → `base.css`; lift the 21 keyframes → `motion.css`; port the `goTo()` navigator + reveal-class system → `controller.js`; replace wheel/key triggers with an autoplay timer per-beat from `script.md`. Six beat sections stubbed with placeholder headlines on the right schedule. Cover screen + press-space-to-begin. ~1 day.
1. **Beat content** — fill each beat with on-screen text and assets per `script.md`. Wire the Beat 3 iframe of the business-adobe redesign with a before/after slider. Place inserts (prompt press, file-tree blip, AEM authoring frame). ~1 day.
2. **Ambience** — port the 160-particle canvas + cursor glow + grid pulse + hero glow breathe. ~½ day.
3. **Polish + record** — pacing, music sync, cross-browser sanity check (Chrome + Safari), screen-record at 1920×1080 60fps, mix audio, export MP4. ~½ day.

Total: ~3 days.

### Internal clearance

Confirm Adobe legal/comms is fine with `business.adobe.com` in the recorded demo before any external distribution. Should be straightforward for an Adobe-internal context.
