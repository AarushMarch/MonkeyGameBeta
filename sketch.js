var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600)
  monkey = createSprite(50, 500, 20, 20);
  monkey.addAnimation("run", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(300, 550, 800, 10);
  monkey.collide(ground);
  
  bananaGroup = new Group();
}


function draw() {
  background("white")
  console.log(mouseY)
 
  if(gameState === PLAY){
    //jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 513) {
        monkey.velocityY = -12;

  }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(frameCount % 80 === 0){
    spawnBanana();
  }
  
  monkey.collide(ground);
  drawSprites();
  }
  
  if(gameState === END){
    
  }
}


function spawnBanana(){
  var y = Math.round(random(410, 480))
  banana = createSprite(610, y, 20, 20)
  banana.addImage("banana", bananaImage)
  banana.velocityX = -5
  banana.lifetime = 600/banana.velocityX
  banana.scale = 0.1
  bananaGroup.add(banana)
}



