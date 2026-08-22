(() => {
  const form = document.getElementById('onlineReservationForm');
  if (!form) return;
  const date = document.getElementById('bookingDate');
  date.min = new Date().toISOString().slice(0, 10);
  const value = id => (document.getElementById(id)?.value || '').trim();
  const sync = () => {
    const time = value('bookingTime'); const day = value('bookingDate');
    document.querySelector('[data-summary="datetime"]').textContent = day && time ? `${day} · ${time} Uhr` : '---';
    const guests = value('bookingGuests') || '1'; document.querySelector('[data-summary="guests"]').textContent = `${guests} ${guests === '1' ? 'Gast' : 'Gäste'}`;
    ['name','email','phone','note'].forEach(key => { document.querySelector(`[data-summary="${key}"]`).textContent = value(`booking${key[0].toUpperCase()}${key.slice(1)}`) || '---'; });
  };
  form.addEventListener('input', sync); form.addEventListener('change', sync); sync();
  form.addEventListener('submit', event => {
    event.preventDefault(); if (!form.reportValidity()) return;
    const lines = ['Hallo JURY, ich möchte einen Tisch reservieren:', '', `Datum: ${value('bookingDate')}`, `Uhrzeit: ${value('bookingTime')}`, `Gäste: ${value('bookingGuests')}`, `Tischplatzierung: ${value('bookingSeat') || 'Keine Präferenz'}`, `Name: ${value('bookingName')}`, `Telefon: ${value('bookingPhone')}`, `E-Mail: ${value('bookingEmail')}`, `Notiz: ${value('bookingNote') || '-'}`];
    document.getElementById('reservationMessage').textContent = 'Ihre Reservierungsanfrage wird jetzt an JURY übermittelt.';
    location.href = `https://wa.me/4951513609?text=${encodeURIComponent(lines.join('\n'))}`;
  });
})();
