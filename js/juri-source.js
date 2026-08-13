/* Shared JURI chrome matching the reference restaurant toolbar. */
(() => {
  if (document.getElementById('juriSourceHome') || document.querySelector('.juri-shell-header')) return;

  document.body.classList.add('juri-source-site');
  const burger = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 5H21M3 10H21M3 15H21M3 20H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  const cart = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4h2l2 11h10l2-8H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const header = document.createElement('header');
  header.className = 'juri-shell-header';
  header.innerHTML = `<div class="container juri-shell-header__row">
    <div class="juri-shell-header__left"><button class="juri-shell-menu" type="button" aria-label="Menü öffnen" aria-expanded="false">${burger}</button><a class="juri-shell-logo" href="index.html" aria-label="JURI Startseite"><span>JURI</span><small>VIETNAMESE · JAPANESE</small></a></div>
    <nav class="juri-shell-tools" aria-label="Hauptnavigation"><a href="speisekarte.html">MENÜ</a><a href="speisekarte.html" data-order-link>ONLINE BESTELLUNG</a><a href="reservieren.html">RESERVIERUNG</a></nav>
    <a class="juri-shell-cart" href="cart.html" aria-label="Warenkorb">${cart}<b data-shell-cart-count>0</b></a>
  </div>`;

  const drawer = document.createElement('aside');
  drawer.className = 'juri-shell-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.innerHTML = `<div class="juri-shell-drawer__panel" role="dialog" aria-label="Navigation"><div class="juri-shell-drawer__top"><span>Informationen</span><button class="juri-shell-drawer__close" type="button" aria-label="Menü schließen">×</button></div><a href="speisekarte.html">Online Bestellung</a><a href="speisekarte.html">Speisekarte</a><a href="reservieren.html">Reservierung</a><a href="anlaesse.html">Ausgewählte Veranstaltungen</a><a href="ueber-uns.html">Über uns</a><a href="gutschein.html">Gutschein kaufen</a><a href="kontakt.html">Kontakt</a><a class="juri-shell-drawer__reserve" href="reservieren.html">Tisch reservieren</a></div>`;

  const footer = document.createElement('footer');
  footer.className = 'juri-shell-footer';
  footer.innerHTML = `<div class="container"><div class="juri-shell-footer__grid"><div class="juri-shell-footer__brand"><a class="juri-shell-footer__logo" href="index.html">JURI<small>VIETNAMESE · JAPANESE</small></a><h4>Besuchen Sie uns im JURI Restaurant</h4><p>Genießen Sie authentische Aromen und gemütliches Ambiente im JURI Restaurant – für unvergessliche Momente mit Familie und Freunden.</p></div><div><h4>Öffnungszeiten</h4><p>Montag – Sonntag<br>11:00 – 22:00 Uhr</p></div><div><h4>Benutzerlink</h4><nav><a href="ueber-uns.html">Über uns</a><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></nav></div><div><h4>Kontaktieren Sie uns</h4><nav><a href="tel:+4951513609">+49 5151 3609</a><a href="https://wa.me/4951513609">WhatsApp</a></nav></div></div><p class="juri-shell-footer__copy">© 2026 JURI Restaurant. Alle Rechte vorbehalten</p></div>`;

  const dock = document.createElement('nav');
  dock.className = 'juri-mobile-tools';
  dock.setAttribute('aria-label', 'Schnellzugriff');
  dock.innerHTML = `<a href="cart.html" data-order-link>${cart}<span>Warenkorb</span><b data-shell-cart-count>0</b></a><a href="reservieren.html"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5"/></svg><span>Reservierung</span></a>`;

  document.body.prepend(drawer);
  document.body.prepend(header);
  document.body.append(footer, dock);

  const toggle = open => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    header.querySelector('.juri-shell-menu').setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('juri-shell-open', open);
  };
  header.querySelector('.juri-shell-menu').addEventListener('click', () => toggle(true));
  drawer.querySelector('.juri-shell-drawer__close').addEventListener('click', () => toggle(false));
  drawer.addEventListener('click', event => { if (event.target === drawer) toggle(false); });
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') toggle(false); });

  const syncCart = () => {
    let count = 0;
    try { count = JSON.parse(localStorage.getItem('jury-pickup-cart-v1') || '[]').reduce((sum, item) => sum + Number(item.quantity || 0), 0); } catch (_) {}
    document.querySelectorAll('[data-shell-cart-count]').forEach(el => el.textContent = count);
  };
  document.addEventListener('jury-cart-change', syncCart);
  syncCart();
})();
