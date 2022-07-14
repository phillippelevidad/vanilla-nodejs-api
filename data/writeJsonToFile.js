const fs = require("fs");

function writeJsonToFile(file, json) {
  fs.writeFileSync(file, JSON.stringify(json), "utf8");
}

module.exports = {
  writeJsonToFile,
};
