console.log('ml5 version:', ml5.version);

let cam;
let poseNet;
let poses = [];

function setup() {
  createCanvas( 640, 480 );
  background(0);
  // webcam
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
  //poseNet
  poseNet = ml5.poseNet(cam, modelReady);
  poseNet.on( 'pose', function(results){
    poses = results;
  } );
}

function draw() {
  image( cam, 0, 0 ); // ( video, x, y, (w), (h) )

  noStroke();
  for (let i = 0; i < poses.length; i++) {
    console.log(poses[i].pose.keypoints);
  }

  fill(0, 255, 0);
  text('Open the Console window and check the "keypoints" object.', 10, 20);
}

function modelReady() {
  console.log("Model Loaded!");
}
