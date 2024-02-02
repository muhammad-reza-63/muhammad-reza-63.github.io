// Your existing JavaScript code remains unchanged
// Add this function to handle the hamburger menu toggle
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}
