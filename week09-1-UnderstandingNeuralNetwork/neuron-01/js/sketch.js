// Nov 6 2019
// MOQN


//console.log('ml5 version:', ml5.version);


let neuron = [
  0.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  0.0, 1.0, 0.0
];
let input = [
  0.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  0.0, 1.0, 0.0
];

let neuronSize = 300;
let gridSize;
let w, h;

function setup() {
  createCanvas(neuronSize*3, neuronSize);
  background(0);
  stroke(0);

  w = h = 3;
  gridSize = neuronSize / w;

  // neuron
  for (let y=0; y<h; y++) {
    for (let x=0; x<w; x++) {
      let index = x + y*w;
      let activation = neuron[index];
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize + neuronSize;
      let mY = y * gridSize;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text(activation, mX + 10, mY + 20);
    }
  }

  // input
  for (let y=0; y<h; y++) {
    for (let x=0; x<w; x++) {
      let index = x + y*w;
      let activation = input[index] = random(1);
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize;
      let mY = y * gridSize;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text( nf(activation,1, 2) , mX + 10, mY + 20);
    }
  }

  // output
  for (let y=0; y<h; y++) {
    for (let x=0; x<w; x++) {
      let index = x + y*w;
      let activation = 1 - abs(neuron[index] - input[index]);
      let value = map(activation, 0.0, 1.0, 0, 255);
      let mX = x * gridSize + neuronSize*2;
      let mY = y * gridSize;
      fill(value);
      rect(mX, mY, gridSize, gridSize);
      fill(255-value);
      text( nf(activation,1, 2), mX + 10, mY + 20);
    }
  }

  // our activation function
  let sum = 0;
  for (let i=0; i<neuron.length; i++) {
    let value = 1 - abs(neuron[i] - input[i]);
    sum += value;
  }
  let activation = sum / neuron.length;
  let value = map(activation, 0.0, 1.0, 0, 255);
  fill(value);
  rect(600, 0, 300, 300);

  fill(255-value);
  text( nf(activation,1, 2), neuronSize*2 + 10, 0 + 20);
}


function draw() {

}
