const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
readFile("./src/base/promise/test.txt").then((value) => {
  console.log(value);
});
