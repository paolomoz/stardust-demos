<!-- stardust:provenance
  writtenBy: stardust:seed + stardust:brief (hand-authored, proof-of-concept)
  writtenAt: 2026-05-12T00:00:00Z
  readArtifacts:
    - brand/BRAND.md
    - briefing/SITE-BRIEF.md
    - briefing/CONTENT.md
  synthesizedInputs:
    - brand/BRAND.md
    - briefing/SITE-BRIEF.md
    - briefing/CONTENT.md
  stardustVersion: 0.3.0
  scope: PRODUCT.md is split between seed (brand sections) and brief (briefing sections); both compile here. Section order matches impeccable:teach's PRODUCT.md template.
-->

# Product

## Register

brand

## Users

Three audiences for chapito.pt:

1. **Lisbon home cooks and restaurant chefs** — locals who walk to Costa do Castelo for a Saturday tasting and reorder by WhatsApp. Primary audience.
2. **Out-of-town Portuguese food enthusiasts** — Porto, Algarve, Madeira, Açores, and the Lisbon diaspora abroad. Order online through the `.shop` subdomain.
3. **Restaurant trade buyers across Portugal and Spain** — Madrid, Barcelona, Sevilla, Faro, Porto. Restaurants that put a small-batch artisanal Portuguese hot sauce on the table.

The transactional shop lives on `chapito.shop`. This site is brand storytelling.

## Product Purpose

Chapitô is a small-batch Portuguese hot-sauce house in Alfama, Lisbon. Made by Inês Bento — a former trapeze understudy at the Chapitô circus collective up the hill (Costa do Castelo, 1996–1999) who came home to her family's pepper patch outside Estremoz and started bottling sauces at twenty-six. Four product families: classic *Piri-Piri*, sweet-fire *Doce Fogo*, fermented *Equilibrista*, novelty *Cabeçudo*. The brand's flavor is Alentejo slow-cook; the brand's surface is Lisbon big-top spectacle. The two halves are the brand.

The site exists to:

- Make the brand legible at first glance — *Molhos com piruetas. Casa pequena, picante grande.*
- Name the four families and let the visitor recognise a sauce by its figure (the sauces are a cast, not a catalog).
- Send qualified traffic to the `.shop` subdomain (single primary action, reinforced site-wide).
- Anchor the brand in Inês and the two places (Costa do Castelo, Alfama + the Alentejo pepper patch outside Estremoz).

## Brand Personality

Inês Bento, sole proprietor. Voice: first-person singular, present tense, slow plainspoken declaratives. Periods over commas. Specifics over modifiers — *Costa do Castelo, número 7*, *seis semanas de fermentação*, *frasco de 100 ml*, *ano após ano*. The brand is reverent about the food (Alentejo, the grandmother's recipe, the copper pot) and playful about the spectacle (circus-figure product naming, fairground-poster surface). Both at once.

Anchor phrases lifted verbatim:

- *"Molhos com piruetas."*
- *"Casa pequena, picante grande."*
- *"Cada frasco, uma figura."*
- *"As etiquetas são barulhentas porque a cozinha é silenciosa."*
- *"Vem ao Chapitô."*
- *"O sol num frasco."*
- *"Trapézio sobre malagueta."*

Portuguese is the brand's native language; English is the gloss, never the default.

## Anti-references

- **Italian liquor-maker pastiche of any kind.** No `Opificio` / `Liquoreria` / `Amaro` / `Aperitivo` / `Cattaneo`. The reference brand is the visual register inversion this brand inverts AWAY from. The cultural register is Lisbon + Alentejo, never Italian.
- **Slow-Food / Cereal-Magazine / Kinfolk country-luxe.** Terracotta + linen + hand-thrown ceramic + sage neutrals = the brand's loudest no.
- **Tourist-Lisbon clichés.** No *azulejo* tile imagery, no *fado* references in copy, no *pastel de nata* shorthand, no *bacalhau* as set-dressing. The brand lives in Lisbon as a native.
- **Costume-Portuguese.** No `obrigado` plate, no anchor-and-rope nautical pastiche, no `Lisbon` graffiti type.
- **Wes Anderson costume-symmetric pastel.** The brand is asymmetric, off-axis, hand-drawn.
- **Etsy folk-craft / "homestead-spicy" Americana.** No mason-jar tags, no kraft-paper labels, no chalkboard signage.
- **Brooklyn industrial-craft.** No Edison bulb, no subway tile, no Helvetica-on-blackboard.
- **Modern craft-beer label vernacular.** The brand is Portuguese fairground-poster, not Williamsburg can-art.
- **Generic-2026-SaaS silhouette.** No centered hero + dual-CTA pair + balanced padding + serial footer.
- **Editorial-register vocabulary in chrome.** Never *atelier*, *the studio*, *mise-en-place*, *the journal*, *dispatches*.
- **Hand-lettered web fonts** as standing text. Script lives only as raster on bottle labels.
- **Drop shadows, gradients-as-elevation, glassmorphism, neumorphism.** Forbidden universally.
- **Italian-language words.** Forbidden anywhere in copy.

## Design Principles

1. **Alentejo slow-cook × Lisbon big-top spectacle.** The brand's central tension. Strip either half and the brand collapses. Both at full volume.
2. **Cada frasco, uma figura.** Each sauce is a circus figure with a name. The product line is a cast, not a catalog. Naming is load-bearing.
3. **Casa pequena, picante grande.** Small house, big spice. The brand is hand-made at small scale; the visual surface is unapologetically loud.
4. **As etiquetas são barulhentas porque a cozinha é silenciosa.** The visual saturation is justified by the quiet voice. Voice and surface are intentionally in tension.
5. **Cutout collage on solid grounds.** The brand's depth language is layering, rotation, and cutout silhouettes — never photographic backgrounds or atmospheric gradients.
6. **Off-axis everything.** Cutouts, ribbons, ticket-stubs, chips, accent rectangles all sit at angles. Pure orthogonal layout is reserved for centered display moments.
7. **All-caps fairground-poster display.** The brand's typographic register is condensed-all-caps; mixed-case display would collapse the brand into a different register.
8. **Single primary action, site-wide.** The shop is the one destination. The medallion + the X-marquee CTA + the persistent bottom bar all point there.
9. **Native Portuguese, English as gloss.** The brand reads Portuguese first.

## Accessibility & Inclusion

- All interactive elements keyboard-navigable. Focus states visible — 2px `chapito-tejo` outline-offset 4px, never `outline: none`.
- All highlighter-rectangle and ticket-stub elements meet AA contrast at body sizes. The single sub-AA token (`chapito-azulejo` light text on dark is fine; light azulejo on `cravo` would not pass at body sizes — quarantined to micro-labels and decorative accents).
- `prefers-reduced-motion: reduce` honored: scroll-reveal transforms collapse to opacity-only fades; hover transforms removed; ribbon rotations remain (static rotation is not animation).
- No flashing, no autoplay video, no audio without user consent.
- No age-gate (sauces are not regulated alcohol).
- Bilingual copy: Portuguese-led with English gloss in smaller mono italic where it helps trade buyers; Portuguese-only when the brand voice demands it (anchor phrases, product names).
- Color is never the sole encoding of meaning — every color-block product section is also labelled in display all-caps + mono subtitle. The highlighter-rectangle palette rotation is decorative; the meaning lives in the words inside.
