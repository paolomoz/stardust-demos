<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/current/_brand-extraction.json
    - PRODUCT.md
    - brand/BRAND.md
  resolvedDirection: stardust/direction.md#active
  scope: site-level design system only — no per-page deployment decisions. Page-level composition lives in stardust/prototypes/<slug>-shape.md per artifact-map.md.
  stardustVersion: 0.3.0
-->
---
project: high-lonesome
register: brand
divergence:
  decade: mid-century-Italian × Renaissance-italic (composite era, anchor-implied)
  craft: editorial-poster + hand-painted-label (anchor-implied)
  register-axis: memoir-adjacent (anchor-implied — single first-person voice)
  ground-family: high-lonesome-blue (Mode C override: brand-faithful)
  font-deck: brand-inherited (italic-classical-serif)
  palette: brand-inherited (7-token Mediterranean-pop)
  paletteDeployment:
    intensity: drenched
    targetGroundCount: 4
    cardinalFlashRule: at-most-one-section-per-route
  mode: A (brand-faithful)
---

# Design

## North star

A site that sounds like meditative single-voice mountain music and looks like a 1960s Italian summer travel poster — at the same time, at full volume on both halves. The saturated palette deploys widely across the page (≥ 4 distinct grounds, asymmetric cycling) so neither half can collapse into the other. The display tier sings (italic, mixed-case, at scale). The body voice is plainspoken Sadie.

## Colors

OKLCH derivations of the 7 brand hex tokens; all neutrals tinted toward the brand hue per impeccable shared laws.

```css
:root {
  /* Brand-native role names. No generic Primary/Secondary/Alarm. */
  --hl-blue:        #1d4250; /* page surface (dominant) · ~10.2:1 on fiddle-bone */
  --hl-fiddle-bone: #f9efd8; /* light interlude surface · ~14.8:1 with barn-ink */
  --hl-cardinal:    #e54a1c; /* loud flag-ground · at most one section per route */
  --hl-honey:       #eac246; /* micro-typography accent · atmospheric glow */
  --hl-laurel:      #f0a99e; /* warm-secondary surface · italic emphasis */
  --hl-butterfly:   #5cc1c0; /* Blue Ridge Blue surface · light-accent on dark */
  --hl-ink:         #2d1a14; /* deepest text · never #000 */

  /* Atmospheric overlays — radial gradients used as section glows */
  --hl-glow-sunset:    radial-gradient(60% 80% at 80% 0%, rgba(240, 169, 158, 0.35), transparent 60%);
  --hl-glow-laurel:    radial-gradient(50% 70% at 50% 100%, rgba(240, 169, 158, 0.30), transparent 65%);
  --hl-glow-honey:     radial-gradient(40% 60% at 20% 50%, rgba(234, 194, 70, 0.22), transparent 70%);
  --hl-glow-butterfly: radial-gradient(40% 60% at 80% 80%, rgba(92, 193, 192, 0.25), transparent 70%);
}
```

**Contrast roster (verified):**

| Foreground | Background | Ratio | Status |
|---|---|---|---|
| fiddle-bone | high-lonesome-blue | ~10.2:1 | AAA |
| cardinal-flash | fiddle-bone | ~5.4:1 | AA |
| barn-ink | fiddle-bone | ~14.8:1 | AAA |
| barn-ink | butterfly-pea | ~7.9:1 | AAA |
| fiddle-bone | cardinal-flash | ~4.6:1 | AA |
| butterfly-pea | high-lonesome-blue | ~3.2:1 | non-body only |
| sourwood-honey | high-lonesome-blue | ~6.3:1 | AA |
| mountain-laurel | high-lonesome-blue | ~4.8:1 | AA |

**Strategy:** drenched (per the four-step strategy in shared design laws). The surface IS the color, and across 10 home sections it is **four** different colors. This is the deliberate over-shoot — Restrained or Committed would collapse the brand's central tension into a single-dominant-color reading.

## Typography

Three-family deck. Italic-at-display is load-bearing; all-caps display is forbidden.

```css
:root {
  --font-display: 'Playfair Display', 'Cormorant Infant', 'EB Garamond', Georgia, serif;
  --font-body:    'Spectral', 'Lora', Georgia, serif;
  --font-mono:    'IBM Plex Mono', 'Courier New', Menlo, monospace;
}
```

**Display tier — italic-classical-serif, mixed-case, at scale.**

| Role | Family | Style | Size | Line | Tracking |
|---|---|---|---|---|---|
| Hero wordmark | Playfair Display | italic 400 | 144px / 9rem | 0.92 | -0.01em |
| Section opener | Playfair Display | italic 400 | 80px / 5rem | 1.0 | -0.005em |
| Card / bottle title | Playfair Display | italic 400 | 64px / 4rem | 1.05 | 0 |
| Sub-display | Playfair Display | italic 400 | 48px / 3rem | 1.1 | 0 |

**Body tier — humanist serif, roman primary with italic emphasis.**

| Role | Family | Style | Size | Line |
|---|---|---|---|---|
| Lede | Spectral | regular 400 | 22px / 1.375rem | 1.5 |
| Body | Spectral | regular 400 | 19px / 1.1875rem | 1.55 |
| Caption | Spectral | regular 400 | 15px / 0.9375rem | 1.55 |
| Italic emphasis | Spectral | italic 400 | inherits | inherits |

**Mono tier — IBM Selectric character; numerals + micro-labels only.**

