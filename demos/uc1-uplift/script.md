# UC1 Uplift — Script v3 (target: business.adobe.com)

**Length:** 90s · **Audience:** VP+ · **Mode:** kinetic typography over real artifacts; **text-only** over music · **Target:** `business.adobe.com` · **Implementation:** HTML multi-page build in `experience/` — see README for build plan

> Audience-facing names only: **Stardust** and **AEM**. (Snowflake/EMA live in production notes — see CLAUDE.md.)
> Distinctive phrases pulled from the Stardust whitepaper. See `context/whitepaper.md`.
> Adobe-on-Adobe choice gives license for the page-volume confession in the cold open.

---

## 00:00 – 00:05 · COLD OPEN

**Visual:** Black. White serif (or strong sans), large, full screen.

> business.adobe.com has hundreds of pages.

Cut to a fast scroll-down through the actual live site — flying through hero, product cards, customer logos, CTAs. Slight motion blur on cuts.

**Tag in lower third (smaller):**

> They share twelve templates.

(Numbers illustrative — replace with real counts during the edit if available from existing artifacts.)

---

## 00:05 – 00:14 · THE TRAP

**Visual:** Two columns appear over a desaturated frame of the site.

- Left: **"Every page unique."** Below: a Gantt chart fills painfully. **18 months.**
- Right: **"Every page consistent."** Below: a stack of identical templates. **Day one.**

Both columns can't be lit at once.

**On screen, taking the full frame:**

> Pick one. That's the deal.

Tiny line beneath:

> *— enterprise marketing, since forever.*

---

## 00:14 – 00:20 · THE TURN

**Visual:** Full white. One line, large:

> What if you didn't have to?

Beat. Then, sped-up, a single prompt animates in:

```
/stardust:extract https://business.adobe.com
```

The Enter press is the cut. *(This frame is one of the "real but separate hints of the system running" — record fresh, briefly. Authenticity beat.)*

---

## 00:20 – 00:46 · PIPELINE MONTAGE (four glances, ~6s each)

No CLI on screen after the first one. Show artifacts, not commands. All artifacts come from the existing demo asset set.

### Beat 1 — EXTRACT (00:20–00:26)
business.adobe.com x-rayed. **Two** swatches lift off — Adobe red `#EB1000` and a deeper interactive blue. Type samples (Adobe Clean) slide off as cards. Voice motifs float as small captions:

> *"orchestrate" · "deliver" · "personalize" · "experience" · "AI-powered"*

Bottom annotation:

> *127 palettes · today's seed `<seed-from-artifacts>`*

### Beat 2 — DIRECT (00:26–00:32)
A designer's phrase types itself, as if dictated. Intent only — no element specifics.

> *"feel modern. cinematic, confident. let motion carry it."*

(8 words. Pure direction — no colors, typefaces, or surfaces named. The audience hears intent; Stardust does the resolution.)

As the phrase lands, the system **resolves it** on screen: the Adobe red swatch from Beat 1 dims to a grayscale ghost; the blue swatch shifts to Acrobat blue and stays lit. Then `DESIGN.json` flickers into view — `register: brand`, `voice: confident, modern, motion-first`, the surface temperatures table, the Acrobat-blue accent token.

Tiny caption beneath:

> *Intent → tokens. Automatic.*

This is the Stardust thesis: a designer briefs intent, Stardust compiles to a deterministic system. Don't dwell — the visual carries it.

### Beat 3 — PROTOTYPE (00:32–00:38)
Three hero variants of the same page deal themselves out side by side. Then product, customers, careers, press stack like cards being dealt. Mobile/tablet/desktop frames flicker behind.

### Beat 4 — MIGRATE (00:38–00:46)
File system view. HTML files appear one by one in `stardust/migrated/`. Caption:

> *Deployable. No build step.*

Hold the last frame an extra beat — this is the "this is real" moment. *(Record this small file-tree blip fresh as a "real hint of the system running.")*

---

## 00:46 – 01:00 · THE REVEAL

**Visual:** Cut to a single page — pick the home or a strong product page from `business.adobe.com`. Before/after slider scrubs left to right, slow, ~3 seconds. Adobe red still there. Logo unchanged. Layout, density, type expression — modernized.

Then zoom out to a grid: home, products, solutions, customers, partners, careers, press — all refreshed, all clearly the same brand.

**On screen:**

> Same brand. New surface.
> Every page its own page — the rules held.

(Adapted from the whitepaper.)

---

## 01:00 – 01:08 · LANDS IN AEM

**Visual:** Two-frame transition.

