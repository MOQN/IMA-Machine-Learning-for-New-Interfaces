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
    points[i] = new Point();
  }

  // let's just test
  let inputs = [-1, 0.5];
  let output = perceptron.predict( inputs );
  console.log( output );
}


function draw() {
  background(255);
  stroke(0);
  translate(width/2, height/2);

  line(-width/2, -height/2, width/2, height/2);

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


class Perceptron {
  constructor() {
    this.learngRate = 0.1;
    this.numOfWeight = 2;
    this.weights = [];
    for (let i = 0; i < this.numOfWeight; i++) {
      this.weights[i] = random(-1, 1);
    }
  }
  predict(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
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
