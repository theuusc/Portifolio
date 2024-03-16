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

$(document).ready(function() {
    // Ao clicar no botão "Send the message", envia o formulário
    $('#sendBtn').click(function() {
        $('#contact-form').submit();
    });
});