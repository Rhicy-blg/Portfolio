const bouton = document.querySelector(".menu-burger");
const nav = document.querySelector(".nav-principale");

bouton.addEventListener("click", function () {
    nav.classList.toggle("ouvert");
    })