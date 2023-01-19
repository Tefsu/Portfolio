
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

var links = document.querySelectorAll('a[href^="#"]');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();

        var target = this.getAttribute('href');
        var section = document.querySelector(target);

        var top = section.offsetTop;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });

        for(var j = 0; j < links.length; j++) {
            links[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}