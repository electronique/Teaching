var offset = 0;
var x;
var y;


function setup() {
    createCanvas(400,400);
    
  
}

function draw() {
  background(0);
 var x =0;
 
//twoseperateloops 
 
for(var x =0; x <=mouseX; x=x+50){
    for(var y =0; y <=height; y=y+50){

    fill(random(255),0,random(255));
     ellipse(x,y,25,25);
 }
    
}
      

}