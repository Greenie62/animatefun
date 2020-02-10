class Bullet{
    constructor(x){
        this.r=8;
      
        this.x=x
        this.y=height
        this.dy=-3
        this.toDelete=false;
    }

    show(){
        fill('white')
        rect(this.x,this.y,this.r,this.r)
    }

    shoot(){
        this.y+=this.dy
    }

    clean(){
       this.toDelete=true;
    }

    hit(enemy){
       let d=dist(this.x,this.y,enemy.x,enemy.y);
       if(d < this.r+enemy.r){
           return true;
       }
       else{
           return false;
       }

    }
}