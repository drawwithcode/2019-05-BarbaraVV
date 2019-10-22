// microphone variable
var mic;

// rotation variable
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create an Audio Input
  mic = new p5.AudioIn();

  // start the Audio Input
  mic.start();

  // mode of the rectangle and the angle
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw() {

  // color of the background
  background(0, 0, 153);

  // get the volume
  var vol = mic.getLevel();
  vol = map(vol, 0, 1, 25, 1000);

  // create circle
  push();
  noStroke();
  fill(0, 0, 255);
  rect(width / 2, height / 2, vol, vol);
  pop();

  // rotating triangles when mouseispressed
  push();
  if (mouseIsPressed) {
    var c = cos(angle);
    angle = angle + 0.5; // increase the angle
    translate(width / 2, height / 2); // translate in the center of the canvas
    rotate(c * -45); // apply rotation
    noFill();
    stroke(51, 51, 255);
    strokeWeight(2);
    rect(0, 0, 100, 100);
  } else {
    translate(width / 2, height / 2); // translate in the center of the canvas
    noFill();
    stroke(51, 51, 255);
    strokeWeight(2);
    rect(0, 0, 100, 100);
  }
  pop();

  push();
  if (mouseIsPressed) {
    var c = cos(angle);
    angle = angle + 0.5; // increase the angle
    translate(width / 2, height / 2); // translate in the center of the canvas
    rotate(c * 90); // apply rotation
    noFill();
    stroke(102, 102, 255);
    strokeWeight(2);
    rect(0, 0, 200, 200);
  } else {
    translate(width / 2, height / 2); // translate in the center of the canvas
    noFill();
    stroke(102, 102, 255);
    strokeWeight(2);
    rect(0, 0, 200, 200);
  }
  pop();

  push();
  if (mouseIsPressed) {
    var c = cos(angle);
    angle = angle + 0.5; // increase the angle
    translate(width / 2, height / 2); // translate in the center of the canvas
    rotate(c * -135); // apply rotation
    noFill();
    stroke(153, 153, 255);
    strokeWeight(2);
    rect(0, 0, 300, 300);
  } else {
    translate(width / 2, height / 2); // translate in the center of the canvas
    noFill();
    stroke(153, 153, 255);
    strokeWeight(2);
    rect(0, 0, 300, 300);
  }
  pop();

  push();
  if (mouseIsPressed) {
    var c = cos(angle);
    angle = angle + 0.5; // increase the angle
    translate(width / 2, height / 2); // translate in the center of the canvas
    rotate(c * 180); // apply rotation
    noFill();
    stroke(204, 204, 255);
    strokeWeight(2);
    rect(0, 0, 400, 400);
  } else {
    translate(width / 2, height / 2); // translate in the center of the canvas
    noFill();
    stroke(204, 204, 255);
    strokeWeight(2);
    rect(0, 0, 400, 400);
  }
  pop();

  push();
  if (mouseIsPressed) {
    var c = cos(angle);
    angle = angle + 0.5; // increase the angle
    translate(width / 2, height / 2); // translate in the center of the canvas
    rotate(c * -225); // apply rotation
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    rect(0, 0, 500, 500);
  } else {
    translate(width / 2, height / 2); // translate in the center of the canvas
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    rect(0, 0, 500, 500);
  }
  pop();

}
