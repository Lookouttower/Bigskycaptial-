const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const gateModal = document.querySelector('[data-gate-modal]');
const gateCopy = document.querySelector('[data-gate-copy]');

if (header) {
  const handleScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add('reveal-ready');
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const dealCards = document.querySelectorAll('[data-category]');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    dealCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

document.querySelectorAll('[data-gate-trigger]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const documentName = trigger.getAttribute('data-gate-trigger');
    if (gateCopy) {
      gateCopy.textContent = `${documentName} is gated. To access this document, investors must complete third-party accreditation verification.`;
    }
    if (gateModal && typeof gateModal.showModal === 'function') {
      gateModal.showModal();
      document.body.classList.add('modal-open');
    }
  });
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('dialog');
    modal?.close();
    document.body.classList.remove('modal-open');
  });
});

document.querySelectorAll('dialog').forEach((modal) => {
  modal.addEventListener('close', () => document.body.classList.remove('modal-open'));
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) modal.close();
  });
});
