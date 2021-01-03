const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,canvas;


function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(800,300,400,10);
b1=new Box(800,280,40,80);
b2=new Box(800,280-40,40,80);
b3=new Box(800-80,280,40,80);
b4=new Box(800,280-40,40,80);
b5=new Box(800,280-40,40,80);
b6=new Box(800,280-40,40,80);
b7=new Box(800,280,40,80);
b8=new Box(800,280-40,40,80);
b9=new Box(800-80,280,40,80);
shooter=new Shooter(10,10,50);
Sling = new sling(shooter.body,{x:200,y:100});
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    shooter.display();

    Sling.display();

  drawSprites();    
}

function mouseDragged() {
  console.log("hello");
  Matter.Body.setPosition(shooter.body,{x: mouseX , y: mouseY})

}
function mouseReleased() {

  Sling.fly();


}
function keyPressed(){
  if(keyCode===32){
    console.log("event");
 Sling.attach(shooter.body);
 
 
 
  }
 
 
 
 }