const filterFunc = require("./mymodule");
const dirName = process.argv[2];
const extName = process.argv[3];

filterFunc(dirName, extName, (err, data) => {
  if (err) console.error("Some error.");
  data.forEach((each) => console.log(each));
});
