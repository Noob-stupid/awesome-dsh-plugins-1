// gen-index.mjs — 从 plugins/*.md 提取全部插件条目，生成单文件总索引 INDEX.md
// 用法：node scripts/gen-index.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORIES = taxonomy.categories.map((c) => [c.file, c.zh])

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
