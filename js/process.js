/* ==================== PROCESS — sticky scroll sync ==================== */
(function () {
  const phases = document.querySelectorAll('.phase');
  const steps = document.querySelectorAll('.stepper .step');
  const progress = document.getElementById('stepperProgress');
  if (!phases.length || !steps.length) return;

  let activeIdx = -1;

  function setActive(idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    steps.forEach((s, i) => s.classList.toggle('active', i === idx));
    if (progress) progress.style.height = ((idx + 1) / steps.length) * 100 + '%';
  }

  // entry / exit animation
  if ('IntersectionObserver' in window) {
    const enterObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle('in-view', e.isIntersecting));
    }, { threshold: 0.25 });
    phases.forEach((p) => enterObserver.observe(p));
  } else {
    phases.forEach((p) => p.classList.add('in-view'));
  }

  // active step = fase mais próxima do centro do viewport
  function pickActive() {
    const center = window.innerHeight * 0.45;
    let bestIdx = 0, bestDist = Infinity;
    phases.forEach((p, i) => {
      const rect = p.getBoundingClientRect();
      const d = Math.abs((rect.top + rect.height / 2) - center);
      if (d < bestDist) { bestDist = d; bestIdx = i; }
    });
    setActive(bestIdx);
  }
  window.addEventListener('scroll', pickActive, { passive: true });
  window.addEventListener('resize', pickActive);
  pickActive();

  // clique no stepper faz scroll até a fase
  steps.forEach((step) => {
    step.addEventListener('click', () => {
      const target = document.getElementById(step.dataset.target);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.2;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
