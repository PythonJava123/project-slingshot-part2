class Ball{
  constructor(x,y,radius,angle){
    var options = {

      isStatic: true

    }
    var body;
    this.radius = radius;
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
  }
  display(){
    ellipse(this.body.position.x, this.body.position.y, 50);
    ellipseMode(CENTER);
    fill("red");
  }
}