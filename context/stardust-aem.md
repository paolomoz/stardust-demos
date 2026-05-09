# Stardust + AEM Edge Delivery (via Snowflake)

The "in-context" framing: Stardust is the design generator, **Snowflake** is the bridge that turns Stardust output into a live, authorable AEM Edge Delivery Services (EDS) site.

> Disambiguation: "Snowflake" here is **ai-ecoverse/snowflake** — an AEM EDS template/bridge. **Not** the cloud data warehouse.

Source (Snowflake): <https://github.com/ai-ecoverse/snowflake>
Whitepaper sample (proposed-C): <https://paolomoz.github.io/stardust-site/samples/stardust-whitepaper/proposed-C.html>

## The three-stage pipeline

```
Generate                Wire & Author              Publish
(Stardust)         →    (Snowflake)            →   (AEM Edge Delivery)
clean semantic HTML     EDS blocks + authoring     edge routing, drafts,
                        stack already wired        scheduling, AI review
```

Quoted from the whitepaper:

> "Stardust outputs clean, semantic markup. Snowflake maps it onto Edge Delivery's blocks without a hand-off step."

> "Reuse everything. Build nothing new" → "Every page can be its own page again — provided the brand keeps the rules."

## Snowflake: what it is

A repo template optimized for converting Stardust prototypes into Edge Delivery Services implementations. Skill location inside the repo: `.claude/skills/stardust-to-snowflake`.

Setup (from README):

1. Use the template to create a new GitHub repository.
2. Install the AEM Code Sync bot: <https://da.live/bot>
3. Install AEM CLI: `sudo npm install -g @adobe/aem-cli`
4. Place Stardust prototypes in `/stardust/prototypes`.
5. "Tell Claude you want to convert your stardust prototypes to edge delivery using the snowflake skill."
6. Confirm `/content` exists, then run `aem up`.

Repo structure: `blocks/`, `fragments/`, `styles/`, `workers/website/`, `scripts/`, `tools/`, `deps/`, `.claude/`. Mostly JS (~93%), with CSS and HTML.

## Personas and what each persona does

- **Designers** — work on live pages via Stardust prototypes.
- **Marketers** — edit in-context through Snowflake/EDS authoring (in-page editing, scheduling, drafts).
- **SEO / Legal** — automated review at publish ("AI review").
- **Global teams** — translations run in parallel.
- **Developers** — minimal involvement; Snowflake removes the traditional development handoff.

## Why this combo matters (the sales wedge)

> "A platform migration sold on Core Web Vitals never reaches the exec table. A brand-presence refresh does."

Bundle the brand identity refresh with the AEM EDS migration. One project, two outcomes: visual refresh + platform modernization. "Ship the demo before the deck."

## End state

> "One prompt · one website" — collapse the entire pipeline into a single SLICC prompt: "uplift this website."

See `slicc.md` for SLICC's role.
