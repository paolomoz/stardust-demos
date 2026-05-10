# Motion-demo skill (draft, in-progress)

> Living capture of patterns, decisions, and pitfalls from building demos in this project. Eventual use: source material for a Claude Code skill that codifies "build a cinematic, motion-driven HTML demo for a product."
>
> **How to maintain:** update this doc inline during demo build whenever we (a) lock a decision worth re-using, (b) define a reusable pattern, (c) hit a gotcha. Don't wait until the end — value compounds when the entry is fresh.

---

## Working name

`motion-demo` (or `cinematic-demo`, TBD).

## What this skill would do

Build a short (~60–90s), text-only-narrated, cinematic HTML demo of a product, then export it to MP4 with a music bed. Multi-page, auto-advance with manual override, dogfood-friendly (the product designs its own demo wrapper when applicable).

## When to invoke

When the user asks to build:
- A vision demo for a software/design product
- A "ship the demo before the deck" walk-out artifact
- A 60–90s VP+ explainer that needs to feel premium without a video team
- An HTML scrollytelling demo that exports to MP4

Skip when:
- The user wants a traditional voiceover-led explainer (After Effects fits better)
- Footage-heavy storytelling (real human shots, multi-camera)
- Anything > 2 minutes (different pacing model)

## Inputs (from the user)

- **Target product** — what's being demoed
- **Use case** — the specific scenario (uplift / new design / from brief / etc.)
- **Audience** — who watches; primarily decides length and density
- **Target subject** (if applicable) — e.g. a real site to uplift, a brief, a brand
- **Existing artifacts** (optional) — if available, montage from these instead of running fresh

## Outputs

- `script.md` — beat-by-beat content + timing, medium-agnostic
- `stardust/` (if dogfooding Stardust) — extract + direction + prototypes for the wrapper
- `experience/` — multi-page HTML build with autoplay controller and beat-specific content
- `recording/<name>.mp4` — final deliverable, screen-recorded with music mixed in

---

## Pipeline (skill phases)

0. **Brief intake** — confirm target, audience, length, narration mode, artifact strategy
1. **Script** — beat-by-beat, locked before any building
2. **(Optional) Dogfood** — if the product is HTML/web, extract its brand and direct → prototype the wrapper pages
3. **Migrate to experience/** — copy Stardust prototypes (or hand-built equivalents), add the autoplay controller + cover screen
4. **Beat-specific content** — fill each page with on-screen text, captures, MP4 inserts, iframes
5. **Polish + record** — pacing, music sync, screen-record, audio mix, MP4 export

---

## Patterns (reusable)

### Two-layer brand separation

When the demo presents an artifact (a redesigned site, a generated page, a sample output), there are **two brand surfaces**. Don't conflate.

- **Outer (the wrapper)** — the demo experience itself. Inherits the *product's* brand. If the product is Stardust, run extract on Stardust's site and direct the wrapper from that.
- **Inner (the content shown)** — the artifact under demo, in its own brand. Rendered via iframe, screenshot, or capture inside the wrapper.

Mental model: the wrapper is the gallery; the content is the painting. Different brand surfaces, layered correctly.

### Cover screen + press-to-begin

First HTML page is a cover screen with a "press space to begin" affordance. Solves three problems at once:

- Browser autoplay-with-sound policy (sound plays only after user gesture)
- Clean first frame for the screen recording
- Focal moment for the audience before content starts

### Page-per-beat architecture

For a ~90s demo, group the script's beats into ~6 HTML pages (10–20s each). Internal scroll-driven motion within each page; auto-advance between pages on a timer with key/wheel override (`→`/space advances, `←` rewinds, scroll drives intra-page reveals before auto-advance).

### Translate-Y page-wrap navigator (alternative to scroll-snap)

For full control over transitions and per-section reveal timing — and to side-step the messy interaction between `scroll-snap-type: y mandatory` and JS-driven scrolling — drive a single wrapper element via `transform: translateY(-section.offsetTop)` instead of letting the browser scroll. The Adobe AI Factory Piñata reference uses this pattern: one `#page-wrap` parent with sections inside, a `goTo(i)` function that sets the transform, a busy-lockout for the transition duration (~900ms), and reveal-class toggling per section.

Pros: deterministic transitions; per-section reveals fire on the same callback that moves; easy to autoplay (just call `goTo(i+1)` on a timer).

Cons: regular browser scroll is broken (you have to intercept wheel/key/touch); accessibility needs explicit attention (focus management, screen-reader landmarks, `prefers-reduced-motion` jump-to-state).

Skeleton:

```js
const wrap = document.getElementById('page-wrap');
const secs = [...document.querySelectorAll('#page-wrap section')];
let cur = 0, busy = false;
function goTo(i) {
  if (i < 0 || i >= secs.length || busy) return;
  busy = true; cur = i;
  wrap.style.transform = `translateY(-${secs[i].offsetTop}px)`;
  secs[i].querySelectorAll('.reveal,.stagger').forEach((el, j) =>
    setTimeout(() => el.classList.add('in'), j * 100));
  setTimeout(() => { busy = false; }, 900);
}
window.addEventListener('wheel', e => { e.preventDefault(); /* accumulator */ }, { passive: false });
window.addEventListener('keydown', e => { if (e.key === 'ArrowDown') goTo(cur + 1); /* etc */ });
```

CSS: `#page-wrap { transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1); }` and `section { min-height: 100vh; }`.

