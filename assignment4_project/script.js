const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
  form.addEventListener('submit', event => {
    form.querySelectorAll('input, textarea').forEach(input => {
      input.classList.toggle('is-valid', input.checkValidity());
      input.classList.toggle('is-invalid', !input.checkValidity());
    });

    if (!form.checkValidity()) {
      event.preventDefault();
    }

    event.preventDefault();
  });
});