let tmenu = document.getElementById("menutoggle");
let close = document.getElementById("mclose");
let sn = gsap.timeline();
sn.from("#sidenav",{
    x:-500,
    duration:0.5,
    opacity:0
})
sn.pause();
tmenu.addEventListener("click",function(){
    sn.play();
})
close.addEventListener("click",function(){
    sn.reverse();
})

//pageup part
let up = document.getElementById("pageup");
let pup = gsap.timeline();
pup.from("#pageup",{
    y:100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#city",
        scroller:"body",
        start:"top 70%",
        markers:false
    }
})
// up.addEventListener("click",function(){
//     up.style.opacity=0;
// })


let ddown =document.getElementById("dropdown");
let dmenu = document.getElementById("dmenu");
let tl = gsap.timeline();

let ddown2 =document.getElementById("dropdown2");
let dmenu2 = document.getElementById("dmenu2");
let tl2 = gsap.timeline();

let ddown3 =document.getElementById("dropdown3");
let dmenu3 = document.getElementById("dmenu3");
let tl3 = gsap.timeline();

let ddown4 =document.getElementById("dropdown4");
let dmenu4 = document.getElementById("dmenu4");
let tl4 = gsap.timeline();

let ddown5 =document.getElementById("dropdown5");
let dmenu5 = document.getElementById("dmenu5");
let tl5 = gsap.timeline();

tl.from("#dmenu",{
    y:200,
});
tl.pause();
ddown.addEventListener("mouseenter",function(){
    tl.play();
});
dmenu.addEventListener("mouseleave",function(){
    tl.reverse();
});

tl2.from("#dmenu2",{
    y:200
})
tl2.pause();
ddown2.addEventListener("mouseenter",function(){
    tl2.play();
});
dmenu2.addEventListener("mouseleave",function(){
    tl2.reverse();
});

tl3.from("#dmenu3",{
    y:200
})
tl3.pause();
ddown3.addEventListener("mouseenter",function(){
    tl3.play();
})
dmenu3.addEventListener("mouseleave",function(){
    tl3.reverse();
})

tl4.from("#dmenu4",{
    y:200
})
tl4.pause();
ddown4.addEventListener("mouseenter",function(){
    tl4.play();
})
dmenu4.addEventListener("mouseleave",function(){
    tl4.reverse();
})

tl5.from("#dmenu5",{
    y:200
})
tl5.pause();
ddown5.addEventListener("mouseenter",function(){
    tl5.play();
})
dmenu5.addEventListener("mouseleave",function(){
    tl5.reverse();
})

// home section

gsap.from("#home .content h1",{
    x:-500,
    duration:0.5,
    opacity:0
})
gsap.from("#home .content h3",{
    y:500,
    duration:0.5,
    opacity:0
})

// city section

gsap.from("#city .tiTle h4 , #city .tiTle .underline",{
    x:-500,
    duration:0.5,
    opacity:0
})
gsap.from("#city .card",{
    y:500,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#city",
        scroller:"body",
        start:"top 100%",
        markers:false,
    }
})
gsap.from("#discover .card",{
    y:500,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#discover",
        scroller:"body",
        start:"top 120%",
        markers:false,
    }
})
gsap.from("#service .card",{
    y:500,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#service",
        scroller:"body",
        start:"top 110%",
        markers:false,
    }
})