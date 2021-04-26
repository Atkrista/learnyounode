const fs = require("fs");
const path = require("path");

const dirName = process.argv[2];
const extName = process.argv[3];

fs.readdir(dirName, (err, files) => {
  filteredFiles = files.filter((file) => path.extname(file) === "." + extName);
  filteredFiles.forEach((fileName) => console.log(fileName));
});
