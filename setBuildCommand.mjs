import { readFileSync, writeFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync("./package.json", {
    encoding: "utf8",
  })
);

packageJson.scripts.build = "next build";

writeFileSync(
  "./package.json",
  JSON.stringify(packageJson, null, 2).concat("\n")
);
