// Oct 16 2019
// MOQN

/*
This is based on the example code of ml5.js
https://ml5js.org/
*/

console.log('ml5 version:', ml5.version);


let style;
let video;
let resultImg;


function setup() {
  createCanvas(320, 240);

  video = createCapture(VIDEO);
  // video.hide();

  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

  style = ml5.styleTransfer('model/style-transfer/mathura', modelLoaded);
}


function draw(){
  // Switch between showing the raw camera or the style
  image(resultImg, 0, 0, 320, 240);
}


function modelLoaded() {
  console.log('Model Loaded');
}


function mousePressed() {
  // a frame from the capture
  style.transfer(video, gotResult);
}


// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
}
