// Nov 12 2019
// MOQN


let perceptron;
let points = [];
let epoch = 0;


function setup() {
  createCanvas(400, 400);
  background(0);

  perceptron = new Perceptron();
  for (let i = 0; i < 100; i++) {
    points[i] = new Point(
      random(-width/2, width/2),
      random(-height/2, height/2)
    );
  }
}


function draw() {
  background(255);
  stroke(0);
  translate(width/2, height/2);
  scale(1, -1);

  let x1 = -width/2;
  let y1 = f(x1);
  let x2 = width/2;
  let y2 = f(x2);
  stroke(0);
  line(x1, y1, x2, y2);
  stroke(255,0,0);
  perceptron.showPrediction(x1, x2);

  for (p of points) {
    // display points
    p.display();

    // display results
    let inputs = [p.x, p.y];
    let target = p.label;

    let guess = perceptron.predict(inputs);
    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
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


function f(x) {
  // y = m*x + b;
  return 0.5 * x + 100; /// *** solve this...
}


class Perceptron {
  constructor() {
    this.learngRate = 0.0001;
    this.numOfWeight = 2;
    this.weights = [];
    for (let i = 0; i < this.numOfWeight; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.bias = -100;
  }
  predict(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    sum += this.bias;
    let output = Math.sign(sum); //  -1 or 1, our activation function
    return output;
  }
  train(inputs, target) {
    let guess = this.predict(inputs);
    let error = target - guess;

    // adjust all the weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.learngRate;
    }
  }
  getPredictedY(x) {
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    // 0 = w0 * x + w1 * y + bias;
    // w1 * y = -(w0 * x) - bias;
    return (w0 * x + this.bias) / w1 * -1;
    // return (w0 * x) / w1 * -1;

  }
  showPrediction(x1, x2) {
    let y1 = this.getPredictedY(x1);
    let y2 = this.getPredictedY(x2);
    line(x1, y1, x2, y2);
  }
}


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.label;
    // ***
    if ( this.y > f(this.x) ) {
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