### Audience naming surface (protagonist + supporting)

Audience-facing demo content uses **one protagonist** (the product). Supporting components (orchestrators, integrations, internal toolchain) stay in production notes, not on screen. Internal/audience split is a writing-surface rule, not a knowledge-suppression rule — context files keep technical truth.

### Intent-only design phrase

When directing a Stardust prototype for the wrapper, use a phrase that captures *intent* in ~6–10 words. No colors, typefaces, or surfaces named. Let Stardust resolve to specifics. Examples that worked:

- *"feel modern. cinematic, confident. let motion carry it."* (8 words; UC1)

The principle: a designer briefs intent, Stardust resolves to tokens. Demoing this directly inside the demo is a strong dogfood beat.

### "Ongoing capability" back-half

For VP+ audiences, the question after "this looks great" is always "and then what?" Reserve ~14s near the end to answer: the product as a continuous capability, not a one-time event. Walk-out line is a compression: *"Not a project. A capability."* (UC1) or equivalent. This is usually the strongest beat in the cut.

### "Real but separate hints of the system running"

Even when montaging from existing artifacts, record 1–2 short fresh inserts (terminal prompt, file-tree blip) and seed them through the cut. Plants authenticity beats. Keeps "built with the working product" honest without re-running the full pipeline.

### Walk-out line

End on a single short phrase the audience can repeat in their next meeting. Borrow the product's existing distinctive language rather than inventing one. Examples that landed: *"Math, not mysticism."*, *"Ship the demo before the deck."*

---

### Brand source: dogfood vs reference replication

Two viable approaches for the wrapper's brand. Pick per demo:

| Approach | When | Tradeoffs |
|----------|------|-----------|
| **Dogfood** — extract+direct against the product's own site, prototype the wrapper with Stardust | Demo audience is meta-aware (designers, devs, PMs); the product is HTML-related; meta-coherence is part of the message | Highest "medium = message" coherence; requires Stardust pipeline run; less control over exact look |
| **Reference replication** — copy a polished existing brand artifact (deck, microsite, page) and adapt it | Audience is execs in the product's own org; an established internal brand is recognizable and trusted; the demo benefits from instant brand recognition | Highest fidelity to a known-good reference; no Stardust pipeline overhead; loses the dogfood story but gains audience-fit |

For internal Adobe VP+ audiences, replication of an Adobe-internal reference (e.g. AI Factory Piñata) lands faster than a Stardust-dogfood wrapper. Reserve dogfood for designer/dev/PM audiences where the meta-loop is part of the demo's value.

## Decisions with reasoning

### Length: text-only vs voiceover

| Mode | Sweet spot | Upper edge |
|------|-----------|-----------|
| Text-only kinetic | 45–75s | 90s (only with strong visual rhythm; internal audience) |
| Sparse VO + music | 60–90s | 120s |
| Heavy VO | 90–120s | — generally avoid for vision demos at exec level |

