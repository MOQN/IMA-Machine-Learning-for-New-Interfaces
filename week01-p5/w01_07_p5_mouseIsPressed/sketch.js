// IMA NYU Shanghai
// MOQN
// Feb 9 2017

function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    background( random(255) );
  }
}

function mousePressed() {
  //background(255,0,0);
}
