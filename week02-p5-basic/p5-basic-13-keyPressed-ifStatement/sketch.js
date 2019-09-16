// IMA NYU Shanghai
// MOQN
// Sep 16 2019

let r, g, b;

function setup() {
  createCanvas(400, 400);
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  background(r,g,b);

  fill(255);
  textSize(30);
  text( key, width/2, height/2);
}

function mousePressed() {
  // call reassign
  r = random(255);
  g = random(255);
  b = random(255);
}

function keyPressed() {
  // if (expression/condition) { a block of code }
  // if () {}
  // if ( true ) { do something! }
  // == equal
  // && and
  // || or
  // >= greater and equal to

  if (key == " ") {
    r = 0;
    g = 0;
    b = 0;
  }
  else if (key == "r" || key == "R") {
    r = 255;
    g = 0;
    b = 0;
  }
  else if (key == "g" || key == "G") {
    r = 0;
    g = 255;
    b = 0;
  }
  else if (key == "b" || key == "B") {
    r = 0;
    g = 0;
    b = 255;
  }
  else {
    r = random(255);
    g = random(255);
    b = random(255);
  }

  // keyCode
  if (keyCode == UP_ARROW) {
    r = 255;
    g = 0;
    b = 255;
  }
}
