// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  push();
  // to change the origin of coord system
  translate(width/2, height/2); // x,y
  // rotate
  let angle = frameCount * 0.01;
  rotate( angle );
  // the coordinate system
  stroke(255,0,0);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  // yellow rect
  fill(255,255,0);
  rectMode(CENTER);
  rect(0,0, 120, 80);
  pop();


  push();
  translate(100, 100);
  angle = frameCount * 0.01;
  rotate( -angle );
  // green rect
  fill(0,255,0);
  rectMode(CENTER);
  rect(0,0, 120, 80);
  pop();

}
