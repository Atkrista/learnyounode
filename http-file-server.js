const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const fileName = process.argv[3];

const server = http.createServer((req, res) => {
  const srcStream = fs.createReadStream(fileName);
  srcStream.pipe(res);
});

server.listen(port);
