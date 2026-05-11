# Gemini 3 Pro Image — prompts for Holler & Hymn

> Self-contained prompt pack for image generation in a fresh Gemini session. Paste the **session preamble** once at the top of the session. Then run the **logo prompt** first; iterate until a strong variant lands; then move through the **three imagery lanes**.
>
> Drop the final selected images into:
> - `site/current/assets/logo.svg` (replace the typographic placeholder)
> - `site/current/assets/media/<filename>.{jpg,png}` (per the page JSON `media.images[].src` paths)

---

## Session preamble — paste once at the top of the Gemini session

```
I'm building brand imagery for an invented artisanal liqueur house called Holler & Hymn. Keep the following brief in mind for every image I'll ask for in this session.

BRAND PREMISE
Holler & Hymn is a small-batch Appalachian botanical-liqueur house in Wolfpen Holler, Madison County, North Carolina — roughly 40 minutes outside Asheville. Single maker: Wendell Greene. Hand-foraged herbs and fruit from inside 40 miles of his barn. Hand-distilled in a copper still he built in 2019. Hand-painted labels in a shed he bought off a dead preacher. Products: amari, bitters, cordials, low-ABV aperitivi.

CENTRAL TENSION
The brand sits on two halves at full volume:
- THE HOLLER — outlaw, place-rooted, foraged, hand-made. Barn, copper still, mason-jar shelf, faded denim. Saturday-night side.
- THE HYMN — heritage, ritual, restraint. Old leather hymnal, Sunday-morning sermon, revival-tent typography. Sunday-morning side.

The ampersand is the brand. Refuse pure-outlaw-costume; refuse pure-heritage-Etsy. Both halves at full volume, with conviction.

LOCKED PALETTE (use exactly these; do not drift)
- Hymnal black:    #1a1410   (revival-mode page surface; body text)
- Bulletin cream:  #e8d8b8   (bulletin-mode page surface; cream paper)
- Barn rust:       #7e1d12   (display headlines; primary accent)
- Gilt gold:       #d4a45c   (rare — hymnal-edge accent only)
- Rhody green:     #3e5a3e   (botanical context only)
- Hellfire neon:   #f04a26   (one-glance irreverence accent only)

TYPOGRAPHY CHARACTER (for any rendered type in images)
- Display: hand-lettered revival-tent — heavy, condensed, all-caps, rough strokes. Like a 1940s revival-tent poster or a state-fair sign painted on plywood. Reference: Knockout, Saloon, Camp Type — rougher.
- Body: hymnal serif — old-hardcover-hymnbook page register. Reference: Sentinel, Bookman.
- Mono: typewriter / IBM Selectric — numerals, ABV, dates, small labels.

CULTURAL REFERENCES (channel; do not copy)
- Old Western North Carolina fruit-crate labels
- 1940s revival-tent posters
- Vintage Appalachian state-fair signage
- The typography of The Foxfire Book
- Country-music album sleeves from the early-70s outlaw era (Willie Nelson, Waylon Jennings, Townes Van Zandt, Johnny Cash at Folsom)
- Hand-painted plywood roadside signs you still see on US-25 north of Asheville

ANTI-PATTERNS — do NOT produce anything resembling
- Kinfolk / Cereal Magazine luxe-minimal-craft (beige, sage, charcoal, generous white space, serif italic)
- Brooklyn industrial-craft (Edison bulb, subway tile, Helvetica-on-blackboard)
- Wes Anderson costume-symmetrical pastel framing
- Etsy folk-craft (hand-drawn fern in dusty rose; cute)
- Generic country / farm signage ("Y'all means all" doormat)
- Modern craft-beer label illustration-heavy can wraps
- Pure black (#000000) — use hymnal-black #1a1410 instead
- Purple or magenta — both are outside the palette
- AI-stock-photo "perfect craft" lighting — go for rough, real, photographic-realistic with hand-imperfection

I'll generate the logo first, then move through three imagery lanes (place/process, hymnal/heritage, label art).
```

---

## Prompt 1 — THE LOGO (run this first)

