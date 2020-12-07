  var bullet  ; 
  var wall ;
  var speed ;
  var weight ;
  var thickness ;

 function setup() {
   createCanvas(1600,400) ;
 
   speed=random(223,321) ;
   weight=random(30,52) ;
 
   bullet =createSprite(50,200,50,5) ;
   bullet .velocityX=speed ;
   bullet .shapeColor=color("grey") ; ;
   
   wall=createSprite(1200,200,thickness,height/2) ;
   wall.shapeColor=color(80,80,80) ;
  
   thickness  = random(22,83) ;

 }
 
 function draw() {
   background("cyan");  
    if(wall.x-bullet .x < (bullet .width+wall.width)/2){
      bullet .velocityX=0 ;
       var deformation=0.5 * weight * speed * speed/22509 ;
  }
    if(deformation>180){
      bullet .shapeColor=color(255,0,0) ;
  }
    if(deformation<180 && deformation>100)  {
      bullet .shapeColor=color(230,230,0) ;
  }
    if(deformation<100)   {
      bullet .shapeColor=color(0,255,0) ;
  }
   
  if(hasColided(bullet,wall)){
     bullet.velocityX = 0 ;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness) ;
  }

  if(damage > 10){
     wall.shapeColor = color(255,0,0) ;
  }

  if(damage < 10){
     wall.shapeColor = color(0,255,0) ;
  }

   drawSprites();
}
 

 function hasColided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width ;
   wallLeftEdge = wall.x ;
    if(bulletRightEdge >= wallLeftEdge){
       return true
    }
       return false ;
 }         









