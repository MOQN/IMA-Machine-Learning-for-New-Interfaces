// Oct 16 2019
// MOQN

/*
  This is based on the example code of ml5.js
  https://ml5js.org/
*/

console.log('ml5 version:', ml5.version);


// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
let strokePath;
let seedStrokes = [];

// Storing a reference to the canvas
let canvas;

function setup() {
  canvas = createCanvas(640, 480);
  // Hide the canvas until the model is ready
  canvas.hide();

  background(220);
  // Load the model
  // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
  model = ml5.sketchRNN('whale', modelReady);

  // Button to start drawing
  //let button = select('#clear');
  //button.mousePressed(clearDrawing);
}

// The model is ready
function modelReady() {
  canvas.show();
  // sketchRNN will begin when the mouse is released
  canvas.mouseReleased(startSketchRNN);
  console.log('model ready - sketchRNN will begin after you draw with the mouse');
}

// Reset the drawing
function keyPressed() {
  if (key == ' ') clearDrawing();
}
function clearDrawing() {
  background(220);
  // clear seed strokes
  seedStrokes = [];
  // Reset model
  model.reset();
}

// sketchRNN takes over
function startSketchRNN() {
  // Start where the mouse left off
  x = mouseX;
  y = mouseY;
  // Generate with the seedStrokes
  model.generate(seedStrokes, gotStroke);
}

function draw() {
  // If the mouse is pressed capture the user strokes
  if (mouseIsPressed) {
    // Draw line
    stroke(0);
    strokeWeight(3.0);
    line(pmouseX, pmouseY, mouseX, mouseY);
    // Create a "stroke path" with dx, dy, and pen
    let userStroke = {
      dx: mouseX - pmouseX,
      dy: mouseY - pmouseY,
      pen: 'down'
    };
    // Add to the array
    seedStrokes.push(userStroke);
  }

  // If something new to draw
  if (strokePath) {
    // If the pen is down, draw a line
    if (previous_pen == 'down') {
      stroke(0);
      strokeWeight(3.0);
      line(x, y, x + strokePath.dx, y + strokePath.dy);
    }
    // Move the pen
    x += strokePath.dx;
    y += strokePath.dy;
    // The pen state actually refers to the next stroke
    previous_pen = strokePath.pen;

    // If the drawing is complete
    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    }
  }

  fill(0);
  noStroke();
  text("Press 'SpaceBar' to clear the image and reset the model.", 10, 20);
}

// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
}




const models = [
  'alarm_clock',
  'ambulance',
  'angel',
  'ant',
  'antyoga',
  'backpack',
  'barn',
  'basket',
  'bear',
  'bee',
  'beeflower',
  'bicycle',
  'bird',
  'book',
  'brain',
  'bridge',
  'bulldozer',
  'bus',
  'butterfly',
  'cactus',
  'calendar',
  'castle',
  'cat',
  'catbus',
  'catpig',
  'chair',
  'couch',
  'crab',
  'crabchair',
  'crabrabbitfacepig',
  'cruise_ship',
  'diving_board',
  'dog',
  'dogbunny',
  'dolphin',
  'duck',
  'elephant',
  'elephantpig',
  'eye',
  'face',
  'fan',
  'fire_hydrant',
  'firetruck',
  'flamingo',
  'flower',
  'floweryoga',
  'frog',
  'frogsofa',
  'garden',
  'hand',
  'hedgeberry',
  'hedgehog',
  'helicopter',
  'kangaroo',
  'key',
  'lantern',
  'lighthouse',
  'lion',
  'lionsheep',
  'lobster',
  'map',
  'mermaid',
  'monapassport',
  'monkey',
  'mosquito',
  'octopus',
  'owl',
  'paintbrush',
  'palm_tree',
  'parrot',
  'passport',
  'peas',
  'penguin',
  'pig',
  'pigsheep',
  'pineapple',
  'pool',
  'postcard',
  'power_outlet',
  'rabbit',
  'rabbitturtle',
  'radio',
  'radioface',
  'rain',
  'rhinoceros',
  'rifle',
  'roller_coaster',
  'sandwich',
  'scorpion',
  'sea_turtle',
  'sheep',
  'skull',
  'snail',
  'snowflake',
  'speedboat',
  'spider',
  'squirrel',
  'steak',
  'stove',
  'strawberry',
  'swan',
  'swing_set',
  'the_mona_lisa',
  'tiger',
  'toothbrush',
  'toothpaste',
  'tractor',
  'trombone',
  'truck',
  'whale',
  'windmill',
  'yoga',
  'yogabicycle',
  'everything',
];
