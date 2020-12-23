var bullet, wall
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223, 321));
  weight=Math.round(random(30, 52));
  thickness=Math.round(random(22, 83));

  bullet=createSprite(50, 200, 60, 10);
  bullet.shapeColor="cyan";
  bullet.velocityX=speed;
  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=255;
}

function draw() {
  background(0);  
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  console.log(damage);
  if(damage<10){
    wall.shapeColor="green"
  }
  if(damage>10){
    wall.shapeColor="red"
  }
  if(bullet.x>1450){
    bullet.velocityX=0;
  }
  drawSprites();
}