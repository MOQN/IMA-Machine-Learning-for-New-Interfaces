// IMA NYU Shanghai
// MOQN
// Sep 7 2017


// equal operator
// == vs. ===


let number = 10;

function setup() {
  createCanvas(500,600);
  background(100);

  print(10 == '10');
  print(10 === '10');
  print(10 === number);

  fill(255);
  text("Open the console window and check the values!", 10, 20);
}

function draw() {
  //
}
