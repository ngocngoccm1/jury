// js/home.js — Jury Phở homepage interactivity (plain DOM, no deps)

// --- Sticky header state ---
const header = document.querySelector('.header');
addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });

// --- Mobile drawer ---
const drawer = document.getElementById('drawer');
document.getElementById('burger')?.addEventListener('click', () => drawer.classList.add('open'));
drawer?.querySelector('.drawer-close')?.addEventListener('click', () => drawer.classList.remove('open'));
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

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
  window.location.href = `mailto:${form.dataset.reservationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  msg.textContent = 'Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie die vorbereitete Anfrage ab.';
  msg.className = 'form-msg ok';
});

// Homepage reference shell: independent navigation and exact-width dish rail.
const jtDrawer = document.getElementById('jtDrawer');
document.querySelector('[data-jt-menu]')?.addEventListener('click', () => jtDrawer?.classList.add('open'));
document.querySelector('[data-jt-close]')?.addEventListener('click', () => jtDrawer?.classList.remove('open'));
jtDrawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => jtDrawer.classList.remove('open')));

const jtTrack = document.getElementById('jtDishTrack');
const jtSlides = [...document.querySelectorAll('.jt-dish-slide')];
const jtDots = [...document.querySelectorAll('[data-jt-dot]')];
const jtSetActiveDot = index => jtDots.forEach((dot, i) => {
  dot.parentElement?.classList.toggle('is-active', i === index);
  dot.setAttribute('aria-current', String(i === index));
});
const jtScrollToSlide = index => {
  const slide = jtSlides[index];
  if (!jtTrack || !slide) return;
  jtTrack.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  jtSetActiveDot(index);
};
jtDots.forEach(dot => dot.addEventListener('click', () => jtScrollToSlide(Number(dot.dataset.jtDot))));
if (jtTrack) {
  let jtScrollFrame;
  jtTrack.addEventListener('scroll', () => {
    cancelAnimationFrame(jtScrollFrame);
    jtScrollFrame = requestAnimationFrame(() => {
      const step = jtSlides[0]?.getBoundingClientRect().width || 185;
      jtSetActiveDot(Math.max(0, Math.min(jtSlides.length - 1, Math.round(jtTrack.scrollLeft / step))));
    });
  }, { passive: true });
  jtSetActiveDot(0);
}

// Source-faithful homepage shell. Kept separate from the hidden legacy shell so
// menu navigation and the mobile dish rail remain functional on static hosting.
const sourceDrawer = document.getElementById('juriSourceDrawer');
const sourceMenuButton = document.querySelector('[data-source-menu]');
const sourceCloseButton = document.querySelector('[data-source-close]');
const setSourceDrawer = open => {
  if (!sourceDrawer) return;
  sourceDrawer.classList.toggle('is-open', open);
  sourceDrawer.setAttribute('aria-hidden', String(!open));
  sourceMenuButton?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('source-drawer-open', open);
};
sourceMenuButton?.addEventListener('click', () => setSourceDrawer(true));
sourceCloseButton?.addEventListener('click', () => setSourceDrawer(false));
sourceDrawer?.addEventListener('click', event => {
  if (event.target === sourceDrawer) setSourceDrawer(false);
});
sourceDrawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setSourceDrawer(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setSourceDrawer(false);
});

// The customer no longer offers these Taumi carry-over items on the homepage.
// Remove them before the slider initializes so navigation indexes stay correct.
['Crew Loves Tapas', 'Business Lunch'].forEach(name => {
  [...document.querySelectorAll('#juriSourceDishTrack .dish-slide')]
    .find(slide => slide.textContent.includes(name))?.remove();
});
const sourceLunch = [...document.querySelectorAll('#juriSourceHome h3')]
  .find(heading => heading.textContent.trim() === 'Business Lunch');
sourceLunch?.closest('div.flex.flex-col')?.remove();
document.querySelectorAll('[data-source-dot]').forEach((dot, index) => {
  if (index < 2) {
    dot.parentElement?.remove();
    return;
  }
  dot.dataset.sourceDot = String(index - 2);
  dot.textContent = String(index - 1);
});

const sourceDishTrack = document.getElementById('juriSourceDishTrack');
const sourceDishSlides = [...document.querySelectorAll('#juriSourceDishTrack .dish-slide')];
const sourceDishDots = [...document.querySelectorAll('[data-source-dot]')];
const sourceRestaurantHeading = [...document.querySelectorAll('.juri-source h2')].find(heading => heading.textContent.includes('JURI Restaurant'));
if (sourceRestaurantHeading) sourceRestaurantHeading.innerHTML = '<svg width="33" height="32" viewBox="0 0 33 32" fill="none" aria-hidden="true" class="w-5 h-5 sm:w-8 sm:h-8"><path d="M30.3134 11.0267L29.9267 7.33333C29.3667 3.30667 27.54 1.66667 23.6334 1.66667H20.4867H18.5134H14.46H12.4867H9.28669C5.36669 1.66667 3.55335 3.30667 2.98002 7.37333L2.62002 11.04C2.48669 12.4667 2.87336 13.8533 3.71336 14.9333C4.72669 16.2533 6.28669 17 8.02002 17C9.70002 17 11.3134 16.16 12.3267 14.8133C13.2334 16.16 14.78 17 16.5 17C18.22 17 19.7267 16.2 20.6467 14.8667C21.6734 16.1867 23.26 17 24.9134 17C26.6867 17 28.2867 16.2133 29.2867 14.8267C30.0867 13.76 30.4467 12.4133 30.3134 11.0267Z" fill="#F1DDC4"/><path d="M15.6335 22.2133C13.9402 22.3867 12.6602 23.8267 12.6602 25.5333V29.1867C12.6602 29.5467 12.9535 29.84 13.3135 29.84H19.6735C20.0335 29.84 20.3268 29.5467 20.3268 29.1867V26C20.3402 23.2133 18.7002 21.8933 15.6335 22.2133Z" fill="#F1DDC4"/><path d="M28.9935 19.2V23.1733C28.9935 26.8533 26.0068 29.84 22.3268 29.84C21.9668 29.84 21.6735 29.5467 21.6735 29.1867V26C21.6735 24.2933 21.1535 22.96 20.1402 22.0533C19.2468 21.24 18.0335 20.84 16.5268 20.84C16.1935 20.84 15.8602 20.8533 15.5002 20.8933C13.1268 21.1333 11.3268 23.1333 11.3268 25.5333V29.1867C11.3268 29.5467 11.0335 29.84 10.6735 29.84C6.9935 29.84 4.00684 26.8533 4.00684 23.1733V19.2267C4.00684 18.2933 4.92684 17.6667 5.7935 17.9733C6.1535 18.0933 6.5135 18.1867 6.88684 18.24C7.04684 18.2667 7.22017 18.2933 7.38017 18.2933C7.5935 18.32 7.80684 18.3333 8.02017 18.3333C9.56684 18.3333 11.0868 17.76 12.2868 16.7733C13.4335 17.76 14.9268 18.3333 16.5002 18.3333C18.0868 18.3333 19.5535 17.7867 20.7002 16.8C21.9002 17.7733 23.3935 18.3333 24.9135 18.3333C25.1535 18.3333 25.3935 18.32 25.6202 18.2933C25.7802 18.28 25.9268 18.2667 26.0735 18.24C26.4868 18.1867 26.8602 18.0667 27.2335 17.9467C28.1002 17.6533 28.9935 18.2933 28.9935 19.2Z" fill="#F1DDC4"/></svg>JURI Restaurant';
const setSourceDishDot = index => sourceDishDots.forEach((dot, i) => {
  dot.parentElement?.classList.toggle('is-active', i === index);
  dot.setAttribute('aria-current', String(i === index));
});
const moveSourceDish = index => {
  const slide = sourceDishSlides[index];
  if (!sourceDishTrack || !slide) return;
  sourceDishTrack.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  setSourceDishDot(index);
};
sourceDishDots.forEach(dot => dot.addEventListener('click', () => moveSourceDish(Number(dot.dataset.sourceDot))));
const moveSourceDishPage = direction => {
  if (!sourceDishTrack || !sourceDishSlides.length) return;
  const slideWidth = sourceDishSlides[0].getBoundingClientRect().width || 252;
  const visible = Math.max(1, Math.floor(sourceDishTrack.clientWidth / slideWidth));
  const current = Math.round(sourceDishTrack.scrollLeft / slideWidth);
  const next = Math.max(0, Math.min(sourceDishSlides.length - visible, current + direction * visible));
  sourceDishTrack.scrollTo({ left: sourceDishSlides[next].offsetLeft, behavior: 'smooth' });
};
document.querySelector('[data-source-prev]')?.addEventListener('click', () => moveSourceDishPage(-1));
document.querySelector('[data-source-next]')?.addEventListener('click', () => moveSourceDishPage(1));
if (sourceDishTrack) {
  let sourceDishFrame;
  sourceDishTrack.addEventListener('scroll', () => {
    cancelAnimationFrame(sourceDishFrame);
    sourceDishFrame = requestAnimationFrame(() => {
      const step = sourceDishSlides[0]?.getBoundingClientRect().width || 185;
      setSourceDishDot(Math.max(0, Math.min(sourceDishSlides.length - 1, Math.round(sourceDishTrack.scrollLeft / step))));
    });
  }, { passive: true });
  setSourceDishDot(0);
}
