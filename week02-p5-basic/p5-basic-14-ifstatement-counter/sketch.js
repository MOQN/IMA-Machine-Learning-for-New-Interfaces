// IMA NYU Shanghai
// MOQN
// Sep 16 2019

let color;
let increment;
function setup() {
  createCanvas(400, 400);
  color = 0;
  increment = 1;
}

function draw() {
  color = color + increment;
  if (color > 255) {
    increment = -1;
  } else if (color < 0) {
    increment = 1;
  }
  background(color);

  fill(125);
  text(color, width/2, height/2);
}
