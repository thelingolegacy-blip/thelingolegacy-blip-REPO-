(() => {
  const KEY = 'lingo_legacy_consent_v1';
  const CATEGORIES = ['analytics', 'marketing', 'personalization'];
  const existing = localStorage.getItem(KEY);
  if (existing) return;

  const style = document.createElement('style');
  style.textContent = `
    #lingo-cookie-box{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483647;max-width:760px;margin:auto;padding:20px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:#09090b;color:#fff;box-shadow:0 18px 60px rgba(0,0,0,.45);font:14px/1.5 system-ui,sans-serif}
    #lingo-cookie-box h2{margin:0 0 8px;font-size:18px} #lingo-cookie-box p{margin:0 0 14px;color:#d4d4d8}
    #lingo-cookie-box .row{display:flex;gap:10px;flex-wrap:wrap} #lingo-cookie-box button{border:0;border-radius:10px;padding:10px 14px;font-weight:700;cursor:pointer}
    #lingo-cookie-box .primary{background:#f5c542;color:#111}.secondary{background:#27272a;color:#fff}
    @media(prefers-reduced-motion:reduce){#lingo-cookie-box *{scroll-behavior:auto!important}}
  `;
  document.head.appendChild(style);

  const box = document.createElement('section');
  box.id = 'lingo-cookie-box';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'false');
  box.setAttribute('aria-labelledby', 'lingo-cookie-title');
  box.innerHTML = `
    <h2 id="lingo-cookie-title">Your privacy, your choice</h2>
    <p>Lingo Legacy uses essential technologies to operate the site. Optional analytics, marketing, and personalization technologies stay off until you choose them.</p>
    <div class="row">
      <button class="primary" data-consent="accept">Accept optional</button>
      <button class="secondary" data-consent="essential">Essential only</button>
      <button class="secondary" data-consent="settings" aria-label="Open cookie settings">Manage choices</button>
    </div>`;
  document.body.appendChild(box);

  const save = (choice) => {
    const consent = { version: 1, categories: choice === 'accept' ? CATEGORIES : [], essential: true, timestamp: new Date().toISOString() };
    localStorage.setItem(KEY, JSON.stringify(consent));
    box.remove();
    window.dispatchEvent(new CustomEvent('lingo:consent', { detail: consent }));
  };
  box.addEventListener('click', (event) => {
    const button = event.target.closest('[data-consent]');
    if (!button) return;
    if (button.dataset.consent === 'settings') {
      window.dispatchEvent(new CustomEvent('lingo:consent-settings'));
      return;
    }
    save(button.dataset.consent);
  });
})();
