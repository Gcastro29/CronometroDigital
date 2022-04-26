var sec=0
var min=0
var hr=0
var interval
var btn = document.getElementById("start");
const titulo= document.querySelector('h1');

function typeWrite(el){
    const textArray = el.innerHTML.split('');
    el.innerHTML='';
    textArray.forEach((letra,i)=> {
        setTimeout(function(){
            el.innerHTML +=letra;
        },75*i)
    });
        

}

typeWrite(titulo)

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){     
    watch()
    interval= setInterval(watch,1)
    btn.disabled = true;
    

}

function pause(){
    clearInterval(interval)
    btn.disabled = false;

}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("Você parou em: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
        if(hr==23 && min==59 && sec==59){
            hr = 0
            min = 0
            sec = 0
            sec ++
        
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}


