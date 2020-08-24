class Player {

    constructor(x, y, w, h) {

        this.body = createSprite(x, y, w, h);
        this.body.addAnimation("walking", playerAnm);
        this.body.debug = true;
        this.body.setCollider("rectangle", 0, 0, 40, 70);
    }

    behaviour() {
        if (keyDown("UP_ARROW")) {
            this.body.velocityY = -10;
            this.body.addImage(player_jump);
        }
        this.body.velocityY += 1;

        if (keyDown("RIGHT_ARROW")) {
            this.body.velocityX = 4;
        }

        if (this.body.position.y > 180) {
            gameState = "end";
        }
    }

    die() {
        if (this.body.isTouching(enemy.body)) {
            gameState = "end";
        }
    }

    shield() {
        if (keyDown("space")) {

        }
    }
}