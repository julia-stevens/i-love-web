const navButton = document.getElementById('header-button');

navButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector('nav');

    nav.classList.toggle('active');
}