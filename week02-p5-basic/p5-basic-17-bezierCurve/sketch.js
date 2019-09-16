// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  background(0);

  strokeWeight(1);
  stroke(255,0,0);
  line(100, 300, 500, 300); //x1, y1, x2, y2

  noFill();
  stroke(255);
  strokeWeight(5);
  bezier(100,300,
         mouseX,mouseY, // control point for x1,y1
         500,500, // control point for x2,y2
         500,300);

  // display control point 1
  strokeWeight(1);
  stroke(255,0,0);
  line(100, 300, mouseX, mouseY);

  // display control point 2
  strokeWeight(1);
  stroke(255,0,0);
  line(500, 500, 500, 300);
}
