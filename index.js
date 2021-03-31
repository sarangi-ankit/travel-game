let cityOuter=document.querySelector(".container");
let cityInner=document.querySelector(".inner-city");
let car=document.querySelector(".car");
let myaudio=document.getElementById("myaudio");
let mycounter=document.getElementById("counter").textContent;
let countdown=document.querySelector(".countdown");
let clouds=document.querySelector(".cloud");
let music=false;

let coundown=setInterval(function(){
    mycounter--;
    document.getElementById("counter").textContent=mycounter;
    if (mycounter<=0){
        clearInterval(coundown);
        countdown.remove()
        clouds.classList.add("cloudanimation")
    }
    

},1000)

setInterval(function(){
    cityOuter.classList.toggle("daytonight")
},8000);
document.addEventListener("keyup",changecolor);

function changecolor(e){
    if (e.keyCode==13){
        cityInner.classList.toggle("cityAnimation");
        car.classList.toggle("carAnimation");
        

    }
    if (e.keyCode==77){
        if (music){
            pausemusic();
            music=false;
        }
        else{
            playmusic();
            music=true;
        }
    }

    console.log(e.keyCode);
}
function playmusic(){
    myaudio.play()
}
function pausemusic(){
    myaudio.pause()
}

