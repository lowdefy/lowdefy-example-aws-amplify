import { readFileSync, writeFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync("./package.json", {
    encoding: "utf8",
  })
);

packageJson.scripts.build = "next build";
packageJson.scripts.dev = "next dev";
packageJson.scripts.start = "next start";

writeFileSync(
  "./package.json",
  JSON.stringify(packageJson, null, 2).concat("\n")
);
