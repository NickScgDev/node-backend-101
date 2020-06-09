const express = require("express");
const path = require("path");

const port = 3000;

const server = new express();

server.use(express.static(path.resolve(__dirname, './public')));

server.get('/echo-user/:userName', function (request, response) {
  response.send(`
    <html>
    <head>
      <title>This is static html</title>
    </head>
    <body>
      hello ${request.params.userName} naja
    </body>
  </html>
  `);
});

server.get('/', function (_, response) {
  response.send('hello world from express app');
});

server.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.log('listen on port:', port);
  }
});