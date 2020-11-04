class Ground{

    constructor(){

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(600,475,1200,20,options);
        this.width = 1200;
        this.height = 20;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }

}