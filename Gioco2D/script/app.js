import { Player } from "./models/player.js";
import { Comandi } from "./models/comandi.js";
import { Background} from "./models/background.js";
import { NemiciTerra, NemiciAria } from "./models/nemici.js";
import { Punteggio } from "./models/punteggio.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 600;

    class Game{
        constructor(width, height){
            this.width=width;
            this.heghit=height;
            this.speed=3;
            this.background= new  Background(this);
            this.player= new Player(this);
            this.comandi = new Comandi(this);
            this.punteggio = new Punteggio(this);
            this.score=0;
            this.fontColor='black';
            this.nemici =[];
            this.nemiciTimer=0;
            this.nemiciIn= 1000;
        }
        update(){
            this.background.update();
            this.player.update(this.comandi.keys);
            if(this.nemiciTimer > this.nemiciIn){
                this.addNemici();
                this.nemiciTimer=0;
            }else{
                this.nemiciTimer+=10;
            }
            this.nemici.forEach(nemici => {
                nemici.update();
                if(nemici.elimina) this.nemici.splice(this.nemici.indexOf(nemici), 1);
            });

        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.nemici.forEach(nemici => {
                nemici.draw(context);
            });
            this.punteggio.draw(context);
            

        }

        addNemici(){
            this.nemici.push(new NemiciTerra(this));
            this.nemici.push(new NemiciAria(this));
            console.log(this.nemici);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();

});