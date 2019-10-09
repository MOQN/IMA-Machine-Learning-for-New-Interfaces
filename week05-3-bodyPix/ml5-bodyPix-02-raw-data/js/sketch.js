// Oct 9 2019
// MOQN

/*
This is based on the example code of ml5.js
https://ml5js.org/
*/
console.log('ml5 version:', ml5.version);


let bodypix;
let cam;
let segmentation;

const options = {
  outputStride: 8, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.3, // 0 - 1, defaults to 0.5
}


function setup() {
  createCanvas(640, 480);

  cam = createCapture(cam);
  cam.size(320, 240);
  // cam.hide();
  bodypix = ml5.bodyPix(cam, modelReady);
}


function draw() {
  background(255);
  if (segmentation !== undefined) {
    let w = segmentation.raw.width;
    let h = segmentation.raw.height;
    let data = segmentation.raw.data;

    let gridSize = 10;

    for (let y = 0; y < h; y+=gridSize) {
      for (let x = 0; x < w; x+=gridSize) {
        let index = x + y*w; // ***
        let mappedX = map(x, 0, w, 0, width);
        let mappedY = map(y, 0, h, 0, height);

        fill(0);
        text(data[index], mappedX, mappedY);
      }
    }
  }
}





///// bodypix functions /////

function modelReady() {
  console.log('Model Ready!');
  bodypix.segmentWithParts(gotResults, options);
}


function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  segmentation = result;

  //image(segmentation.image, 0, 0, width, height);
  //console.log( segmentation.raw.data.length ); 320 * 240 - 1

  bodypix.segmentWithParts(gotResults, options);
}
