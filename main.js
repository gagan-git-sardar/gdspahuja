document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize Typed.js for the typing animation ---
    if (document.getElementById('typing-animation')) {
        new Typed('#typing-animation', {
            strings: [
                'Content & Communications Strategist.',
                'Management of Technology Student.',
                'DevOps & Cloud Enthusiast.',
                'Storyteller.'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true,
            smartBackspace: true,
        });
    }

    // --- Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Reveal Elements on Scroll ---
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    reveals.forEach(element => {
        revealObserver.observe(element);
    });

    // --- Sticky Navigation on Scroll ---
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('.hero');
    if (nav && heroSection) {
        const navOptions = {
            rootMargin: `-${heroSection.offsetHeight - 70}px 0px 0px 0px`
        };
        const navObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
        }, navOptions);
        navObserver.observe(heroSection);
    }
});
