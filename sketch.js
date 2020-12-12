const Engine = Matter.Engine;
 const World= Matter.World
 const Bodies = Matter.Bodies

 // ground
 var ground

 
 
 //plinko
 var plinko

var particles=[]

var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(600,700);
  engine = Engine.create()
    world = engine.world;
    
    
   // var plinkos=[];
   //ground
  ground = new Ground(600,670,1300,20);

  //division
  for(var L =0;L <=width; L = L+100){
    divisions.push(new Division(L, height-divisionHeight/1.6, 10, divisionHeight));
  }
  //plinko
  for(var d =40; d <=width; d = d+50){
    plinkos.push(new Plinko (d,75));
  }
  for(var d =70; d <=width+5; d = d+40){
    plinkos.push(new Plinko (d,115));
  }
  for(var d =30; d <=width-50; d = d+50){
    plinkos.push(new Plinko (d,155));
  }
  for(var d =50; d <=width-50; d = d+40){
    plinkos.push(new Plinko (d,225));
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine); 
 
  // ground
  fill("green")
  ground.display();
  //division
  for(var L =0; L < divisions.length; L++){
    fill("white")
     divisions[L].display();
     }

 
  //plinko
   for(var d =0; d < plinkos.length; d++){
    fill("red")
     plinkos[d].display()
   }
   if(frameCount%50===0){
    particles.push(new Particle(random(10, 800), 10,10));
    
    
}
for(var j =0; j < particles.length; j++ ){
  
  particles[j].display()
}
}