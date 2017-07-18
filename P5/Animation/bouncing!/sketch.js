var x = 0;
var y = 100;
var speed = 3;
var yspeed = 3;
var xpos;
var ypos;

function setup() {
  createCanvas(600,600);
  frameRate(100);
}
function draw() {
  background(20);
    rectMode(CENTER);
maincubegroup();
  if(x >width-10){
    speed = -3;
  }
  if(x < 0){
    speed = 3;
  }
x = x +speed;
}
function maincubegroup(){
  smallcubesgroup(10,100);
  
  
}


function smallcubesgroup(transX,transY){
 translate(transX, transY);
  if (transX > width){
   x = x - speed;
  }
cubes(10,10);
//cubes(20,20);
//cubes(30,30);
}



function cubes(xpos, ypos){
  
strokeWeight(10);
stroke(0,50);

xpos = xpos + x;
fill(255,0,0,200);
  rect(xpos,ypos,100,100);


  

}