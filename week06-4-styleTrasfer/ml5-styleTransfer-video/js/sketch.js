// Oct 16 2019
// MOQN

/*
  This is based on the example code of ml5.js
  https://ml5js.org/
*/

console.log('ml5 version:', ml5.version);


let style;
let video;
let isTransferring = false;
let resultImg;


function setup() {
  createCanvas(320, 240);

  video = createCapture(VIDEO);
  video.hide();

  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

  style = ml5.styleTransfer('model/style-transfer/wave', video, modelLoaded);
}


function draw(){
  // Switch between showing the raw camera or the style
  if (isTransferring) {
    image(resultImg, 0, 0, 320, 240);
  } else {
    image(video, 0, 0, 320, 240);
  }
}


function modelLoaded() {
  console.log('Model Loaded');
}


function mousePressed() {
  if (isTransferring) {
    fill(0, 255, 0);
    text("Click to stop styleTransfer!");
  } else {
    fill(0, 255, 0);
    text("Click to start styleTransfer!");
    // Make a transfer using the video
    style.transfer(gotResult);
  }
  isTransferring = !isTransferring;
}


// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  if (isTransferring) {
    style.transfer(gotResult);
  }
}
