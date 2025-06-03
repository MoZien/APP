document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');
 tiwvmp-codex/website-modernisieren-und-designen
    const themeToggle = document.querySelector('.theme-toggle');
    const scrollTop = document.getElementById('scrollTop');
    const formMessage = document.getElementById('formMessage');

 main

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            const mailtoLink = `mailto:info@example.com?subject=Marketing%20Anfrage%20von%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail:%20${encodeURIComponent(email)}`;
            formMessage.textContent = 'Nachricht wird vorbereitet...';
            window.location.href = mailtoLink;
        } else {
            formMessage.textContent = 'Bitte alle Felder ausfüllen.';
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
        });
    }

    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
