// Height of your fixed header (tweak if needed)
const HEADER_OFFSET = 80;

document.querySelectorAll('.nav-menu a').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href') || '';

    // Let external links work normally
    if (!href.startsWith('#')) return;

    e.preventDefault();

    // Handle "#" → scroll to top
    const id = href.slice(1);
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
