/*document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "english": {
            "title": "Portfolio - Matheus",
            "dropdown": "Language",
            "menu-items": ["Home", "Projects"],
            "card-sections": ["Resume", "Hard Skills", "Soft Skills"],
            "footer-headings": ["Matheus Santos", "Page", "Contact me"],
            "footer-links": ["Home", "Projects"],
            "contact-heading": "Contact me",
            "input-placeholder": "Write your subject here"
        },
        "portuguese": {
            "title": "Portfólio - Matheus",
            "dropdown": "Idioma",
            "menu-items": ["Início", "Projetos"],
            "card-sections": ["Currículo", "Habilidades Técnicas", "Habilidades Pessoais"],
            "footer-headings": ["Matheus Santos", "Página", "Entre em contato"],
            "footer-links": ["Início", "Projetos"],
            "contact-heading": "Entre em contato",
            "input-placeholder": "Escreva seu assunto aqui"
        }
    };

    const langButtons = document.querySelectorAll('.dropdown-menu a');
    const pageTitle = document.querySelector('title');
    const dropdownText = document.querySelector('.dropdown-toggle');
    const menuItems = document.querySelectorAll('.menu-itens a');
    const cardTitles = document.querySelectorAll('.card-wrapper h2');
    const cardDescriptions = document.querySelectorAll('.card-text p');
    const footerHeadings = document.querySelectorAll('.footer h3');
    const footerLinks = document.querySelectorAll('.footer-list a');
    const contactHeading = document.querySelector('#footer-subscribe h3');
    const inputPlaceholder = document.querySelector('#text-area');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('language');

            if (data[lang]) {
                // Atualiza o título da página
                if (data[lang].title) {
                    pageTitle.textContent = data[lang].title;
                }

                // Atualiza o texto do botão dropdown
                if (data[lang].dropdown) {
                    dropdownText.textContent = data[lang].dropdown;
                }

                // Atualiza os itens do menu
                menuItems.forEach((item, index) => {
                    item.textContent = data[lang]["menu-items"][index];
                });

                // Atualiza os títulos e descrições dos cards
                cardTitles.forEach((title, index) => {
                    title.textContent = data[lang]["card-sections"][index];
                });

                cardDescriptions.forEach((description, index) => {
                    description.textContent = data[lang]["card-text"][index];
                });

                // Atualiza os headings do rodapé
                footerHeadings.forEach((heading, index) => {
                    heading.textContent = data[lang]["footer-headings"][index];
                });

                // Atualiza os links do rodapé
                footerLinks.forEach((link, index) => {
                    link.textContent = data[lang]["footer-links"][index];
                });

                // Atualiza o heading do formulário de contato
                contactHeading.textContent = data[lang]["contact-heading"];

                // Atualiza o placeholder do input do formulário de contato
                if (data[lang]["input-placeholder"]) {
                    inputPlaceholder.setAttribute('placeholder', data[lang]["input-placeholder"]);
                }
                
                console.log("Language change completed.");
            }
        });
    });
});*/



/* Scroll */
document.querySelectorAll('nav.menu-itens a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


/* Changing the website language */

// function to go to the english page
/*function redirectToEnglishVersion() {
    window.location.href = "./idiom/index-eng.html";
}

document.querySelectorAll('.dropdown-item')[1].addEventListener('click', function() {
    redirectToEnglishVersion();
});

// function to go to the english page
function redirectToPortugueseVersion() {
    window.location.href = "./../index.html";
}

document.querySelectorAll('.dropdown-item')[0].addEventListener('click', function() {
    redirectToPortugueseVersion();
});*/



/* Form button */
/*$(document).ready(function() {
    $('#sendBtn').click(function() {
        $('#contact-form').submit();
    });
});*/

/*let currentSlideIndex = 1;
showSlide(currentSlideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName('second-slider');
    const dots = document.getElementsByClassName('dot');

    if (index > slides.length) { currentSlideIndex = 1 }
    if (index < 1) { currentSlideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[currentSlideIndex - 1].style.display = 'block';
    dots[currentSlideIndex - 1].classList.add('active');
}

function currentSlide(index) {
    showSlide(currentSlideIndex = index);
}

function nextSlide() {
    showSlide(currentSlideIndex += 1);
}

function prevSlide() {
    showSlide(currentSlideIndex -= 1);
}

setInterval(nextSlide, 5000); */


let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

function showSlides(n) {
  let slides1 = document.querySelectorAll('#slider1 .second-slider');
  let slides2 = document.querySelectorAll('#slider2 .second-slider');
  let dots1 = document.querySelectorAll('#slider1 .dot');
  let dots2 = document.querySelectorAll('#slider2 .dot');
  
  if (n > 3) { currentSlideIndex = 1 }
  if (n < 1) { currentSlideIndex = 3 }
  
  slides1.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlideIndex - 1) {
      slide.classList.add('active');
    }
  });

  slides2.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlideIndex - 1) {
      slide.classList.add('active');
    }
  });
  
  dots1.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlideIndex - 1) {
      dot.classList.add('active');
    }
  });

  dots2.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlideIndex - 1) {
      dot.classList.add('active');
    }
  });
}

// Automatic slide transition every 3 seconds
setInterval(() => {
    currentSlideIndex++;
    showSlides(currentSlideIndex);
  }, 5000);




