const userdata = JSON.parse(localStorage.getItem("userdata")) || [];

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let data = {
        name:username,
        pass:password
    }
    userdata.push(data);
    localStorage.setItem("userdata",JSON.stringify(userdata));
    window.location.href="profile.html";

}

function setdata(){
    userdata.map((item,index) => {
        document.getElementById('user').value=item.name;
        document.getElementById('pass').value=item.pass;        
    })
}



let show = document.querySelector('.fa-eye');
show.addEventListener('click',function(){
    let p = document.querySelector('.pass');
    if(p.type !=="password"){
        p.type="password";
        show.classList.add("fa-eye");
        show.classList.remove("fa-eye-slash");
    }
    else{
        p.type="text";
        show.classList.remove("fa-eye");
        show.classList.add("fa-eye-slash");
    }
    
    
})