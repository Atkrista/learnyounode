const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) console.error("Something went wrong.");
      data = data.toString();
      console.log(data.split("").length);
      console.log(data);
    })
  );
});
