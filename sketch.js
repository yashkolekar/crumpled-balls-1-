
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box,box1,box2
function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(115,575,20,20)	
	ground = new Ground(400,610,800,10)
    box = new dustbin(550,583,60,10)
	box1 = new dustbin(610,610,10,110)
	box2 = new dustbin(670,583,60,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ball.display();
  box.display();
  box1.display();
  box2.display();
  
  drawSprites();
  
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
		
	  }
}


