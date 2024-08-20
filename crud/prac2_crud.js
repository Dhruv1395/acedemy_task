let userdetail = JSON.parse(localStorage.getItem("user")) || [];

const displayData = () => {
  document.getElementById("data").innerHTML = userdetail
    .map((item, index) => {
      return `<tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.age}</td>
                <td><button class="btn btn-primary" id="${index}" onclick="edit()" >Edit</button></td>
                <td><button class="btn btn-danger"  onclick="del(${index})">Delete</button></td>
            </tr>`;
    })
    .join(" ");
};
let del = (index) => {
  let data = userdetail.filter((item, index1) => index1 !== index);
  userdetail = data;
  localStorage.setItem("user", JSON.stringify(userdetail));
  displayData();
};

let searchbtn = () => {
  let sval = document.getElementById("search").value;
  let sdata = userdetail.filter((item, index) => item.name == sval);
  userdetail=sdata;
  displayData();
};


function edit() {
  let index = event.target.id;
  console.log(index);
  let editval = prompt("enter value");
  console.log(editval);
}

function userinfo() {
  let fname = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("pn").value;

  if (fname === "" || age === "" || email === "" || phone === "") {
    alert("all fields are required");
    return false;
  }

  let info = {
    name: fname,
    age: age,
    email: email,
    phone: phone,
  };
  userdetail.push(info);
  localStorage.setItem("user", JSON.stringify(userdetail));

  displayData();
}

displayData();

// function del(){
//   let index = event.target.id;
//   userdetail.splice(index,1);
//   localStorage.setItem("user", JSON.stringify(userdetail));

//   displayData();
// }
