const net = require("net");
const port = process.argv[2];
// pads the string with zeroes to make its length equal to arg
const zeroPad = (num) => {
  return (num < 10 ? "0" : "") + num;
};
const server = net.createServer((socket) => {
  let date = new Date();
  let dateString =
    date.getFullYear() +
    "-" +
    zeroPad(date.getMonth() + 1) +
    "-" +
    zeroPad(date.getDate()) +
    " " +
    zeroPad(date.getHours()) +
    ":" +
    zeroPad(date.getMinutes());
  socket.write(dateString);
  socket.end("\n");
});
server.listen(port);
