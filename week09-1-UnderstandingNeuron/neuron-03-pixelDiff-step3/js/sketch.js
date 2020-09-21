// Nov 6 2019
// MOQN


//console.log('ml5 version:', ml5.version);

let cam;
let imgsToCompare = [];
let img;


function setup() {
  createCanvas(640, 480);
  background(0);

  cam = createCapture(width, height);
  cam.hide();
  img = createImage(width, height);
  for (let i=0; i<3; i++) {
    imgsToCompare[i] = createImage(width, height);
  }
}


function draw() {
  background(0);
  cam.loadPixels();
  img.loadPixels();
  imgsToCompare[0].loadPixels();
  imgsToCompare[1].loadPixels();
  imgsToCompare[2].loadPixels();

  let sums = [0, 0, 0];
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (x + y*cam.width) * 4;

      for (let i=0; i<imgsToCompare.length; i++) {
        let diffR = abs(cam.pixels[index+0] - imgsToCompare[i].pixels[index+0]);
        let diffG = abs(cam.pixels[index+1] - imgsToCompare[i].pixels[index+1]);
        let diffB = abs(cam.pixels[index+2] - imgsToCompare[i].pixels[index+2]);
        let avgDiff = (diffR + diffG + diffB)/3;
        sums[i] += avgDiff;
        img.pixels[index+i] = avgDiff;
      }
      img.pixels[index+3] = 255;
    }
  }
  img.updatePixels();
  imgsToCompare[0].updatePixels();
  imgsToCompare[1].updatePixels();
  imgsToCompare[2].updatePixels();

  image(img, 0, 0);

  push();
  fill(255);
  let avgs = [];
  for (let i=0; i<imgsToCompare.length; i++) {
    avgs[i] = sums[i] / (cam.width*cam.height);
    let value = constrain( map( 10 - avgs[i], 0, 10, 0.0, 1.0), 0.0, 1.0);
    text(value, 10, 20 + 20 * i);
  }
  pop();
}


function keyPressed() {
  if (parseInt(key) >= 1 && parseInt(key) <= 3) {
    let tempImg = createImage(width, height);
    tempImg.copy(
      cam,
      0, 0, cam.width, cam.height, 0, 0,
      tempImg.width, tempImg.height
    );
    let index = parseInt(key) - 1; // 0, 1, 2
    imgsToCompare[index] = tempImg;

  }
}
