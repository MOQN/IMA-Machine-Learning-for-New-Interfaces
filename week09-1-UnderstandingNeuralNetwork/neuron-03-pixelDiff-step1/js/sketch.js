// Nov 6 2019
// MOQN


//console.log('ml5 version:', ml5.version);

let cam;
let imgToCompare;
let img;

function setup() {
  createCanvas(640, 480);
  background(0);

  cam = createCapture(width, height);
  cam.hide();
  img = createImage(width, height);
  imgToCompare = createImage(width, height);
}


function draw() {
  background(0);
  cam.loadPixels();
  img.loadPixels();
  imgToCompare.loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (x + y*cam.width) * 4;

      let diffR = abs(cam.pixels[index+0] - imgToCompare.pixels[index+0]);
      let diffG = abs(cam.pixels[index+1] - imgToCompare.pixels[index+1]);
      let diffB = abs(cam.pixels[index+2] - imgToCompare.pixels[index+2]);

      let avgDiff = (diffR + diffG + diffB)/3;

      img.pixels[index+0] = avgDiff;
      img.pixels[index+1] = avgDiff;
      img.pixels[index+2] = avgDiff;
      img.pixels[index+3] = 255;
    }
  }
  cam.updatePixels();
  img.updatePixels();
  imgToCompare.updatePixels();

  image(img, 0, 0);
}

function keyPressed() {
  if (key == ' ') {
    imgToCompare.copy(
      cam,
      0, 0, cam.width, cam.height, 0, 0,
      imgToCompare.width, imgToCompare.height
    );
  }
}
