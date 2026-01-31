// Aktivizo animacionet kur bën scroll
AOS.init({
    duration: 1000, // Sa zgjat animacioni
    once: true, // Ndodh vetëm një herë
});

// Efekti i shkrimit automatik (Typing Effect)
var typed = new Typed('.typing-text', {
    strings: ['Rrjeteve Sociale', 'Marketingut Digjital', 'Brandit Tuaj'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Smooth Scroll për navigim
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
