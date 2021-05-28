var bullet, wall;
var speed, weight;
var thickness;


 
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,10)
  bullet.shapeColor="white"
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80)
bullet.velocityX=speed;

}

function draw() {
  background(120,48,117);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
var deformation=0.5 *weight*speed*speed/22500;
 if(deformation<180)
 {
   bullet.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100)
 bullet.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    bullet.shapeColor=color(0,255,0)
  }
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  drawSprites();
}
function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
  return false;
}
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


  if (damage>10){
    wall.shapeColor=color(225,0,0)
  }
}