 function setup() {
  createCanvas(400, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(100,0,255);
  fill(100,255,0,100);//(R,G,B,opacity)
  rect(100,100,200,200);//Draws a rectangle
  rect(50,0,200,200);
  rect(150,0,200,200);
}
