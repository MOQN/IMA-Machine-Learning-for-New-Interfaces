// Oct 9 2019
// MOQN

/*
  This is based on the example code of ml5.js
  https://ml5js.org/
*/
console.log('ml5 version:', ml5.version);


let cam;
let uNet;
let segmentationImage;


function preload() {
  uNet = ml5.uNet('face');
}


function setup() {
  createCanvas(640, 480);

  cam = createCapture(cam);
  cam.size(320, 240);
  cam.hide();

  segmentationImage = createImage(128, 128);

  uNet.segment(cam, gotResult);
}


function gotResult(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  segmentationImage = result.image;
  uNet.segment(cam, gotResult);
}


function draw() {
  background(0, 0, 255);

  segmentationImage.loadPixels();
  for (let i=0; i<segmentationImage.pixels.length; i += 4) { // 4: RGBA
    let r = segmentationImage.pixels[i + 0];
    let g = segmentationImage.pixels[i + 1];
    let b = segmentationImage.pixels[i + 2];

    if (r+g+b == 0) {
      // if r, g and b are 0, (black), let's make it transparent!
      segmentationImage.pixels[i + 3] = 0; // Alpha: 0
    } else {
      //
    }
  }
  segmentationImage.updatePixels();

  //segmentationImage.filter(THRESHOLD, 0.3);
  image(segmentationImage, 0, 0, width, height);
}
