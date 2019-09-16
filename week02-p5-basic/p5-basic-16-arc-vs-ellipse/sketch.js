// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  background(0);

  noFill();
  strokeWeight(1);
  stroke(255,0,0);
  ellipse(width/2, height/2, 300, 300);

  strokeWeight(5);
  stroke(255);
  arc(width/2, height/2, 300, 300, PI*0.25, PI*0.72);
}
