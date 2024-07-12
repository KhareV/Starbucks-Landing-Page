const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function toggleMenu() {
    menuButton.classList.toggle('open');
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

menuButton.addEventListener('click', toggleMenu);
