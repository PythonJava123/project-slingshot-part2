const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, body, world;
var ball,box,box1,box2,box3,ground;
var sling;
var gameState = "sling";

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    //ground = new Ground(600,390,1200,20);

    ground = new Ground(900,590,600,20);
    ground2 = new Ground(900,290,380,20);

    boxA = new Square(810,255,50,50);
    boxB = new Square(830,255,50,50);
    boxC = new Square(905,255,50,50);
    boxD = new Square(860,205,50,50);
    boxE = new Square(820,205,50,50);
    boxF = new Square(840,155,50,50);

    ball = new Ball(400,400,5);

    box = new Square(755,555,50,50);
    box1 = new Square(810,555,50,50);
    box2 = new Square(830,555,50,50);
    box3 = new Square(905,555,50,50);
    box4 = new Square(825,505,50,50);
    box5 = new Square(820,505,50,50);
    box6 = new Square(830,505,50,50);
    box7 = new Square(840,455,50,50);
    box8 = new Square(815,455,50,50);
    box9 = new Square(825,405,50,50);

    sling = new Slingshot(ball.body,{x:400, y:400});

}

function draw(){
    background("grey");

    Engine.update(engine);

    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    boxA.display();
    boxB.display();
    boxC.display();
    boxD.display();
    boxE.display();
    boxF.display();

    sling.display();

    ball.display();

    ground.display();
    ground2.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY});

    }

function mouseReleased(){
    
    sling.fly(); 

}
