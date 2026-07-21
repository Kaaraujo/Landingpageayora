/* AYORA — small progressive enhancements only */
(() => {
  // Configure apenas os dígitos, incluindo país e DDD. Ex.: 5511999999999
  const WHATSAPP_NUMBER = '';
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (menuToggle && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.sr-only').textContent = 'Abrir menu';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const form = document.querySelector('[data-memory-form]');
  const feedback = document.querySelector('[data-form-feedback]');
  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = 'Complete os campos indicados para continuar.';
        return;
      }
      if (!WHATSAPP_NUMBER) {
        feedback.textContent = 'Antes de publicar, informe o número de WhatsApp em js/script.js para ativar o envio do pedido.';
        return;
      }

      const values = new FormData(form);
      const message = [
        'Olá! Gostaria de personalizar uma obra AYORA.',
        '',
        `Memória: ${values.get('memory-name')}`,
        `Formato: ${values.get('format')}`,
        `Data: ${values.get('memory-date')}`,
        `Horário: ${values.get('memory-time')}`,
        `Local: ${values.get('memory-place')}`,
        values.get('memory-message') ? `Mensagem: ${values.get('memory-message')}` : '',
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      feedback.textContent = 'Abrimos o WhatsApp para continuar sua personalização.';
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add('is-visible'));
  }

  window.addEventListener('scroll', () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });
})();
