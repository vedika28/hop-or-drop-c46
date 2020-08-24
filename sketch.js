//declaring all variables:
var block1Img, block2Img, block1, block2, blockGroup;
var bgImg, bg, block = [], plank;
var player, playerAnm, player_jump;
var enemy1, enemy2, enemy = [];
var gameState;
var blockX;

//all images
function preload() {
  block1Img = loadImage("imgs/block1.jpg");
  block2Img = loadImage("imgs/block2.jpg");
  bgImg = loadImage("imgs/bg.jpg");
  enemy1 = loadImage("imgs/rock1.png");
  enemy2 = loadImage("imgs/rock2.png");
  playerAnm = loadAnimation("imgs/c1.png", "imgs/c2.png", "imgs/c3.png",
    "imgs/c4.png", "imgs/c5.png", "imgs/c6.png", "imgs/c7.png", "imgs/c8.png");
  player_jump=loadImage("imgs/c8.png");
}

function setup() {
  createCanvas(1000, 500);
  gameState = "play";

  //creating the bg sprite and adding image:
 /* bg = createSprite((width / 2) + 50, (height / 2) + 140, width, height);
  bg.addImage(bgImg);
  bg.scale = 2.5;*/

  //creating the objects for the classes:
  player = new Player(130, 120, 20, 20);
  plank = new Block(130, 150,100,10);

  block1=new Block((width/2)-100,180,100,10)
  blockGroup = new Group();

  blockX=(width/2)-400;

}

function draw() {
  background(bgImg);

  //to give endless running world effect:
   /*bg.velocityX = -3;
   if (bg.x < 200) {
     bg.x = width / 2;
   }*/

   camera.position.x=player.body.position.x;
  // camera.position.y=player.body.position.y;

  if (frameCount%50===0) {
    blockX=blockX+300;
    block.push(new Block(blockX, 180,100,10));
  }

   //creating enemy:
  var rand3 = random(20, 200)
  if (frameCount % 300 === 0) {
    enemy = new Enemy(rand3, -20,);
  }

  if (enemy.body) {
    player.die();
  }
  
  //adding behaviour to player.
  player.behaviour();
  
  //creating the planks for the game:
  var rand = random(150, 240);
  /*if (frameCount % 50 === 0) {
    block.push(new Block(width + 20, rand));
  }*/
  
  //adding behaviour to block and making player collide with it.
  if (block.length > 0) {
    for (var i = 0; i < block.length; i++) {
      block[i].behaviour();
      blockGroup.add(block[i].body);

     // console.log(plank.body.y);
     /* if (player.body.x < block[i].body.x) {
        if (block[i].body.x - player.body.x <= 10) {
          block[i].body.collide(player.body);
        }
      }
     // console.log(player.body.y)
      if (player.body.isTouching(block[i].body)) {
        if (player.body.y+45<=block[i].body.y) {
          block[i].body.collide(player.body);
        }        
      }*/
    }
  }

  console.log(gameState);

  /*making player collide with plank so that it doesn't fall in the
  beginning of the game.*/

  for (var i=0; i<block.length; i++) {
    player.body.collide(block[i].body);
  }
  player.body.collide(plank.body);
  player.body.collide(block1.body);

  drawSprites();
  text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);
}