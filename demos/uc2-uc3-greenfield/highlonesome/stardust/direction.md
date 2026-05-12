<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 5)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - brand/BRAND.md
    - briefing/SITE-BRIEF.md
    - briefing/CONTENT.md
  outputs:
    - PRODUCT.md
    - DESIGN.md
    - DESIGN.json
    - stardust/state.json (updated: home extracted → directed)
  stardustVersion: 0.3.0
-->

# Direction — High Lonesome

## Active

**Resolved:** 2026-05-12T00:00:00Z

### Phrase (verbatim)

> meditative mountain music wearing Italian summer color. Single voice in a wide place. Saturated, joyful, slow.

### Restatement (dimensional)

| Axis | Movement | Source in phrase |
|---|---|---|
| expressive | drenched | "saturated" (explicit) |
| distinctiveness | singular | "single voice in a wide place" — the brand's auditory-solitude × visual-joy tension is uniquely named |
| tone | joyful + meditative (compound) | "joyful, slow" + "meditative" |
| density | airy | "slow", "wide place" |
| register | brand | inherited from current/PRODUCT.md |
| audience | single-bottle artisanal mountain-spirits consumers | inherited |

The phrase moves four axes. Density is *moved* (not unmoved), so the density-tuning follow-up question is skipped. Register is unambiguously brand (current/PRODUCT.md declares it), so the ambiguous-register branch is skipped. No clarifying questions asked.

### Brand signal classification

`signal-strong`:

- Palette: 7 distinct hex tokens with brand-native role names (high-lonesome-blue / fiddle-bone / cardinal-flash / sourwood-honey / mountain-laurel / butterfly-pea / barn-ink).
- Typography: 3 type families captured by name in `_brand-extraction.json.typography` (Playfair Display italic, Spectral, IBM Plex Mono).
- Imagery: 3 distinct lanes documented (cinematic Blue Ridge landscape, hand-bound objects, hand-painted bottle labels).

→ Mode A active by default. No rebrand override fired.

### Mode-detection trace

```
captured signal classification: signal-strong
rebrand triggers checked:
  - explicit rebrand phrase signal: NONE  ("meditative mountain music wearing Italian summer color" is a refresh phrasing, not a rebrand phrasing)
  - --rebrand flag: NOT PASSED
  - signal-absent fallback: N/A (signal-strong)
→ Mode A active
```

### Mode A divergence resolution

```
ground-family    inherited   → high-lonesome-blue (Mode C override: brand-faithful)
font deck        inherited   → italic-classical-serif (Playfair Display italic + Spectral + IBM Plex Mono)
palette          inherited   → 7-token Mediterranean-pop
decade           anchor      → mid-century-Italian × Renaissance-italic composite
craft            anchor      → editorial-poster + hand-painted-label
register-axis    anchor      → memoir-adjacent (single first-person voice)
```

All seed dimensions are **anchor-implied** (Mode B compose with Mode A). No MD5 roll fires. `picked_by = "anchor-reference: brand/BRAND.md"` for the three non-locked dimensions; `picked_by = "user-constraint"` for the three pinned ones.

### Brand-faithful inversions (auto-emitted)

| Rule | Rationale |
|---|---|
| italic-at-display required across all display sizes (≥ 48px) | captured display family is Playfair Display italic; the italic forms read as *singing*, central to brand voice |
| all-caps display forbidden | brand register is meditative / memoir; all-caps reads as shouting |
| mixed-case display required | drenched palette + airy spacing carry visual energy; type tier balances by reading quietly |
| drenched palette deployment (≥ 4 grounds, asymmetric cycling) | central tension demands both halves at full volume; restrained or committed deployment collapses Italian half into Mountain half |
| cardinal-flash limited to one section per route as flag ground | loud-accent role rule; multiple cardinal sections would read trattoria / Italian-American costume (anti-reference) |
| numerals + measurables in mono | captured discipline; reads as measured rather than decorative |

### Anti-toolbox audit

Each anti-toolbox hit was reviewed and either justified or rejected. No moves were removed.

| Hit | Justification |
|---|---|
| drenched palette intensity | explicit user preference (saturation preference captured cross-session) + brand central tension demands wide saturation deployment |
| italic-at-display required | brand-faithful inversion; captured display family is italic |
| atmospheric radial-gradient grounds (multiple) | brand imagery Lane 1 — cinematic Blue Ridge atmosphere is the section ground (atmosphere is not depth-as-elevation; the radial gradients reference sunset glow / laurel bloom / honey wash, never glassmorphism) |

### Improvements list — SKIPPED (greenfield)

The improvements list assumes brand-faithful inheritance from a captured deployed site to be improved over. This workspace is greenfield — no captured prior site exists. The brand surface was authored from BRAND.md + briefing/ via the (proof-of-concept) `stardust:seed` + `stardust:brief` commands rather than from a crawl.

Variant A's brief composes against:

- `brand/BRAND.md` — the brand definition (central tension, palette, type, voice, anti-references)
- `briefing/SITE-BRIEF.md` + `briefing/CONTENT.md` — what each page must contain
- `PRODUCT.md` § Design Principles — the 5 axis-mapped principles
- `DESIGN.md` § Do / Don't — the rendering contract

In place of an improvements list, the home-shape brief will cite these four artifacts by file path + section number when justifying every composition decision.

### IA priorities

No `iaPriorities[]` entries. The home page's first-viewport priority is the maker's name + place (single-voice mountain-music brand affordance), not crisis-affordance / audience-routing / search-led IA. The captured signals that would fire IA-priority preservation triggers (commercial conversion at scale, donation funnel, multi-audience routing) are absent.

### Density floor enforcement

Page inventory: 7 pages total (home + 6 supporting). Single primary audience (WNC drinkers); secondary audiences (mountain-music enthusiasts, trade buyers) route through the same nav, not a distinct audience-track. The multi-audience hard floor (per `intent-dimensions.md` § 4) does **not** fire. `density: airy` lands without conflict. `sectionPadding.desktop` = 96px.

### Command sequence

```
1. $stardust prototype home              (single variant; not N-variant fork)
   1a. write stardust/prototypes/home-shape.md     ← compositional brief
   1b. user confirms ("go")
   1c. $impeccable craft → stardust/prototypes/home-proposed.html
   1d. validate: :root token block, data attributes, anti-toolbox audit clean, impeccable hard rules, content sourcing scan
   1e. $impeccable critique → P0/P1 findings gate `prototyped` status
   1f. open home-proposed.html in browser
2. (out of scope this run) — supporting pages, viewer shells, migrate
```

### User confirmation log

| Step | At | Response |
|---|---|---|
| Phase 1 plan surfaced | 2026-05-12T00:00:00Z | `go` |

### Assumptions defaulted in

- **Single-variant render.** User asked for "a prototype" (singular). No N-variant fork.
- **No viewer shell (`home.html`).** Greenfield — there is no CURRENT-side page to render in a before/after iframe. The prototype is the deliverable; the viewer is skipped.
- **Home page only.** The user's instruction was "up to having a prototype" — singular, scoped to the home page. Other 6 pages stay `extracted`.
- **No `--no-iterate`.** After the proposed file is rendered + critique-gated, prototype Phase 4 opens in browser. `$impeccable live` is not invoked automatically (no live config; greenfield workspace).
- **No `--publish-sample`.** Demo workspace; nothing to publish.
