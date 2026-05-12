# Cattaneo bottle-label visual register

> Scraped from https://www.opificiocattaneo.shop/ on 2026-05-12 via `_scrape-cattaneo-shop.mjs` (Playwright).
> 18 high-resolution product images downloaded into this folder.
> This document distills the **visual register** of the bottle labels so Chapitô can reimplement the register with different subjects (per BRAND.md anti-reference contract: no Italian-cultural leakage).

---

## The composition formula

Every Cattaneo bottle label is built on the same five-part formula:

1. **Bottle silhouette** — straight-on amber/clear glass shot, slight cylindrical taper, isolated against a dark or transparent background. Product photography style, not illustration.
2. **Wax-dipped cap** — the top of the bottle is dipped in saturated solid-color wax that runs/drips down the neck. The wax color is brand-distinct per bottle (orange, mint-teal, deep purple, mustard, magenta) and acts as the bottle's first color statement.
3. **Solid-color label ground** — a flat rectangle (or sometimes a circle inset on a band) in a single saturated tone (Memphis-Milano palette: purple, teal-mint, mustard, pink, burgundy). NO gradient, NO photographic texture. Hard-edged geometric area.
4. **B&W cut-out photographic figure** — a vintage-feel black-and-white photographic figure (a grandmother on a chair, a Madonna, a bearded saint) collaged across the label. The figure is cut out from its background (sharp edges, hand-cut zine feel) and overlaid on the solid-color ground. The cutout's grayscale tonality clashes with the saturated label ground — that clash is load-bearing.
5. **Bold all-caps display title** stamped across the label in clean condensed sans-serif (Anton-like). The title typically sits in a contrasting band (white text on a black band, or black on a colored band) running across the figure. A smaller subtitle ("NATURALMENTE CALMANTE", "COLD COMPOUND") sits below the title in smaller caps.
6. **Small "C" monogram badge** — a tiny circular brand mark with the letter "C" centered, sitting at one corner of the label (lower-left typically). Acts as the brand's signature stamp across the catalog.

## The three clashing visual languages

The hand-cut zine feel comes from forcing three different visual languages into one composition:

- **Flat geometric color** — the label ground, the title band, the brand-mark circle.
- **Grayscale photographic texture** — the cutout figure.
- **Sharp typographic stamp** — the all-caps title and subtitle.

None of the three soften the others. The clash is the brand's signature.

## Palette per bottle (examples observed)

| Bottle (Cattaneo) | Wax cap color | Label ground | Cutout subject |
|---|---|---|---|
| Amaro della Nonna | bright orange | deep purple | grandmother on a chair (B&W photo) |
| Gin della Madonna | mint teal | pastel pink (with arched-frame illustration) | Madonna-style figure |
| Sant'Ambrogin | deep purple | yolk-mustard | bearded saint figure |
| Curbat | (varies) | dark burgundy | various |
| Limoniamo | (varies) | pale yellow with lemon photo | lemons / saint |
| Caporetto | (varies) | red-orange | landscape / figure mix |

Pattern: the wax color and the label ground are typically COMPLEMENTARY / CLASHING, not coordinated. Each bottle is its own clash.

## What is intentionally not used

- No serif body type anywhere on the labels.
- No photographic backgrounds on the labels (only flat colors).
- No gradients, no drop shadows, no glass / depth language.
- No watercolor / hand-painted illustration — the only "hand-feel" is the cutout edges and the hand-cut zine register.
- No multi-figure compositions on a single label — each label has ONE central cutout figure.
- No symmetric / centered composition with the figure dead-center — figures are slightly offset, with the title band running across at an angle or at the upper third.

## Rotation to Chapitô (the lift)

When Chapitô reimplements this register, the formula stays; the cultural specifics rotate:

| Formula element | Cattaneo (Italian) | Chapitô (Portuguese / circus) |
|---|---|---|
| Solid-color label ground | Memphis-Milano saturated palette (purple, teal-mint, mustard, pink) | Chapitô palette tokens — chapito-piri / chapito-galinha / chapito-tejo / chapito-cravo / chapito-azulejo / chapito-malagueta. Same saturated maximalist intensity. |
| B&W cutout figure | Italian-Catholic / nonna / saint imagery | **vintage circus-performer photography** — trapeze artist mid-swing, fire-eater, clown, lion tamer, tightrope walker, acrobat, contortionist. Mid-century travelling-circus archive register. |
| Bold all-caps title | "AMARO DELLA NONNA" | Each Chapitô bottle's circus-figure name in all-caps Anton: TRAPÉZIO, FAQUIR, PALHAÇO, DOMADOR, FUNÂMBULO, ACROBATA, etc. |
| Smaller subtitle | "NATURALMENTE CALMANTE" | Portuguese — e.g. "MOLHO PICANTE", "FERMENTADO 6 SEMANAS", "100% NATURAL" |
| Brand monogram | "C" Cattaneo badge | "C" Chapitô badge — same circular form, different mark (the Chapitô tent-silhouette logo at small size) |
| Wax cap | saturated color drips | same — saturated color drips in Chapitô palette tokens |

## Anti-references for Chapitô bottle prompts

- **No Italian language anywhere** on the label (no "DELLA NONNA", no "NATURALMENTE CALMANTE"). Portuguese only.
- **No religious / Catholic iconography** (no Madonna, no saint figures). Circus performers + Lisbon-native portraits only.
- **No reference to specific Cattaneo product names** (Amaro, Gin, Sant'Ambrogin).
- **Same VISUAL register, different SUBJECT register.** The lift is the composition formula; the content is Chapitô's own cast of figures.

## Files in this folder

- `fullpage.png` — full-page screenshot of opificiocattaneo.shop home
- `images.json` — inventory of all images seen on the page
- `unique-product-urls.txt` — deduplicated high-res image URLs
- 18× `*.png` — high-resolution product label downloads
- `_scrape-cattaneo-shop.mjs` (in parent dir) — the scraper script
