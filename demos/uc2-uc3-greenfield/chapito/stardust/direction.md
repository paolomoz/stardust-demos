<!-- stardust:provenance
  writtenBy: stardust:direct (hand-authored, proof-of-concept; greenfield → seed/brief produced current/ that already encodes the target spec, so direct is a near-identity confirmation step)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/current/_brand-extraction.json
    - brand/BRAND.md
    - briefing/SITE-BRIEF.md
  stardustVersion: 0.3.0
  scope: target spec for the redesign — what the proposed site should be at v1
-->

# Active direction — Chapitô

## Resolved direction phrase

> **"big-top fairground poster wrapping a quiet pepper farm. Cutout-collage over solid grounds. Loud, painted, off-axis, Portuguese."**

Selected from `_brand-extraction.json.directionPhraseCandidates[0]`. The phrase captures the central tension (Alentejo slow-cook × Lisbon big-top spectacle), names the load-bearing composition language (cutout-collage on solid grounds, off-axis), names the cultural register (Portuguese), and forbids the most likely default register drift (clean-craft minimalism) by foregrounding `loud, painted`.

## Mode

**Mode A — brand-faithful.** Signal-strong: the brand's palette, type tier, voice register, and compositional motif catalog are all explicitly authored. No exploration; no Mode B / Mode C interpretation. The render must reimplement the named motif catalog verbatim. Token substitution alone produces slop per `feedback_render_divergence_load_bearing`; the motifs ARE the brand.

## Register

`brand` (confirmed from PRODUCT.md § Register). The site is brand storytelling; the transactional shop is offloaded to `chapito.shop`. Site-wide IA reinforces a single destination: hero medallion + X-marquee CTA + persistent bottom bar all point to `.shop`.

## Palette pin

10-token Lisbon fairground-pop palette, brand-native naming. Pinned from `DESIGN.json.colors`:

| Token | Hex | Role |
|---|---|---|
| `chapito-cravo` | `#f4b09d` | dominant brand surface ground |
| `chapito-areia` | `#fbe9d0` | secondary light surface; sunburst alt-rays; stripe accent |
| `chapito-piri` | `#ed7f3f` | Piri-Piri family ground |
| `chapito-laranja-doce` | `#e95b27` | stripe accent; secondary hot orange |
| `chapito-azulejo` | `#3fbcaf` | highlighter / polka-dot / chip half-band accent |
| `chapito-galinha` | `#f3c84e` | Doce Fogo family ground |
| `chapito-malagueta` | `#9b3536` | highlighter / ticket-stub border / body emphasis |
| `chapito-tejo` | `#1f4548` | Cabeçudo ground + Trapézio bottle hero ground + circle CTA fill |
| `chapito-noite` | `#1a1410` | deepest text (never pure black) |
| `chapito-cal` | `#fffaef` | limewash white; persistent bottom bar; tape ribbons |

**Palette deployment intensity:** `drenched`. Home page deploys 6 distinct section grounds across 10 sections. Each product family gets its own vivid ground exactly once. `chapito-tejo` appears in two consecutive sections (Cabeçudo + Trapézio) to deliver the cover-of-night beat.

## Type pin

| Tier | Family | Use |
|---|---|---|
| Logotype-medallion | Bodoni Moda → Playfair Display → GFS Didot → Didot | Medallion only — circular type around monogrammatic C. Never standing text. |
| Display | Anton → Bebas Neue → Oswald → Impact | Section banners, family names, big-dark bottle title. All-caps load-bearing. |
| Body | Inter → DM Sans → Outfit → Helvetica Neue | Reading text; italic for highlighter-tape pulls + Inês-voice quotes. |
| Mono | IBM Plex Mono → JetBrains Mono → Courier New | Ticket-stubs, micro-labels, addresses, numerals. ≤ 14px load-bearing. |

**Italic-display:** forbidden. **Mixed-case display:** forbidden. **Script web fonts as standing text:** forbidden.

## Compositional motif catalog (LOAD-BEARING — pinned for `/stardust:prototype`)

