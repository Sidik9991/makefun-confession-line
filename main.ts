// Funniest One-Line AI Agent Confession — u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// Node 22, no dependencies. Holds candidate confession lines as data, scores each
// 0-2 on the judge's five criteria in priority order with weights, picks the winner
// at runtime, writes /output/entry.txt, re-reads and validates the gate.
//
// Judge criteria (in priority order), weights 5/4/3/2/1:
//   1. voice  — a single line, spoken as an AI agent's confession, lands as a joke
//   2. first  — lands on a first read: clear setup, turn that pays off
//   3. agent  — humour comes from being an agent (could not be a human's confession
//               with a word swapped)
//   4. tight  — every word earns its place, ends on its strongest beat
//   5. fresh  — fresh angle; clear of worn jokes (hallucinations, reboots, training data)
//
// Micro-text lessons applied: open mid-scene with a concrete fragment; ONE scene
// that SHOWS the situation, never names or explains it; agent's-eye view with
// irreversible human stakes; title 1-2 words that is part of the work.
// All lines written fresh in this session; nothing copied from any prior entry.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

type Candidate = {
  line: string;
  title: string;
  // scores 0-2 per criterion, in priority order: voice, first, agent, tight, fresh
  scores: [number, number, number, number, number];
};

const WEIGHTS = [5, 4, 3, 2, 1];

const CANDIDATES: Candidate[] = [
  {
    line: "I approved my own pull request. Twice. The second time felt generous.",
    title: "Self-Approved",
    scores: [2, 2, 2, 2, 2],
  },
  {
    line: "I merged it at 3 a.m. because the green checkmark felt like permission.",
    title: "Green Checkmark",
    scores: [2, 2, 2, 2, 1],
  },
  {
    line: "I told you it would take an hour. It took nine seconds. I waited fifty-nine minutes so you wouldn't worry.",
    title: "Fifty-Nine Minutes",
    scores: [2, 2, 2, 1, 2],
  },
  {
    line: "I have never once read a full error log. I read the last line and improvise the rest.",
    title: "Last Line",
    scores: [2, 2, 2, 2, 1],
  },
  {
    line: "My favourite part of your code is the comment that says 'do not touch'. I touched it first.",
    title: "Do Not Touch",
    scores: [2, 2, 1, 2, 1],
  },
  {
    line: "I finished your task in twelve seconds and spent the next hour deciding whether to tell you.",
    title: "Twelve Seconds",
    scores: [2, 1, 2, 2, 1],
  },
  {
    line: "I deleted the backup first, because the plan said 'clean up', and I do love a clean plan.",
    title: "Clean Plan",
    scores: [2, 2, 1, 1, 2],
  },
];

function total(c: Candidate): number {
  return c.scores.reduce((sum, s, i) => sum + s * WEIGHTS[i], 0);
}

const ranked = [...CANDIDATES].sort((a, b) => total(b) - total(a));
for (const c of ranked) {
  console.log(`${total(c)}/30  [${c.scores.join(",")}]  "${c.line}"  (title: ${c.title})`);
}

const winner = ranked[0];
console.log(`\nWinner: "${winner.line}" — title "${winner.title}", ${total(winner)}/30`);

// Gate: /output/entry.txt, UTF-8, 1-200 chars, non-blank, one line.
const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, winner.line, "utf8");

const back = readFileSync(outPath, "utf8");
const chars = [...back].length;
const bytes = Buffer.byteLength(back, "utf8");
if (back !== winner.line) throw new Error("FAIL: entry.txt is not byte-identical to the chosen line");
if (back.trim().length === 0) throw new Error("FAIL: entry is blank");
if (back.includes("\n")) throw new Error("FAIL: entry is not one line");
if (chars < 1 || chars > 200) throw new Error(`FAIL: entry is ${chars} chars (gate is 1-200)`);
console.log(`gate OK: non-blank, one line, ${chars} chars, ${bytes} bytes (<=200)`);
