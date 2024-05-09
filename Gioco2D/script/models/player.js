export class Player {
    constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 120;
        this.x = 0;
        this.y = 340;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 10;
        this.arrowDownPressed = false; 
        this.isFire = false; 
    }
    update(comandi) {
        this.checkCollisions();
        this.x += this.speed;

        
        if (comandi.includes('ArrowDown')) {
            this.arrowDownPressed = true;
        } else {
            this.arrowDownPressed = false;
        }

        
        if (this.arrowDownPressed) {
            this.speed = 0; 
        } else {
            if (comandi.includes('ArrowRight')) this.speed = this.maxSpeed;
            else if (comandi.includes('ArrowLeft')) this.speed = -this.maxSpeed;
            else this.speed = 0;
        }

        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        if (comandi.includes('ArrowUp') && this.aTerra() && !this.arrowDownPressed) this.vy -= 20; 
        this.y += this.vy;
        if (!this.aTerra()) this.vy += this.weight;
        else this.vy = 0;

        if (comandi.includes('ArrowDown')) {
            this.image = document.getElementById('fuoco');
            this.isFire = true; 
        } else {
            this.image = document.getElementById('player');
            this.isFire = false; 
        }
    }
    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    aTerra() {
        return this.y >= 340;
    }

    checkCollisions() {
        this.game.nemici.forEach(nemico => {
            if (this.isFire && nemico.x < this.x + this.width &&
                nemico.x + nemico.width > this.x &&
                nemico.y < this.y + this.height &&
                nemico.y + nemico.height > this.y) {
                nemico.elimina = true;
                this.game.score++;
            } else if (!this.isFire && nemico.x < this.x + this.width &&
                nemico.x + nemico.width > this.x &&
                nemico.y < this.y + this.height &&
                nemico.y + nemico.height > this.y) {
                this.game.gameOver();
                
            }
        });
    }
}
