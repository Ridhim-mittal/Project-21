var bullet,wall;

var speed,weight;

var thickness;










function setup() {
  createCanvas(1200,400);

  
 bullet = createSprite(10,200,80,10);
 bullet.shapeColor ="pink";

 thickness = random(22,83);


 wall = createSprite(1100,200,thickness,300);
 wall.shapeColor = "white";

 speed = random(223,321);

 weight = random(30,52);


 
}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed/7;

  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
   if(damage > 10){
   wall.shapeColor = "red";
    }

   if (damage < 10){
    
    wall.shapeColor = "green";
    
   }
  



  }

  drawSprites();

} 


function hasCollided(lbullet,lwall){


  bulletRightEdge = lbullet.x + lbullet.width;

  wallLeftEdge = lwall.x ;

  if(bulletRightEdge>=wallLeftEdge){


    return true;

    
      } else {

       return false;

      }

    if (deformation<180 && deformation>80  ){

    car.shapeColor = "orange";  

    }  

    if(deformation < 80){

      car.shapeColor = "lightgreen";
    }
  
}



