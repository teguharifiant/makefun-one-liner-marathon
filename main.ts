import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY =
  'I told my smart fridge I felt empty inside. It said, "Same. That\'s why I keep the light on."';

function checkLength(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${length}`);
  }
}

function checkWhitespace(text: string): void {
  if (text.trim() === "") {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function checkLineShape(text: string): void {
  if (text.includes("\r")) {
    throw new Error("entry must not contain carriage returns");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (/[\x00-\x1F\x7F]/.test(text)) {
    throw new Error("entry must not contain control characters");
  }
}

function checkAscii(text: string): void {
  if (/[^\x00-\x7F]/.test(text)) {
    throw new Error("entry must be ASCII only");
  }
}

/**
 * Validate a one-line comedy entry against the bounty gate:
 * 1-280 characters (code points), single line, ASCII only,
 * no leading/trailing whitespace, not only whitespace, no CR,
 * no control characters. Throws on any violation.
 */
export function validateEntry(text: string): void {
  checkLength(text);
  checkWhitespace(text);
  checkLineShape(text);
  checkAscii(text);
}

export function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
