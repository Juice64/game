var player;
var ground;
var obstacle;
var invisibleGround;

function setup() {
    createCanvas(1600, 600);

    player = createSprite(50, 550, 50, 50);
    ground = createSprite(800, 580, 1600, 20);
    invisibleGround = createSprite(800, 580, 1600, 20);
    invisibleGround.visible = false;
    ground.velocityX = -3;
}

function draw() {
    background(180);
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
    
    if (keyDown("space")) {
player.velocityY = -5;
    }
    player.velocityY = player.velocityY + 0.8;
    player.collide(invisibleGround);
    drawSprites();
}