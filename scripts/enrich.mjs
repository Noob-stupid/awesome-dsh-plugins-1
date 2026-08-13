// enrich.mjs — 从 data/plugins.json 读取 star/npm，统一补进 plugins/*.md，并追加「上一类/下一类」导航
// 用法：node scripts/enrich.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')
const DATA_PATH = join(ROOT, 'data', 'plugins.json')

// 分类顺序（与 README 目录一致）
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

const data = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
const byRepo = new Map()
for (const p of data.plugins) {
  byRepo.set(p.fullName.toLowerCase(), { stars: p.stars, npmName: p.npmName })
}

function fullNameFromUrl(url) {
  const m = url.match(/github\.com\/([^/]+\/[^/?#]+)/i)
  return m ? m[1].toLowerCase() : null
}

let enriched = 0
let notFound = 0
let installs = 0

for (let i = 0; i < CATEGORIES.length; i++) {
  const [file, title] = CATEGORIES[i]
  const path = join(PLUGINS_DIR, file)
  let content = readFileSync(path, 'utf8')

  // 去掉旧导航块（幂等）
  content = content.replace(/<!-- nav:start -->[\s\S]*?<!-- nav:end -->\n?$/, '')

  // 逐行处理插件条目
  const lines = content.split('\n')
  const out = lines.map((line) => {
    const m = line.match(/^(-\s*\[[^\]]+\]\([^)]+\)\s*—\s*)(.*)$/)
    if (!m) return line
    const linkPart = m[1]
    const rest = m[2]
    const urlMatch = linkPart.match(/\(([^)]+)\)/)
    if (!urlMatch) return line
    const fullName = fullNameFromUrl(urlMatch[1])
    if (!fullName || !byRepo.has(fullName)) {
      notFound++
      return line
    }
    const { stars, npmName } = byRepo.get(fullName)
    // 去掉已有的 ⭐ 数字，避免重复
    let clean = rest.replace(/\s*⭐\s*\d+/g, '').replace(/\s*·\s*`dsh plugin add [^`]+`/g, '').trimEnd()
    let tail = ''
    if (typeof stars === 'number' && stars > 0) {
      tail += ` ⭐${stars}`
    }
    if (npmName) {
      tail += ` · \`dsh plugin add ${npmName}\``
      installs++
    }
    enriched++
    return `${linkPart}${clean}${tail}`
  })

  // 上一类 / 下一类
  const prev = CATEGORIES[(i - 1 + CATEGORIES.length) % CATEGORIES.length]
  const next = CATEGORIES[(i + 1) % CATEGORIES.length]
  const nav = [
    '',
    '<!-- nav:start -->',
    '---',
    `← [上一类: ${prev[1]}](${prev[0]}) · [返回目录](../README.md) · [下一类: ${next[1]}](${next[0]}) →`,
    '<!-- nav:end -->',
  ].join('\n')

  writeFileSync(path, out.join('\n') + nav + '\n')
  console.log(`${file}: ${title}`)
}

console.log(`\n完成：enriched=${enriched}, install 命令=${installs}, 未在数据中找到=${notFound}`)
