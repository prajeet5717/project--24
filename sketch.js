const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new dustbin(740,600,10,80);
	dustbin2 = new dustbin(600,600,10,80);
	dustbin3 = new dustbin(670,640,150,17);
	ground = new Ground(600,height,1200,20) 
	paperObject = new dustbin(140,600,10,10);
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);


  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display(); 
  paperObject.display();
  ellipse(140,600,15,15)

  //Matter.paper1.circle(140,600,5,{options},{maxSides});
keyPressed();
  drawSprites(); 
}

function keyPressed() {
   if (keyCode === UP_ARROW) {

   matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

   }

}