const Engine = Matter.Engine,
const World = Matter.World,
const Bodies = Matter.Bodies;

var backgroundImg;
var snow = [];

    function preload( ) {
          backgroundImg = loadImage("snow3.jpg");
      }
    
function setup() {
  createCanvas(1200,1000);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
//creating snow
  for(var a = 50; a <=width; a=a+20){

  
  }
}

function draw() {
  background(backgroundImg); 

  if(frameCount % 20 === 0){ 
    snow.push(new Snow(random (10,1000),10));
  }
  
  Engine.update(engine);

  for (var a = 0; a < snow.length; a++) {
    
 snow[a].display();
}
  
  drawSprites();
}