| Role | Family | Style | Size | Tracking |
|---|---|---|---|---|
| Eyebrow | IBM Plex Mono | regular 400 uppercase | 13px / 0.8125rem | 0.08em |
| Micro-label | IBM Plex Mono | regular 400 uppercase | 12px / 0.75rem | 0.08em |
| Numeric | IBM Plex Mono | regular 400 | 14-16px | 0.02em |

**Hard rules:**

- Type ratio ≥ 1.333 (drenched expressive axis demands clear hierarchy steps).
- Body line length 60–70ch.
- Mixed-case for display. All-caps reserved for mono eyebrows and micro-labels.
- Numerals/measurables always in mono — "40 mi.", "4,140 ft", "1983", "24%" reads measured, not decorative.
- No 4th type tier. No display in roman. No body in sans-serif.

## Spacing

4pt base scale. Section padding at the **airy** tier (phrase moved density to "slow / wide place"; multi-audience hard floor does not fire — single-audience commerce route is the primary IA priority, not multi-audience routing).

```css
:root {
  --space-xxs: 4px;
  --space-xs:  8px;
  --space-sm:  12px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-xxl: 48px;
  --space-xxxl: 64px;
  --space-section-desktop: 96px;
  --space-section-tablet:  72px;
  --space-section-mobile:  48px;
}
```

Rhythm: alternate `--space-section-desktop` (96px) and `--space-xxxl` (64px) across sections so spacing varies rather than landing identically. Same padding everywhere is monotony.

## Rounded

Derived from BRAND.md logo direction (hand-painted edges, not geometric). Default radius is **soft**, not pill-tight.

```css
:root {
  --radius-sm:   2px;   /* eyebrow chips, micro-labels */
  --radius-md:   4px;   /* CTAs, cards */
  --radius-lg:   12px;  /* hand-painted-label image frames */
  --radius-pill: 999px; /* not used by default; reserved for badge variants */
}
```

## Elevation

**Flat by conviction.** No drop shadows. No gradients-as-elevation. The only depth in the system is atmospheric (radial gradients over section grounds) and material (the hand-painted bottle labels). Section dividers are inline-SVG hand-painted ornaments (rough strokes), never `box-shadow`.

## Components

Six abstract components. Default treatment only; no per-page dimensions or literal copy (those live in `<slug>-shape.md`).

### `button-primary`

```html
<a class="ds-button-primary" href="…">Visit the Shop</a>
```

```css
.ds-button-primary {
  display: inline-block;
  padding: 16px 36px;
  background: var(--hl-fiddle-bone);
  color: var(--hl-blue);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1),
              background 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.ds-button-primary:hover { background: var(--hl-honey); transform: translateY(-1px); }
```

### `button-secondary` (italic text-link with rule)

```html
<a class="ds-link-cardinal" href="…">read about the maker →</a>
```

```css
.ds-link-cardinal {
  font-family: var(--font-body);
  font-style: italic;
  color: var(--hl-laurel);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
.ds-link-cardinal--on-light { color: var(--hl-cardinal); }
```

### `card` (atmospheric, never identical-grid)

`card` is a **single-instance** treatment, not a grid module. When three instances appear in a row (e.g. the three bottles section), each instance lives in its own full-bleed section with its own ground — they are NOT rendered as a 3-col card grid.

### `eyebrow`

```html
<p class="ds-eyebrow">Of Wolfpen Holler · Madison Co. NC</p>
```

```css
.ds-eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hl-honey);
  margin-bottom: var(--space-md);
}
```

### `pull-quote`

```html
<blockquote class="ds-pull-quote">
  <p>I sing while I work. I think it goes in.</p>
  <cite>— Sadie</cite>
</blockquote>
```

```css
.ds-pull-quote p {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 26px;
  line-height: 1.4;
  color: inherit;
}
.ds-pull-quote cite {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hl-honey);
  font-style: normal;
  display: block;
  margin-top: var(--space-md);
}
```

### `ornament-rule`

Inline SVG hand-painted divider. Rough strokes, never a 1px horizontal rule.

```html
<svg class="ds-ornament-rule" width="120" height="14" viewBox="0 0 120 14" fill="none" aria-hidden="true">
  <path d="M2 7 Q 30 2, 60 7 T 118 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
</svg>
```

## Motion

Ease-out exponential curves only (`cubic-bezier(0.16, 1, 0.3, 1)`). No bounce, no elastic. No animating layout properties (use `transform` and `opacity`). Scroll-reveals are 380ms with 60ms stagger; respect `prefers-reduced-motion`.

## Do / Don't

**Do**

- Drench every section in a brand color — high-lonesome-blue is dominant, not exclusive.
- Use italic display at scale (≥ 48px) for every headline.
- Keep numerals + measurables in mono.
- Vary section padding (96px / 64px alternation) so rhythm doesn't flatten.
- Render the three bottles as three full-bleed sections, each with its own ground.

**Don't**

- All-caps display (forbidden across all display sizes).
- Roman display (forbidden — read as too rigid).
- 3-col card grid of identical cards (impeccable absolute ban).
- Side-stripe borders > 1px (impeccable absolute ban).
- Gradient text / glassmorphism / hero-metric template / modal-first (impeccable absolute bans).
- Pure `#000000` (use `--hl-ink`).
- Italian-language words anywhere (*trattoria*, *piazza*, *dolce*) — Italian DNA stays in the palette only.
- Centered SaaS hero with dual-CTA pair (Generic-2026-SaaS silhouette).
- Editorial-register vocabulary in chrome (*atelier*, *the journal*, *dispatches*).
- Em-dashes in body copy (per impeccable shared design laws — use commas/colons/semicolons/periods/parentheses).
