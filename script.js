// Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'AI & ML Engineer', 'Software Engineer', 'Quality Assurance'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });
});


document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Please fill out all fields before sending.");
            return;
        }

        if (!validateEmail(email)) {
            alert("⚠️ Please enter a valid email address.");
            return;
        }

        alert("✅ Your message has been sent successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


// 3D Tilt Effect for About Image
const aboutImg = document.querySelector('.about-image img');

aboutImg.addEventListener('mousemove', (e) => {
    const rect = aboutImg.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position
    const y = e.clientY - rect.top;  // Mouse Y position

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5; // Max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * -5;

    aboutImg.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    aboutImg.style.transition = 'transform 0.1s ease';
});

aboutImg.addEventListener('mouseleave', () => {
    aboutImg.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    aboutImg.style.transition = 'transform 0.4s ease';
});


// Future Animation Hooks
// You can add animation triggers here for skills, projects, etc.
