var iss;
var spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4;
var issImg,spaceImg;
var spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;
var hasDocked = false;




function preload(){
  issImg = loadImage("images/iss.png");
  spaceImg = loadImage("images/spacebg.jpg");
  spaceCraftImg1 = loadImage("images/spacecraft1.png");
  spaceCraftImg2 = loadImage("images/spacecraft2.png");
  spaceCraftImg3 = loadImage("images/spacecraft3.png");
  spaceCraftImg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
 spaceCraft1 = createSprite(285, 240);
 spaceCraft1.addImage("spaceCraft1",spaceCraftImg1);
 spaceCraft1.scale =0.15;
 iss = createSprite(330,130);
 iss.addImage("iss",issImg);
 iss.scale =0.25;
  
}

function draw() {
  background(spaceImg);
  if(!hasDocked){
    spaceCraft1.x = spaceCraft1.x+random(-1,1);

    if(keyDown(UP_ARROW)){
      spaceCraft1.y = spaceCraft1.y-2;
    }
    if(keyDown(LEFT_ARROW)){
      spaceCraft1.addImage("spaceCraft4",spaceCraftImg4);
      spaceCraft1.x = spaceCraft1.x-1;
    }
    if(keyDown(RIGHT_ARROW)){
     spaceCraft1.addImage("spaceCraft3",spaceCraftImg3);
     spaceCraft1.x = spaceCraft1.x+1;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft1.addImage("spaceCraft2",spaceCraftImg2);
    }
  }  
  if(spaceCraft1.y<=(iss.y+70) && spaceCraft1.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }

  
  drawSprites();
}