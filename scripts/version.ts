import { inc, type ReleaseType, type Options } from "semver/mod.ts";
import { VERSION } from "../version.ts";

const newVer = inc(
  VERSION,
  Deno.args[0] as ReleaseType,
  Deno.args[1] as Options
);

await Deno.writeTextFile(
  "./version.ts",
  `export const VERSION = "${newVer}";\n`
);

console.log(`\nVersion changed to ${newVer}\n`);
