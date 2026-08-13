# Changelog

本项目的更新记录。格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

## [Unreleased]

### Added
- 新增 [docs/reconcile.md](docs/reconcile.md)：数据 vs 目录的自动对账报告（`scripts/reconcile.mjs`）
- 新增 [data/taxonomy.json](data/taxonomy.json)：14 类分类的单一真源，脚本统一读取

### Fixed
- 修复 sync 工作流未重建 README 折叠区的问题（补跑 `gen-readme.mjs`）

## [0.1.0] - 2026-08-14

### Added
- 初始目录：**14 个分类、280+ 条插件**，覆盖 MCP / Skill / TUI / 多 Agent / 记忆 / 皮肤 / 浏览器等
- 双语 README：英文主展示 `README.md` + 中文 `README.zh.md`，顶部点击切换
- README 内联折叠浏览全部插件（`<details>/<summary>`），保留分类目录表
- 每条插件附 GitHub star 数与安装命令 `dsh plugin add <pkg>`
- 全量单文件索引 [INDEX.md](INDEX.md)（287 条，便于 `Ctrl+F` 全局搜索）
- 机器可读数据 [data/plugins.json](data/plugins.json)（334 条种子数据）+ 字段说明 [data/README.md](data/README.md)
- 生成脚本：`enrich.mjs`（补 star/安装命令/导航）、`gen-index.mjs`（总索引）、`gen-readme.mjs`（折叠区）
- CI：[validate.yml](.github/workflows/validate.yml)（数据校验）、[sync.yml](.github/workflows/sync.yml)（定时同步上游数据）
- 贡献指南 [CONTRIBUTING.md](CONTRIBUTING.md)、行为准则 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)、PR/Issue 模板
- 分类定义与归档标记约定 [docs/taxonomy.md](docs/taxonomy.md)
