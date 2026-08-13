# 📡 通知 / 渠道 / 远程

> **对外通讯**：Telegram/微信/QQ/飞书机器人、桌面通知、webhook、SSH 远程、对话分享。返回 [目录](../README.md#分类目录)

## IM 机器人 / 渠道

- [telegram](https://github.com/LoserFox/telegram) — Telegram Bot API 桥接：长轮询、per-chat 会话、HTML 格式化
- [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) — Telegram 运行时适配器（per-chat 会话、allowlist 认证）
- [DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) — 通过 Telegram 远程对话并接收通知
- [dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) — 通过 iLink 网关在微信里与 DSH agent 聊天/监控/审批
- [dsh-lark](https://github.com/Roy-oss1/dsh-lark) — 飞书 IM bot 通道：聊天驱动 agent、审批回传卡片
- [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) — 双向飞书控制器
- [dsh-onlyne](https://github.com/dbydd/dsh-onlyne) — IM 网关：从 dsh 会话收发 QQ/微信/飞书/Telegram 消息

## 通知

- [dsh-notification](https://github.com/omdsh-dev/dsh-notification) — 回合完成桌面通知，按结果分控 + 关键词过滤
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) — Windows 通知（零依赖）
- [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) — Windows toast 通知（任务完成带声音）
- [dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) — 桌面通知提醒
- [dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) — 会话完成等四种状态通知，支持浏览器提示

## 远程 / 集成 / 分享

- [dsh-ssh](https://github.com/UynajGI/dsh-ssh) — SSH 远程执行（ProxyJump 链、SFTP 文件系统、PTY）
- [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) — 通用 webhook 接收器：POST /hook/:channel 唤醒 per-channel agent
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) — 从 Web GUI 一键在 VS Code 中打开工作区目录
- [dsh-share](https://github.com/hellodigua/dsh-share) — 一键分享你的对话
- [dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) — 分享任意段落的对话
- [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) — BitFun 与 DSH 的 ACP 交互对接
