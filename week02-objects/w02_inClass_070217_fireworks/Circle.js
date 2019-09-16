"use strict";


class Circle {
  constructor(x, y, xspd, yspd) {
    this.x = x;
    this.y = y;
    this.xspeed = xspd;
    this.yspeed = yspd;
    this.dia = random(3, 5);
    this.distance = 0;
    this.isExploded = false;
    this.interval = 60;
    this.rotateSpd = random(0.5);
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  applyGravity(g) {
    this.yspeed += g;
  }
  explode() {
    this.xspeed = random(-3, 3) * 5;
    this.yspeed = random(-3, 3) * 5;
    this.isExploded = true;
  }
  run() {
    this.move();
    if (this.isExploded) {
      if (this.interval > 0) {
        this.interval--;
        this.xspeed *= 0.93;
        this.yspeed *= 0.93;
        this.applyGravity(0.05);
        this.draw_normal();
      } else {
        this.xspeed *= 0.9;
        this.yspeed *= 0.9;
        this.draw_scattered();
      }
    } else {
      this.applyGravity(0.15);
      this.draw_normal();
    }
  }
  draw_normal() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);
    pop();
  }
  draw_scattered() {
    this.distance += 1.4;
    for (var angle = 0; angle < 360; angle += 72) {
      push();
      translate(this.x, this.y);
      rotate(frameCount*this.rotateSpd);
      rotate(radians(angle));
      fill(255 - this.distance * 5);
      noStroke();
      ellipse(0, 0 + this.distance, this.dia, this.dia);
      pop();
    }
  }
}