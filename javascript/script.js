const navBar=document.querySelector("#nav-bar");
const navBtn=document.querySelector("#nav-btn");
const closeBtn=document.querySelector("#close-btn");
const sideBar=document.querySelector("#side-bar");
const date=document.querySelector("#date");
window.addEventListener("scroll",function(){
    if(window.scrollY>80){
        navBar.classList.add("nav-fix");
    }
    else{
        navBar.classList.remove("nav-fix")
    }
})
navBtn.addEventListener("click",function(){
    sideBar.classList.add("show-sidebar")
})
closeBtn.addEventListener("click",function(){
    sideBar.classList.remove("show-sidebar")
})
date.innerHTML=new Date().getFullYear();