// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(width/2, height/2, random(width), random(height));
}
