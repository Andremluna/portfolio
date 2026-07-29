/* ==================== REVEAL ON SCROLL + STAT COUNTERS ==================== */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window)) {
    // Fallback: sem suporte, mostra tudo
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // --- Animated stat counters ---
  const stats = document.querySelectorAll('.stat-num');
  if (!('IntersectionObserver' in window) || reduced) return;

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent.trim();
      const match = text.match(/(\d+)/);
      if (!match) { statObserver.unobserve(el); return; }
      const target = parseInt(match[1], 10);
      const suffix = text.replace(match[1], '');
      const duration = 1400;
      const start = performance.now();
      (function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      })(start);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach((el) => statObserver.observe(el));
})();
