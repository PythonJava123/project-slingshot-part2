class Square {
  constructor(x,y,width,height,angle){
 
    var options = {
     'restitution':0.8,
     'friction':1.0,
     'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,angle,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
   push();
   var angle = this.body.angle;
   translate(this.body.position.x, this.body.position.y);
   rotate(angle);
   rect(0, 0, this.width, this.height);
    rectMode(CENTER);   
    fill("blue");
    pop();
  }
}