```
Generate 6 variations of the Holler & Hymn brand logo.

SPECIFICATION
- Brand name: HOLLER & HYMN (capitalize as shown)
- Subtitle (smaller, beneath the mark): OF WOLFPEN HOLLER · MADISON CO. NC
- Style: 1940s revival-tent poster meets 1920s apothecary cabinet drawer
- The ampersand "&" is the load-bearing graphic — enlarge it, rough-paint it, treat it as the brand's central mark
- Hand-lettered, never digital-perfect. Roughness is the brand.
- Color: barn-rust #7e1d12 on bulletin-cream #e8d8b8
- Finish: distressed wood-block print, slight registration drift, irregular ink density
- Flat — no gradients, no glassmorphism, no digital vector swooshes, no modern logo tropes

SPREAD THE 6 VARIANTS ACROSS THESE LAYOUTS
1. Round seal / medallion — "HOLLER" arcing top of circle, "& HYMN" arcing bottom, ornament centered
2. Stacked vertical wordmark — "HOLLER" / oversized "&" / "HYMN" stacked, single decorative rule between
3. Apothecary horizontal panel — long horizontal cabinet-drawer layout, small almanac-sans subtext underneath the wordmark
4. Tent-revival poster — large "HOLLER" + giant "&" + "HYMN" arranged like a hand-painted preacher's-tent banner
5. Crate-stencil — stencil-cut letters, irregular paint bleed, like an old WNC apple-crate
6. Hymnbook-cover — gilt-gold #d4a45c edges, hymnbook frame, rust display inside

ASPECT 1:1, 1024×1024 or larger. After I pick a favorite, I'll ask you to produce: (a) an inverted version (cream on hymnal-black), (b) a tight square favicon crop of just the ampersand, and (c) a vector-ready clean version.
```

