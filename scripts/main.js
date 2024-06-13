document.getElementById('accessibility-toggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui
    document.getElementById('language-toggle').addEventListener('click', function() {
        var menu = document.getElementById('language-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    function changeLanguage(lang) {
        // Sua função changeLanguage aqui
        console.log('Idioma alterado para: ' + lang);
        document.getElementById('language-menu').style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#language-toggle')) {
            var menu = document.getElementById('language-menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            }
        }
    });
});

document.getElementById('language-toggle').addEventListener('click', function(event) {
    const menu = document.getElementById('language-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const lang = this.getAttribute('href');
        if (lang !== '#') {
            window.location.href = lang;
        }
    });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    const menu = document.getElementById('language-menu');
    if (!event.target.matches('#language-toggle') && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
