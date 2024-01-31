document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic validation logic here
        alert('Form submitted');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  // Perform validation and if valid, proceed with form submission
  if(name && email && message) {
    // Code to handle form submission
    alert('Form submitted successfully!');
  } else {
    alert('Please fill out all fields.');
  }
});

