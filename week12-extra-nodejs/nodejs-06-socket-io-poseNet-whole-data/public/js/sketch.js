console.log('ml5 version:', ml5.version);
let answer = confirm("PoseNet?");


let socket;

let cam;
let poseNet;
let poses = [];

let particles = [];


function setup() {
  createCanvas(640, 480);
  background(100);

  if (answer) setupPoseNet();

  // socket io
  socket = io.connect('127.0.0.1:3000');
  socket.on('connection_name', receive);
}


function draw() {
  background(100);

  if (answer) {
    updatePoseNet();
  } else {
    // update and display particles
    for (let i=0; i<particles.length; i++) {
      let p = particles[i];
      p.move();
      p.display();
    }
    // limit the number of particles
    if (particles.length > 400) {
      particles.splice(0, 1);
    }
  }
}


function setupPoseNet() {
  // webcam
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
  // poseNet
  poseNet = ml5.poseNet(cam, modelReady);
  poseNet.on( 'pose', function(results){
    poses = results;
  } );
}
function updatePoseNet() {
  image( cam, 0, 0 );

  if (poses != undefined ) {
    for (let i = 0; i < poses.length; i++) {
      socket.emit('connection_name', poses[i]);
    }
  }
}


function modelReady() {
  console.log("Model Loaded!");
}


function receive(data) {
  console.log(data);
  for (let k = 0; k < data.pose.keypoints.length; k++) {

    let point = data.pose.keypoints[k];

    let x = point.position.x;
    let y = point.position.y;
    let score = point.score;
    let partName = point.part;

    if (score > 0.8) {
      if (partName == "leftEar") {
        particles.push( new Particle(x, y, random(1, 3), random(-1, 1)));
      } else if (partName == "rightEar") {
        particles.push( new Particle(x, y, random(-3, -1), random(-1, 1)));
      }
    }

  }
}



class Particle {
  constructor(x, y, xspd, yspd) {
    this.x = x;
    this.y = y;
    this.xspd = xspd;
    this.yspd = yspd;
    this.size = random(5, 12);
    this.color = color(random(255),random(255),random(255));
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
  move() {
    this.x += this.xspd;
    this.y += this.yspd;
  }
}
