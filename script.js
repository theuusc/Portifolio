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

// function to go to the portuguese page
function redirectToPortugueseVersion() {
    window.location.href = "./idiom/index-ptbr.html";
}

document.querySelectorAll('.dropdown-item')[1].addEventListener('click', function() {
    redirectToPortugueseVersion();
});

// function to go to the english page
function redirectToEnglishVersion() {
    window.location.href = "./../index.html";
}

document.querySelectorAll('.dropdown-item')[0].addEventListener('click', function() {
    redirectToEnglishVersion();
});



/* Form button */
$(document).ready(function() {
    $('#sendBtn').click(function() {
        $('#contact-form').submit();
    });
});
