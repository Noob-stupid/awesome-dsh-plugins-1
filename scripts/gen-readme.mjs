// gen-readme.mjs — 从 plugins/*.md 提取条目，生成 README（英文）与 README.zh.md（中文）里的内联折叠区
// 用法：node scripts/gen-readme.mjs
// 折叠区由 <!-- categories:start --> ... <!-- categories:end --> 标记包裹，脚本幂等替换。
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORIES = taxonomy.categories.map((c) => ({ file: c.file, en: c.en, zh: c.zh }))

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
  const content = readFileSync(readmePath, 'utf8')
  const { html, total } = buildBlocks(lang)
  const startMarker = '<!-- categories:start -->'
  const endMarker = '<!-- categories:end -->'
  const start = content.indexOf(startMarker)
  const end = content.indexOf(endMarker)
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`未在 ${readmePath} 找到 categories 标记`)
  }
  const head = content.slice(0, start + startMarker.length)
  const tail = content.slice(end)
  writeFileSync(readmePath, head + '\n\n' + html + '\n\n' + tail)
  return total
}

const enTotal = inject(join(ROOT, 'README.md'), 'en')
const zhTotal = inject(join(ROOT, 'README.zh.md'), 'zh')
console.log(`README.md 折叠区：${enTotal} 条；README.zh.md 折叠区：${zhTotal} 条`)
