const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  // Sections here are far taller than the viewport, so a ratio threshold can
  // never be reached — fire as soon as any part of one enters.
  { threshold: 0, rootMargin: '0px 0px -10% 0px' },
);

for (const el of document.querySelectorAll('.reveal')) {
  observer.observe(el);
}
