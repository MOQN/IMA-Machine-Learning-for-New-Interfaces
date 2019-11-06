// Nov 6 2019
// MOQN

/*
  This is based on the example code of ml5.js
  https://ml5js.org/
*/
console.log('ml5 version:', ml5.version);


let img;

function setup() {
  createCanvas(280, 280);
  img = createGraphics(28, 28);
  img.pixelDensity(1);
}

function draw() {
  background(0);

  img.background(0);
  img.stroke(255);
  img.line(0, 0, img.width, img.height);

  img.loadPixels();
  for (let y=0; y<img.height; y++) {
    for (let x=0; x<img.width; x++) {
      let index = (x + y*img.width) * 4;
      img.pixels[index+0] = random(255);
      img.pixels[index+1] = random(255);
      img.pixels[index+2] = random(255);
      img.pixels[index+3] = 255;
    }
  }
  img.updatePixels();
  image( img, 0, 0, width, height );
}
