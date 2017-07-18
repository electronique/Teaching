var x = 10;
var y = 10;


function setup() {
  createCanvas(500,500);
}

function draw() {

  background(100);
 x = x+10;
 if(x > 200){
   x= 200;
   y=y+10;
 }
 strokeWeight(5);
 ellipse(x,y,100,100);

}
