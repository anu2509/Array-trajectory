class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
    this.tra = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
    if(this.body.speed>5){
    for(var i=0;i<this.tra.length;i= i+5){
    image(this.image2,this.tra[i][0],this.tra[i][1]);
    }
    var position = [this.body.position.x,this.body.position.y]
    this.tra.push(position)
    }
    console.log(position)
    super.display();
  }
}
