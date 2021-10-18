+
function setup() {
  createCanvas(400,400);
  background(51);
  Box.createSprite(200,200,20,20);
}

function draw() 
{



  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  if(keyIsDown(RIGHT_ARROW))
{
   background("red");
}
  
  drawSprites();
}

