let video;
let poseNet;
let poses;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function (results) {
    poses = results;
  });
}


function draw() {
  background(0);
  image(video, 0, 0);

  if (poses != undefined ) {
    for (let i = 0; i < poses.length; i++) {
      // console.log( poses[i].pose.keypoints ); // take a look at this first

      for (let j=0; j< poses[i].pose.keypoints.length; j++) {

        // console.log( poses[i].pose.keypoints[j] ); // then this!
        let partname = poses[i].pose.keypoints[j].part;
        let score = poses[i].pose.keypoints[j].score;
        let x = poses[i].pose.keypoints[j].position.x;
        let y = poses[i].pose.keypoints[j].position.y;

        if (partname == "leftEye" || partname == "rightEye") {
          if (score > 0.8) {
            noStroke();
            fill(255);
            ellipse(x, y, 30, 30);
            fill(0);
            ellipse(x + sin(frameCount * 0.5)*5, y, 20, 20);
          }
        }
      }
    }
  }
}


function modelReady() {
  console.log("Model Ready!");
}
