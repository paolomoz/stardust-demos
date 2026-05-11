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

### Per-beat distinct mask vocabulary

Every beat should have its **own** reveal mechanic — never repeat a mask across beats. Audience curiosity is sustained by variety. If you reach for the same trick twice, invent a new one. Established UC1 vocabularies:

| Beat | Mechanic | Signature |
|---|---|---|
| Cold open + transition | Polygon hole grows / shrinks / regrows in tiled-page-cover | Surgical aperture, content "emerges through" pages |
| Trap | Two grids (varied vs identical layouts) with stagger pacing as message | Visual disparity carries the contrast |
| Turn | Red slab + white-hot scan-line wipe top→bottom | Theatrical horizontal sweep |
| Reveal | Dark veil over live iframe → fades out | Cinematic curtain on a real artifact |

Plan more (slide-up / 3D card flip / ticker / scramble / morph / iris / liquid distortion / SVG path morph). Reserve one fresh mask per beat, in a deliberate order — strongest two as bookends.

### Visual disparity over typographic disparity

When a beat compares two concepts (X vs Y), render them as actual visual exemplars, not just contrasting labels. Beat 1 trap: instead of "Bespoke" vs "Templated" with a gantt and a stack, two grids — six visibly different page wireframes vs six identical ones. The eye reads it before the brain parses the headline. The comparison stops being abstract.

Rule of thumb: if the audience needs to read the text to understand the contrast, the visuals are doing too little.

### Stagger pacing as message

Animation pacing carries semantic weight, not just style:

- **Varied / irregular delays** → organic, hand-crafted, unique
- **Synchronous / uniform delays** → industrial, templated, stamped
- **Sequential / left-to-right** → process, pipeline, time-as-direction
- **Random scatter** → chaos, noise

In Beat 1 the unique grid cascades with varied delays (0.50/0.68/0.83/1.05/1.24/1.48s) while the template grid snaps in at a single 0.55s — same number of tiles, opposite meanings, conveyed through pacing alone.

### Cover-as-transition

A single visual element (cover, curtain, slab, page-tile mass) can do double duty: it's the reveal mechanic AND the scene transition. Don't add separate transition elements if the reveal mechanic can carry both jobs. Beat 1 demonstrates: the same `.reveal-cover` grows a hole on Scene A, shrinks back to wipe out, regrows with a different polygon shape on Scene B. Continuous mask narrative across two scenes instead of a hard cut.

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

### Seam beat as VP-level payoff (alternative back-half)

When the demo covers use cases the product does not yet fully ship, the seam itself can carry the back-half payoff — provided you frame it as **reach**, not gap. ~14–16s near the end: name what's missing today, then name the next commands on screen. The audience reads it as "the surface is about to expand," which for a VP is a stronger signal than "completed feature."

Pattern (UC2+UC3 greenfield):
1. *Today: a hand-edited entry.* — the current limitation, in one short line.
2. *Tomorrow: the front door types itself.* — the bridge.
3. Preview commands type in a terminal frame (`/stardust:seed`, `/stardust:brief`).
4. A small *"shipping."* chip in brand accent colour.
5. Full-frame line: *"Stardust is going to start anywhere."* (or product-equivalent).

This replaces UC1's ongoing-capability beat for use cases where the seams are the story. Compatible with the "show the seam, don't hide it" rule from this project's CLAUDE.md — the demo *is* the roadmap signal.

### Multi-use-case demo as "two ways in, one destination"

When two related use cases each have their own input modality but share the rest of the pipeline, run them as **two front doors converging on one rail** rather than as two separate flows shown in sequence. UC2+UC3 sit together because both are greenfield (no source site); they differ only at the entry. Structure:

- **Cold open** establishes the shared constraint ("no source site").
- **Two parallel path beats** show each input modality resolving to the shared mid-pipeline format (DESIGN tokens / PRODUCT surface).
- **A converge beat** shows the two streams merging into the shared `prototype → migrate` rail. The merge is a beat — small visual handshake, not a fade.
- **Result is one artifact**, not two — the audience sees the same destination from both starting points. Reinforces "the product meets you where you are."

