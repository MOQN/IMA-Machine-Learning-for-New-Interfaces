// Nov 6 2019
// MOQN


//console.log('ml5 version:', ml5.version);


let neuron = [
  0.0, 1.0, 0.5,
  0.0, 1.0, 0.5,
  0.0, 1.0, 0.5
];
let input = [];
let output = [];

let neuronSize = 150;
let gridSize;
let w, h;

let outputIndex = 0;

function setup() {
  createCanvas(neuronSize*4, neuronSize*3);
  background(0);


  // generate random input
  for (let i = 0; i < 9*9; i++) {
    input[i] = random(1);
  }

}


function draw() {
  background(0);

  w = h = 3;
  gridSize = neuronSize / w;

  stroke(0);
  // neuron
  for (let y=0; y<h; y++) {
    for (let x=0; x<w; x++) {
      let index = x + y*w;
      let activation = neuron[index];
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize;
      let mY = y * gridSize;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text(activation, mX + 10, mY + 20);
    }
  }

  // input
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let index = x + y*9;
      let activation = input[index] = map(sin(x*1.2), -1, 1, 0, 1);
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize + neuronSize;
      let mY = y * gridSize;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text( nf(activation,1, 2) , mX + 10, mY + 20);
    }
  }

  // process
  let neuronX = outputIndex % 3;
  let neuronY = floor(outputIndex / 3);
  push();
  stroke(0, 255, 0);
  strokeWeight(3);
  noFill();
  let nX = neuronX * neuronSize + neuronSize;
  let nY = neuronY * neuronSize;
  rect(nX, nY, neuronSize, neuronSize);
  pop();

  let sum = 0;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      let index = x + y*3;
      let inputIndex = (neuronX*3 + x) + (neuronY*3 + y) * 9
      let value = 1 - abs(neuron[index] - input[inputIndex]);
      sum += value;
    }
  }
  let activation = sum / neuron.length;
  let value = map(activation, 0.0, 1.0, 0, 255);
  text(activation, 10, 270);

  // output
  output[outputIndex] = activation;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      let index = x + y*3;
      let activation = output[index];
      if (activation == undefined) activation = 0;
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize;
      let mY = y * gridSize + neuronSize*2;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text( nf(activation,1, 2) , mX + 10, mY + 20);
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    outputIndex++;
    if (outputIndex == 3*3) {
      outputIndex = 0;
    }
  }
}
