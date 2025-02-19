class Snow {
    constructor(x, y) {
        var options = {
           // restitution:1,
            friction : 1.0,
            isStatic :false,
        
        }

        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow5.webp");
      // World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        //image(this.image,0,0, 50, 50);
        pop();
    }

};