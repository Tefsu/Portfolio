
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