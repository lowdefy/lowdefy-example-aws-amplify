const fs = require("fs");

const packageJson = JSON.parse(
  fs.readFileSync("./package.json", {
    encoding: "utf8",
  })
);

packageJson.scripts.build = "next build";

fs.writeFileSync(
  "./package.json",
  JSON.stringify(packageJson, null, 2).concat("\n")
);
