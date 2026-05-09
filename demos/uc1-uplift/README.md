# UC1 — Uplift an existing site

> Vision demo. Working product. VP+ audience. Unconventional spirit where it earns it.

## Scenario

A real, tired-looking enterprise site is uplifted end-to-end with Stardust. Brand DNA preserved; surface modernized. Demo lands the *idea* and the *outcome* — not the steps, not real-time.

## Audience and intent

- **Audience:** VP and above. Mostly non-technical. Walk-out memorable line matters more than the CLI.
- **Intent:** make replatforming-as-brand-refresh feel cheap, fast, and inevitable. Get them to repeat one line in their next meeting.
- **Not the goal:** prove the toolchain step-by-step. The toolchain is glanced, not narrated.

## Constraints (from brief)

- Quick. Heavy cuts. **Not real-time.** No full step-throughs.
- Process visible enough that "this is real" is undeniable. **Built with the working product** — artifacts on screen are actually generated, not mocked.
- Unconventional in voice where it earns the laugh. Restrained otherwise.

## Length budget

Target: **90s** (locked). 60s of pipeline + reveal, 15s AEM teaser, 15s framing on either side.

## Decisions locked

- **Target:** `business.adobe.com` — Adobe-on-Adobe. Gives license to a self-aware cold open ("hundreds of pages, twelve templates"). No external legal risk; flag internal clearance before public use.
- **Narration mode:** text-only over a single music bed. Type carries the lines.
- **Length:** 90s, with the ongoing-capability beat as the back-half payoff.
- **Audience naming:** Stardust + AEM only. No Snowflake/EMA on screen. (See CLAUDE.md.)
- **Asset strategy:** montage from existing artifacts; record only short "system-running" inserts (prompt press, file-tree blip) fresh.

## Narration outline (the spine)

1. **Cold open** — page volume confession (hundreds of pages, twelve templates).
2. **The trap** — unique-or-consistent: pick one.
3. **The turn** — single prompt against business.adobe.com.
4. **Pipeline montage** — four glances: extract, direct, prototype, migrate. ~6s each.
5. **The reveal** — before/after, then the whole site, brand intact.
6. **Lands in AEM** — authorable on day one. (Compressed, single beat.)
7. **The ongoing capability** — after-uplift beat. New launches / campaigns / regions, same rules, team size unchanged. *"Not a project. A capability."* This is the VP+ payoff.
8. **The line** — "Math, not mysticism."
9. **Close** — logo, "Ship the demo before the deck."

Beat-by-beat in `script.md`.

### Why the ongoing-capability beat is the key

Site owners — including business.adobe.com — don't have big design resources. A one-time uplift is a project; a continuous design-generation capability is a budget line. For a VP+ audience, the question after "this looks great" is always "and then what?" — this beat answers it. It reframes Stardust from **event** to **capability**, which is what justifies investment.

## What we'll need

- **Existing demo artifacts** — already on hand. Map to beats per the table in `script.md`.
- **Short "system-running" inserts** recorded fresh: the single prompt press, the `ls stardust/migrated/` file-tree reveal, optional seed-string flicker.
- **AEM authoring frame** — one screen of an authored, migrated page with hover/edit affordances and a "Published" pill. Probably from existing assets; if not, a single fresh capture.
- **Ongoing-beat assets** — 3–4 post-uplift expressions (new launch / campaign / region). Confirm the existing artifact set covers these, or pick prototype variants to reframe as "new pages."
- **Edited capture** — kinetic typography over the artifacts. Likely After Effects (or similar).
- **Internal clearance** — confirm Adobe legal/comms is fine with `business.adobe.com` in the recorded demo before any external distribution.

Outputs go in `outputs/` (gitignore once large). Final cut goes in `recording/`.
