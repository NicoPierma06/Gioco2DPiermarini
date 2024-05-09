

 class Nemici{
    constructor(game){
        this.game=game;
        this.x=this.game.width + Math.random() * this.game.width * 0.5;
        this.elimina=false;
    }
    update(){
        this.x-=this.speedX;
        this.y+=this.speedY;
        if(this.x + this.width < 0) this.elimina=true;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);

    }

}

export class NemiciTerra extends Nemici{
    constructor(game){
        super(game);
        this.game=game;
        this.width=90;
        this.height=90;
        this.y=367
        this.speedX= 7;
        this.speedY=0;
        this.image= document.getElementById('nemiciTerra');
    }
    update(){
        super.update();
    }
}

export class NemiciAria extends Nemici{
    constructor(game){
        super(game);
        this.game=game;
        this.width=90;
        this.height=93;
        this.y= 180;
        this.speedX=8.5;
        this.speedY=0;
        this.image= document.getElementById('nemiciAria');
    }
    update(){
        super.update();
    }
    
}
