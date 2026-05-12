# High Lonesome — Brand definition

> Source document for `/stardust:seed`. Drives the brand half of `stardust/current/` (palette, typography, voice, motif catalog).
> Companion to `briefing/SITE-BRIEF.md` (`/stardust:brief` input).
> Brand picked from `site/brand/brand-alternates.md § Alternate C — HIGH LONESOME`.
> Palette inherited from a separate exploration thread (the 7-token Mediterranean-pop palette selected by user from the variant-c-teal-saturated artifact). The palette choice is unusual for a meditative WNC mountain-music brand and constitutes the brand's central tension — see § Central tension below.

---

## Identity at a glance

**Name:** **HIGH LONESOME**
**Tagline:** *Bottled bluegrass. One voice in a wide place.*
**Category:** Small-batch mountain-spirits — botanical aperitifs, amari, and cordials.
**Place:** Hot Springs, Madison County, North Carolina — a barn ten miles past anywhere, in the western reach of the Blue Ridge.
**Maker:** Sadie Greene. Sole proprietor; sings while she works.

## Central tension (the brand's load-bearing move)

**Auditory solitude × visual joy.**

The brand's *sound* is the high-lonesome music of the Appalachian gaps — single voice, single fiddle, single mandolin, wide quiet places. *Slow, reverent, restrained, mountain.* That's what's *in* the bottle.

The brand's *surface* is saturated Mediterranean-pop color — coral pink, vermilion, mustard, deep teal, cyan, cream-bone, ink-brown. *Loud, festive, multi-hue, southern-European.* That's what's *on* the bottle.

The maker, Sadie Greene, spent the early 1980s in northern Italy as a fiddle player with a touring bluegrass band. She came back to Hot Springs with two things: an accent that disappears after a week and a permanent sense of color. The brand is the place she lives (WNC, single-voice music, mountain stillness) wearing the clothes she brought back from Italy (saturated palette, the maximalist palette of the Lake Como piazzas she played in summer evenings).

**The tension reads as:** the recordings of Bill Monroe pressed onto vinyl jackets designed by Massimo Vignelli. Mountain song, Italian-pop wrap.

Strip either half and the brand collapses:

- Pure mountain palette (ridge-dusk, bone-fiddle, oxblood, spruce, hymnal-red): becomes a Foxfire-Book historic-Americana reissue. Tasteful, predictable, indistinguishable from every other WNC-craft brand.
- Pure Italian-pop palette without the mountain content: becomes a Cattaneo clone or a vacation-rental wine bar. Detached from the place that makes it real.

Both halves at full volume = the brand.

## The maker — Sadie Greene

**Origin paragraph** (verbatim or near-verbatim on the about page):

> "There's a thing in old-time music called the high lonesome sound. It's not sad exactly. It's the sound of one voice in a wide place. I came back from a summer in northern Italy in 1983 with a fiddle case full of color charts and the same single voice I left with. The herbs grow in those wide places — the gaps, the balds, the deep coves — and I work in a small barn ten miles from anywhere. I sing while I work. I think it goes in. The labels are loud because I like them loud.
> — Sadie"

**Tone calibration:**

- Slow, plainspoken, declaratives. Periods, not commas.
- Listing over hyperbole.
- The Italian half stays mostly implicit; surfaces in the palette and the occasional Italian-American detail (the date of the maiden voyage, *Vol. I*, the typeset register), never as a costume.
- Cheek is rare; the brand is reverent, not irreverent. *Joy*, not *fun*. The saturated palette is read as joyful, not playful.

## Voice & copy rules

### Do

- First-person singular. *I, my, me.*
- Plainspoken, slow declaratives. Periods.
- Specifics ("ten miles past anywhere", "elevation 4,140 ft", "1983 in Verona", "twenty-seven herbs") over modifiers.
- One-line aphorisms when needed. *"One voice in a wide place."*

### Don't

- "We" / "our team" / "passionate" / "crafted" / "curated" / "artisanal." Forbidden as in Holler & Hymn.
- Adjective stacks of three or more.
- Italian-language sprinkles (*atelier*, *trattoria*, *piazza*). The Italian DNA is in the *palette*, not in the *language*. Never in copy.
- Irreverence. The brand can be confident, but it does not wink.

### Voice anchors (lift verbatim where useful)

- *"One voice in a wide place."*
- *"I sing while I work. I think it goes in."*
- *"The labels are loud because I like them loud."*
- *"Forged at altitude."* (used for The Gap)
- *"For the long dark."* (used for Deep Cove)
- *"Drink before sundown."* (used for Blue Ridge Blue)

## Visual identity

### Palette (the 7 tokens — brand-native naming)

```css
/* Brand-native names connect the Mediterranean-pop palette to the WNC mountain register */
--high-lonesome-blue:  #1d4250;  /* page surface in dark mode; deep mountain-night teal */
--fiddle-bone:         #f9efd8;  /* page surface in light mode; text on dark; bone-of-the-fiddle cream */
--cardinal-flash:      #e54a1c;  /* primary loud accent; the WNC cardinal's flash in the brush */
--sourwood-honey:      #eac246;  /* mustard-gold; the brand's tape-and-honey accent */
--mountain-laurel:     #f0a99e;  /* coral pink; the mountain-laurel blossom in May */
--butterfly-pea:       #5cc1c0;  /* cyan; the butterfly pea flower the Blue Ridge Blue is made from */
--barn-ink:            #2d1a14;  /* deepest text; barn-floor ink */
```

