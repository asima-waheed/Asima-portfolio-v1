// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dummy Contact Form submission
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! This is a demo form.');
    form.reset();
});

// Add shadow to navbar on scroll (Optional: Requires a 'shadow' class in CSS for the header)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    // Note: The 'shadow' class was not defined in the provided CSS, but the JS logic is here.
    // If you want a shadow effect, you'd add:
    // header.classList.toggle('shadow', window.scrollY > 0);
    // and define .shadow style in your CSS.
});