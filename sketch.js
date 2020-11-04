
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;

var ground;

function setup() {

	createCanvas(1200, 500);

	ground = new Ground();

}


function draw() {

  background("black");

  ground.display();
 
}



