var car, wall;
var speed, weight;

function setup() {
  createCanvas(800, 400);
  speed = random(20, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(750, 200, 60, 300);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background('rgba(100%,0%,100%,0.5)');

  if (wall.x - car.x <= (wall.width + car.width) / 2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation > 180) {
      car.shapeColor = rgb(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = rgb(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = rgb(0, 255, 0);
    }
  }

  if (speed > (wall.x - car.x )) {
    car.x=wall.x-30;
  }

  drawSprites();
}