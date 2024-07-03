let tl = gsap.timeline();
let menu = document.getElementById("sidemenu");
let cancel = document.getElementById("cancel");
tl.from("#sidebar",{
    x:-400,
    duration:0.5,
    stagger:0.1
})
tl.from("#sidebar li",{
    stagger:0.1,
    x:-300,
    duration:0.4
})
tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})
cancel.addEventListener("click",function(){
    tl.reverse();
})