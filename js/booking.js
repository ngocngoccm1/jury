/* Static reservation flow: collects a complete request, then sends it to JURI's WhatsApp. */
(() => {
  if (window.JuryBooking) return;

  const PHONE = '4951513609';
  const css = `
    .jury-booking-modal[hidden]{display:none!important}
    .jury-booking-modal{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:16px;background:rgba(0,0,0,.64)}
    .jury-booking-modal__panel{width:min(100%,460px);max-height:min(760px,calc(100dvh - 32px));overflow:auto;border:1px solid rgba(229,239,207,.26);border-radius:14px;background:#202126;color:#fff;box-shadow:0 24px 70px rgba(0,0,0,.48)}
    .jury-booking-modal__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:22px 22px 0}
    .jury-booking-modal__title{margin:0;color:#e5efcf;font:700 22px/1.25 system-ui,sans-serif}
    .jury-booking-modal__intro{margin:7px 0 0;color:#aaa;font:14px/1.5 system-ui,sans-serif}
    .jury-booking-modal__close{width:36px;height:36px;flex:none;border:0;border-radius:50%;background:transparent;color:#fff;font-size:26px;line-height:1;cursor:pointer}
    .jury-booking-form{display:grid;gap:14px;padding:20px 22px 22px}
    .jury-booking-form label{display:grid;gap:6px;color:#e5efcf;font:600 13px/1.3 system-ui,sans-serif}
    .jury-booking-form input,.jury-booking-form select,.jury-booking-form textarea{width:100%;min-height:44px;border:1px solid rgba(229,239,207,.25);border-radius:8px;background:#19201e;color:#fff;padding:10px 12px;font:14px/1.35 system-ui,sans-serif}
    .jury-booking-form textarea{min-height:76px;resize:vertical}
    .jury-booking-form__grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .jury-booking-form__submit{min-height:46px;border:0;border-radius:8px;background:#7d9b79;color:#fff;font:600 14px/1 system-ui,sans-serif;cursor:pointer}
    .jury-booking-form__notice{margin:0;color:#aaa;font:12px/1.45 system-ui,sans-serif}
    body.jury-booking-open{overflow:hidden}
    @media(max-width:420px){.jury-booking-modal{padding:10px}.jury-booking-modal__head{padding:18px 18px 0}.jury-booking-form{padding:18px}.jury-booking-form__grid{grid-template-columns:1fr}}
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  const modal = document.createElement('div');
  modal.className = 'jury-booking-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <section class="jury-booking-modal__panel" role="dialog" aria-modal="true" aria-labelledby="juryBookingTitle">
      <div class="jury-booking-modal__head">
        <div><h2 class="jury-booking-modal__title" id="juryBookingTitle">Tisch reservieren</h2><p class="jury-booking-modal__intro">Wir bestätigen Ihre Reservierung schnell persönlich per WhatsApp.</p></div>
        <button class="jury-booking-modal__close" type="button" aria-label="Schließen">×</button>
      </div>
      <form class="jury-booking-form">
        <label>Name<input name="name" autocomplete="name" required></label>
        <label>Telefon / WhatsApp<input name="phone" type="tel" autocomplete="tel" required></label>
        <div class="jury-booking-form__grid">
          <label>Datum<input name="date" type="date" required></label>
          <label>Uhrzeit<input name="time" type="time" required></label>
        </div>
        <label>Personen<select name="guests" required><option value="">Bitte wählen</option><option>1 Person</option><option>2 Personen</option><option>3 Personen</option><option>4 Personen</option><option>5 Personen</option><option>6 Personen</option><option>7 Personen</option><option>8 Personen</option><option>9+ Personen</option></select></label>
        <label>Hinweis (optional)<textarea name="note" placeholder="z. B. Kinderstuhl, Allergien"></textarea></label>
        <button class="jury-booking-form__submit" type="submit">Reservierung per WhatsApp anfragen</button>
        <p class="jury-booking-form__notice">Mit dem Absenden wird WhatsApp mit Ihrer vollständigen Anfrage geöffnet.</p>
      </form>
    </section>`;
  document.body.append(modal);

  const form = modal.querySelector('form');
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('jury-booking-open');
  };
  const open = () => {
    modal.hidden = false;
    document.body.classList.add('jury-booking-open');
    setTimeout(() => form.elements.name.focus(), 0);
  };
  form.elements.date.min = new Date().toISOString().slice(0, 10);
  modal.querySelector('.jury-booking-modal__close').addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) close(); });

  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const label = `${link.textContent || ''} ${link.getAttribute('href') || ''}`.toLowerCase();
    if (!/reserv|tisch/.test(label) || !/wa\.me|whatsapp/.test(label)) return;
    event.preventDefault();
    open();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    const lines = [
      'Hallo JURI, ich möchte einen Tisch reservieren.',
      '',
      `Name: ${values.name}`,
      `Telefon: ${values.phone}`,
      `Datum: ${values.date}`,
      `Uhrzeit: ${values.time}`,
      `Personen: ${values.guests}`
    ];
    if (values.note.trim()) lines.push(`Hinweis: ${values.note.trim()}`);
    window.location.assign(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`);
  });

  window.JuryBooking = { open, close };
})();
