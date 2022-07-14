import { writeFileSync } from "fs";

export function writeJsonToFile(file, json) {
  writeFileSync(file, JSON.stringify(json), "utf8");
}
