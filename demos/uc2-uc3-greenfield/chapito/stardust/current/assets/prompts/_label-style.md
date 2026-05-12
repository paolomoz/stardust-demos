# Chapitô bottle-label prompt-pack — shared register notes (REV 2, 2026-05-12)

Every `label-*.prompt.txt` follows this register. Cultural rotation from Cattaneo (Italian liquor) to Chapitô (Portuguese hot sauce) is preserved; bottle silhouette and cap style rotated from "wax-dipped liquor bottle" to **classic 5fl-oz "woozy" craft hot-sauce bottle with a black plastic dispenser cap**.

## Bottle silhouette (NEW, round 2)

- **Shape:** Classic 5fl-oz / 148ml woozy / craft-hot-sauce bottle. Tall narrow cylindrical body, square shoulder, short neck, ~7 inches tall, ~1.5 inches wide. Aspect ratio roughly 1 : 3 (width : height).
- **Glass:** Clear glass with the sauce visible inside (color tied to the bottle's product family).
- **Cap:** **Black plastic dispenser cap** with a flat top and slightly tapered sides — the classic craft-hot-sauce cap. NO wax dipping, NO wax drips, NO cork. Just clean black plastic.
- **Photography:** Straight-on product shot, head-on, eye-level. The bottle is centred in the frame.

## Label composition (Memphis-Milano collage, adapted to the taller silhouette)

- **Label paper:** rectangular, ~70% of the bottle's vertical span, ~85% of its width. Taller than wide (matches the bottle's narrow body).
- **Label ground:** solid saturated color per bottle (family-specific palette token). Flat — no gradient, no photographic texture, hard-edged geometric area.
- **Title band:** a hard-edged horizontal band in cream (`cal #fffaef`) running edge to edge of the label at the upper third, slightly tilted ±2–3°. The bottle's name appears INSIDE the title band in bold condensed all-caps sans-serif (Anton register), set in deep dark ink (`noite #1a1410`), letter-spacing tight.
- **Figure:** a B&W cutout vintage photograph of a 1920s–1940s travelling-circus performer — sharp hand-cut zine-style edges, archive photograph grain, occupies the middle 50% of the label vertically, slightly offset left or right. Pure grayscale.
- **Subtitle:** below the title band, a smaller all-caps subtitle in IBM Plex Mono uppercase — Portuguese only.
- **Brand-mark badge (NEW):** lower-left corner of the label, ~14% of the label width. The badge is the **Chapitô Ô-monogram** (matching the new logo design):
  - Double-line circle border — two concentric thin dark-ink rings with a small gap between them
  - An italic capital "Ô" set in classical Bodoni-style display serif, centred inside the inner ring
  - A tiny dark pennant flag on a thin pole rising vertically from above the Ô letter
  - Three small burgundy-red six-pointed Bodoni-style stars scattered inside the circle
  - Background of the badge is the same color as the label ground — the badge is NOT inside a white disc
  - **NO 'C' letter, NO radial wedges, NO stripes, NO inner hub disc — only the Ô + flag + double ring + 3 red stars**

## Image background (for cream-keying)

- The bottle floats on a flat solid warm cream (`#fffaef`) background. NOT a checkerboard / transparency-indicator pattern, NOT white, NOT gray. Just uniform flat cream. We will key out the cream programmatically after generation to produce a transparent PNG.

## Aspect ratio for Gemini

- All bottle prompts use `--ratio 3:4` (portrait) to match the tall narrow bottle silhouette.

## Anti-references (shared, read into every prompt)

- NO Italian language anywhere.
- NO Catholic / religious iconography.
- NO Cattaneo product names (Amaro, Gin, Sant'Ambrogin, Religin, Della Nonna).
- NO purple-as-primary-label-ground.
- NO wax-dipped cap. NO wax drips. NO cork.
- NO 'C' letter on the brand mark badge — only the Ô.
- NO wedges or stripes on the brand mark badge.
- NO checkerboard / transparency-indicator pattern as the image background.
- NO modern craft-beer can aesthetic.
- NO photographic landscape behind the bottle.
- NO drop shadows, glassmorphism, gradients-as-elevation.

## Bottle roster (first batch, 6)

| Bottle | Sauce color | Label ground | Title band | Figure |
|---|---|---|---|---|
| Trapézio | amber-orange | `chapito-tejo` (deep teal) | cream band | trapeze artist mid-swing |
| Faquir | vivid red-orange | `chapito-noite` (near-black) | vivid-orange band | fire-eater with flaming torch |
| Palhaço | golden yellow | `chapito-galinha` (mustard) | cream band | clown with painted face + ruff collar |
| Domador | deep amber-red | `chapito-piri` (vivid orange) | deep-teal band | lion tamer with whip + tailcoat |
| Funâmbulo | vivid green-yellow | `chapito-azulejo` (turquoise) | cream band | tightrope walker with balance pole |
| Acrobata | brown-red | `chapito-cravo` (peach-coral) | deep-teal band | acrobat mid-cartwheel |

Subsequent batches (deferred): the remaining 18 across the four families.
