// IMA NYU Shanghai
// MOQN
// Sep 16 2019


function setup() {
  createCanvas(400, 400);
  background(0);
  // call use reassign
  // r = r + 1
  // background(r, g, b);
  let numberA = 20;
  let numberB = 19;
  let txtYear = "YEAR";

  let txt1 = numberA + numberB + txtYear;
  let txt2 = numberA + txtYear + numberB;
  let txt3 = txtYear + numberA + numberB;
  let txt4 = numberA + str(numberB) + txtYear;

  fill(255);
  text( txt1, 10, 20 );
  text( txt2, 10, 50 );
  text( txt3, 10, 80 );
  text( txt4, 10, 110 );
}

function draw() {
  //
}
