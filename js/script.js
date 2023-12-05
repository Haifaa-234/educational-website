const menu = document.querySelector(".fa-bars");
const navBar = document.querySelector(".listt");

menu.addEventListener("click" , () =>{
    menu.classList.toggle("active");
    
    navBar.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , ()=> {
     menu.classList.remove("active");
     navBar.classList.remove("active");
}))