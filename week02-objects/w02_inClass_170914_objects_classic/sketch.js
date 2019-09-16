function Circle(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.xSpd = random(-5, 5);
  this.ySpd = random(-5, 5);
  this.dia = random(10, 50);
  this.color = color(random(255), random(255), random(255), 100);
}
Circle.prototype.update = function() {
  this.x += this.xSpd;
  this.y += this.ySpd;
}
Circle.prototype.display = function() {
  push();
  noStroke();
  fill(this.color);
  ellipse(this.x, this.y, this.dia, this.dia);
  pop();
}


var circles = [];

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(50);
  circles.push(new Circle(width / 2, height / 2));

  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.update();
    c.display();
  }
}