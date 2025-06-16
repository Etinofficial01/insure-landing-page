const navBar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
})