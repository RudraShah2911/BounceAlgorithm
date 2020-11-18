var fixedRect, movingRect
var obj1,obj2


function setup() {
  createCanvas(800,400);
  obj1 = createSprite(100,100,50,70);
  obj2 = createSprite(300,100,50,70);
 /* fixedRect = createSprite(400, 200, 70, 50);
  fixedRect.shapeColor = ("blue")
  movingRect = createSprite(300,200,70,50)
  movingRect.shapeColor = ("blue")*/

  obj1.velocityX = 2
  obj2.velocityX = -2
}

function draw() {
  background(255,255,255);  
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 &&
    obj2.x - obj1.x < obj1.width/2 + obj2.width/2){
     obj1.velocityX = obj1.velocityX*(-1);
     obj2.velocityX = obj2.velocityX*(-1);
    }
    if (obj1.y -obj2.y < obj1.height/2 + obj2.height/2 &&
      obj2.y - obj1.y < obj1.height/2 + obj2.height/2){
        obj1.velocityY = obj1.velocityY*(-1);
        obj2.velocityY = obj2.velocityY * (-1)
      }

/*movingRect.x = World.mouseX
movingRect.y = World.mouseY

console.log(movingRect.x - fixedRect.x)

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = ("red")
  movingRect.shapeColor = ("red")
} 
  else {
    fixedRect.shapeColor = ("blue")
    movingRect.shapeColor = ("blue")
  }*/
  drawSprites();
}