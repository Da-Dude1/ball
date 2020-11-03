
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom,sides1,sides2,ground,paper 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var groundOptions ={
		isStatic:true
	}

	ground=Bodies.rectangle(width/2,680,800,10,groundOptions)

	var bottomOptions ={
		isStatic: true
	}

	bottom=Bodies.rectangle(600,660,200,20,bottomOptions)
	World.add(world,bottom)

	sides1=Bodies.rectangle(490,620,20,100,bottomOptions)
	World.add(world,sides1)
	sides2=Bodies.rectangle(700,620,20,100,bottomOptions)
	World.add(world,sides2)

	var paperOptions ={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density: 1.2
		
	}
	
	paper=Bodies.circle(20,650,10,paperOptions)
	World.add(world,paper)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(paper.position.x,paper.position.y,10,10)
  rect(sides1.position.x,sides1.position.y,20,100)
  rect(sides2.position.x,sides2.position.y,20,100)
  rect(ground.position.x,ground.position.y, 800,10)
  rect(bottom.position.x,bottom.position.y, 200,20)
  keyPressed()
 
  drawSprites();

 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body,position,{x:100,y:-100})

	}

}

