// Drawing (FOREST)
var barn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //load images
  barn = loadImage("images/barn.png");
}

function draw() {
  background(66, 122, 138); //set bg color

  //DRAW OBJECTS
  drawStructures();
  drawGround();
}

function drawGround() {
  rectMode(CORNER);
  fill(0,0,0);
  rect(0,height/3*2,width,300);
}

function drawStructures() {
  var offset = mouseX/8;
  image(barn,width/2-offset,height/3*2-138);
}

