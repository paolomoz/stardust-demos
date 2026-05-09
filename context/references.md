# References

## Stardust (standalone)

- Plugin source: <https://github.com/adobe/skills/tree/main/plugins/stardust>
- Site: <https://paolomoz.github.io/stardust-site/>
- Docs: <https://paolomoz.github.io/stardust-site/docs/>
- Getting started: <https://paolomoz.github.io/stardust-site/docs/getting-started/>
- Commands reference: <https://paolomoz.github.io/stardust-site/docs/commands/>
- Dependency plugin (`impeccable`): <https://github.com/pbakaus/impeccable> *(via `claude plugin marketplace add pbakaus/impeccable`)*

## Stardust + AEM EDS

- Whitepaper proposed-A: <https://paolomoz.github.io/stardust-site/samples/stardust-whitepaper/proposed-A.html>
- Whitepaper proposed-B: <https://paolomoz.github.io/stardust-site/samples/stardust-whitepaper/proposed-B.html>
- Whitepaper proposed-C: <https://paolomoz.github.io/stardust-site/samples/stardust-whitepaper/proposed-C.html>
- Snowflake (the AEM bridge, not the data warehouse): <https://github.com/ai-ecoverse/snowflake>
- AEM Code Sync bot: <https://da.live/bot>
- AEM CLI: `npm i -g @adobe/aem-cli`

## SLICC

- Site: <https://sliccy.com/>
- Source: <https://github.com/ai-ecoverse/slicc>
- Handoff URL form: `https://www.sliccy.ai/handoff?msg=<urlencoded>`
- Local handoff endpoint: `http://localhost:5710/api/handoff` (override via `SLICC_PORT`)

## Repo conventions to remember

- Stardust artifacts live under `stardust/` in whichever project ran it: `current/`, `direction.md`, `prototypes/`, `migrated/`, `state.json`.
- Snowflake expects Stardust prototypes at `/stardust/prototypes` and converts them via the `stardust-to-snowflake` skill at `.claude/skills/stardust-to-snowflake`.
