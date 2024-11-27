var menuToggle = document.querySelector("#menu-toggle");
var menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function(event) {
    var menuOpen = menu.classList.contains("active");
    var newMenuOpenStatus = !menuOpen;

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    menu.classList.toggle("active");
});