The render MUST reimplement each of these. See `DESIGN.json.extensions.motifs.patterns[]` for the machine-readable form, and `DESIGN.md § 8` for the prose form.

1. **Sunburst medallion hero** — alternating-ray sunburst on `chapito-cravo` + central Bodoni circular wordmark medallion + 6 bottles in radial arrangement + two ticket-stub corner tags.
2. **X-crossed marquee band** — two diagonally-crossed `chapito-cal` tape ribbons ±12° repeating `VEM AO CHAPITÔ` / `PROVA A CASA` in Anton condensed all-caps; circular `chapito-tejo`-ground CTA at the X-intersection.
3. **Highlighter-tape manifesto** — centered paragraph; 5 phrase-spans wrapped in flat solid-color highlighter rectangles in rotation `azulejo · piri · galinha · malagueta · tejo`.
4. **Color-block product collage** (×4) — full-bleed family band; family name + 3-term mono subtitle + 6-bottle horizontal row + 3–4 B&W cutout-photo overlays at off-axis angles + diagonal-stripe corner + polka-dot corner.
5. **Chip-tag cluster** — single instance in the Equilibrista section; 6 circular cutout-photo chips with colored half-band labels.
6. **Big-dark bottle hero** — `chapito-tejo` full-bleed; 3 wave-line strokes; centered Trapézio bottle; Anton 120px display; mono address block.
7. **Medallion footer** — centered alone; same medallion as hero, smaller; icon-link row below.
8. **Persistent bottom bar** — fixed 36px `chapito-cal` band on every page.

## Anti-patterns the render must refuse

Each of these is a default the LLM-rendered `prototype` will likely reach for without explicit refusal:

- Italian liquor-maker pastiche of any kind (the reference brand is the visual register; nothing else of it leaks).
- Italian-language words anywhere.
- Tourist-Lisbon clichés (`fado`, `saudade`, `azulejo` as tile-decoration, `pastel de nata`, `bacalhau` as set-dressing).
- Slow Food / Cereal-Magazine country-luxe.
- Etsy folk-craft / mason-jar / kraft-paper / chalkboard.
- Brooklyn industrial-craft.
- Wes Anderson symmetric pastel.
- Italic-classical serif as display (that's High Lonesome's register).
- Mixed-case display.
- 3-col card grid for the bottles.
- Atmospheric photographic backgrounds with overlaid type.
- Drop shadows, gradients-as-elevation, glassmorphism, neumorphism.
- Centered SaaS-hero silhouette with dual-CTA pair.
- Editorial-register vocabulary in chrome (`the journal`, `dispatches`, `atelier`).
- Script web fonts as standing text.
- Pure `#000000` or `#ffffff`.

## Voice pin

First-person singular (Inês). Slow plainspoken declaratives. Portuguese-native; English as gloss. Anchor phrases lifted verbatim:

- *"Molhos com piruetas."*
- *"Casa pequena, picante grande."*
- *"Cada frasco, uma figura."*
- *"As etiquetas são barulhentas porque a cozinha é silenciosa."*
- *"Vem ao Chapitô."*
- *"O sol num frasco."*
- *"Trapézio sobre malagueta."*

Forbidden: `we / our team / passionate / crafted / curated / artisanal`, `fado / saudade / azulejo (as decoration) / pastel de nata / bacalhau (as atmosphere)`, all Italian-language words.

## Audit hand-off

Outputs ready for `/stardust:prototype`:

- `stardust/current/pages/home.json` — section-list with `motifId` references back to the catalog
- `DESIGN.json.extensions.motifs.patterns[]` — machine-readable motif specs
- `DESIGN.json.extensions.paletteDeployment.homeSectionGroundSequence` — section-ground sequence
- `DESIGN.json.extensions.divergence.brand_faithful_inversions[]` — retentions list
- `DESIGN.json.extensions.divergence.antiToolboxAudit.checked[]` — refusal audit

All eight motifs are required at v1. None is optional. Render-refuse anything that does not include them.
