// IMA NYU Shanghai
// MOQN
// Feb 9 2017

function setup() {
  createCanvas(600, 600);
  background(100);

  noStroke();
  let resolution = 60;
  for (let x = 0; x < width; x += resolution) {
    fill(random(255), random(255), random(255));
    rect(x, 0, resolution, resolution);
  }
}

function draw() {
  // nothing :D
}
