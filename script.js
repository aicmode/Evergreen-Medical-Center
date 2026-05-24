// Scroll progress bar
const progress = document.getElementById('scroll-progress');
const header = document.getElementById('site-header');

function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  if (header) header.classList.toggle('scrolled', scrollTop > 24);
}
window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  siteNav?.classList.toggle('open', isOpen);
});

siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNav?.classList.remove('open');
  });
});

// Scroll-triggered fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll(
  '.service-card, .doctor-card, .feature-card, .testimonial-card, .stat-card, .contact-card'
).forEach((el, i) => {
  el.classList.add('animate-on-scroll');
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  observer.observe(el);
});

// Appointment form
const form = document.getElementById('appointment-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  if (!button) return;
  button.setAttribute('disabled', 'true');
  button.textContent = '送信中...';

  setTimeout(() => {
    button.removeAttribute('disabled');
    button.textContent = '予約リクエストを送信';
    alert('ご予約リクエストを受け付けました。担当スタッフより追ってご連絡いたします。');
    form.reset();
  }, 900);
});