Risk: 90s is tight for two paths. Keep each path beat ≤ 20s and lean on the wrapper's grammar to carry continuity.

### Series-continuous wrappers

When building a demo in a series (UC1, then UC2+UC3, then UCn), keep the **outer wrapper identical** and let the **inner artifact change**. Outer continuity makes the series read as one body of work; inner novelty earns each demo its own slot. Concretely:

- Reuse `tokens.css`, `base.css`, `motion.css`, `controller.js`, particles, cursor glow, cover screen, starfield bookend.
- New: per-beat CSS/JS modules, per-beat layouts, the inner artifact.
- Reuse the series-close line; vary the walk-out line per demo.

UC1 → UC2+UC3 share Adobe Piñata wrapper + starfield bookend + `extract → direct → prototype → migrate` rail. UC2+UC3 varies the rail by dimming `extract` and lighting two alternative front doors — same grammar, different routing.

### Brief reverse-engineered from PRODUCT.md

When a demo needs to show "brief → site" but the toolchain runs site → product surface (the reverse direction), build the real site first, then **reverse-engineer the brief from the real `PRODUCT.md`** so the brief shown on screen would, if a `/stardust:brief` command existed, produce that site. The mapping shown is internally consistent even though the production order is inverted. Keeps the visible artifact honest while sidestepping the missing pipeline step.

### Inner-brand contrast as series statement

When demoing the same toolchain across multiple use cases, **deliberately pick inner brands at opposite ends of a register spectrum** so the series reads as "the toolchain spans the spectrum." UC1 uses an enterprise marketing target (high-volume, templated, business-facing); UC2+UC3 uses an artisan brand (small, brand-led, human-led). Same outer wrapper, opposite inner registers — the contrast lands "Stardust handles anything in between" without narration.

### "Real but separate hints of the system running"

Even when montaging from existing artifacts, record 1–2 short fresh inserts (terminal prompt, file-tree blip) and seed them through the cut. Plants authenticity beats. Keeps "built with the working product" honest without re-running the full pipeline.

### Walk-out line

End on a single short phrase the audience can repeat in their next meeting. Borrow the product's existing distinctive language rather than inventing one. Examples that landed: *"Math, not mysticism."*, *"Ship the demo before the deck."*

### Cover IS the mask (not a separate layer)

When the opening cover needs to dramatically reveal Adobe (or product) content, **don't** stack two cover elements (splash + reveal-cover). Use one SVG with the cover content + the polygon-hole `<mask>` inside it. The hole grows through the cover; the audience sees the demo content emerging through a mask cut into the splash itself. Simpler, fewer z-index puzzles, no double-fade-out.

Implementation: SVG with `<mask id="reveal-mask">` (white rect + black polygon), the cover content as siblings inside a `<g mask="url(#reveal-mask)">`. Animate the polygon's `points` via GSAP `attr` or `<animate>`. At end of the beat, fade the cover SVG; the hole has already done the heavy lifting.

### `<foreignObject>` for rich HTML inside a masked SVG

To put canvas-painted starfields, animated CSS gradients, or styled HTML content **inside the polygon mask**, use SVG `<foreignObject>` inside the masked `<g>`. The HTML inside the foreignObject inherits the SVG viewBox's coordinate system and gets clipped by the mask the same as native SVG elements. Useful for the Stardust cover-as-mask pattern.

```html
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <mask id="reveal-mask">
      <rect width="1440" height="900" fill="white"/>
      <polygon class="reveal-hole" points="…" fill="black"/>
    </mask>
  </defs>
  <g mask="url(#reveal-mask)">
    <rect width="1440" height="900" fill="url(#bg-gradient)"/>
    <foreignObject x="0" y="0" width="1440" height="900">
      <div xmlns="http://www.w3.org/1999/xhtml" class="cover-content">
        <canvas class="starfield" width="1440" height="900"></canvas>
        <h1 class="wordmark">stardust</h1>
        …
      </div>
    </foreignObject>
  </g>
</svg>
```

Gotcha: the inner `<div>` needs `xmlns="http://www.w3.org/1999/xhtml"` for browsers to render it as HTML.

### JS-sequenced stage transitions with dark hold

