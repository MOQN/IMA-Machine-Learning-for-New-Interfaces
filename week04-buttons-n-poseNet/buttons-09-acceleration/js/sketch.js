// IMA | NYU Shanghai
// MOQN
// Oct 5 2019


function setup() {
  createCanvas(500, 600);
  background(0);
}

function draw() {
  background(0);

  let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
  let acceleration = map(distance, 0, 200, 0, width);

  noStroke();
  fill(255, 0, 0);
  rect(0, height/2 - 50, acceleration, 100);
}
