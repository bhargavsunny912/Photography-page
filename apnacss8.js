let cancel=document.querySelector(".wrong");
let sidebars=document.querySelector(".sidebar");
cancel.addEventListener("click",function Can(){
    sidebars.classList.add("hide1");
    menu.classList.remove("hide2");
});

let menu=document.querySelector(".menu");

menu.addEventListener("click",function me(){
    menu.classList.add("hide2");
    sidebars.classList.remove("hide1");
});

