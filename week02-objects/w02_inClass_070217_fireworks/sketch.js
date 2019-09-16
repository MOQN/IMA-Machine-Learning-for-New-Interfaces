// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 17 2017


var NUM_OF_CIRCLES = 150;
var circles = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  for (var i = 0; i < NUM_OF_CIRCLES; i++) {
    circles.push(new Circle(width / 2, height, 0, -12));
  }
}


function draw() {
  background(0, 30);

  for (var i = 0; i < circles.length; i++) {
    circles[i].run();
  }
}


function keyPressed() {
  print(key);
  if (key == "R") {
    circles = [];
    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
      circles.push(new Circle(width / 2, height, 0, -12));
    }
  } else if (key == " ") {
    for (var i = 0; i < circles.length; i++) {
      circles[i].explode();
    }
  }
}