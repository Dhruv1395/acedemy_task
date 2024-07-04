let month = document.getElementById("month");
let date = document.getElementById("date");
let year = document.getElementById("year");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


setInterval(()=>{
    let ctime = new Date()
    month.innerHTML =  months[ctime.getMonth()];
    date.innerHTML=ctime.getDate();
    year.innerHTML=ctime.getFullYear();


},1000)

let month1 = document.getElementById("month1");
let date1 = document.getElementById("date1");
let year1 = document.getElementById("year1");


setInterval(()=>{
    let ctime = new Date()
    month1.innerHTML =  months[ctime.getMonth()];
    date1.innerHTML=ctime.getDate();
    year1.innerHTML=ctime.getFullYear();


},1000)

let month2 = document.getElementById("month2");
let date2 = document.getElementById("date2");
let year2 = document.getElementById("year2");


setInterval(()=>{
    let ctime = new Date()
    month2.innerHTML =  months[ctime.getMonth()];
    date2.innerHTML=ctime.getDate();
    year2.innerHTML=ctime.getFullYear();


},1000)