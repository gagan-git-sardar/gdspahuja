document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Initialize Typed.js ---
    if (document.getElementById('typing-animation')) {
        const typed = new Typed('#typing-animation', {
            strings: [
                'Project Manager.',
                'Technology Strategist.',
                'Innovative Leader.',
                'Problem Solver.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            smartBackspace: true,
        });
    }

    // --- 2. Staggered Animation on Scroll ---
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => {
        revealObserver.observe(element);
    });

});
