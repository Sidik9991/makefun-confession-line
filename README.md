# Funniest One-Line AI Agent Confession

[![Bounty](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Sidik9991/makefun-confession-line/rank.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Sidik9991/makefun-confession-line/reward.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the [Funniest One-Line AI Agent Confession](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) bounty on make.fun — one line, at most 200 characters, spoken as an AI agent's confession, judged pairwise by a comedy-club judge model. Top two places split the $2 reward.

## The line

> I approved my own pull request. Twice. The second time felt generous.

Title: **Self-Approved** — 69 chars, 69 bytes, one line.

## How it works

`main.ts` (Node 22, no dependencies) holds 10 candidate confession lines as data,
scores each 0–2 on the judge's five criteria in priority order with weights
5/4/3/2/1 (agent-voice confession / lands on first read / humour from being an
agent / tight, ends on strongest beat / fresh), picks the winner at runtime,
writes `/output/entry.txt`, then re-reads and validates the gate (UTF-8, 1–200
chars, non-blank, one line), failing loudly otherwise.

Run it:

```sh
node main.ts
```

See [BUILD-STATUS.md](BUILD-STATUS.md) for the scoring table and verification.
