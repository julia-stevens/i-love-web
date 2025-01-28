// source: Click and Drag to Scroll, Wes Bos: https://www.youtube.com/watch?v=C9EWifQ5xqA

const main = document.querySelector("main");
let isDown = false; 

// horizontal
let startX; 
let scrollLeft; 

// vertical
// let startY; 
// let scrollTop; 

main.addEventListener("mousedown", logStartingPoints);
main.addEventListener("mouseleave", removeDrag);
main.addEventListener("mouseup", removeDrag);
main.addEventListener("mousemove", movePage);


function logStartingPoints(e) {
    isDown = true; 
    main.classList.add("active");

    // horizontal
    startX = e.pageX; 
    scrollLeft = main.scrollLeft; 

    // vertical
    // startY = e.pageY; 
    // scrollTop = main.scrollTop;    
}

function movePage(e) {
    if(!isDown) return;   
    e.preventDefault();  

    // horizontal
    const x = e.pageX; 
    const walkX = x - startX; 
    main.scrollLeft = scrollLeft - walkX; 

    // vertical 
    // const y = e.pageY; 
    // const walkY = y - startY; 
    // main.scrollTop = scrollTop - walkY; 
}

function removeDrag() {
    isDown = false; 
    main.classList.remove("active");    
}

