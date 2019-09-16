// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255,0,0);
  spinningRect(100, height/2, 80, 40, 0.5, 0.01);

  fill(255,255,0);
  spinningRect(200, height/2, 80, 40, 1.0, 0.02);

  fill(255,0,255);
  spinningRect(300, height/2, 80, 40, 1.5, 0.03);
}

// user-defined function
function spinningRect(x, y, w, h, scl, spd) {
  push();
  translate(x, y);
  // transformation
  rotate(frameCount * spd);
  scale(scl);
  //display
  rectMode(CENTER);
  rect(0,0, w, h);
  pop();
}
