document.addEventListener('DOMContentLoaded', () => {

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

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // New Staggered Animation Logic
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

    reveals.forEach((element, index) => {
        // This line adds the stagger delay
        element.style.transitionDelay = `${index * 100}ms`;
        revealObserver.observe(element);
    });


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
