class Enemy{
    constructor(x,color){
        this.r=50;
        this.color=color
        this.x=x
        this.y=40
        this.dx=1
        this.toDelete=false;
    }

    show(){
        fill(this.color)
        rect(this.x,this.y,this.r,this.r)
    }

    shiftDown(){
        this.y+=this.r
    }

    move(){
        this.x+=this.dx

        if(this.x > width || this.x < 0){
            this.dx *= -1
            this.shiftDown()
        }
    }

    damage(dir){
        this.r+=3;
        if(this.r > 60){
            this.color='gray'
        }
        if(this.r > 68){
            this.toDelete=true;
        }

    }
}