// Smooth scrolling functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Detect when sections are in the viewport for animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section); // Observe each section
});
