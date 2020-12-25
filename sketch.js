//Creating Variables
var wall, bullet;
var speed, weight, thickness;

function setup() {
  //canvas
  createCanvas(1600, 400);

  // Giving The Values
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  //Creating Bullet
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  
  //Creating Wall
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="green";
}

function draw() {
  background("black");  

  //Creating Collision detection
  if (hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10) {
      wall.shapeColor=color(255, 0, 0);
    }

    if (damage<10) {
      wall.shapeColor=color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}