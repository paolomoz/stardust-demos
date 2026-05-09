# SLICC (Sliccy)

> Browser-native AI agent. Runs entirely client-side. "Your browser sessions, its hands."

Site: <https://sliccy.com/>
Source: <https://github.com/ai-ecoverse/slicc>

## What it actually is

A browser/Electron/CLI agent that operates **inside** a real browser session — leveraging the user's logged-in state in Gmail, Slack, GitHub, Notion, Figma, etc. — combined with a WASM shell, file ops, and multi-agent orchestration.

Architecture: **"cone and scoops"** — the main agent (cone) orchestrates; isolated sub-agents (scoops) execute task-specific work in sandboxes with separate filesystems and conversation history.

## How to invoke

- CLI: `npx sliccy` or `npm install -g sliccy && slicc`
- Chrome extension: load unpacked from `dist/extension/`
- Electron: `npm run dev:electron -- /path/to/app`

Requires Node >= 22 and an LLM provider (Anthropic, AWS Bedrock, Adobe, etc.).

## Capabilities

- Shell (bash, git, grep, node, python) via WASM.
- Browser automation (form-fill, scrape, scripted tab control, screenshots).
- File ops; mount local or remote filesystems.
- UI generation on the fly.
- Skills authored as markdown — installed at `/workspace/skills`. Discovers compatible `.agents` / `.claude` skills read-only across the reachable VFS.

## Role for Stardust demos

SLICC does **not** run Claude Code itself — it does not host other CLI agents. But it ships a Claude-Code-side skill called **`slicc-handoff`** that makes Claude Code → SLICC the supported flow:

> "Use this skill when the user says things like `handoff to slicc`, `move this to slicc`, `move to the browser`, `test in the browser`."

Mechanism: builds `https://www.sliccy.ai/handoff?msg=<urlencoded>`; two parallel delivery paths (localhost POST to `:5710/api/handoff`, and `--open` triggering the SLICC extension via `x-slicc` response header). Verb prefixes:

- `handoff:<instruction>` — continue the task in SLICC.
- `upskill:<github-url>` — install a skill from a GitHub repo into SLICC.

### Demo implication

For a recorded demo, SLICC is the **front-of-house surface** — what the camera sees. The flow:

1. User in SLICC says "uplift this site" (or similar).
2. Claude Code (with Stardust skills) runs the heavy pipeline behind the scenes.
3. Claude Code uses `slicc-handoff` to push results back into SLICC's browser session.
4. SLICC navigates the prototype HTMLs, demos the migrated EDS site, etc.

This makes SLICC the natural recording target for video demos: it's a single browser window, no terminal-and-tabs juggling, and the handoff pattern is already a first-class feature.

> Caveat: SLICC's README does not mention recording or screencasts as a feature. Recording is something we do externally (system screen capture) over a SLICC session.
