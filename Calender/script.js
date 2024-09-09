document.addEventListener('DOMContentLoaded',function(){
let prevbtn = document.getElementById('prev');
let nextbtn = document.getElementById('next');
let Cyear = new Date().getFullYear();
const months = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
let Cmonth = new Date().getMonth();
let Cdate = new Date().getDate();
console.log(Cdate);



function renderer(month,year){
const firstDay = new Date(year, month, 1).getDay();

let currentmonth = new Date(year,month+1,0).getDate();

document.getElementById('monthyear').textContent=months[month] +" "+year;
let display = document.getElementById('display');
display.innerHTML='';
for(let i=0;i<firstDay;i++){
    display.innerHTML+=`<div class='cell'></div>`
}
for(let i=1;i <= currentmonth;i++){
    display.innerHTML+=`<div class='cell'>${i}</div>`

}

}
let cell=document.getElementsByClassName('cell');
let cm =  months[new Date().getMonth()];   
Array.from(cell).forEach((date)=>{
let cellDay = parseInt(date.textContent);
    if(cellDay==Cdate && cm==months[new Date().getMonth()]){
    }
    else{
        date.classList.add("active");

    }
}
)
prevbtn.addEventListener('click',function(){
    if(Cmonth===0){
        Cmonth=11;
        Cyear-=1
    }
    else{
        Cmonth-=1;
        
    }
    renderer(Cmonth,Cyear);
});

nextbtn.addEventListener('click',function(){
    if(Cmonth===11){
        Cmonth=0;
        Cyear+=1;
    }
    else{
        Cmonth+=1;
    }
    renderer(Cmonth,Cyear);

})
renderer(Cmonth,Cyear);

})


