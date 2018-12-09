

function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;

  this.grow = function() {
    this.r = this.r - 10;
  }


  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }
  this.show = function() {
    noStroke();
    fill(30, 255, 50);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    fill(60, 185, 100);
    ellipse(this.x, this.y, this.r*2, 30);
    fill(255, 25, 50);
    ellipse(this.x, this.y, this.r, 30);
  }

}
