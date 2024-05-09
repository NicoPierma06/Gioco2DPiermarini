export class Punteggio {
    constructor(game){
        this.game=game;
        this.fontSize=100;
        this.fontFamily= 'Calibri';
    }
    draw(context){
        context.font = this.fontSize + 'px' + this.fontFamily;
        context.textAlign= 'left';
        context.fillStyle = this.game.fontColor;
        context.fillText('score: ' + this.game.score, 20, 20);
    }
}