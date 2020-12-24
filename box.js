class box{

    constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    
    }
    display(){
        var place=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(place.x,place.y,this.width,this.height);
    }
}