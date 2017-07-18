var bam = [];
var bam2 = [];

function setup(){
  createCanvas(1000,1000);
  //Create object
 
  
  for(var i = 0; i < 10; i++) {
    bam.push(new Bammer());

  }
   for(var j = 0; j < 10; j++) {
    bam.push(new Bammer2());

  }
  }

function draw(){
  background(255);
  for(var i=0; i<bam.length; i++){
  
  bam[i].move();
  bam[i].display();
 // bam2.move();
  //bam2.display();
}
for(var j=0; j<bam.length; j++){
  
  bam[j].move();
  bam[j].display();
 // bam2.move();
  //bam2.display();
}
}



function Bammer(){
  this.x = 500;
  this.y = 500;
  this.diameter = random(50,100);
  this.speed = 1; 
  
  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function(){
    stroke(0,50);
    fill(255,100,20,50);
    ellipse(this.x,this.y, this.diameter,this.diameter);
  }
}
  function Bammer2(){
  this.x = 500;
  this.y = 500;
  this.diameter = random(50,100);
  this.speed = 1; 
  
  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function(){
    stroke(0,50);
    fill(0,200,20,50);
    ellipse(this.x-50,this.y, this.diameter,this.diameter);
    
  }
}