For multi-stage beats where each stage must read as a distinct "page change" (not a morph): CSS cross-fade is too smooth — at any frame both stages are at half-opacity and the eye reads a blend, not a cut. Drive the transition from JS:

1. Remove `.active` from the outgoing stage → it fades out over `FADE_MS` (CSS transition on `opacity`).
2. **Wait** `FADE_MS + DARK_HOLD_MS` (a deliberate blank moment with no stage visible).
3. Add `.active` to the incoming stage → it fades in.

For Beat 3 we use `FADE_MS = 400`, `DARK_HOLD_MS = 500` — gives an unmistakable cinema-cut feel. The first activation (no outgoing) bypasses the hold (toggle directly).

### Wipe-layer clip-path freeze on class removal

When a wipe animation is driven by `animation: clip-wipe ... forwards` scoped to `.stage.active`, **removing `.active` causes clip-path to revert to the element's default**, not stay at the animation's end state — because the animation rule itself stops applying. Visually: as the stage fades out, the wiped-away layer pops back into view for a frame.

Fix: before removing `.active`, pin the wipe's end-state inline:

```js
function freezeWipeLayer(el) {
  el.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 108% 100%)';
}
```

Then strip the inline `style.clipPath = ''` in `reset()` so the next entry starts clean.

### One stage, multiple stacked wipes

Originally Beat 3 had two separate `.b3-pass` stages, each with its own first-redesign iframe — one as "NEW", one as "OLD". This caused (1) iframe reload visible between them, and (2) a forced fade-out / fade-in moment in the middle.

Replaced with **one stage, three stacked layers** and **two sequential clip-path wipes**:

- Layer 1 (bottom z): bolder iframe (final state)
- Layer 2 (middle z): first-redesign iframe (revealed by wipe 1, hidden by wipe 2)
- Layer 3 (top z): old screenshot (hidden by wipe 1)

Wipe 1 animates Layer 3's clip-path → reveals Layer 2.  
Wipe 2 animates Layer 2's clip-path → reveals Layer 1.  
Same `@keyframes`, different `animation-delay`. The middle layer is one DOM element — no fade, no reload between the two reveals.

### Stardust cover bookends the demo

Open and close on the same Stardust-branded sky (starfield + amber nebula + dust clouds). Audience reads it as visual rhyme — the same surface that introduced the toolkit closes by revealing the demo itself is an artifact of it. Use the same canvas-painted starfield in both places (deterministic seeded RNG so positions are identical across reloads).

### Canvas-painted starfield (3 layers, seeded RNG)

For an animated brand "shader" background that stays on a fixed palette (no purple/pink galaxy clichés), paint a canvas once with seeded random positions:

1. ~260 distant tiny stars (dust cream, low opacity)
2. ~90 medium stars (brighter)
3. ~14 anchor bright stars with soft amber/cream radial glow

Use a Mulberry32 seeded RNG so the field is identical across reloads (no "snow that shifts when you reload"). Wrap in a `<canvas>` and animate the parent with a slow `transform: translate3d` drift. Overlay amber `mix-blend-mode: screen` radial gradients for the nebula band.

### SLICC web-app shell pattern

For beats that show the *runtime* of the product (the agent running it), build a full software-UI shell:

- **Top bar**: brand mark + project breadcrumb + status pill
- **Two-column main**: chat thread (left, ~32%) + artifact panel (right, fills)
- **Bottom-anchored chat**: `flex-direction: column; justify-content: flex-end` so new messages appear at the bottom and older ones push up (standard chat-bot stacking)
- **Chat input** at the very bottom

Each step of the runtime: input field types a prompt (typewriter), then "submits" (input clears, message appears at the bottom of the thread), agent bubble appears and streams. Artifact panel swaps per step or accumulates layers, depending on the beat's intent.

### Chat-bot UX: typewriter-in-input → submit → streamed response

For an authentic agent feel:

1. **Type in the input field** (typewriter, ~30 ms/char), caret blinking after the last char.
2. **Brief pause** (~300 ms), then "submit" — the input clears, a user bubble appears at the bottom of the thread with the typed text.
3. **Agent bubble** appears below, streaming its response char by char (~20 ms/char).
4. **On stream complete**, the artifact panel swaps to that step's output.

