
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fan1, fan2, fan3 , fan4 ;
var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  fan1 = new Ground(50, 370, 50, 30);
  fan2 = new Ground(150, 370, 50, 30);
  fan3 = new Ground(250, 370, 50, 30);
  fan4 = new Ground(350, 370, 50, 30);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("red");
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
fan1.show();
fan2.show();
fan3.show();
fan4.show(); 
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  //Static = fixo, parado
//Dynamic = inverso
//pop= volta para as config. antigas
//push= pegar novas funções.
//translate = fala as posiçôes x e y para o PUSH

//para criar {ellipse(ou rect)(ball.position.x, ball.position.y, 20);}
//para desenhar {qualquer coisa = Bodies.a forma desejada(100, 10, 20, qualquer coisa_options);}
//QQ OBJETOMode(CENTER(POSIÇÃO ONDE ELE VAI FICAR))
//  fan1[nome] = new Ground[classe](50,370,50,30[posiçoes]);