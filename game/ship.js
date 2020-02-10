class Ship{
    constructor(){
        this.height=20;
        this.width=60;
        this.x=width/2;
        this.y=height-this.height;
        this.dx=0;
    }

    show(){
        fill('orange')
        rect(this.x,this.y,this.width,this.height)
    }

    changeX(){
        this.x+=this.dx

        this.x=constrain(this.x,0,width-this.width)
    }

    move(dir){
        this.dx=dir
    }
}