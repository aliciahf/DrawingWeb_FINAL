// Drawing (FOREST)
var trees_BG = [];
var barn, bush1, bush2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //load objects
  for (var i = 0; i < 100; i++) {
    trees_BG[i] = new Tree(i, random(10,30), random(20,180));
  }

  //load images
  barn = loadImage("images/barn.png");
  bush1= loadImage("images/bush1.png");
  bush2= loadImage("images/bush2.png");

  drawBackProps();
}

function draw() {
  background(66, 122, 138); //set bg color

  //DRAW OBJECTS
  drawBackProps();
  drawStructures();
  drawFrontProps();
  drawGround();
  setMood();
}

function drawGround() {
  //grass
  var offsetY = mouseY/16;
  rectMode(CORNER);
  fill(0,0,0);
  rect(0,height/4*3-offsetY,width,300);

  //road
  var offsetX = mouseX/8;
  var offsetY = mouseY/16;
  fill(70, 122, 140, 70);
  quad(width/2-80+offsetX*2, height, //bottom left
    width/2+100+offsetX*3, height, //bottom right
    width/2+85-offsetX/2, height/4*3-offsetY, //top right
    width/2+65-offsetX/2, height/4*3-offsetY); //top left
}

function drawStructures() {
  var offsetX = mouseX/16;
  var offsetY = mouseY/16;
  image(barn,width/2-offsetX,height/4*3-138-offsetY);

  //door
  rectMode(CENTER);
  if (mouseX < width/2+75-offsetX + 7 && //right bound
    mouseX > width/2+75-offsetX - 7 && //left bound
    mouseY < height/4*3-13-offsetY + 13 && //top bound
    mouseY > height/4*3-13-offsetY - 13) { //bottom bound
    fill(255, 153, 51);
  } else {
    fill(0,0,0);
  }
  rect(width/2+75-offsetX, height/4*3-13-offsetY, 14, 26);

  //orb
  stroke(255, 153, 51);
  strokeWeight(30);
  point(width/2+75-offsetX,130);
  noStroke();
}

function drawBackProps() {
  //trees_BG
  rectMode(CORNER);
  for (var i = 0; i < trees_BG.length; i++) {
    trees_BG[i].display();
    trees_BG[i].move();
  }
}

function drawFrontProps() {
  var offsetX = mouseX/16;
  var offsetY = mouseY/16;
  rectMode(CORNER);

  //mid trees
  fill(35, 53, 61, 255);
  rect(width/5*4-offsetX, 0, 40, height);
  rect(width/5*4+50-offsetX, 0, 40, height);
  rect(width/5*4+180-offsetX, 0, 40, height);
  fill(23, 36, 41,255);
  rect(width/7-offsetX, 0, 40, height);
  rect(width/7+50-offsetX, 0, 40, height);
  rect(width/5+180-offsetX, 0, 40, height);

  //mid shrubs
  offsetX = mouseX/24;
  offsetY = mouseY/16;
  image(bush2,width/4+42-offsetX, height/4*3-82-offsetY);
  image(bush1,width/4+30-offsetX/2, height/4*3-82-offsetY);

  //top shrubs/trees
  offsetX = mouseX/32;
  offsetY = mouseY/16;
  fill(0,0,0,255);
  rect(width/5+offsetX, 0, 50, height);
  rect(width/5+80+offsetX, 0, 50, height);
  rect(width/5*4+offsetX, 0, 50, height);
  rect(width/5*4+80+offsetX, 0, 50, height);

   image(bush1,width/6+offsetX*2, height/4*3-82-offsetY);
}

function setMood() { //color overlay
  rectMode(CORNER);
  fill(220,20,0,20);
  rect(0,0,width,height);
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

function mouseClicked() {
  var offsetX = mouseX/16;
  var offsetY = mouseY/16;
  if (mouseX < width/2+75-offsetX + 7 && //right bound
    mouseX > width/2+75-offsetX - 7 && //left bound
    mouseY < height/4*3-13-offsetY + 13 && //top bound
    mouseY > height/4*3-13-offsetY - 13) { //bottom bound

    window.location = "http://kentuckyroutezero.com/phonebooth.wrongle";
  }
}
