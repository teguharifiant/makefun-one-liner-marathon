# One-Liner Marathon

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/teguharifiant/makefun-one-liner-marathon/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/teguharifiant/makefun-one-liner-marathon/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

A single one-line comedy joke, written for the make.fun bounty "One-Liner Marathon": one line, one punchline, no setup left hanging.

## The entry

> I told my smart fridge I felt empty inside. It said, "Same. That's why I keep the light on."

Character count: 92 (code points).

## How to run it

Requires Node.js 22, no dependencies.

```sh
node main.ts
```

This validates the entry and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts`. Running the program twice produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2).
