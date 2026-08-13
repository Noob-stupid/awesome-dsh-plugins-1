// reconcile.mjs — 对账：data/plugins.json（种子数据） vs plugins/*.md（目录清单）
// 输出：① 数据里有但目录没收录的（候选待收录） ② 目录里有但数据里没有的（元项目/需补数据）
// 用法：node scripts/reconcile.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const data = JSON.parse(readFileSync(join(ROOT, 'data', 'plugins.json'), 'utf8'))

const dataByRepo = new Map()
for (const p of data.plugins) {
  dataByRepo.set(p.fullName.toLowerCase(), p)
}

const mdRepos = new Map() // fullName(lower) -> category file
for (const c of taxonomy.categories) {
  const content = readFileSync(join(PLUGINS_DIR, c.file), 'utf8')
  const re = /-\s*\[[^\]]+\]\((https:\/\/github\.com\/[^)]+)\)/g
  let m
  while ((m = re.exec(content)) !== null) {
    const full = m[1].replace(/^https:\/\/github\.com\//i, '').toLowerCase()
    if (!mdRepos.has(full)) mdRepos.set(full, c.zh)
  }
}

const onlyInData = [...dataByRepo.entries()]
  .filter(([full]) => !mdRepos.has(full))
  .map(([, p]) => p)
  .sort((a, b) => (b.stars || 0) - (a.stars || 0))

const onlyInMd = [...mdRepos.entries()]
  .filter(([full]) => !dataByRepo.has(full))
  .map(([full, cat]) => ({ fullName: full, category: cat }))

const header = `# 对账报告（自动生成）

> 由 \`node scripts/reconcile.mjs\` 生成。对比 \`data/plugins.json\`（种子数据）与 \`plugins/*.md\`（目录清单）。
>
> 数据共 ${data.plugins.length} 条 · 目录共 ${mdRepos.size} 条 · 两者交集 ${data.plugins.length - onlyInData.length} 条

## 候选待收录（数据里有、目录还没有）— ${onlyInData.length} 条

按 star 降序。可作为下一步补录清单。

| 仓库 | ⭐ | 上游分类 |
|---|---|---|
${onlyInData.map((p) => `| [${p.fullName}](${p.url}) | ${p.stars || 0} | ${p.category?.title || '-'} |`).join('\n')}

## 目录里有、数据里没有 — ${onlyInMd.length} 条

多为官方/元项目、dsh-external 私有仓库、或来自其他来源的补充条目，需人工确认是否保留。

${onlyInMd.map((e) => `- \`${e.fullName}\` — ${e.category}`).join('\n')}
`

writeFileSync(join(ROOT, 'docs', 'reconcile.md'), header)
console.log(`数据 ${data.plugins.length} 条 · 目录 ${mdRepos.size} 条`)
console.log(`候选待收录（数据有/目录无）：${onlyInData.length} 条`)
console.log(`目录有/数据无（需人工确认）：${onlyInMd.length} 条`)
console.log('报告已写入 docs/reconcile.md')
