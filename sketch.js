
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground,boyImage,boy;
var stone,mango1,mango2,mango3,mango4,mango5,elastic;

function preload()
{
	boyImage=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	boy= createSprite(120,600,70,70);
	boy.addImage(boyImage);
	boy.scale=0.09;

	//Create the Bodies Here.
	tree = new Tree(650,413,300,500);
	ground = new Ground(400,670,800,30);
	

	stone = new Stone(67,550,40,40);
	stone.scale=3;

	mango1 = new Mango(650,240,40,40);
	mango2 = new Mango(600,290,40,40);
	mango3 = new Mango(710,300,40,40);
	mango4 = new Mango(760,340,40,40);
	mango5 = new Mango(600,370,40,40);
	
	elastic = new Elastic(stone.body,{x:70, y:550});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 211, 234);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();



  //console.log(tree)

  drawSprites();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
    elastic.fly();
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone.body,{x:70, y:550})
        elastic.attach(stone.body);
    }
}


function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		console.log(distance);
	}
}


