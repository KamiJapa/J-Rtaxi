const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-principal');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// WhatsApp endpoint intentionally requires the real business number before publication.
