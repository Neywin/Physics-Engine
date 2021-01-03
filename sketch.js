const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object, ground;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 var options = {
   isStatic: true
 }

 var options2 = {
   restitution: 0.8
 }
  object = Bodies.rectangle(200,200,10,50,options2);
  ground = Bodies.rectangle(400,360,800,10,options);
  World.add(world,ground);
  World.add(world,object);

}


function draw() {
  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,10,50);
  rect(ground.position.x,ground.position.y,800,10);
  drawSprites();
}