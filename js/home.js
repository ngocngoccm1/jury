// js/home.js — Jury Phở homepage interactivity (plain DOM, no deps)

// --- Mobile drawer ---
const drawer = document.getElementById('drawer');
document.querySelectorAll('#burger,[data-open-menu]').forEach(button =>
  button.addEventListener('click', () => drawer?.classList.add('open')));
drawer?.querySelector('.drawer-close')?.addEventListener('click', () => drawer.classList.remove('open'));
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

// --- Taumi-style dish rail controls ---
const taumiRail = document.querySelector('.taumi-dish-rail');
document.querySelectorAll('[data-rail]').forEach(button => button.addEventListener('click', () => {
  const direction = button.dataset.rail === 'next' ? 1 : -1;
  taumiRail?.scrollBy({ left: direction * Math.min(taumiRail.clientWidth * .75, 600), behavior: 'smooth' });
}));

// --- Language toggle (DE/EN) — persists in localStorage ---
function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('jury-lang', lang); } catch (e) {}
}
document.querySelectorAll('.lang-toggle button').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang((() => { try { return localStorage.getItem('jury-lang') || 'de'; } catch (e) { return 'de'; } })());

// --- Scroll reveal (fade-in on scroll) ---
const reveals = document.querySelectorAll('.reveal');
if (reveals.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
  // safety net: if a section is jumped past (anchor link, instant scroll) reveal anything above viewport bottom
  addEventListener('scrollend', () => {
    reveals.forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); });
  });
} else {
  reveals.forEach(el => el.classList.add('in'));
}

// --- Dish carousel (mobile swipe-rail dots, taumi-style). Desktop is a static grid, no dots. ---
const track = document.getElementById('dishTrack');
const dots = document.getElementById('dishDots');
if (track && dots) {
  const cards = [...track.querySelectorAll('.dish')];
  const nearest = () => {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    cards.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  };
  cards.forEach((card, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Gericht ${i + 1}`);
    b.addEventListener('click', () =>
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dots.appendChild(b);
  });
  const sync = () => {
    const active = nearest();
    dots.children[active] && [...dots.children].forEach((d, i) =>
      d.setAttribute('aria-selected', String(i === active)));
  };
  let raf;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(sync);
  }, { passive: true });
  sync();
}

// --- Reservation form (static deployment: opens a prepared email) ---
const form = document.getElementById('reserveForm');
const dateEl = document.getElementById('r-date');
if (dateEl) dateEl.min = new Date().toISOString().slice(0, 10);

form?.addEventListener('submit', e => {
  e.preventDefault();
  const msg = form.querySelector('.form-msg');
  const btn = form.querySelector('button[type=submit]');
  const v = id => (document.getElementById(id)?.value || '').trim();
  const data = {
    name: v('r-name'), phone: v('r-phone'), email: v('r-email'), guests: v('r-guests'),
    date: v('r-date'), time: v('r-time'), note: v('r-note'),
    company: v('r-company') // honeypot
  };
  if (!data.name || !data.phone || !data.email || !data.guests || !data.date || !data.time) {
    msg.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
    msg.className = 'form-msg err'; return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    msg.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    msg.className = 'form-msg err'; return;
  }
  // Works from a static deployment: open a prepared reservation email.
  const reservationEmail = form.dataset.reservationEmail;
  const subject = 'Tischreservierung JURI';
  const message = [
    'Hallo JURI,', '',
    'ich möchte gerne einen Tisch reservieren.', '',
    `Name: ${data.name}`,
    `Telefon: ${data.phone}`,
    `E-Mail: ${data.email}`,
    `Gäste: ${data.guests}`,
    `Datum: ${data.date}`,
    `Uhrzeit: ${data.time}`,
    `Anmerkung: ${data.note || '-'}`
  ].join('\n');
  window.location.href = `mailto:${reservationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  msg.textContent = 'Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie die vorbereitete Anfrage ab.';
  msg.className = 'form-msg ok';
});
