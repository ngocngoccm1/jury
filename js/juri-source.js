/* Shared JURI chrome using Taumi's original header, drawer and footer geometry. */
(() => {
  // Shared interaction modules do not alter the page until a guest starts an action.
  const loadFeature = src => {
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.append(script);
  };
  loadFeature('js/booking.js');
  loadFeature('js/order-cart.js');

  if (document.getElementById('juriSourceHome') || document.querySelector('.juri-shell-header')) return;

  document.body.classList.add('juri-source-site');
  const reserve = 'https://wa.me/4951513609?text=Hallo%20JURI%2C%20ich%20m%C3%B6chte%20einen%20Tisch%20reservieren.';
  const pin = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M17.183 7.042C16.308 3.192 12.95 1.458 10 1.458 7.05 1.458 3.683 3.183 2.808 7.033 1.833 11.333 4.467 14.975 6.85 17.267c.883.85 2.016 1.275 3.15 1.275 1.133 0 2.266-.425 3.142-1.275 2.383-2.292 5.016-5.925 4.041-10.225ZM10 11.217a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"/></svg>';
  const burger = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4.5H21M3 9.5H21M3 14.5H21M3 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  const header = document.createElement('header');
  header.className = 'juri-shell-header';
  header.innerHTML = `<div class="container juri-shell-header__row"><div class="juri-shell-header__left"><button class="juri-shell-menu" type="button" aria-label="Menü öffnen" aria-expanded="false">${burger}</button><a class="juri-shell-logo" href="index.html" aria-label="JURI Startseite"><span>JURI</span><small>VIETNAMESE · JAPANESE</small></a></div><a class="juri-shell-book" href="${reserve}">${pin}<span>Tisch reservieren</span></a></div>`;

  const drawer = document.createElement('aside');
  drawer.className = 'juri-shell-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.innerHTML = `<div class="juri-shell-drawer__panel" role="dialog" aria-label="Navigation"><div class="juri-shell-drawer__top"><span>Informationen</span><button class="juri-shell-drawer__close" type="button" aria-label="Menü schließen">×</button></div><a href="bestellen.html">Online Bestellung</a><a href="speisekarte.html">Speisekarte</a><a href="anlaesse.html">Ausgewählte Veranstaltungen</a><a href="ueber-uns.html">Über uns</a><a href="gutschein.html">Gutschein kaufen</a><a href="kontakt.html">Kontakt</a><a class="juri-shell-drawer__reserve" href="${reserve}">Reservierung</a></div>`;

  const footer = document.createElement('footer');
  footer.className = 'juri-shell-footer';
  footer.innerHTML = `<div class="container"><div class="juri-shell-footer__grid"><div class="juri-shell-footer__brand"><a class="juri-shell-footer__logo" href="index.html">JURI<small>VIETNAMESE · JAPANESE</small></a><h4>Besuchen Sie uns im JURI Restaurant</h4><p>Genießen Sie authentische Aromen und gemütliches Ambiente im JURI Restaurant – für unvergessliche Momente mit Familie und Freunden.</p></div><div><h4>Öffnungszeiten</h4><p>Montag – Sonntag<br>11:00 – 22:00 Uhr</p></div><div><h4>Links</h4><nav><a href="ueber-uns.html">Über uns</a><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></nav></div><div><h4>Kontaktieren Sie uns</h4><nav><a href="tel:+4951513609">+49 5151 3609</a><a href="https://wa.me/4951513609">WhatsApp</a></nav></div></div><p class="juri-shell-footer__copy">© 2026 JURI Restaurant. Alle Rechte vorbehalten</p></div>`;

  document.body.prepend(drawer);
  document.body.prepend(header);
  document.body.append(footer);

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
})();
