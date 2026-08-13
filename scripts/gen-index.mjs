// gen-index.mjs — 从 plugins/*.md 提取全部插件条目，生成单文件总索引 INDEX.md
// 用法：node scripts/gen-index.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const CATEGORIES = [
  ['tools.md', '🛠️ 工具类 Tools'],
  ['skills.md', '🧩 技能类 Skills'],
  ['mcp.md', '🔌 MCP 接入'],
  ['ui-themes.md', '🎨 Web UI / 皮肤 / 主题'],
  ['desktop-tui-mobile.md', '🖥️ 桌面端 / TUI / 移动端'],
  ['agent-orchestration.md', '🤖 Agent 编排 / 多 Agent'],
  ['context-memory.md', '🧠 上下文 / 记忆'],
  ['multimodal.md', '👁️ 多模态 / 视觉'],
  ['workflow-automation.md', '🔁 工作流 / 自动化'],
  ['notifications-channels.md', '📡 通知 / 渠道 / 远程'],
  ['browser-search.md', '🌐 浏览器 / 搜索'],
  ['infrastructure-dev.md', '🏗️ 基础设施 / 插件管理 / 开发工具'],
  ['fun-other.md', '🎮 娱乐 / 其他'],
  ['official-meta.md', '🏛️ 官方核心与元项目'],
]

const ENTRY_RE = /^-\s*\[[^\]]+\]\(https:\/\/github\.com\/[^)]+\)\s*—\s*.*$/

let total = 0
const sections = []

for (const [file, title] of CATEGORIES) {
  const content = readFileSync(join(PLUGINS_DIR, file), 'utf8')
  const entries = content
    .split('\n')
    .filter((l) => ENTRY_RE.test(l))
  total += entries.length
  sections.push(`## ${title}\n\n${entries.join('\n')}\n\n[↩ 回到 ${title} 分类页](${file})\n`)
}

const header = `# 插件总索引

> 全部插件单文件扁平清单（按分类分组），方便在仓库里 \`Ctrl+F\` 全局搜索。共 **${total}** 条。
>
> 返回：[README](README.md) · [中文](README.zh.md)

`

writeFileSync(join(ROOT, 'INDEX.md'), header + sections.join('\n'))
console.log(`INDEX.md 已生成，共 ${total} 条`)
