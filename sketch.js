var canvas;
var music;

var fixedRect, movingRect;
var gameobject1 , gameobject2 , gameobject3 , gameobject4 

function preload(){
    music = loadSound("music.mp3");
}


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600,400,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = false;
  gameobject1 = createSprite(100,200,50,50)
  gameobject1.shapeColor = "pink"
  gameobject2 = createSprite(1100,200,50,50)
  gameobject2.shapeColor = "yellow"
  gameobject3 = createSprite(100,700,50,50)
  gameobject3.shapeColor = "green"
  gameobject4 = createSprite(100,200,50,50)
  gameobject4.shapecolor = "white"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();

  if(isTouching(movingRect,gameobject2)){
    movingRect.shapeColor = "red";
    gameobject2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "blue";
    gameobject2.shapeColor = "yellow";
  }

  if(isTouching(movingRect,gameobject1)){
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "blue";
    gameobject1.shapeColor = "pink";
  }

  if(isTouching(movingRect,gameobject3)){
    movingRect.shapeColor = "red";
    gameobject3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "blue";
    gameobject3.shapeColor = "pgreen";
  }

  if(isTouching(movingRect,gameobject4)){
    movingRect.shapeColor = "red";
    gameobject4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "blue";
    gameobject4.shapeColor = "white";
  }
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true
}
else {
  return false
}
}

