const toggle = document.querySelector('#flowToggle');
const card = document.querySelector('.flow-card');
const status = document.querySelector('#flowStatus');

toggle.addEventListener('click', () => {
  const active = card.classList.toggle('active');
  toggle.setAttribute('aria-pressed', String(active));
  toggle.lastChild.textContent = active ? ' Automatisierung läuft' : ' Automatisierung aktivieren';
  status.textContent = active
    ? 'System aktiv: Signale werden verbunden und Folgeaufgaben fließen weiter.'
    : 'Bereit für Ihren ersten Impuls.';
});
