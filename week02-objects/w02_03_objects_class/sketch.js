// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

var circles = [];

function setup() {
  createCanvas(500, 600);
  
  for (var i = 0; i < 10; i++) {
    //initialize values of variables
    //for each iteration
    var x = width / 2;
    var y = 0;
    var dia = random(20, 30);
    var xspd = random(-4, 4);
    var yspd = random(2, 5);
    //create a new Circle object
    //and push it to the circles array
    circles.push( new Circle(x,y,dia,xspd, yspd) );
  }
}

function draw() {
  background(0);

  //for each Circle object in circles array
  for (var i = 0; i < circles.length; i++) {
    //update x and y positions
    circles[i].x += circles[i].xspd;
    circles[i].y += circles[i].yspd;
    //and draw the ellipse
    ellipse(circles[i].x, circles[i].y, circles[i].dia);
  }
}

//Now that there is a Circles class,
//you don't need to maintain a seperate array for each of the attributes
function Circle(x,y,dia,xspd, yspd) {
  this.x = x;
  this.y = y;
  this.dia = dia;
  this.xspd = xspd;
  this.yspd = yspd;
}




//