Don't pre-render the messages in DOM and reveal with `.is-in` classes — that breaks the chat-stacking feel. Build messages dynamically per step.

### Chain steps with `onDone` callbacks (not absolute time arrays)

For multi-step JS sequences (e.g. the SLICC chat steps), don't pre-compute step-start timestamps in a `STEP_START_MS` array. Brittle to retune. Instead chain:

```js
function runStep(i) {
  typeInInput(STEPS[i].prompt, () => {
    submitUser(STEPS[i]);
    streamAgent(STEPS[i].response, () => {
      showArtifact(i);
      const hold = i === LAST ? FINAL_HOLD_MS : INTER_STEP_HOLD_MS;
      if (i < LAST) at(hold, () => runStep(i + 1));
    });
  });
}
```

Pacing changes (longer prompt, slower stream) propagate without recalculating the array. Each step starts when the prior actually finishes.

### WYSIWYG overlay inside a same-origin iframe

To demo "this artifact is editable" inside an iframe of the product's redesign:

1. Same-origin iframe (no cross-origin sandbox flags blocking access).
2. `iframe.contentDocument.head.appendChild(<style>)` — inject the highlight ring / cursor CSS into the iframe document.
3. Add a class to the target element (`.aem-hero__title`) so the injected styles apply.
4. Mutate the title's `innerHTML` to animate a backspace-and-retype sequence.
5. The floating toolbar + component label live in the **parent doc**, positioned absolutely from the iframe's bounding rect.

This reads as "the agent is editing the page" without actually wiring up a CMS.

### Page-tree + stacking deck (variety reveal)

When the message is "many designed pages, one capability", a static row of thumbnails reads as a small grid and underwhelms. Stronger: a CMS-style page-tree on the left highlights one item at a time, and the matching mock card slides in from off-stage to land on a stacking deck on the right. By the end of the beat, all five cards form a cascading fan, latest on top, each rotated slightly. Visited tree items get a "done" icon so the tree records the path.

### Press-key immediate reaction

The polygon-hole reveal after the user presses Space MUST start within ~300 ms. Audiences need instant feedback that their input registered — a 2-second delay before any motion reads as "is this broken?" Compress the splash hold; the rest of the beat can stretch.

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

### Drop script-step eyebrows from the final cut

Production-style labels above scenes ("Cold Open", "The Reveal", "Where it lands", "The Ongoing Capability", "01 · The Shift") read as **scaffolding**, not content. They feel like the script bled into the demo. Strip every one before recording. Headlines and visuals do the work; if you need a label to explain a beat, the visual isn't carrying enough yet.

### `overflow: hidden` vs `overflow: clip` on body

`overflow: hidden` still allows programmatic `scrollTop`. If any element in the demo (iframe with `src=".../page.html#anchor"`, an autofocus on a deep-page element, lazy-loaded image) triggers the UA's "scroll into view" behavior, the body's `scrollTop` ends up non-zero and the whole page-wrap transform slides off-screen — black screen, no obvious cause. `overflow: clip` is non-scrollable in addition to clipping; safer for demos with iframes.

If you want to keep `overflow: hidden` (e.g. for backwards compat), strip fragments from iframe `src` and apply them post-load with `iframe.contentWindow.scrollTo(0, target.offsetTop)` (see gotchas).

### Naming surface overrides (one-offs)

The audience-language rule is "only product + destination on screen by name". For specific beats — e.g. showing the runtime UI as a SLICC web app — you may break this on purpose. Mark the override in the beat's HTML comment so it's clear it's intentional, and don't propagate to script.md or production narration unless explicitly approved.

---

## Pitfalls / gotchas

