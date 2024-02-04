var hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('nav');

const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    });

});