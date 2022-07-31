var box, boximage
function preload() {
  boximage = loadImage("R.png")
}

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
  box.addImage("box", boximage)
  edges = createEdgeSprites()
  //box.shapeColor = "blue"
  box.scale = 0.1
}

function draw() 
{
  background(50);
  if (keyDown(UP_ARROW)) {
    box.y = box.y - 3
  }
  if (keyDown(DOWN_ARROW)) {
    box.y = box.y + 3
  }
  if (keyDown(LEFT_ARROW)) {
    box.x = box.x - 3
  }
  if (keyDown(RIGHT_ARROW)) {
    box.x = box.x + 3
  }
  //box.bounceOff(edges)
  drawSprites()

}




