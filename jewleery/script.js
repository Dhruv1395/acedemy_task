const items = [
  {
    type: "dimond",
    name: "ring",
    img: "dimond.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond2.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond3.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond4.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond2.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond3.jpg",
    price:"$1000"
  },
  {
    type: "dimond",
    name: "ring",
    img: "dimond4.jpg",
    price:"$1000"
  },
];
function lessdetail(){
    document.getElementById("data").innerHTML = items.map((item, index) => {
        return `
              <div class="col-md-4">
                 <div class="card less">
                <div class="options">
                  <i class="fa-solid fa-heart shadow"></i>
                  <i class="fa-solid fa-repeat shadow"></i>
                  <i class="fa-solid fa-magnifying-glass shadow"></i>
                </div>
                <button type="button" class="btn shadow fw-bold">Add to cart</button>
                   <div class="card-body">
                    <img src="${item.img}" alt="">
                    <h5 class="card-title text-center">${item.name}</h5>
                    <span>${item.price}</span>
                    </div>
                   </div>  
               </div>                     
              `;
      }).join(" ");
}

lessdetail();


function fulldetail(){
    document.getElementById("data").innerHTML = items.map((item, index) => {
        return `
        <div class="col-md-12">
              <div class="card mb-3" style="max-width:100%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>         
</div> 
              `;
      }).join(" ");
}