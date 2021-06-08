class ball{
    constructor(x,y){
        var option={
        restitution:0.5,
        friction:0.5,
        density:0.5
        }
        this.body=Bodies.circle(x,y,20,option);
        World.add(world,this.body);
    }
    display(){
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,20,20);
    }
}
