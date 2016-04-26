// Drawing (FOREST)
var trees = [];
var barn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //load objects
  for (var i = 0; i < 100; i++) {
    trees[i] = new Tree(i, random(10,30), random(20,180));
  }

  //load images
  barn = loadImage("images/barn.png");
  drawBackProps();
}

function draw() {
  background(66, 122, 138); //set bg color

  //DRAW OBJECTS
  drawBackProps();
  drawStructures();
  drawFrontProps();
  drawGround();
}

function drawGround() {
  var offsetY = mouseY/16;
  rectMode(CORNER);
  fill(0,0,0);
  rect(0,height/4*3-offsetY,width,300);
}

function drawStructures() {
  var offsetX = mouseX/16;
  var offsetY = mouseY/16;
  image(barn,width/2-offsetX,height/4*3-138-offsetY);
}

function drawBackProps() {
  //trees
  rectMode(CORNER);
  for (var i = 0; i < 100; i++) {
    trees[i].display();
    trees[i].move();
  }
}

function drawFrontProps() {
  //trees
}

function Tree(position,width,opacity) {
  var posX = 15+(position*40);
  this.display = function() {
    fill(0,0,0,opacity);
    rect(posX, 0, width, height);
  }
  this.move = function() {
    posX = 15+(position*40) - mouseX/8;
  }
}
