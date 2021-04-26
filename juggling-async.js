const http = require("http");
const bl = require("bl");
const urls = process.argv.slice(2);
let count = 0;
const responses = [];

for (let i = 0; i < 3; i++) {
  http.get(urls[i], (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) console.error("Sth went wrong.");
        responses[i] = data.toString();
        count++;
      })
    );
  });
}

// a hacky way of doing it
setTimeout(() => {
  responses.forEach((str) => console.log(str));
}, 3000);