Default to **text-only** for vision demos. VO is warmer but adds production cost (talent, rerecords) and weakens the "unconventional spirit" framing.

### Build medium: HTML vs video editor

Default **HTML-first** when the product is web/HTML-related. Reasons:

- Medium = message
- Iteration speed (line edit > re-render)
- Live iframes for "this is real" reveals
- Cinematic motion stacks (Lenis + GSAP + ScrollTrigger + CSS scroll-driven) are mature

Use a video editor (After Effects, Premiere) only when:
- Heavy compositing (3D, complex masking, footage-driven storytelling)
- The product itself isn't web (mobile-only, hardware, etc.)
- VO-led with extensive sound design

### Asset strategy: fresh run vs montage from existing

Default **montage from existing artifacts** + small fresh "system-running" inserts for authenticity. Fresh full runs are expensive and rarely improve the cut.

### Audience-tailored cold opens

For internal audiences (the product's own org), self-aware cold opens are licensed: e.g. *"business.adobe.com has hundreds of pages. They share twelve templates."* For external audiences, lean less on confessional framing and more on universal pain.

---

## Pitfalls / gotchas

- **Headless browser bot detection.** Big sites (business.adobe.com, many enterprise marketing sites) bot-detect headless Playwright — HTTP/2 errors or 60s+ timeouts. For "before" / live-site frames, plan a real-browser screen capture, or use a stealth setup.
- **JS-driven snap navigation defeats CSS scroll override.** When analyzing a reference page that uses `transform: translateY()` snap (with `wheel` and `keydown` event listeners that `preventDefault`), neither `scroll-snap-type: none !important` nor `window.scrollTo` will let you scroll freely for capture — the page isn't actually scrolling. Look for `addEventListener('wheel', …, {passive: false})` and `goTo(i)`-style functions in the source. To capture: drive `wrap.style.transform` directly (`translateY(-secs[i].offsetTop)`) and trigger `.in` reveal classes manually.
- **Autoplay-with-sound policies.** Chrome/Safari block autoplay audio until user gesture. The cover-screen + press-to-begin pattern solves this for both live demo and recording.
- **Music sync without a timeline editor.** If music plays inside the HTML, the screen recording captures it in sync. If you score in post, page transitions need precise timestamps.
- **`prefers-reduced-motion`.** Cinematic demos must respect it (jump to resolved state). Skip and you'll lose accessibility points and some VPs use it.
- **Cross-browser quirks.** Test the experience in Chrome + Safari at minimum before recording. Lenis behaves differently in Safari.
- **Stardust pipeline order.** `direct` expects an extract artifact in `stardust/current/` to inherit from (or `--rebrand` for full divergence). Skipping extract leaves direct without a brand to compile against.
- **Length creep without VO.** Text-only beats *feel* longer than they look on paper because the audience reads. Pad time estimates by 20% during script review.

---

## Open questions / TBD

- **Music bed sync.** Does the music live in the HTML (recording captures it) or get mixed in post? UC1 plans the former; validate in build.
- **Cross-browser parity for scroll-driven CSS.** `animation-timeline: view()` is a Chromium primary; Safari support is partial. Fallbacks needed.
- **Skill metadata.** SKILL.md frontmatter — name, description, when-to-invoke — settle once the first demo is shipped and we know what reused cleanly.
- **Ratio of Stardust-generated to hand-built code in the wrapper.** Prediction: 70/30. Refine after Phase 0 of UC1.
- **Handoff to a video editor.** If anything *needs* AE-style compositing, where's the cut line? Probably none for UC1, but worth noting for future demos.

---

## Source demos this draft is based on

- `demos/uc1-uplift/` — UC1, business.adobe.com uplift, 90s text-only HTML, Adobe-branded wrapper.
  - Brand source: **reference replication** of `~/Desktop/preso/AI Factory Piñata — Adobe.html` (translate-Y page-wrap navigator, Adobe red accent on near-black, Adobe Clean type, particles + cursor glow ambience).
  - Status: plan locked; wrapper skeleton next.

Add new entries as demos ship. Each demo should contribute back: a pattern, a decision, or a gotcha.