- **Headless browser bot detection.** Big sites (business.adobe.com, many enterprise marketing sites) bot-detect headless Playwright — HTTP/2 errors or 60s+ timeouts. For "before" / live-site frames, plan a real-browser screen capture, or use a stealth setup.
- **JS-driven snap navigation defeats CSS scroll override.** When analyzing a reference page that uses `transform: translateY()` snap (with `wheel` and `keydown` event listeners that `preventDefault`), neither `scroll-snap-type: none !important` nor `window.scrollTo` will let you scroll freely for capture — the page isn't actually scrolling. Look for `addEventListener('wheel', …, {passive: false})` and `goTo(i)`-style functions in the source. To capture: drive `wrap.style.transform` directly (`translateY(-secs[i].offsetTop)`) and trigger `.in` reveal classes manually.
- **Web-font CORS via `file://`.** Loading `.woff2` from a CDN (e.g. `db.onlinewebfonts.com`, Google Fonts) is blocked when the page is opened with a `file://` URL — origin is `null`, no CORS header matches. Always serve the experience over a local HTTP server (`npx serve`, `python3 -m http.server`) for development *and* for the final screen recording. If you must run from `file://`, bundle fonts locally under `assets/fonts/` and reference them with relative paths.
- **Stale local-server port collisions.** When `python3 -m http.server <port>` fails to bind because the port is already taken (a leftover server from a previous Stardust prototype, demo, or unrelated session), the new process exits with `OSError: [Errno 48] Address already in use` — but if you backgrounded it, the failure is invisible and you'll think the server started. Meanwhile the *old* server happily serves *its* directory at the same port, which can quietly render the wrong content (we hit this with a JFK Stardust prototype showing up in our Adobe iframe). Always check `lsof -iTCP:<port> -sTCP:LISTEN` before binding, and pick a fresh port (something like 9020+) for new demos. Tail the server log to confirm it actually started.
- **Autoplay-with-sound policies.** Chrome/Safari block autoplay audio until user gesture. The cover-screen + press-to-begin pattern solves this for both live demo and recording.
- **Music sync without a timeline editor.** If music plays inside the HTML, the screen recording captures it in sync. If you score in post, page transitions need precise timestamps.
- **`prefers-reduced-motion`.** Cinematic demos must respect it (jump to resolved state). Skip and you'll lose accessibility points and some VPs use it.
- **Cross-browser quirks.** Test the experience in Chrome + Safari at minimum before recording. Lenis behaves differently in Safari.
- **Stardust pipeline order.** `direct` expects an extract artifact in `stardust/current/` to inherit from (or `--rebrand` for full divergence). Skipping extract leaves direct without a brand to compile against.
- **Length creep without VO.** Text-only beats *feel* longer than they look on paper because the audience reads. Pad time estimates by 20% during script review.
- **iframe fragment URLs scroll the parent body.** When an iframe's `src` ends in `#anchor`, the UA scrolls the *parent* document to bring the iframe element into view — even with `body { overflow: hidden }` (programmatic `scrollTop` still works). The whole page-wrap slides off-screen and every beat renders above the viewport (uniform black, only the fixed nav visible). Two fixes: (1) strip the fragment from `src`, move it to a `data-fragment="#…"` attribute, and call `iframe.contentWindow.scrollTo(0, target.offsetTop)` *inside* the iframe post-load (anchor navigation never happens, parent stays put); (2) `body { overflow: clip }` (non-scrollable).
- **Iframe scrollY gets reset by sibling CSS transforms.** Card-entry animations (scale, translate, rotate) on iframe **parents** reliably reset the iframe's `scrollY` to 0 in the first ~1–2 s — even after a successful initial `scrollTo()`. Solution: a 750 ms `setInterval` watchdog that re-applies the scroll while the beat is `.active`. Cheap (one read + one write per iframe per second), bulletproof.
- **Iframe `loading="lazy"` doesn't trigger under transforms.** Lazy iframes use intersection observers based on geometric document position — `transform: translateY()` doesn't move that. Lazy iframes inside a translate-Y page-wrap may never load. Use `loading="eager"` when the iframe is essential to the beat. (Beware: eager iframes that load fragmented URLs trigger the parent-scroll bug above.)
- **CSS animation rule removal reverts the animated property to its default.** If you scope `animation: clip-wipe ... forwards` to `.stage.active .layer`, removing `.active` strips the rule — and `forwards` only persists the end state *while the animation rule is active*. The property reverts to the element's CSS default, often "fully visible" for clip-path. Pin the end state inline via `el.style.clipPath = '…'` before removing `.active`.
- **Watch for "all beats render black" / `body.scrollTop = 4062`.** Diagnostic signature for the parent-scroll bug above. If you see this in dev, the cause is an iframe with a fragment URL somewhere in the page — even one outside the current beat. Check `document.body.scrollTop` in DevTools after page load.
- **Headline overflow inside `<foreignObject>`.** The HTML inside foreignObject scales with the SVG viewBox; if you set a wordmark at a large `font-size` it can overflow the foreignObject's `width="…"` and render clipped. Either reduce font-size, widen the foreignObject, or use percentage-based sizes that scale with the viewBox.
- **Polygon-hole `points` animation needs `attr` (not transform).** GSAP must animate the `points` attribute (`gsap.to(hole, { attr: { points: '…' }, duration: 1.9 })`), not transform. CSS `@property` for animating polygon strings is partial; SVG `<animate>` is the most portable.

