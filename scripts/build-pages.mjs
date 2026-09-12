import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const result = spawnSync(process.execPath, [next, "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, PORTFOLIO_STATIC_EXPORT: "true" },
});
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
if (result.status !== 0) process.exit(result.status ?? 1);
writeFileSync(new URL("../out/.nojekyll", import.meta.url), "");
console.log("GitHub Pages export ready in out/.");
