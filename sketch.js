var garden, gardenImg
var rabbit, rabbitImg
var apple, appleImg
var orangeLeaf, orangeLeafImg
var redLeaf, redLeafImg
var leaf, leafImg

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeLeafImg = loadImage("orangeLeaf.png")
  redLeafImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png");
}

function setup()
{
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}


function draw() 
{
  background(0);
  
  createEdgeSprites();
  rabbit.x = World.mouseX;


var select_sprites = Math.round(random(1,4))
if (frameCount % 80 === 0){
  if (select_sprites == 1){
    createApples();
  }
  else if(select_sprites == 2){
    createRedLeaves();
  }

  else if(select_sprites == 3){
    createLeaves();
  }
  
  
  else{
    createOrangeLeaves();
  }
    
}

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 2;
  apple.lifetime = 160;

}

function createOrangeLeaves(){
  orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 160;

}

function createLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 2;
  leaf.lifetime = 160;

}

function createRedLeaves(){
  redLeaf = createSprite(random(50, 350), 40, 10, 10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.1;
  redLeaf.velocityY = 2;
  redLeaf.lifetime = 160;

}
  

