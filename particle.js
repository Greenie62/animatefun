
let particles=[];


function setup(){
    createCanvas(500,600)
 
}



function draw(){
    background('gray')
    particles.forEach((particle,idx)=>{
    particle.show()
    particle.move()
    particle.trick(particles.slice(idx))
    })
}




class Particle{
    constructor(){
        this.r=15;
        this.pos=createVector(random(width),random(height))
        this.vel=createVector(random(0,2),random(0,2))
    }


    show(){
        fill('white')
        noStroke()
        ellipse(this.pos.x,this.pos.y,this.r,this.r)
    }


    move(){
        this.pos.add(this.vel)

        if(this.pos.x < 0 || this.pos.x > width){
            this.vel.x=-this.vel.x
        }

        if(this.pos.y < 0 || this.pos.y > height){
            this.vel.y=-this.vel.y
        }
    }


    trick(particles){
        particles.forEach(particle=>{
        var d=dist(this.pos.x,this.pos.y,particle.pos.x,particle.pos.y);
        if(d < 50){
           
        
            stroke('lightgray')
            line(this.pos.x,this.pos.y,particle.pos.x,particle.pos.y)
        }
    })
    }
}



document.querySelector(".add").onclick=()=>{
    var num=prompt("how many?")
    if(!isNaN(parseInt(num))){
    for(let i=0;i<parseInt(num);i++){
    particles.push(new Particle())
    }
}
else{
    console.log('wtf?')
    alert('need a number moron, refresh n try again!')
}
}

document.querySelector(".delete").onclick=()=>{
    particles.pop()
}