---

## Open questions / TBD

- **Music bed sync.** Does the music live in the HTML (recording captures it) or get mixed in post? UC1 plans the former; validate in build.
- **Cross-browser parity for scroll-driven CSS.** `animation-timeline: view()` is a Chromium primary; Safari support is partial. Fallbacks needed.
- **Skill metadata.** SKILL.md frontmatter — name, description, when-to-invoke — settle once the first demo is shipped and we know what reused cleanly.
- **Ratio of Stardust-generated to hand-built code in the wrapper.** Prediction: 70/30. Refine after Phase 0 of UC1.
- **Handoff to a video editor.** If anything *needs* AE-style compositing, where's the cut line? Probably none for UC1, but worth noting for future demos.

---

## Per-beat module convention (established UC1)

Each beat gets its own scoped CSS file at `experience/styles/beats/beatN.css` and, if it needs a JS timeline, `experience/scripts/beats/beatN.js`. The JS module:

1. Self-installs by observing the section's `.active` class via `MutationObserver`.
2. Runs `enter()` when `.active` is added, `exit()` when removed. Idempotent — re-entry replays from start.
3. Keeps `clearTimers()` in both `reset()` and `exit()` so handles never leak.
4. Stores DOM refs in module scope, queried once on `init()`.

Markup pattern: `<section class="beat" id="bN" data-duration="MMMM">` — controller adds `.active`, beat module reacts.

Pure-CSS beats (no JS) drive their reveal off `#bN.active` selectors with `transition` or `animation: ... forwards`. Use animations rather than transitions when the property must always replay even if the element loaded with `.active` already on (transitions may be skipped).

## Asset placeholder convention

When the demo needs real artifacts (live-site captures, terminal-running videos, AEM authoring screens) that aren't yet recorded:

- Render an HTML/SVG **placeholder** with the same shape, weight, and timing as the real asset
- Mark it with a class like `.placeholder` or a comment so it's findable later
- Reserve `<video>` elements with empty `<source>` tags + a `data-pending` attribute identifying what to swap in
- Note the asset list in the demo's README under "Required assets (status)"

Placeholders should look intentional, not broken. A boxed wireframe with an "EXTRACT — capture pending" label reads better than a missing-asset hole.

## Source demos this draft is based on

