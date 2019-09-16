// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

var x = 200;
var y = 400;
var mSize = 100;

// figure it out why they are errors!
// var x = width/2;
// var y = height/2;
// var size = 100;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);

  fill(255,0,0);
  ellipse(x,y, mSize,mSize);
}

