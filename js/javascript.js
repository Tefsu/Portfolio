/**
 * Teste do menu
 */

/**

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('nav');

menuButton.addEventListener('click', toggleMenu);

menuButton.style.display = 'none';

let resizeTimer;
window.onresize = function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(checkScreenSize, 170);
};
function checkScreenSize() {
    if (window.innerWidth < 600) {
        menuButton.style.display = 'block';
        menu.style.display = 'none';
    } else {
        menuButton.style.display = 'none';
        menu.style.display = 'block';
    }
}

function toggleMenu() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

*/