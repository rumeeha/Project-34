class Hero {
    constructor(x, y, width, height){
      var options={
        "frictionAir" :1,
        "density" : 1,
        
      }
  
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      this.Image=loadImage("Superhero-02.png");
  
  
      World.add(world,this.body)  
    }
  
    display(){
      var angle=this.body.angle;
      push()
      translate(this.body.position.x,this.body.position.y);
      //fill(255)
      ellipse(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.Image,0,0,500,500)
      pop()
    }
  
  };
