// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        const targetId = this.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

// Contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone) {
        // Show a success message
        alert(`Thank you, ${name}! Your message has been submitted.`);
        this.reset(); // Clear the form
    } else {
        // Show an error message if required fields are missing
        alert('Please fill in all the required fields.');
    }
});
