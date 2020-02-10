
let ship;
let bullets=[];
let enemies=[];

var colors=['red','orange','blue','yellow','purple']

function setup(){
    createCanvas(400,400)
    ship=new Ship()
    for(let i=0;i<width;i+=50){
        enemies.push(new Enemy(i,colors[Math.random() * colors.length | 0]))
    }
}


function draw(){
    background('black')
    ship.show();
    ship.changeX()

    for(let i=0;i<enemies.length;i++){
        enemies[i].show()
        enemies[i].move()
    }


for(let i=0;i<bullets.length;i++){
    bullets[i].show()
    bullets[i].shoot()
}

bullets.forEach(bullet=>{
    enemies.forEach(enemy=>{
        if(bullet.hit(enemy)){
            bullet.clean()
            enemy.damage()
        }
    })
})


    // bullets.forEach((bullet,idx)=>{
    //     if(bullet.toDelete){
    //         bullets.splice(idx,1)
    //     }
    // })

    enemies.forEach((enemy,idx)=>{
        if(enemy.toDelete){
            enemies.splice(idx,1)
        }
    })

    for(let i=0;i<bullets.length;i++){
        if(bullets[i].toDelete){
            bullets.splice(i,1)
        }
    }

}



document.querySelector(".left").onclick=()=>{
    ship.move(-3)
}

document.querySelector(".right").onclick=()=>{
    ship.move(3)
}


document.querySelector(".shoot").onclick=()=>{
    bullets.push(new Bullet(ship.x))
}