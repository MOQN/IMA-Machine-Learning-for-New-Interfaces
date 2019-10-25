// Oct 16 2019
// MOQN

/*
  This is based on the example code of ml5.js
  https://ml5js.org/
*/

console.log('ml5 version:', ml5.version);


let cvae;
let button;
let dropdown;

// function preload() {
//   cvae = ml5.CVAE('model/quick_draw/manifest.json');
// }


function setup() {
  createCanvas(200, 200);

  // Create a new instance with pretrained model
  cvae = ml5.CVAE('model/quick_draw/manifest.json', modelReady);

  // Create a generate button
  button = createButton('generate');
  button.mousePressed(generateImage);
  background(0);
}


function gotImage(error, result) {
  image(result.image, 0, 0, width, height);
}


function modelReady() {
  // Create dropdown with all possible labels
  dropdown = createSelect();
  for (let label of cvae.labels) {
    dropdown.option(label);
  }
}


function generateImage() {
  let label = dropdown.value();
  cvae.generate(label, gotImage);
}
