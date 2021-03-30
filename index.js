let cityOuter=document.querySelector(".container");
let cityInner=document.querySelector(".inner-city");
setInterval(function(){
    cityOuter.classList.toggle("daytonight")
},8000);
document.addEventListener("click",changecolor);

function changecolor(event){
    console.log(event.keyCode);
}
