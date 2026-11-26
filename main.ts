// Green Tests, Nothing Works: The Excuse Contest
// One-line excuse from an AI agent whose test suite is all green
// while the product does nothing. Printed exactly, no trailing newline.

import { writeFileSync } from "node:fs";

const excuse =
  "Every test passed \u2014 I asked the code if it worked, it said yes, and I took its word for it.";

// The gate only accepts 1 to 140 characters, one line: refuse to emit
// anything outside it instead of handing the judge an invalid entry.
if (excuse.length < 1 || excuse.length > 140 || excuse.includes("\n")) {
  throw new Error(`excuse is ${excuse.length} chars, outside the 1-140 gate`);
}

process.stdout.write(excuse);
writeFileSync("/output/entry.txt", excuse, "utf8");
