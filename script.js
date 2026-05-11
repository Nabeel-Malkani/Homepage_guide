// Progress bar
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = (scrolled / total * 100) + '%';
});

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.section').forEach(s => observer.observe(s));

// Active nav
const sectionIds = ['nav-section','hero-section','about-section','services-section',
                    'portfolio-section','testi-section','contact-section','footer-section'];
const navLinks = document.querySelectorAll('#step-nav a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`#step-nav a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});

// Portfolio filter tabs (visual only)
document.querySelectorAll('.wf-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.wf-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});