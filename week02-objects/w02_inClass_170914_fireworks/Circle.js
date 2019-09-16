"use strict";

class Circle {
  constructor(_x, _y, _velY) {
    this.x = _x;
    this.y = _y;
    this.dia = random(5,10);
    this.velX = 0;
    this.velY = _velY;
    this.isExploded = false;
    this.angle = random(PI * 2);
    this.angleVel = random(0.05, 0.10);
    this.count = 0;
  }
  update() {
    this.x += this.velX;
    this.y += this.velY;
    if (this.isExploded) {
      this.velX *= 0.95;
      this.velY *= 0.95;
      this.count ++;
    }
  }
  applyGravity(g) {
    this.velY += g;
  }
  explode() {
    this.isExploded = true;
    this.velX = random(-10,10);
    this.velY = random(-10,10);
  }
  display() {
    push();
    //blendMode(ADD);
    translate(this.x, this.y);
    rotate(frameCount*this.angleVel + this.angle);
    noStroke();
    fill(200, 50 ,120, 150);
    ellipse(this.count,0, this.dia, this.dia);
    pop();
  }
}


