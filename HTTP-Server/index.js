const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/ApiData/data.json`, "utf-8");
  let obj = JSON.parse(data);

  if (req.url == "/") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("About Page");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(obj.users[1].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error Page</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening");
});
