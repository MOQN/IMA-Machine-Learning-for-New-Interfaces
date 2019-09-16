// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 16 2017


var circles = [];
var gravity;


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    circles.push(new Circle(width / 2, height / 2));
  }
  gravity = 1.0;
}


function draw() {
  background(0);

  for (var i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].checkBoundaries();
    circles[i].applyFriction(0.97);
    circles[i].applyGravity(gravity);
    circles[i].display();
  }
}


function keyPressed() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].xspeed = random(-30, 30);
    circles[i].yspeed = random(-30, 30);
  }
}