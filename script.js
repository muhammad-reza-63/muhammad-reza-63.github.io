
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navList = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        // Toggle class to animate and show/hide the menu
        navList.classList.toggle('open');
    });
});