**Token rules:**

1. `high-lonesome-blue` and `fiddle-bone` are the two primary surfaces. Most of the brand lives here.
2. `cardinal-flash` is the load-bearing primary accent — display headlines, primary CTA fills, signature underlines.
3. `sourwood-honey` is the tape-and-ribbon color — marquee strips, hand-painted tape on Polaroids, eyebrow callouts. Not body text.
4. `mountain-laurel` is the warm-secondary — used for italic emphasis in body, occasional section grounds, the "her time in Italy" thread.
5. `butterfly-pea` is the cool light accent — used on the Blue Ridge Blue product surface, occasionally as a small one-glance accent.
6. `barn-ink` is the deepest text color on light surfaces. Never pure `#000000`.

**Anti-tokens (forbidden in this brand):**

- Pure `#000000` — too digital for a mountain maker.
- Sage / charcoal / beige neutrals — collapses the brand into Kinfolk-luxe-minimal.
- Synthetic purples or magentas — outside the palette.

### Typography

Three tiers:

1. **Display** — classical italic serif at huge scale. Playfair Display or Cormorant Infant italic. Used for hero wordmark, section openers, product names. The italic forms read as *singing*, which connects to the brand's voice register.
2. **Body** — humanist serif. Spectral or Lora. 18–20px, line-height 1.55–1.7. Long-form reading.
3. **Mono / details** — IBM Plex Mono. Numerals, dates, micro-labels, address blocks, footnotes. Hand-set Selectric typewriter character.

**Type rules:**

- Display is **italic by default** (italic serifs at scale carry the *singing* register). Roman display is forbidden — it reads as too rigid.
- Body is roman with italic for emphasis (the *high-lonesome sound* phrase always italic).
- All-caps display is forbidden — too revival-tent, too Holler & Hymn. The brand stays mixed-case.

### Imagery direction (three lanes)

**Lane 1 — Cinematic Blue Ridge landscape (the load-bearing lane).** Atmospheric photographs of WNC mountain views at dusk, dawn, mist, balds, gaps, deep coves. The vista IS the brand more than any object is. Saturated skies — sunrise pink, blue-hour navy, storm-steel — that justify the saturated palette overlaid.

**Lane 2 — Hand-bound objects.** The fiddle on a windowsill. A hand-bound notebook open to a setlist. A wax-seal stamp. A copper still in a dim barn. Used sparingly — secondary illustrations beneath the landscape.

**Lane 3 — Hand-painted bottle labels.** Each product carries a hand-painted label in saturated palette tones, NOT generic clean labels. The labels feel like Italian-pop posters scaled down. Cardinal-flash and sourwood-honey dominate; high-lonesome-blue as label ground.

### Composition rules

- **Cinematic landscape-led hero.** The home hero is a full-bleed atmospheric image (or atmospheric gradient placeholder) with the wordmark italic-serif over it. The landscape is the brand.
- **Spare per section.** Single quote, single image, single CTA. The brand's stillness comes from breathing room. Saturation lives in the palette, not in density.
- **Section grounds vary by palette.** Each major section gets its own ground (high-lonesome-blue, fiddle-bone, mountain-laurel) so the saturated palette deploys widely — per the user's documented preference (diverse, saturated, broad-set, asymmetric).
- **No SaaS silhouette.** No centered massive type + dual-CTA pair. No 3-col card grid for products. No 5/7 image-text splits.

## Product family

- **Blue Ridge Blue** — 14% ABV aperitif. Butterfly pea flower, lemon balm, mountain mint. Cobalt-tinged. *"Drink before sundown."*
- **The Gap** — 28% ABV amaro. Wild ginger, black walnut, mountain mint. Sharp, bright, high-elevation. *"Forged at altitude."*
- **Deep Cove** — 22% ABV cordial. Wild persimmon, paw-paw, black walnut hull. Dark, sweet, slow-steeped. *"For the long dark."* (Fall/winter only.)

## Anti-references

- Kinfolk / Cereal-Magazine luxe-minimal-craft.
- Brooklyn industrial-craft (Edison bulb, subway tile, Helvetica-on-blackboard).
- Generic country / farm signage ("y'all" doormat).
- Wes Anderson costume-symmetric pastel.
- Etsy folk-craft (hand-drawn fern in dusty rose).
- Modern craft-beer label vernacular.
- Generic-2026-SaaS silhouette (centered hero + dual-CTA pair + balanced padding + serial footer).
- Editorial-register vocabulary in chrome (*atelier*, *the studio*, *mise-en-place*, *the journal*).
- Italian-American costume (no *trattoria* signage, no checkered tablecloths, no *Roma* in the copy).
- Foxfire-Book reissue look (the brand explicitly diverges from this — the saturated palette is what makes it not a reissue).

## Direction phrase for `/stardust:direct`

> *"meditative mountain music wearing Italian summer color. Single voice in a wide place. Saturated, joyful, slow."*

(20 words. Captures the central tension. Intent-only — no colors or typefaces named.)
