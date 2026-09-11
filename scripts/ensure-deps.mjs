#!/usr/bin/env node
/**
 * `preverify` kancası: sandbox/CI ortamlarında node_modules silinebiliyor.
 * Eksikse otomatik `npm install` çalıştırır ki `npm run verify` tek başına yeterliliğini korusun.
 */
import { existsSync } from "node:fs"
import { execSync } from "node:child_process"

if (!existsSync("node_modules/.bin/tsc") || !existsSync("node_modules/.bin/next")) {
  console.log("[deps] node_modules eksik → npm install …")
  execSync("npm install --no-audit --fund=false", { stdio: "inherit" })
} else {
  console.log("[deps] ok")
}
