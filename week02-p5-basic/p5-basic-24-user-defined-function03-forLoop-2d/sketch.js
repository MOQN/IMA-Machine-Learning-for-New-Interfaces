// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  let res = 50;
  for (let y = 0; y <= height; y+=res) {
    for (let x = 0; x <= width; x+=res) {
      fill(255);
      spinningRect(x, y, 120, 40, 0.5, 0.01);
    }
  }
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
