// gen-readme.mjs — 从 plugins/*.md 提取条目，生成 README（英文）与 README.zh.md（中文）里的内联折叠区
// 用法：node scripts/gen-readme.mjs
// 折叠区由 <!-- categories:start --> ... <!-- categories:end --> 标记包裹，脚本幂等替换。
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const CATEGORIES = [
  { file: 'tools.md', en: '🛠️ Tools', zh: '🛠️ 工具类 Tools' },
  { file: 'skills.md', en: '🧩 Skills', zh: '🧩 技能类 Skills' },
  { file: 'mcp.md', en: '🔌 MCP', zh: '🔌 MCP 接入' },
  { file: 'ui-themes.md', en: '🎨 UI / Skins / Themes', zh: '🎨 Web UI / 皮肤 / 主题' },
  { file: 'desktop-tui-mobile.md', en: '🖥️ Desktop / TUI / Mobile', zh: '🖥️ 桌面端 / TUI / 移动端' },
  { file: 'agent-orchestration.md', en: '🤖 Agent Orchestration', zh: '🤖 Agent 编排 / 多 Agent' },
  { file: 'context-memory.md', en: '🧠 Context / Memory', zh: '🧠 上下文 / 记忆' },
  { file: 'multimodal.md', en: '👁️ Multimodal / Vision', zh: '👁️ 多模态 / 视觉' },
  { file: 'workflow-automation.md', en: '🔁 Workflow / Automation', zh: '🔁 工作流 / 自动化' },
  { file: 'notifications-channels.md', en: '📡 Notifications / Channels', zh: '📡 通知 / 渠道 / 远程' },
  { file: 'browser-search.md', en: '🌐 Browser / Search', zh: '🌐 浏览器 / 搜索' },
  { file: 'infrastructure-dev.md', en: '🏗️ Infra / Plugin Mgmt', zh: '🏗️ 基础设施 / 插件管理 / 开发工具' },
  { file: 'fun-other.md', en: '🎮 Fun / Other', zh: '🎮 娱乐 / 其他' },
  { file: 'official-meta.md', en: '🏛️ Official & Meta', zh: '🏛️ 官方核心与元项目' },
]

const ENTRY_RE = /^-\s*\[[^\]]+\]\(https:\/\/github\.com\/[^)]+\)\s*—\s*.*$/

function extractEntries(file) {
  const content = readFileSync(join(PLUGINS_DIR, file), 'utf8')
  return content.split('\n').filter((l) => ENTRY_RE.test(l))
}

function buildBlocks(lang) {
  let total = 0
  const blocks = CATEGORIES.map((c) => {
    const entries = extractEntries(c.file)
    total += entries.length
    const title = lang === 'zh' ? c.zh : c.en
    return `<details>\n<summary>${title} · ${entries.length}</summary>\n\n${entries.join('\n')}\n\n</details>`
  })
  return { html: blocks.join('\n\n'), total }
}

function inject(readmePath, lang) {
  let content = readFileSync(readmePath, 'utf8')
  const { html, total } = buildBlocks(lang)
  const replacement = `<!-- categories:start -->\n\n${html}\n\n<!-- categories:end -->`
  const next = content.replace(/<!-- categories:start -->[\s\S]*?<!-- categories:end -->/, replacement)
  if (next === content) {
    throw new Error(`未在 ${readmePath} 找到 categories 标记`)
  }
  writeFileSync(readmePath, next)
  return total
}

const enTotal = inject(join(ROOT, 'README.md'), 'en')
const zhTotal = inject(join(ROOT, 'README.zh.md'), 'zh')
console.log(`README.md 折叠区：${enTotal} 条；README.zh.md 折叠区：${zhTotal} 条`)
