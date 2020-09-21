console.log("Ready!");

let socket;

function setup() {
  createCanvas(400, 500);
  background(100);

  socket = io.connect('127.0.0.1:3000');
  socket.on('connection_name', receive);
}

function draw() {
  if (mouseIsPressed) {
    // let data = { x: mouseX, y: mouseY }; // JSON { key: value }
    let data = {};
    data['x'] = mouseX;
    data['y'] = mouseY;
    socket.emit('connection_name', data);
    noStroke();
    fill(0, 0, 255);
    ellipse(data.x, data.y, 10, 10);
  }
}

function receive(data) {
  console.log(data);
  noStroke();
  fill(0, 255, 0);
  ellipse(data.x, data.y, 10, 10);
}
