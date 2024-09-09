document.addEventListener("DOMContentLoaded", function () {
  let prevbtn = document.getElementById("prev");
  let nextbtn = document.getElementById("next");
  let Cyear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  let Cmonth = new Date().getMonth();
  let Cdate = new Date().getDate();

  function renderer(month, year) {
    const firstDay = new Date(year, month, 1).getDay();

    let currentmonth = new Date(year, month + 1, 0).getDate();

    let pmonth =document.getElementById("month").textContent =
      months[month];
      document.getElementById("year").textContent =year;
    let display = document.getElementById("display");
    display.innerHTML = "";
    let presentmonth = months[new Date().getMonth()];
    
    for (let i = 0; i < firstDay; i++) {
      display.innerHTML += `<div class='cell'></div>`;
    }
    for (let i = 1; i <= currentmonth; i++) {
      display.innerHTML += `<div class='cell' ><div class='digit shadow '  month='${presentmonth}' >${i}</div></div>`;
    }
    let cell = document.getElementsByClassName('digit');

  Array.from(cell).forEach((date) => {
    let month = date.getAttribute('month');
    
    if (date.textContent == Cdate && month == pmonth ) {
      date.classList.add("activee");
    }
  });
  }
  
  prevbtn.addEventListener("click", function () {
    if (Cmonth === 0) {
      Cmonth = 11;
      Cyear -= 1;
    } else {
      Cmonth -= 1;
    }
    renderer(Cmonth, Cyear);
  });

  nextbtn.addEventListener("click", function () {
    if (Cmonth === 11) {
      Cmonth = 0;
      Cyear += 1;
    } else {
      Cmonth += 1;
    }
    renderer(Cmonth, Cyear);
  });
  renderer(Cmonth, Cyear);
});