- `demos/uc2-uc3-greenfield/` — UC2 + UC3 combined, 90s text-only HTML, **scoped** (README + script locked; experience build pending).
  - **Brand sources**: outer wrapper reused verbatim from UC1 (Adobe Piñata). Inner artifact is an invented artisan brand, built for real by running Stardust against a private reference and feeding in externally-generated imagery.
  - **Structural pivot vs. UC1**: two complementary entries (UC2 = brand from assets + intent, UC3 = briefing from a written brief) converging on one shared `current/` → `prototype → migrate` rail. Replaces UC1's "ongoing capability" payoff with a **seam beat** that names the upcoming `/stardust:seed` and `/stardust:brief` commands.
  - **Walk-out line**: *"One prompt · one website."* (whitepaper). **Series-close** matches UC1: *"Ship the demo before the deck."*
  - **Beat inventory** (planned):
    - **Beat 1** (10s) — Cold open. Pipeline diagram with `extract` dimmed; two inputs (asset bundle + brief.pdf) hover where the URL would go. *"What if there's nothing to extract?"*
    - **Beat 2** (20s) — Direction path. Designer workbench: logo + swatches + mood images + voice notes. Intent phrase types. `DESIGN.json` resolves with the real tokens from the generated artisan brand.
    - **Beat 3** (20s) — Brief path. `brief.pdf` lands. Stardust parses → `PRODUCT.md` + `DESIGN.md` + page list materialise. Brief content reverse-engineered from the real PRODUCT.md.
    - **Beat 4** (12s) — Converge. Two front-door arrows merge into `prototype → migrate`. Live iframes of the generated artisan site bloom in a loose editorial grid.
    - **Beat 5** (16s) — The seam (payoff). *"Today: hand-authored. Tomorrow: it types itself."* `/stardust:seed` and `/stardust:brief` type in a terminal frame with a "shipping" chip.
    - **Beat 6** (12s) — Lands in AEM + walk-out. Same starfield bookend as beat 1.

- `demos/uc1-uplift/` — UC1, business.adobe.com uplift, ~110s text-only HTML, Adobe-branded wrapper.
  - **Brand sources**: hybrid. Cover (beat 1 splash) and close (beat 6) use the **Stardust** identity (ink-deep navy + dust cream + amber gold; pixel-star logo; `brief + seed = star` operator tagline). Mid-demo wrapper uses **reference replication** of `~/Desktop/preso/AI Factory Piñata — Adobe.html` (translate-Y page-wrap navigator, Adobe red accent on near-black, Adobe Clean type). The two brand surfaces bookend each other.
  - **Motion reference**: rpacomunicacion.com (mask reveals, character cascades, MorphSVG + MotionPath choreography, autoplay videos as content).
  - **Beat inventory** (all shipped):
    - **Beat 1** (15s) — Stardust cover-as-mask splash → polygon-hole reveal to cold open ("business.adobe.com has hundreds of pages. They all share a few templates.") → trap with comparison grids → "Pick one. That's the deal." stinger.
    - **Beat 2** (34s) — Turn ("What if you didn't have to?"), then SLICC web-app shell: chat thread (left) types each prompt in the input → submits → streams response, artifact panel (right) swaps per step. 4 steps (extract / direct / prototype / migrate) with full-panel artifacts including the live `business-adobe-sites/index.html` iframe + WYSIWYG edit overlay on the last step.
    - **Beat 3** (30s) — Two-stage AEM Sites reveal. Stage 1: homepage with old screenshot → diagonal wipe → bolder redesign video (plays 6s before handoff). Stage 2 (merged from former stages 2+3): three stacked layers and two sequential clip-path wipes — old AEM Sites screenshot wipes to first redesign, then first redesign wipes to bolder; "Same brand. New surface." overlay lands as the bolder iframe scrolls. No fade between the two wipes; one DOM element for the first redesign across both.
    - **Beat 4** (8s) — `business-adobe-sites/index-bolder.html` iframe + WYSIWYG editing overlay (red dashed ring, "Hero · Title" component tag, B/I/U/H1/¶/link toolbar) → hero title text edited in place ("to scale modern experiences." → "for every brand.").
    - **Beat 5** (14s) — Headline "Not a project. → A capability." with horizontal expand transition. CMS-style page-tree on the left highlights one page at a time; matching mock cards slide in from off-stage onto a cascading stacking deck on the right.
    - **Beat 6** (12s) — Zoom-out reveal close: full-screen "stardust" wordmark + `MATH, NOT MYSTICISM.` over the Stardust starfield/nebula → splash shrinks into an artifact thumbnail inside a SLICC web app showing the prompts that "built" this very demo (`/stardust:direct` + `/stardust:prototype`) + signature ("made with stardust" + md5 hex).
  - **Stardust nebula background**: canvas-painted starfield (seeded RNG, 3 layers) + amber radial-gradient nebula + dust clouds. Bookends the demo (cover + close).

Add new entries as demos ship. Each demo should contribute back: a pattern, a decision, or a gotcha.
