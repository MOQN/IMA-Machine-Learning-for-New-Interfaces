// Nov 12 2019
// MOQN


let perceptron;
let points = [];
let epoch = 0;


function setup() {
  createCanvas(400, 400);
  background(0);

  perceptron = new Perceptron();
  for (let i=0; i<100; i++) {
    points[i] = new Point();
  }
  // let input = [1, -0.5];
  // let output = perceptron.predict(input);
  // console.log(output);

}


function draw() {
  background(255);
  stroke(0);
  translate(width/2, height/2);

  line(-width/2, -height/2, width/2, height/2);

  for (p of points) {
    // display the points
    p.display();

    // display the result
    let input = [p.x, p.y];
    let target = p.label;
    let guess = perceptron.predict(input);
    let c = color(255,0,0);
    if (guess == target) {
      c = color(0, 255, 0);
    }
    noStroke();
    fill(c);
    ellipse(p.x, p.y, 4, 4);
  }
}


function keyPressed() {
  for (p of points) {
    let inputs = [p.x, p.y];
    let target = p.label;
    perceptron.train(inputs, target);
  }
  epoch++;
  console.log("Epoch: " + epoch);
  console.table(perceptron.weights);
}


class Perceptron {
  constructor() {
    this.numOfWeights = 2;
    this.weights = [];
    for (let i=0; i<this.numOfWeights; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.learningRate = 0.1;
  }
  predict(inputs) {
    // sum of inputs * weights
    // return label
    let sum = 0;
    for (let i=0; i< this.weights.length; i++) {
      sum += inputs[i] * ( this.weights[i]);
    }
    let output = Math.sign(sum); // -1 or 1
    return output;
  }
  train(input, target) {
    let guess = this.predict(input);
    let error = target - guess;

    // adjust all wieghts
    for (let i=0; i < this.weights.length; i++) {
      this.weights[i] += error * input[i] * this.learningRate;
    }
  }

}


class Point {
  constructor() {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.label;
    // ***
    if (this.x > this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }
  display() {
    stroke(0);
    if (this.label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(this.x, this.y, 8, 8);
  }
}
