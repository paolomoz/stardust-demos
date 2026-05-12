<!-- stardust:provenance
  writtenBy: stardust:seed + stardust:brief (hand-authored, proof-of-concept; commands not yet implemented)
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
  scope: descriptive — captures the brand state as it currently is. No source site exists; greenfield-seeded equivalent of an extract artifact.
-->
---

# Product

## Register

brand

## Users

Three concentric audiences:

- **WNC drinkers and bartenders (primary).** Locals who can drive to Hot Springs for a Saturday tasting and reorder by text. They know the high-lonesome sound; they know Madison County; they know what a single-maker amaro is.
- **Out-of-state mountain-music enthusiasts (secondary).** Bluegrass-festival regulars, Smithsonian Folkways subscribers, Bristol Rhythm & Roots audience. Order online via the .shop subdomain; arrive at the site through music-press editorial, podcast mentions, music-festival vendor tents.
- **Trade buyers in the Southeast (tertiary).** Bartenders in Asheville, Greenville, Chattanooga, Knoxville, Charlottesville who carry regional single-maker amaro. Reach Sadie directly through the contact page.

The brand site exists to tell the story, surface the maker, and route to either the .shop subdomain or to in-person stockists. Transaction lives elsewhere by design.

## Product Purpose

A small-batch botanical-spirits house in Hot Springs, Madison County, North Carolina — a barn ten miles past anywhere, run by Sadie Greene. Three products: a cobalt-tinged aperitif (*Blue Ridge Blue*), a sharp high-elevation amaro (*The Gap*), a dark wild-persimmon cordial (*Deep Cove*). All hand-foraged from the Blue Ridge, hand-distilled in a copper still Sadie built in 2019. All labels hand-painted by Sadie herself — and painted in a saturated Mediterranean-pop palette unusual for the WNC mountain-spirits register.

The brand sound is mountain-music single-voice — the "high lonesome sound" Bill Monroe coined, applied to a single maker working alone in a barn. The brand surface is Italian-summer color — a permanent sense of saturation Sadie brought back from a 1983 summer touring northern Italy with a bluegrass band.

## Brand Personality

**Central tension (load-bearing):** auditory solitude × visual joy. The recordings of Bill Monroe pressed onto vinyl jackets designed by Massimo Vignelli. Mountain song, Italian-pop wrap.

**Locked at full volume:**

- The MOUNTAIN half — single voice, gap-and-bald foraging, slow declaratives, reverent.
- The ITALIAN half — saturated palette (vermilion, mustard, coral, deep teal, cyan, cream, ink), hand-painted labels that look like 1960s Italian travel posters, color confidence.

Strip either half:
- Pure mountain → Foxfire-Book reissue.
- Pure Italian → trattoria / vacation rental.

Both at full volume = the brand.

**Voice carried through the site:**

- First-person singular (Sadie). Never "we."
- Slow plainspoken declaratives. Periods.
- Specifics over modifiers ("ten miles past anywhere", "elevation 4,140 ft", "1983 in Verona").
- Reverent, not irreverent. *Joy*, not *fun*. The saturated palette reads as joyful, not playful.
- Italian DNA stays implicit (palette) never explicit (copy).

`_provenance: synthesized` — basis: BRAND.md voice & copy rules, central-tension section.

## Anti-references

Render-refusal conditions. Propagated to DESIGN.md Do's-and-Don'ts and to prototype shape-brief audits.

**From BRAND.md anti-patterns:**

- **Kinfolk / Cereal-Magazine luxe-minimal-craft** — beige/sage/charcoal/serif-italic. The brand explicitly diverges; the saturated palette is the divergence vehicle.
- **Brooklyn industrial-craft** — Edison bulb / subway tile / Helvetica-on-blackboard. Wrong era.
- **Generic country / farm signage** — *"y'all"* doormat. The brand is Appalachian but not folksy.
- **Wes Anderson costume-symmetric pastel** — risk because the saturated palette could read that way if executed too tidily. The Mountain composition's atmospheric grounds + cinematic landscapes anchor against it.
- **Etsy folk-craft** — hand-drawn-fern-in-dusty-rose. Not cute.
- **Modern craft-beer label vernacular** — illustration-heavy can wraps.
- **Italian-American costume** — *trattoria* / *piazza* / checkered tablecloths / *Roma* in copy. The Italian DNA is in the palette only.
- **Foxfire-Book historic-reissue look** — sage/oxblood/cream + classical-serif-only. The brand explicitly refuses this; the saturated palette is what makes it not a reissue.

