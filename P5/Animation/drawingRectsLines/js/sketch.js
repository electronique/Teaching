var x;
var r;
var y;
var color1 = 100;
var color2 = 0;
var color3 = 0;

function setup(){
createCanvas(400,400);
 background(0);
}

function draw(){
  x= x++;
  if(y > 400){
    y= 0;
  }
  //else{
  //  r= random(20);
  //}
  if(x > 400){
    x=0;
    color1= color1+50;
    color2= color2+20;
    color3= color3+40;
  }
  if(color1>255){
    color1=0;
  }
   y= y+r;
   stroke(255);
   fill(color1,color2,color3);
  rect(x,y,10,10);

}
