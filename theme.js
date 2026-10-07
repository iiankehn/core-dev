/* Apply the saved preference before CSS paints. System is the default. */
(() => {
  const key = 'core-dev-theme';
  const choices = ['system', 'light', 'dark'];
  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (choices.includes(saved)) preference = saved;
  } catch { /* The system theme still works when storage is unavailable. */ }
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    const dark = preference === 'dark' || (preference === 'system' && media.matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const button = document.querySelector('.theme-button');
    if (!button) return;
    const next = choices[(choices.indexOf(preference) + 1) % choices.length];
    const label = preference[0].toUpperCase() + preference.slice(1);
    button.querySelector('[data-theme-label]').textContent = label;
    button.setAttribute('aria-label', `Color theme: ${label}. Switch to ${next} mode.`);
    button.hidden = false;
  }
  apply();
  media.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = choices.includes(event.newValue) ? event.newValue : 'system';
      apply();
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-button')?.addEventListener('click', () => {
      preference = choices[(choices.indexOf(preference) + 1) % choices.length];
      try { localStorage.setItem(key, preference); } catch { /* Preference applies for this visit. */ }
      apply();
    });
    apply();
  });
})();
