const drumpad = document.getElementById('drumpad');
drumpad.addEventListener('click',function(event){
    const song = event.target.getAttribute('data-song');
    playSong(song);
})
function playSong(song) {
switch(song) {
case 'one':
new Audio('audio/Clap.wav').play();
break;
case 'two':
new Audio('./audio/Crash.wav').play();    
break;
case 'three':
new Audio('./audio/High Tom.wav').play();    
break;
case 'four':
new Audio('./audio/Hihat C.wav').play();    
break;
case 'five':
new Audio('./audio/Kick.wav').play();    
break;
case 'six':
new Audio('./audio/Low Tom.wav').play();    
break;
case 'seven':
new Audio('./audio/Mid Tom.wav').play();    
break;
case 'eight':
new Audio('./audio/Rimshot.wav').play();    
break;
case 'nine':
new Audio('./audio/Snare.wav').play();    
break;
case 'ten':
new Audio('./audio/Hihat O.wav').play();    
break;
default :
alert('invalid input');
    }
}

