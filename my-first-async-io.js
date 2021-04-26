const fs = require("fs");

const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
  if (err) console.error("Something went wrong.");
  let numOfLines = data.toString().split("\n").length - 1;
  console.log(numOfLines);
});
