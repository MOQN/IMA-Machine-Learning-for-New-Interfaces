"use strict";

class Circle {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.xSpd = random(-5, 5);
    this.ySpd = random(-5, 5);
    this.dia = random(10, 50);
    this.color = color(random(255), random(255), random(255), 100);
  }
  update() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.dia, this.dia);
    pop();
  }
}