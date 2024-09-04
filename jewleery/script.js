let items = [
  {
    type: "dimond",
    name: "Zarat Solitaire Dimond",
    img: "dimond.jpg",
    price:1000,
    sale:"sale"
  },
  {
    type: "dimond",
    name: "Dimond Band ring",
    cat:"ring",
    img: "dimond2.jpg",
    price:800,
    sale:""
  },
  {
    type: "dimond",
    name: "Dimond Band ring",
    cat:"ring",
    img: "dimond3.jpg",
    price:1100,
    sale:""
  },
  {
    type: "gold",
    name: "Dissent Collar Earring",
    cat:"earring",
    img: "dimond4.jpg",
    price:200,
    sale:""
  },
  {
    type: "silver",
    name: "Extra Large Bamboo",
    img: "silver1.jpg",
    price:1000,
    sale:"sale"
  },
  {
    type: "silver",
    name: "Lapis Hoop Earring",
    cat:"earring",
    img: "silver2.jpg",
    price:550,
    sale:""
  },
  {
    type: "gold",
    name: "Long Earring Women",
    cat:"earring",
    img: "gold1.jpg",
    price:1000,
    sale:""
  },
  {
    type: "gold",
    name: "Rose Gold Panther",
    img: "gold2.jpg",
    price:760,
    sale:""
  },
  {
    type: "silver",
    name: "Women's Clay Pave",
    img: "silver3.jpg",
    price:1000,
    sale:"sale"
  },
];
let sdata = [];


function demo(){
  let stype = document.getElementById('sorting');
let res = stype.value;

if(res === "all"){
  var sitem = items.filter((e,index)=> e.type !== "all");
  sdata = sitem;

}
if(res !== "all"){
  var sitem = items.filter((e,index)=>e.type === res);
  sdata = sitem;

} if(res === "sale"){
  var sitem = items.filter((e,index)=>e.sale === "sale");
  sdata = sitem;
  
}
if(res === "alphabet"){
 var sitem = items.sort((a,b) => a.name.localeCompare(b.name));
 sdata=sitem;
}
if(res === "prize"){
  var sitem = items.sort((a,b)=>a.price - b.price);
  sdata=sitem;
  
}
lessdetail()
}
function earring(){
  var sitem = items.filter((e,index)=>e.cat === "earring");
  sdata = sitem;
  lessdetail()
}
function ring(){
  var sitem = items.filter((e,index)=>e.cat === "ring");
  sdata = sitem;
  lessdetail()
}
function lessdetail(){
    document.getElementById("data").innerHTML = sdata.map((item, index) => {
        return `
              <div class=" col-sm-6 col-md-6 col-lg-6 col-xl-4">
                 <div class="card less">
                 <span class="sale">${item.sale}</span>
                <div class="options">
                  <i class="fa-solid fa-heart shadow"></i>
                  <i class="fa-solid fa-repeat shadow"></i>
                  <i class="fa-solid fa-magnifying-glass shadow"></i>
                </div>
                <button type="button" class="btn shadow fw-bold">Add to cart</button>
                   <div class="card-body">
                    <img src="${item.img}" alt="">
                    <h5 class="card-title text-center">${item.name}</h5>
                    <span>$${item.price}</span>
                    <span>select for delete <input type="checkbox" class="sel" sel-id="${index}">
</span>
                    </div>
                   </div>  
               </div>                     
              `;
      }).join(" ");
      
}



function fulldetail(){
    document.getElementById("data").innerHTML = sdata.map((item, index) => {
        return `
        <div class="col-md-12">
              <div class="card mb-3 full" style="max-width:100%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.img}" class="img-fluid rounded-start" alt="...">
      <span class="sale">${item.sale}</span>

    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
         <span>$${item.price}</span>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta vitae facere deleniti quas sint ratione libero ullam iusto cumque voluptas, doloremque ipsam ea quod veniam animi maiores voluptatibus dolorem.</p>
        <div class="menus ">
           <button type="button" class="btn  fw-bold shadow">Add to cart</button>
           <i class="fa-solid fa-heart shadow"></i>
                  <i class="fa-solid fa-repeat shadow"></i>
                  <i class="fa-solid fa-magnifying-glass shadow"></i>
        </div>
                      

      </div>
    </div>
  </div>
</div>         
</div> 
              `;
      }).join(" ");
}

function menuToggle(){
  document.getElementById('sidebar').style.left=0;
  document.getElementById('open').style.display="none";
  document.getElementById('cls').style.display="block";

}

function menucls(){
  document.getElementById('sidebar').style.left="-50%";
  document.getElementById('open').style.display="block";
  document.getElementById('cls').style.display="none";
}
let del = () => {
  let sel = document.getElementsByClassName('sel');
  let indexes = [];
  Array.from(sel).forEach((checkbox)=>{
    let ind = parseInt(checkbox.getAttribute("sel-id"));
    if(checkbox.checked){
      indexes.push(ind);
    }
  })
  let sitem = items.filter((e,index) => !indexes.includes(index));
  sdata = sitem;
  // console.log(sitem);
  
  lessdetail();
}
demo();
// swiper
var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});