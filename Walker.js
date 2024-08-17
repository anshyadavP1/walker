class Walker {
  // an idea of a dot that can move UP, DOWN, LEFT. RIGHT
  constructor(x = 200, y = 200, step = 10, c = "purple") {
    console.log("Hello, the idea was created!");
    // give the idea of a Walker specific properties
    this.x = x;
    this.y = y;
    this.step = step;
    this.coloring = c;
  }

  showUp() {
    // Style the next points.
    stroke(this.coloring);
    strokeWeight(10);
    // draw dot on a screen at the x, y position
    point(this.x, this.y);
  }

  doOneStep() {
    // change direction X
    let doIwantToGoX = random([-1, 1]);
    // change direction Y
    let doIwantToGoY = random([-1, 1]);

    // change position
    this.x += this.step * doIwantToGoX;
    // check the limits of the screen
    
    // if X reaches the end of horizontal maximum
    // or X reaches zero
    if(this.x >= windowWidth || this.x <= 0){
      // reverse the step
      doIwantToGoX = -doIwantToGoX;
      this.x += this.step * doIwantToGoX;
      console.log(this.coloring + " reversed horisontal step");
    }
    
    this.y += this.step * doIwantToGoY;
    // draw dot again
    this.showUp();
  }
}
