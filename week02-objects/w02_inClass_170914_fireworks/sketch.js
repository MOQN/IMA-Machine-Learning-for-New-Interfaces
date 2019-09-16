var circles = [];

function setup() {
  createCanvas(500, 600);
  for (var i = 0; i < 300; i++) {
    circles[i] = new Circle(width / 2, height, -10);
  }
}
function draw() {
  background(0,15);
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.update();
    c.applyGravity(0.1);
    c.display();
  }
}
function keyPressed() {
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.explode();
  }
}