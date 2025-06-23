const navBar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");

    menuBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    navBar.classList.remove("open");

    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
});

window.onscroll = () => {
    menuBtn.classList.remove("hidden");
    navBar.classList.remove("open");
    closeBtn.classList.add("hidden");
}