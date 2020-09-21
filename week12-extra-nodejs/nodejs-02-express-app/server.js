console.log("Node:");

const express = require('express');
const app = express();

const http = require('http');
const hostname = '127.0.0.1'; // localhost
const port = 3000;

const server = http.createServer( app );
app.use( express.static('public') );


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
