/**
 * Teste do menu
 */


/*
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

/* Animação de carregamento */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else { entry.target.classList.remove('show') }

        /*
        ATENÇÃO
    
        Para fazer o efeito sempre, adicionar um else
        e dentro dele, colocar entry.target.classList.remove('show')
        */
    })
})

const HiddenElements = document.querySelectorAll('.hidden')
HiddenElements.forEach((el) => observer.observe(el))