**Universal hardening:**

- **Generic-2026-SaaS silhouette** — centered hero + dual-CTA pair + balanced section padding + serial-marker footer.
- **3-col card grid of identical cards** (impeccable absolute ban) — the bottles are presented as three full-bleed cinematic sections, not as cards.
- **Pure #000000** — forbidden. Darkest color is barn-ink `#2d1a14`.
- **Editorial-register vocabulary in chrome** — *atelier*, *the studio*, *the journal*, *dispatches*. Forbidden.
- **Hero text on photographic background without scrim** — ≥ 4.5:1 contrast enforced.
- **Generic palette role names** — `Primary` / `Secondary` / `Alarm` / `Brand` forbidden. The 7-token palette uses brand-native names (`high-lonesome-blue` / `cardinal-flash` / `sourwood-honey` / `mountain-laurel` / `butterfly-pea` / `fiddle-bone` / `barn-ink`).

## Design Principles

Five principles, each mapping to a specific axis movement resolved at direction time.

1. **The landscape is the brand.** *(distinctiveness)* Every section ground references the Blue Ridge atmosphere — high-lonesome-blue, sunset-pink overlays, mist gradients. The brand's claim on its place is the visual armature; product photography sits inside that armature, never replaces it.

2. **Saturation deployed widely, not held.** *(palette deployment intensity = drenched)* The 7-token palette renders across ≥ 4 distinct section grounds on the home page. Asymmetric cycling, not strict A/B alternation. Per the documented saturation preference: render saturated first.

3. **Italic display is singing.** *(typography character)* All display tier uses italic-classical-serif at scale — Playfair Display italic, Cormorant Infant italic. The italic forms read as *singing*, which connects to the brand's central voice register. Roman display is forbidden — it reads as too rigid for a music-coded brand.

4. **Slow declaratives over modifiers.** *(voice)* Body copy is plainspoken, first-person Sadie, periods over commas, numbers and proper nouns over adjectives. The brand's saturated visual surface is balanced by a quiet voice.

5. **Italian DNA implicit only.** *(content / register guardrail)* The Italian summer is the source of the palette. It is never named in chrome (header, nav, CTA, page titles). It appears in body copy only in the maker's origin paragraph. Forbidden phrases: *atelier*, *trattoria*, *piazza*, *dolce*, any Italian-language word. The cultural register lives in *color*, not *vocabulary*.

## Accessibility & Inclusion

- **WCAG 2.1 AA contrast minimum** on all text. Fiddle-bone on high-lonesome-blue resolves ~10.2:1 AAA. Cardinal-flash on fiddle-bone ~5.4:1 AA. Barn-ink on fiddle-bone ~14.8:1 AAA. Cyan/butterfly-pea on high-lonesome-blue ~3.2:1 — restricted to non-body uses (single-glance accents, label illustrations).
- **Semantic heading hierarchy** — single `h1` per page; landmark roles present and unique; no `h6`-as-nav.
- **Italic-display accessibility** — italic-serif at display size (≥ 56px) tested for readability across screen-reader pacing.
- **Hand-painted assets** carry full descriptive `alt`.
- **Age-verification gate** (21+) as focusable modal, keyboard-navigable, irreversible no-exit.
- **`prefers-reduced-motion: reduce` honored** — cinematic scroll-reveals jump to resolved state.
- **Saturated grounds + light text** combos all pass AA on body sizes; saturated grounds + dark text combos checked per section.
- **No forms requiring contact-info entry** — direct contact via `tel:` / `sms:` / `mailto:` only.

`_provenance: synthesized` — basis: BRAND.md palette + voice, contrast pairs verified at WCAG AA / AAA.
