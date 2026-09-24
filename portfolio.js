const menuBtn = document.getElementById("menu_btn");
const navLinks = document.querySelector(".nav_links");
menuBtn.addEventListener("click",function(){
navLinks.classList.toggle("active");
});