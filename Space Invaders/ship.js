

function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
      fill(30,30,155)
    ellipse(this.x, height-20, 35, 60);
    fill(25,30,155)
    rect(this.x, height-5, 50, 10)
    fill(255,10,3)
      ellipse(this.x, 375, 25, 40);
      fill(260, 20,10);
ellipse(this.x, 375, 20, 30);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
