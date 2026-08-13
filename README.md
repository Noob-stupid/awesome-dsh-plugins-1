# Awesome DeepSeek Harness Plugins

![plugins](https://img.shields.io/badge/plugins-280+-blue) ![categories](https://img.shields.io/badge/categories-14-blue) ![license](https://img.shields.io/badge/license-MIT-green) ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

**English** · [中文版](README.zh.md)

> A curated, community-maintained directory of plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) — browse in-repo, one click to jump to each plugin's repository.
>
> 中文说明见 [README.zh.md](README.zh.md)。

[Quick Start](#quick-start) · [Hot Plugins](#hot-plugins) · [Categories](#categories) · [Data](data/README.md) · [Contributing](CONTRIBUTING.md) · [Taxonomy](docs/taxonomy.md)

---

## What is this

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) is DeepSeek's open-source agent harness — a ready-to-run coding agent whose core is an "**everything is a plugin**" framework: models, tools, sandboxes, session storage, the UI, and even the agent loop itself are plugins.

This repository is a **community-maintained plugin index**. It does one thing: organizes DSH plugins scattered across GitHub into browsable categories. No website, no runtime — just a readable, clickable, contributable directory.

- Official install: `dsh plugin --profile <name> add <pkg>` (forwards to pnpm; supports npm / git / tarball)
- Official discovery: npm + the GitHub [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic (there is **no built-in marketplace**)

## Quick Start

Three ways to use this directory:

1. **Browse** — jump into any category below; each entry links straight to its GitHub repo.
2. **Search** — press `t` (or `Ctrl+F`) on the repo page and search keywords like `mcp`, `memory`, `TUI`, `multi-agent`.
3. **Consume programmatically** — read [`data/plugins.json`](data/plugins.json) (334 structured entries; field docs in [data/README.md](data/README.md)).

## Hot Plugins

Top community plugins by GitHub stars (snapshot 2026-08):

1. [modlens](https://github.com/liustack/modlens) — the first vision plugin for DSH; paste an image, get structured JSON evidence ⭐696
2. [dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) — Claude Code-style full-screen terminal TUI ⭐192
3. [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — vision toolkit for text-only models ⭐144
4. [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — a full sidebar workbench (files / terminal / git / subagents) ⭐123
5. [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) — 2005-style gag ad skins ⭐103
6. [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — terminal TUI ⭐73
7. [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — multi-agent team collaboration ⭐68
8. [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — community distro (TUI / desktop / web) ⭐62
9. [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — multi-agent workflow layer ⭐35
10. [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) — design preview & editing ⭐33

## Stats

| Metric | Value |
|---|---|
| Plugins listed | **280+** entries (250+ unique) |
| Categories | **14** top-level |
| Ecosystem reference | `dsh-plugin` topic ~505 repos · seed data 334 · compat radar 286+ |

## Categories

| # | Category | Description | File |
|---|---|---|---|
| 1 | 🛠️ [Tools](plugins/tools.md) | deterministic tools, git, test runners, safe delete | `plugins/tools.md` |
| 2 | 🧩 [Skills](plugins/skills.md) | engineering discipline, skill migration, book-to-skill | `plugins/skills.md` |
| 3 | 🔌 [MCP](plugins/mcp.md) | MCP server management, webfetch, vision MCP | `plugins/mcp.md` |
| 4 | 🎨 [UI / Skins / Themes](plugins/ui-themes.md) | skins, themes, generative UI, input enhancements | `plugins/ui-themes.md` |
| 5 | 🖥️ [Desktop / TUI / Mobile](plugins/desktop-tui-mobile.md) | desktop shells, terminal TUI, mobile, companions | `plugins/desktop-tui-mobile.md` |
| 6 | 🤖 [Agent Orchestration / Multi-Agent](plugins/agent-orchestration.md) | agent teams, plan/execute, A2A, cross-session messaging | `plugins/agent-orchestration.md` |
| 7 | 🧠 [Context / Memory](plugins/context-memory.md) | long-term memory, context compression/audit, session control | `plugins/context-memory.md` |
| 8 | 👁️ [Multimodal / Vision](plugins/multimodal.md) | image Q&A, OCR, screenshots, computer use | `plugins/multimodal.md` |
| 9 | 🔁 [Workflow / Automation](plugins/workflow-automation.md) | deep research, cron, condition wakeup, review loops | `plugins/workflow-automation.md` |
| 10 | 📡 [Notifications / Channels / Remote](plugins/notifications-channels.md) | Telegram/WeChat/Feishu bots, SSH, desktop notify | `plugins/notifications-channels.md` |
| 11 | 🌐 [Browser / Search](plugins/browser-search.md) | browser control, scraping, search providers | `plugins/browser-search.md` |
| 12 | 🏗️ [Infra / Plugin Mgmt / Dev Tools](plugins/infrastructure-dev.md) | plugin managers, health checks, sandboxes, telemetry | `plugins/infrastructure-dev.md` |
| 13 | 🎮 [Fun / Other](plugins/fun-other.md) | games, pets, stickers, learning, design | `plugins/fun-other.md` |
| 14 | 🏛️ [Official & Meta](plugins/official-meta.md) | core repo, awesome lists, compat radar, community hub | `plugins/official-meta.md` |

> Every entry in a category file is `[name](repo-link) — one-line description`; click to jump to the GitHub repo. See the full flat index in [INDEX.md](INDEX.md).

## Data

Machine-readable data lives in [`data/plugins.json`](data/plugins.json) (334 seed entries with name / repo / npm / star / license / category); field docs and consumption examples in [`data/README.md`](data/README.md). Category definitions in [`docs/taxonomy.md`](docs/taxonomy.md).

## Contributing

Contributions welcome — add your plugin, fix a category or a description. See [CONTRIBUTING.md](CONTRIBUTING.md).

Please add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repo so others can find it.

## Disclaimer

This is a community-maintained index. **Listing does not imply safety, quality, or compatibility endorsement.** Plugins are developed and maintained by their authors; installing a plugin means running third-party code on your machine — review the source and proceed at your own risk. This repository is not affiliated with DeepSeek.

## License

Code [MIT](LICENSE); content [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
