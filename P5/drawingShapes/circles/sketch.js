var x;
var y;

function setup() {
  createCanvas(400,400);
}

function draw() {
 circle1(100,100);
 circle1(200,200);
 circle1(300,300);


}

function circle1(x,y){
   stroke(255,255,255);
  strokeWeight(5);
 // fill(0,255,0)
 fill(255,0,0);
  stroke(0,0,100);
  ellipse(x,y,100,100);
  
}
//function squares(){
//    background(255,0,0);
//  stroke(0,0,255);
//  strokeWeight(5);
//  fill(0,255,0)
//  rect(sqX,sqY,100,100);
//}
//function lines(){
//    stroke(0);
 // line(Lx,Ly,50,200);
//}