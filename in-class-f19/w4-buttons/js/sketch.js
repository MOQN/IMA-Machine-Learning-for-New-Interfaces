
let particles = [];


function setup() {
  createCanvas( 500, 400 );
  background(0);
}


function draw() {
  background(0); // clear

  // generate a particle every frame
  particles.push( new Particle(width/2, height/2) );

  // update & display
  for (let i=0; i<particles.length; i++) {
    let p = particles[i];
    p.move();
    p.updateLifespan();
    p.checkEdges();
    p.checkInteraction(mouseX, mouseY);
    p.display();
  }

  // remove particles if done!
  for (let i = particles.length-1; i >= 0; i--) {
    let p = particles[i];
    if ( p.isDone ) {
      particles.splice(i, 1);
    }
  }

  // limit the number of particles
  //while (particles.length > 500) {
  //  particles.splice(0, 1); //(index, howMany)
  //}

  // check the number of particles
  fill(255);
  text( particles.length, 10, 20 );
}

function mouseDragged() {
  //particles.push( new Particle(mouseX, mouseY) );
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.rad = random(15, 30);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.isDone = false;
    this.lifespan = 1.0; // 100%
    this.lifeReduction = random(0.001, 0.010); // 0.1% to 1%
  }
  updateLifespan() {
    if (this.lifespan < 0.0) {
      this.lifespan = 0.0;
      this.isDone = true;
    } else {
      this.lifespan -= this.lifeReduction;
    }
  }
  checkInteraction(x, y) {
    let distance = dist(this.x, this.y, x, y); //(x1, y1, x2, y2)
    if (distance < this.rad) {
      // in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        // red
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.rad *= 3; 
        this.isDone = true;
      }
    } else {
      // out of area
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }

  }
  move() {
    this.x += this.xSpd; // this.x = this.x + this.xSpd;
    this.y += this.ySpd;
  }
  checkEdges() {
    if (this.x < 0 || this.x > width) {
      this.isDone = true;
    }
    if (this.y < 0 || this.y > height) {
      this.isDone = true;
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b, 255 * this.lifespan);
    ellipse(this.x, this.y, this.rad*2 , this.rad*2);
    pop();
  }
}









//
