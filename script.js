document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const descId = item.getAttribute('aria-controls');
    const desc = document.getElementById(descId);

    const isExpanded = item.getAttribute('aria-expanded') === 'true';

    // On inverse l'état
    item.setAttribute('aria-expanded', String(!isExpanded));
    if (!isExpanded) {
      desc.removeAttribute('hidden');
    } else {
      desc.setAttribute('hidden', '');
    }
  });

  // Support clavier : ouvrir/fermer avec la touche Enter ou Espace
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // empêcher le scroll avec espace
      item.click();
    }
  });
});