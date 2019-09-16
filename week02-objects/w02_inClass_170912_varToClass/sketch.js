// class
function Ball(_x, _y, _xSpd, _ySpd) {
  this.x = _x;
  this.y = _y;
  this.xSpeed = _xSpd;
  this.ySpeed = _ySpd;

  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
  this.checkEdges = function() {
    if (this.x < 10) {
      this.x = 10;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - 10) {
      this.x = width - 10;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 10) {
      this.y = 10;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - 10) {
      this.y = height - 10;
      this.ySpeed = -this.ySpeed;
    }
  }
  this.applyGravity = function() {
    this.ySpeed += gravity;
  }
  this.display = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
  }
}

var balls = [];
var gravity;

function setup() {
  createCanvas(500, 600)
  gravity = 1;
  
  for (var i = 0; i < 100; i++) {
    balls.push(new Ball(width / 2, height / 2, random(-5, 5), random(-5, 5)));
  }
}

function draw() {
  background(100);

  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].checkEdges();
    balls[i].applyGravity();
    balls[i].display();
  }

}