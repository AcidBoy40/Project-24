
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(400,350,30);
	
	ground1 = new ground(400,700,10,100);

	dustbin1 = new dustbin(450,650,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
  ground1.display();
  dustbin1.display();
}



