
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var gr, left, right;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
ball=Bodies.circle(260,100,40,ball_options)
World.add(world,ball)
gr=new ground(width/2,650,width,30);
left=new ground(1100,600,20,120);
right=new ground(1400,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40)
  gr.display();
  right.display();
  left.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


