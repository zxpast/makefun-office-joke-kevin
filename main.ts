// The Funniest Office Joke, Judged Head to Head — entry program.
// Writes one joke about office life to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a self-own in standup. The narrator lies about having no
// blockers while everything — printer, Wi-Fi, will to live — is offline,
// and the punch lands in the last six words, when the manager's verdict
// ("thriving") turns the lie into a promotion of the misery. Quote as
// punchline, twist last, no explanation. No trailing newline: the gate
// counts every character, and the entry must stay 1-200 chars.
const LINE =
  "In standup I said 'no blockers' while the printer, the Wi-Fi, and my will to live were all offline — my manager marked me 'thriving'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
