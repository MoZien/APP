document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:info@example.com?subject=Marketing%20Anfrage%20von%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
        });
    });
});
