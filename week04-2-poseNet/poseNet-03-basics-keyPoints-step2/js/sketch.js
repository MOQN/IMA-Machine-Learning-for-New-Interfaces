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
  image( cam, 0, 0 );

  noStroke();
  for (let i = 0; i < poses.length; i++) {
    for (let k = 0; k < poses[i].pose.keypoints.length; k++) {
      // console.log(poses[i].pose.keypoints[k]);
      let point = poses[i].pose.keypoints[k];

      let x = point.position.x;
      let y = point.position.y;
      let score = point.score;
      let partName = point.part;

      fill(255, 0, 0);
      ellipse(x, y, 5, 5);

      text(partName, x + 10, y + 20);
      text(score, x + 10, y + 40);
    }
  }
}

function modelReady() {
  console.log("Model Loaded!");
}
