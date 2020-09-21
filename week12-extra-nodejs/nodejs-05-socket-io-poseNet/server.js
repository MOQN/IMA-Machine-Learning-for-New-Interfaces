console.log("Node:");

// express
const express = require('express');
const app = express();
app.use( express.static('public') );

// http server
const http = require('http');
const hostname = '127.0.0.1'; // localhost
//const hostname = '10.209.7.106'; // wifi address
const port = 3000;
const server = http.createServer( app );
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// socket io
const socket = require('socket.io');
const io = socket(server);

io.on('connection', newConnection);
function newConnection(socket) {
  console.log( `_ new connection: ${ socket.id }`);
  socket.on('connection_name', receive);
  function receive(data) {
    console.log(data);
    socket.broadcast.emit('connection_name', data);
  }
}
