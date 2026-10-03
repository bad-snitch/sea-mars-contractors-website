const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Inquiry sent';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    }
  });
}
