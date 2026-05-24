const form = document.getElementById('appointment-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  button?.setAttribute('disabled', 'true');
  button?.classList.add('disabled');
  button.textContent = 'Sending...';

  window.setTimeout(() => {
    button?.removeAttribute('disabled');
    button?.classList.remove('disabled');
    button.textContent = 'Submit Request';
    alert('ご予約リクエストを受け付けました。担当スタッフより追ってご連絡いたします。');
    form.reset();
  }, 900);
});
