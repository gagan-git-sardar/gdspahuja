document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Burger Menu Logic ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        body.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    });

    // --- 2. Initialize Typed.js ---
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

    // --- 3. Smooth Scroll & Close Menu ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if it's open before scrolling
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    body.classList.remove('nav-open');
                    burger.classList.remove('toggle');
                }
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 4. Staggered Animation on Scroll ---
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

    // --- 5. Sticky Navigation on Scroll ---
    const navBar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero');
    if (navBar && heroSection) {
        const navOptions = {
            rootMargin: `-${heroSection.offsetHeight - 70}px 0px 0px 0px`
        };
        const navObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navBar.classList.add('scrolled');
                } else {
                    navBar.classList.remove('scrolled');
                }
            });
        }, navOptions);
        navObserver.observe(heroSection);
    }
});
