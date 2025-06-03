document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:info@example.com?subject=Marketing%20Anfrage%20von%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
    });
});
