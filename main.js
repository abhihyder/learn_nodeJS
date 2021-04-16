var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h4>Welcome to NodeJs.</h4>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h4>Welcome to About Page.</h4>");
    res.end();
  }
});

server.listen(5050);
console.log("Node server is running.");
