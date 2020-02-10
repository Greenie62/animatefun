var speedBtn=document.querySelector(".speed")
var slowBtn=document.querySelector(".slow")

speedBtn.onclick=()=>{
    console.log("fx firing")
    particles.forEach(p=>{
        p.vel.x+=2;
        p.vel.y+=1;
    })
}


slowBtn.onclick=()=>{
    console.log("fx firing")
    particles.forEach(p=>{
        p.vel.x=0;
        p.vel.y=0;
    })
}




