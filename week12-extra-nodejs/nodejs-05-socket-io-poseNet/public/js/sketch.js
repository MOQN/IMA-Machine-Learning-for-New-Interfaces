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
    fill(255);
    text( frameRate(), 10, 20 );
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
      for (let k = 0; k < poses[i].pose.keypoints.length; k++) {
        let point = poses[i].pose.keypoints[k];

        let data = {};
        data['x'] = point.position.x;
        data['y'] = point.position.y;
        data['sc'] = nf(point.score, 1, 2);
        data['pn'] = point.part;
        socket.emit('connection_name', data);

        noStroke();
        fill(0, 255, 0);
        ellipse(data.x, data.y, 5, 5);
      }
    }
  }
}


function modelReady() {
  console.log("Model Loaded!");
}


function receive(data) {
  //console.log(data);
  if (data.sc > 0.8) {
    if (data.pn == "leftEar") {
      particles.push( new Particle(data.x, data.y, random(1, 3), random(-1, 1)));
    } else if (data.pn == "rightEar") {
      particles.push( new Particle(data.x, data.y, random(-3, -1), random(-1, 1)));
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
