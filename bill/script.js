let ctime = new Date();
let date = ctime.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[ctime.getMonth()];
let year = ctime.getFullYear();

document.getElementById('date').innerHTML = date;
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = year;

function add(){
    let tbody = document.getElementById('tbody');
    let row = tbody.insertRow(0);
    var col = row.insertCell(0);
    var col1 = row.insertCell(1);
    var col2 = row.insertCell(2);
    var col3 = row.insertCell(3);
    var col4 = row.insertCell(4);

    col.innerHTML = '<input type="text" placeholder="Items">';
    col1.innerHTML = '<input type="number" placeholder="Qty" id="qty">';
    col2.innerHTML = '<input type="text" placeholder="₹" id="price">';
    col3.innerHTML = '<input type="text" placeholder="Total" id="total" readonly>';
    col4.innerHTML = '<button class="btn btn-primary" onclick="myclick()">enter</button>';


}
function myclick(){
    let qty = document.getElementById('qty').value;
let price = document.getElementById('price').value;
let total = document.getElementById('total');
let totalamount = document.getElementById('totalamount');
total.value = qty * price;
}
