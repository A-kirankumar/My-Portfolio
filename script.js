// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate skills on scroll
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.skill-progress').forEach((progress, i) => {
                    setTimeout(() => {
                        progress.style.width = progress.getAttribute('data-width');
                    }, i * 150);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillsObserver.observe(document.getElementById('skills'));
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});