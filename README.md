# Awesome DeepSeek Harness Plugins

> DeepSeek Harness（`dsh`）开源插件精选目录 —— 一个「**直接在仓库里看、点链接就能跳转**」的插件索引，收录可安装的社区插件，按功能分类组织。
>
> *A curated directory of community plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — browse in-repo, one click to jump.*

[English abstract](#english) · [分类目录](#分类目录) · [贡献](CONTRIBUTING.md) · [分类定义](docs/taxonomy.md)

---

## 这是什么

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 是 DeepSeek 开源的 agent harness——既是可直接运行的 Coding Agent，底层又是一套「**一切皆插件**」的框架：模型、工具、沙箱、会话存储、UI、乃至 Agent Loop 本身都是插件。

本仓库是一个**社区维护的插件索引**，只做一件事：**把散落在 GitHub 上的 DSH 插件按分类整理好，让你直接在仓库里浏览、点击跳转到对应仓库**。不做站点、不做运行时，纯粹是一份可读、可跳转、可贡献的目录。

- 官方安装：`dsh plugin --profile <name> add <pkg>`（转发 pnpm，支持 npm / git / tarball）
- 官方发现渠道：npm + GitHub [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic（**无官方内置市场**）

## 统计

| 指标 | 数值 |
|---|---|
| 收录插件条目 | **280+** 条（去重后 250+ 个插件） |
| 分类 | **14** 个一级分类 |
| 生态规模参考 | topic `dsh-plugin` 约 505 仓库 · 本仓库种子数据 334 · 兼容雷达追踪 286+ |

## 分类目录

| # | 分类 | 说明 | 文件 |
|---|---|---|---|
| 1 | 🛠️ [工具类 Tools](plugins/tools.md) | 确定性工具集、git、测试、安全删除等 | `plugins/tools.md` |
| 2 | 🧩 [技能类 Skills](plugins/skills.md) | 工程纪律、技能迁移、书转技能等 | `plugins/skills.md` |
| 3 | 🔌 [MCP 接入](plugins/mcp.md) | MCP 服务器管理、webfetch、视觉 MCP 等 | `plugins/mcp.md` |
| 4 | 🎨 [Web UI / 皮肤 / 主题](plugins/ui-themes.md) | 皮肤、主题、生成式 UI、输入增强等 | `plugins/ui-themes.md` |
| 5 | 🖥️ [桌面端 / TUI / 移动端](plugins/desktop-tui-mobile.md) | 桌面壳、终端 TUI、移动端、桌宠等 | `plugins/desktop-tui-mobile.md` |
| 6 | 🤖 [Agent 编排 / 多 Agent](plugins/agent-orchestration.md) | 多 Agent 团队、工作流、跨会话消息等 | `plugins/agent-orchestration.md` |
| 7 | 🧠 [上下文 / 记忆](plugins/context-memory.md) | 长期记忆、上下文压缩/审计、蒸馏等 | `plugins/context-memory.md` |
| 8 | 👁️ [多模态 / 视觉](plugins/multimodal.md) | 视觉工具箱、OCR、截图对比、电脑控制等 | `plugins/multimodal.md` |
| 9 | 🔁 [工作流 / 自动化](plugins/workflow-automation.md) | 深度研究、定时任务、条件唤醒等 | `plugins/workflow-automation.md` |
| 10 | 📡 [通知 / 渠道 / 远程](plugins/notifications-channels.md) | Telegram/微信/飞书机器人、SSH 等 | `plugins/notifications-channels.md` |
| 11 | 🌐 [浏览器 / 搜索](plugins/browser-search.md) | 浏览器操控、网页抓取、搜索提供方等 | `plugins/browser-search.md` |
| 12 | 🏗️ [基础设施 / 插件管理 / 开发工具](plugins/infrastructure-dev.md) | 插件管理器、健康检查、沙箱、遥测等 | `plugins/infrastructure-dev.md` |
| 13 | 🎮 [娱乐 / 其他](plugins/fun-other.md) | 小游戏、桌宠、股票、教学、设计等 | `plugins/fun-other.md` |
| 14 | 🏛️ [官方核心与元项目](plugins/official-meta.md) | 核心仓库、awesome 列表、兼容雷达、hub | `plugins/official-meta.md` |

> 每个分类文件里，条目统一为 `[插件名](仓库链接) — 一句话描述`，点击即跳转到 GitHub 仓库。

## 数据

机器可读的插件数据在 [`data/plugins.json`](data/plugins.json)（334 条种子数据，含 name / repo / npm / star / license / 分类）。分类定义见 [`docs/taxonomy.md`](docs/taxonomy.md)。

## 贡献

欢迎提交你的插件，或修正分类/描述。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

请为你的插件仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic，方便大家发现。

## 免责声明

本仓库是社区维护的索引，**收录不代表安全性、质量或兼容性背书**。插件由各自作者开发维护；安装插件即在你的机器上运行第三方代码，请自行审阅源码、风险自担。本仓库与 DeepSeek 无隶属关系。

## License

代码 [MIT](LICENSE)；内容 [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。

---

<a name="english"></a>
## English

A community-maintained directory of open-source plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`). Browse by category in the table above — each entry links directly to its GitHub repository. No website, no runtime: just a readable, clickable, contributable index. 100+ plugins across 14 categories.
