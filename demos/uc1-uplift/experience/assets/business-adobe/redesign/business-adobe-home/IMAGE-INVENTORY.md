# Image-slot inventory — from-modules-faithful.html

Per-slot catalog with subject intent, aspect, current state, and the
source bucket (`templates` = `target/runtime/assets/`, `live` =
business.adobe.com fragment fetch via Playwright session, `gen` =
Gemini 3 Pro Image Preview).

Status: **F**illed / **E**mpty / **P**laceholder

| # | Section | Slot | Subject intent | Aspect | Status | Source | Notes |
|---|---------|------|----------------|--------|--------|--------|-------|
| 1 | gnav | logo | Adobe wordmark | 67×16 | F | — | already correct |
| 2 | acq-banner | lockup | Adobe + Semrush wordmark | 801×61 | F | live | M13 fix, real SVG |
| 3 | hero | mosaic 10 cards | scrolling brand collage | 584×{584,788} | F | templates | hero/col-N_img-N.png |
| 4 | acrobat-feature | card 1 asset (Brand visibility) | abstract data-viz illustration of brand discoverability / AI search | ~395×253 | E | gen → templates | live equivalent unlikely; new product surface |
| 5 | acrobat-feature | card 2 asset (Content supply chain) | abstract illustration of content flowing through workflow nodes | ~395×253 | E | gen → templates | same |
| 6 | acrobat-feature | card 3 asset (Customer engagement) | abstract illustration of personalization / journey decisions | ~395×253 | E | gen → templates | same |
| 7 | stories | card 1 photo (Engagement Intelligence) | dashboard / decisioning UI mockup | 351×468 portrait | E | live → gen | live site has the real announcement hero |
| 8 | stories | card 2 photo (Adobe + NVIDIA) | NVIDIA-Adobe partnership editorial / chip + creative | 351×468 portrait | E | live → gen | live site has it |
| 9 | stories | card 3 photo (GenStudio Content Marketing) | content campaign UI mockup | 351×468 portrait | E | live → gen | live site has it |
| 10 | testimonial | Ford media | "Ford From the Road" UI mockup or editorial driving photo | ~600×500 | E | live → templates+overlays | M4 fallback: keep template + overlay reframing if live fails |
| 11 | brands-strip | 6 brand logos | Coca-Cola, Qualcomm, Premier League, Prudential, Cisco, Home Depot | various | F | inline SVG (M2) | could swap to real SVG via live fetch |
| 12 | product-section | 6 explore-card marks | per-product Adobe app icon (Brand Intelligence, Agent Orchestrator, LLM Optimizer, Brand Concierge, AEM Sites Optimizer, Journey Optimizer) | 28×28 mark | P | templates → live | currently rendering "A" letter; template has Acrobat/Photoshop/etc. but not these new product marks |
| 13 | studio-banner | section background | editorial hero background — people collaborating, abstract Adobe brand surface | full-bleed ~1920×640 | E | live → gen | last CTA before footer |
| 14 | footer | wordmark | "Adobe" big-text wipe | text-only | F | — | typography only, no img |

## Bucket totals

- **Templates** (zero-cost, in `target/runtime/assets/`): hero mosaic ✓, fallback options for #4-6, product-icon fallback for #12
- **Live-site fetch** (multi-strategy via Playwright session, S8 pattern): #7, #8, #9 (announcements), #10 (Ford), #12 (real Adobe product marks), #13 (final-CTA hero)
- **Gemini 3 Pro Image Preview** (last resort, prompt with aspect + register + palette): #4, #5, #6 if no live equivalent + no template that fits

## Recommended fill order

1. **Pass A — Live fetch (cheap, high-fidelity)**: try fragment-relative media URLs we already captured in `assets/source-fragments/*.html`. The 4 fragments referenced 30+ distinct media hashes; many will map directly to slots #7-9, #10, #13.
2. **Pass B — Template substitution**: for slots that still don't have a fitting live asset, use the closest template image + treatment (gradient overlays, decorative pills) per the M4 reframing pattern.
3. **Pass C — Generate**: only the abstract solution-card illustrations (#4-6) and any portrait that survived A and B with no fit — these are bespoke and Gemini handles them well.

## Fragments already captured (live URLs reachable)

- `more-announcements.plain.html` — likely contains announcement card images
- `semrush-announcement.plain.html` — already mined for the Adobe+Semrush lockup (M13)
- `summit-2026-marquee-intro.plain.html`, `summit-2026-marquee-pods.plain.html` — Summit hero/pod images, candidates for testimonial or studio-banner

The hash list extracted earlier shows ~30 unique `media_*.png` and `media_*.svg` references. A batch-fetch script (Playwright session, in-page `fetch`, save to `assets/`) can pull them all in one pass.
