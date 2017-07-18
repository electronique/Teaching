function Bammer(){
  this.x = 100;
  this.y = 100;
  this.diameter = random(10,30);
  this.speed =1; 
  
  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function(){
    ellipse(this.x,this.y, this.diameter,this.diameter);
  }
}