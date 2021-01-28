class Monster {
    constructor(x, y,r){
      var options={
        "restitution":0.1,
        "friction":0.0000000001,
        "density":0.001,
        
        
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.Image=loadImage("Monster-01.png");
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
     
  
  
      World.add(world,this.body)  
    }
  
    display(){
      var angle=this.body.angle;
      push()
      translate(this.body.position.x,this.body.position.y);
      fill(255)
      ellipse(0,0,this.r);
      imageMode(CENTER);
      image(this.Image,0,0,500,500)
      pop()
    }
  
  };
