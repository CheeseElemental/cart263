class CircularObj {
  constructor(x, y, radius, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.targetRadius = this.radius*2;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.isGrowing = true;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  update() {

    if (this.isGrowing) {
      this.radius += 1;
      if (this.radius >= this.targetRadius) {
        this.isGrowing = false;
      }
    } else {
      this.radius -= 1;
      if (this.radius <= this.targetRadius / 2) {
        this.isGrowing = true;
      }
    }

    //addEventListener
    //mouseClicked(fxn)

    //update circle
    //this.x += 1;
   // console.log("circle update");
  }
}





