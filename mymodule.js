const path = require("path");
const fs = require("fs");

module.exports = (dirName, extName, cb) => {
  fs.readdir(dirName, (err, data) => {
    if (err) return cb(err, null);
    const filteredData = data.filter((item) => {
      return path.extname(item) == "." + extName;
    });
    cb(null, filteredData);
  });
};
