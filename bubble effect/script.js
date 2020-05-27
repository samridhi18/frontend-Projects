const canvas = document.getElementById('bubble__canvas');
const context = canvas.getContext('2d');



let circles = [];
for(let i=0;i<200;i++){

    let circleData = {} 
    circleData.speed = Math.random()*10;
    circleData.radius = Math.random()*30;
    circleData.color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.75)`;
    
    circleData.x = Math.random()*1500;
    circleData.y = Math.random()*600;

    circleData.x_vel = Math.random()*10;
    circleData.x_vel = Math.random()*10;
    circleData.y_vel = Math.random()*10;
    circleData.x_flag = 1;
    circleData.y_flag = 1;
    circles.push(circleData);
}
console.log(circles);



function startAnimation(){
    context.clearRect(0,0,1500,600);
    for(i =0;i<circles.length;i++){
        context.beginPath();
        context.arc(circles[i].x,circles[i].y,circles[i].radius,0,2*Math.PI);
        context.fillStyle = circles[i].color;
        context.fill();
    }
    moveCircles();
    window.requestAnimationFrame(startAnimation);
}

function moveCircles(){
    for(let i=0;i<circles.length;i++){

        if((circles[i].x+circles[i].x_vel)>=1500){
            circles[i].x_flag = 1
        }
        
        if((circles[i].x-circles[i].x_vel)<=0){
            circles[i].x_flag = 0
        }
            
        if((circles[i].y+circles[i].y_vel)>=600){
            circles[i].y_flag = 1
        }

        if((circles[i].y-circles[i].y_vel)<=0){
            circles[i].y_flag = 0
        }
        


        
        if(circles[i].x_flag === 1){
            circles[i].x -= circles[i].x_vel;
        }
        if(circles[i].x_flag === 0){
            circles[i].x += circles[i].x_vel;
        }
        if(circles[i].y_flag === 1){
               circles[i].y -= circles[i].y_vel;
        }
        if(circles[i].y_flag === 0){
            circles[i].y += circles[i].y_vel;
        }

    }
}
startAnimation();