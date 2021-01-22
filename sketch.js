
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
  roof1 = new Roof(width/2, 200, 250, 20);
  bob1 = new Bob(300,400,20);
  bob2 = new Bob(340,400,20);
  bob3 = new Bob(380,400,20);
  bob4 = new Bob(420,400,20);
  bob5 = new Bob(460,400,20);
  rope1 = new Rope(bob1.body,roof1.body,-100, 0);
  rope2 = new Rope(bob2.body,roof1.body,-60, 0);
  rope3 = new Rope(bob3.body,roof1.body,-20, 0);
  rope4 = new Rope(bob4.body,roof1.body,20, 0);
  rope5 = new Rope(bob5.body,roof1.body,60, 0);


}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("white");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
if (keyCode === 32){
 Body.applyForce(bob1.body, bob1.body.position, {x:50, y:-45})
}
}

