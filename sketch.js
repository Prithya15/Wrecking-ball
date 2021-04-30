const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint







function setup() {
  createCanvas(600,400);
  //createSprite(400, 200, 50, 50);

  engine=Engine.create()
  world=engine.world
  
  ground=new Ground(0,400,1200,15)
  ball=new Ball(200,300,35)
  box1=new Box(400,300,40,40)
  box2=new Box(400,270,40,40)
  rope=new Rope(ball.body,{x:200,y:0})
 
}

function draw() {
  background("lightblue");
  Engine.update(engine)
  
  ball.display()
  box1.display()
  box2.display()
  rope.display()
  ground.display()
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
