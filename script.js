const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const hamburgerIcon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
    
    if (hamburger.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target) && sideMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        sideMenu.classList.remove('active');
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
});

// Scroll reveal animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

if (scrollRevealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    scrollRevealElements.forEach(el => {
        revealObserver.observe(el);
    });
}