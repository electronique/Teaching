 function setup() {
  createCanvas(400, 400);
  stroke(0);
  noFill();
}

function draw() {
  ball1();
  ball2();
  ball3();
  ball4();
}

function ball1(){
  ellipse(10,10,100,100);
}
function ball2(){
  ellipse(100,100,100,100);
}
function ball3(){
  ellipse(200,200,100,100);
}
function ball4(){
  ellipse(300,300,100,100);
}