1. Stardust output folder visible: `stardust/migrated/`.
2. Cut into an AEM authoring view of one of the migrated pages — in-page editing affordances visible (a marketer's hover state on a hero), a small green "Published" pill in the corner.

**On screen:**

> Lands in AEM.
> Authorable on day one.

---

## 01:08 – 01:22 · THE ONGOING CAPABILITY (the after-uplift beat)

**Visual:** A brand calendar / kanban appears. Rows fill with upcoming work:

- *"Q3 product launch — analytics insights"*
- *"Black Friday hero"*
- *"EMEA regional variant"*
- *"Investor update — microsite"*

As each row appears, a corresponding page is generated next to it — brand-true, novel layout, not a template clone. Pages slot in beside the calendar entries one by one. No designer team visible. Small caption appears in the corner: *"team size: unchanged."*

**On screen, three short lines, hard cuts:**

> The uplift is just the start.
> New launches. New campaigns. New regions.
> Same rules. No new design team.

Then, full screen:

> Not a project. **A capability.**

---

## 01:22 – 01:28 · THE LINE

**Visual:** Pull camera back. Show the Stardust pipeline as one frame:

```
extract  →  direct  →  prototype  →  migrate
```

Below, smaller:

> *Same seed. Same site. Every time.*

Pause. Then, large, takes the screen:

> Math, not mysticism.

---

## 01:28 – 01:30 · CLOSE

Stardust mark. One line under it:

> Ship the demo before the deck.

Cut to black.

---

## Production notes

### Asset strategy

We **already have** the bulk demo artifacts — montage from those. The script above maps to existing assets where possible; we record only **short, separate "system-running" inserts** to plant authenticity beats:

- The single prompt press at 00:18 (terminal blip, ~0.6s).
- The `ls stardust/migrated/` file-tree reveal at 00:38–00:46 (~1.5s).
- Optionally: a brief seed-string flicker for Beat 1 if the artifact set doesn't already include the seed visibly.

These inserts are short, deterministic, and can be re-recorded cheaply if needed.

### Mapping artifacts → beats

Existing asset locations (verified May 2026):

| Beat | Source artifact |
|---|---|
| 1 — EXTRACT | Adobe red + interactive blue swatches; Adobe Clean type samples; voice motifs from live site. **Live site capture note below.** |
| 2 — DIRECT | `stardust/target/PRODUCT.md`, `stardust/target/DESIGN.md`, `stardust/target/DESIGN.json` (register, voice, surface temperatures, Acrobat-blue token) |
| 3 — PROTOTYPE | `stardust/redesign/business-adobe-home/from-modules-faithful.html`, `from-modules.html`, `index.html`; sibling redesigns under `stardust/redesign/business-adobe-{brand-concierge,llm-optimizer,sites}/` and `semrush-home/` |
| 4 — MIGRATE | `ls stardust/redesign/` capture + file tree screenshot |
| Reveal grid | rendered screenshots of every redesigned page across the four `business-adobe-*` slugs (+ semrush-home as a sibling demonstration) |
| AEM landing | AEM authoring view (one of the migrated pages, with hover affordances) — TBD whether existing assets cover this |
| Ongoing beat | post-uplift expressions (new launch / campaign / region pages). If the existing asset set doesn't contain these, repurpose prototype variants framed as "new pages" |

**Live site capture note:** `business.adobe.com` bot-detects headless Playwright (HTTP/2 protocol error or 60s+ timeout on `domcontentloaded`). For the cold open's fast-scroll-through and Beat 1's "x-rayed" frames, plan to capture from a real browser session (manual screen record or a stealth Playwright setup). The redesign captures at `/tmp/uc1-captures/redesign-*.png` already work for everything else.

### Music and pacing

- Single bed; cuts on beat. No VO.
- Proposed direction: **editorial-restrained, slightly tense in the trap, resolves on the reveal, gains urgency in the ongoing beat, lands quiet on "Math, not mysticism."**

### Internal stack note (do not surface in the cut)

The "lands in AEM" frame is technically AEM ingesting Stardust output via the Experience Modernization Agent capability — and the underlying conversion lives in the Snowflake bridge in our internal stack. **None of this appears on screen.** From the audience's perspective, this is the Stardust demo for the uplift use case; AEM is just where it lands.

## TBD before recording

- [x] Target site → business.adobe.com
- [x] Voiceover or text-only → text-only
- [x] Length → 90s
- [x] AEM-only audience naming (no Snowflake/EMA on screen)
- [x] After-uplift ongoing-capability beat included
- [ ] Confirm music bed direction (proposed: editorial-restrained, tension → resolution)
- [ ] Confirm asset set covers the ongoing beat (or pick which prototype variants we re-frame as "new pages")
- [ ] Internal Adobe clearance for `business.adobe.com` in a recorded demo before any external use
