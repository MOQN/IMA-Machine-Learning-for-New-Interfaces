// IMA NYU Shanghai
// MOQN
// Sep 16 2019

let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(800, 600);
  background(100);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  // 
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function mouseDragged() {
  noStroke();
  fill(r,g,b);
  ellipse(mouseX, mouseY, 30, 30);
}
