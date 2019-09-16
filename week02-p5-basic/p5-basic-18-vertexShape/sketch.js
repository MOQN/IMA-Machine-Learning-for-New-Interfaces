// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // vertex shape!
  beginShape();
  vertex(197,84);
  vertex(90,329);
  vertex(337,156);
  vertex(74,165);
  vertex(310,336);
  endShape(CLOSE);
}

function mousePressed() {
  // print( mouseX + "," + mouseY );
  print( "vertex(" + mouseX + "," + mouseY + ");" );
}
