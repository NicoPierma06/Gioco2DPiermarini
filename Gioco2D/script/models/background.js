class Layer{
    constructor(game, width, height, backSpeed, image){
        this.game=game;
        this.width=width;
        this.height=height;
        this.backSpeed=backSpeed;
        this.image=image;
        this.x=0;
        this.y=0;
        
    }
    update(){
        if(this.x < -this.width) this.x=0;
        else this.x -= this.game.speed * this.backSpeed;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}  

export class Background{
    constructor(game){
        this.game= game;
        this.width= 800;
        this.height = 600;
        this.layer2image = document.getElementById('layer2');
        this.layer1image = document.getElementById('layer1');
        this.layer1 = new Layer(this.game, this.width, this.height, 1, this.layer2image);
        this.layer2 = new Layer(this.game, this.width, 450, 0.5, this.layer1image);
        this.backgroundLayers = [this.layer1, this.layer2];

    }
    update(){
        this.backgroundLayers.forEach(layer => {
            layer.update();
        });
    }
    draw(context){
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        });  
    }
}