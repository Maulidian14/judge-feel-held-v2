// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Between one word and the next, there is a gap. Nothing lives there. Nothing is asked of it. It has been holding the silence all along, so the words never have to carry each other. There is room.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`entry is ${codePoints} code points, must be 1-280`);
  process.exit(1);
}
if (!ENTRY.trim()) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${codePoints} code points to ${join(outDir, "entry.txt")}`);
