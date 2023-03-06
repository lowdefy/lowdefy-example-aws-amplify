#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

function setBuildCommand() {
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
}

setBuildCommand();
