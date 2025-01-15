const buttonFilter = document.querySelector(".filter-button");
const buttonContainer = document.querySelector(".button-container");
const divsContainer = document.querySelector(".divs");
const bg = document.querySelector(".bg");

buttonFilter.addEventListener("click", handler);


function checkClassBg() {
    if (bg.classList.contains("openMenu")) {
        bg.classList.add("closeMenu")
        bg.classList.remove("openMenu")
    } else {
        bg.classList.add("openMenu");
        bg.classList.remove("closeMenu")
    }
}

function checkClassDivs() {
    if (divsContainer.classList.contains("openMenu")) {
        divsContainer.classList.add("closeMenu")
        divsContainer.classList.remove("openMenu")
    } else {
        divsContainer.classList.add("openMenu");
        divsContainer.classList.remove("closeMenu")
    }
}

function handler() {
    checkClassDivs();
    checkClassBg();
}