**Iteration notes:**
- Pick the strongest variant from the 6. Ask Gemini to produce 4 refinements of that variant.
- Once locked, request: inverted (cream on hymnal-black), ampersand-only favicon crop, and a clean-vector version for SVG export.
- Save final to `site/current/assets/logo.svg` (export from Gemini's chosen format).

---

## Prompt 2 — LANE 1: place / forage / process

> *Photographic-realistic, golden-hour or blue-hour, the maker's daily reality. Outdoor and indoor. People allowed only when explicitly named — Wendell himself in the portrait shot.*

```
Generate brand imagery in Lane 1 — place, foraging, and process. Photographic-realistic, golden hour or blue hour, Western North Carolina mountain register. Saturated rust-red and forest-green palette per the brand. Never luxe-craft styled.

ASSETS NEEDED (generate each as a separate batch of 4 variants)

(a) MAKER PORTRAIT — Wendell Greene
"Photographic portrait, golden hour, three-quarter framing. A man in his late 40s wearing a faded pearl-snap shirt and worn denim, holding wild-foraged ramps in one hand. No smile, no posed look, real. Standing at the edge of a rhododendron understory in a Western North Carolina mountain holler. Soft warm sunlight from camera-right. No people other than the subject. No styled luxe-craft staging. Aspect 4:5 vertical."

(b) WOLFPEN HOLLER LANDSCAPE
"Photographic landscape, late June, golden hour. A small mountain hollow in Madison County NC with morning mist still in the trees. Sourwood trees in bloom (small white bell-flowers). Rhododendron understory. A weathered tin-roof barn visible in the middle distance. No people. No buildings except the barn. Saturated colors: deep forest green, rust-red barn paint visible on the barn roof and door. Aspect 16:9 wide."

(c) THE COPPER STILL
"Photographic interior, dim barn light. A small hand-built copper pot still on a wooden bench, lit by one north window. Brass fittings, dark soot patina on the bottom from wood-firing. Mason jars of dried herbs visible on a shelf in the background, slightly out of focus. Hymnal-black shadows. Warm rust-red and amber highlights from the copper. No people. Aspect 4:3 horizontal."

(d) MASON-JAR SHELF
"Photographic still life, soft window light. A weathered wooden shelf in a barn carrying 12-16 mason jars of dried botanicals — sourwood blossoms, staghorn sumac (deep red), sassafras root, persimmon, mountain mint, juniper berries. Hand-written paper labels on each jar in IBM-Selectric typewriter style. Slight dust visible in the air. Aspect 16:9 wide."

(e) FORAGING HANDS
"Close-up photograph, golden hour. A man's hands (pearl-snap shirt cuff visible) holding a small bundle of fresh-foraged wild ramps, soil still on the roots. Out-of-focus forest understory behind. Saturated greens, rust-red shirt. No face. Aspect 1:1 square."

(f) THE PREACHER'S SHED
"Photographic exterior, late afternoon. A small weathered plywood shed in a clearing with a hand-painted sign reading 'HOLLER & HYMN' on the door in rust-red on cream. Hand-lettered, irregular. Faded blue paint on the rest of the shed showing wood grain through. Wild brush around the base. No people. Aspect 16:9 wide."

CROSS-CUTTING DON'TS
- No "soft beige + sage" luxe-craft styling
- No Wes Anderson symmetric pastel framing
- No clean studio lighting on outdoor scenes
- No clean stock-photo perfection — accept the rust, the soot, the weathered texture
```

---

## Prompt 3 — LANE 2: hymnal / revival / heritage

> *Still-life photographs of the objects of Southern church culture. Respectful, never costume, never mockery. Low saturation except for the leather-brown and brass-gold.*

```
Generate brand imagery in Lane 2 — hymnal, revival, heritage. Photographic stills of the objects of Southern church culture, photographed with respect — never costume, never mockery. Low saturation overall; the only saturated colors are leather brown, brass gold (#d4a45c), and the hymnal-page cream (#e8d8b8).

ASSETS NEEDED (each as a batch of 4 variants)

(g) WORN LEATHER HYMNAL
"Still-life photograph. An open hardcover hymnal, dark leather binding, brass-edged pages, on a worn pine kitchen table. North window light, soft and cool. A handwritten note on cream paper tucked between the pages. Dust visible in the air. No people. Aspect 3:2 horizontal."

(h) SUNDAY-BULLETIN PAGE
"Still-life photograph. A folded paper church bulletin printed in cream and rust-red on cream paper, edge-curled, on a wooden surface. The typography is hand-set serif — visible imperfection in the printing. No human hands. Aspect 1:1 square."

(i) REVIVAL TENT SILHOUETTE AT DUSK
"Photographic landscape, blue hour. The silhouette of a small canvas revival tent in a clearing, with a single warm lamp glowing inside. Mountain treeline in the far background. No people visible. Slightly washed-out colors except the lamp glow. Aspect 16:9 wide."

(j) WOODEN PEW AND HAT
"Still-life photograph. An empty dark-wood church pew with a man's worn felt hat resting on the seat. One book of psalms beside it. Soft side light from a stained-glass window casts a faint rust-red glow on the wood. Quiet, reverent. No people. Aspect 4:5 vertical."

(k) HAND-LETTERED HYMN BOARD
"Still-life photograph. An old wooden hymn number board on a church wall, with hand-set black numerals on cream cards reading 'HYMN 287'. Weathered paint, dust on the frame. Side light. No people. Aspect 1:1 square."

CROSS-CUTTING NOTES
- Respect, not parody. These are real Southern church objects. Do not make them ironic or quaint.
- Low saturation everywhere except leather-brown and brass-gold
- Soft, even light — never dramatic religious staging
- No crosses centered as decoration. No "Sunday morning" stock-photo poses.
```

---

## Prompt 4 — LANE 3: label art / jukebox / bar

> *Hand-painted vintage label art. Where the brand is loudest. Rough registration, dripping ink, slight punk in execution despite the heritage subject.*

```
Generate brand imagery in Lane 3 — hand-painted bottle labels and bar-grammar imagery. Where the brand's irreverence is loudest. Rough registration, dripping ink, slight punk in execution. 1950s revival-tent flyer aesthetic crossed with country-music album sleeves.

ASSETS NEEDED (each label as a batch of 4 variants)

(l) PASS THE PLATE — bottle label
"Hand-painted vintage liquor-bottle label, rough registration, irregular ink density. Background: bulletin-cream #e8d8b8. Display headline: 'PASS THE PLATE' in hand-lettered all-caps revival-tent type, barn-rust #7e1d12. A small ornament beneath: a hand-painted offering plate / collection bowl illustration. Smaller body text in old-style hymnal serif: 'a Sunday-morning aperitif amaro · 24% ABV · sourwood blossom · chicory · magnolia bark · made by hand in Wolfpen Holler, Madison Co., NC'. A small typewriter-mono code at the bottom: 'BATCH 04 · 750 ML'. Slight ink drip on the lower edge of the headline. Aspect 2:3 vertical (bottle-label proportions)."

(m) TENT REVIVAL — bottle label
"Hand-painted vintage liquor-bottle label. Background: hymnal-black #1a1410 with a single hand-painted revival-tent silhouette glowing with hellfire-neon #f04a26 light from inside. Display headline: 'TENT REVIVAL' in hand-lettered all-caps, bulletin-cream #e8d8b8. Body text in cream: 'a mountain herbal amaro · 32% ABV · staghorn sumac · eastern juniper · black walnut hull · ramps (spring batch only)'. Slight ink bleed. Aspect 2:3 vertical."

(n) THE BACKSLIDER — bottle label
"Hand-painted vintage liquor-bottle label, bulletin-cream background. Display headline: 'THE BACKSLIDER' in hand-lettered all-caps, barn-rust. A hand-painted illustration of a kid sneaking out of a small wooden church through a side door. Body text: 'a sweet cordial · 18% ABV · paw-paw · wild persimmon · juniper berry'. Slight dripping ink. Aspect 2:3 vertical."

(o) DRINK YE ALL OF IT — bitters set, three matching bottles
"Hand-painted vintage liquor-label triptych — three matching small dasher bottles side-by-side, each with a hand-painted label. Headline across the set: 'DRINK YE ALL OF IT' in hand-lettered all-caps revival-tent type, barn-rust on bulletin-cream. Tiny subtext: 'Matthew 26:27. Three dashes minimum. 44% ABV'. Each bottle's individual sub-label: AROMATIC / CITRUS / HERBAL in hymnal serif. Three matching cream-and-rust labels. Aspect 3:2 horizontal."

(p) DIM ASHEVILLE BAR INTERIOR
"Photograph, dim warm interior of an Asheville cocktail bar at last call. Hand-painted Holler & Hymn pour-list visible behind the bar in rust-red on cream plywood. One bottle of TENT REVIVAL on the bar, a Pyrex cup beside it. Wood paneling. Single warm bulb. No people. Aspect 16:9 wide."

(q) HAND-PAINTED POUR-LIST PLYWOOD SIGN
"Still-life photograph of a square plywood sign hand-painted by Wendell himself. Hand-lettered: 'HOLLER & HYMN · POUR LIST'. Below, six product names in irregular rust-red lettering on cream-painted plywood. Slight paint drips. Wood-grain showing through. Photographed flat-on. Aspect 1:1 square."

EXECUTION NOTES
- Rough registration is the brand — irregular margins, drift, slight horizontal misalignment
- Dripping ink at the bottom edges where it accumulated
- Sometimes the paint barely covers a letter — that's the brand
- All hand-lettered, never digital-clean
```

---

## Iteration tips (universal)

- **Generate 6 variants per request the first time, then 4 refinements of the strongest, then iterate.** Lock the asset with a small set; don't open-ended-iterate.
- **When Gemini drifts toward "luxe-craft," paste the anti-patterns block again** as a corrective. Sometimes the brand register resets between turns.
- **For all photographic-realism prompts, append: "no Adobe-Stock luxe-craft styling, no AI-perfect-craft lighting, no people unless explicitly named in the prompt."** Gemini's defaults trend toward styled human-in-the-shot.
- **Save final selections to `site/current/assets/`** in the filenames expected by `pages/*.json` `media.images[].src` paths.

## Final asset checklist

Match `pages/*.json` `media.images[]` `src` paths verbatim:

- `site/current/assets/logo.svg`
- `site/current/assets/favicon.svg`
- `site/current/assets/images/maker-portrait.jpg` (a)
- `site/current/assets/images/wolfpen-landscape.jpg` (b)
- `site/current/assets/images/copper-still.jpg` (c)
- `site/current/assets/images/mason-jar-shelf.jpg` (d)
- `site/current/assets/images/foraging-hands.jpg` (e)
- `site/current/assets/images/preacher-shed.jpg` (f)
- `site/current/assets/images/kitchen-hymnal.jpg` (g)
- `site/current/assets/images/barn-golden-hour.jpg` (Lane 1, for the visit page)
- `site/current/assets/images/tasting-bench.jpg` (Lane 1, for the visit page)
- `site/current/assets/images/catalog-mockup.jpg` (Lane 2, for the catalog page)
- `site/current/assets/images/hymns-page-header.jpg` (Lane 2, for the hymns page)
- `site/current/assets/images/label-pass-the-plate.png` (l)
- `site/current/assets/images/label-tent-revival.png` (m)
- `site/current/assets/images/label-the-backslider.png` (n)
- `site/current/assets/images/label-deacons-draught.png` (similar to l, with deacon-collar-undone illustration)
- `site/current/assets/images/label-drink-ye-all-of-it.png` (o)
- `site/current/assets/images/label-the-no-show.png` (similar to l, with empty-pew-with-hat illustration)
- `site/current/assets/images/asheville-bar.jpg` (p)
- `site/current/assets/images/hymns-page-header.jpg` already listed
