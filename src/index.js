const http = require("http");

const port = 3000;

const server = http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8;"
  });

  response.end("Hello world");
});

server.listen(port, function () {
  console.log('listen on port:', port);
});