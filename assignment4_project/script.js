const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
  const password = form.querySelector('#password');
  const confirmPassword = form.querySelector('#confirmPassword');

  form.addEventListener('submit', event => {
    if (password && confirmPassword) {
      confirmPassword.setCustomValidity(
        password.value === confirmPassword.value
          ? ''
          : 'Passwords do not match'
      );
    }

    form.querySelectorAll(
      'input:not([type="radio"]):not([type="checkbox"]), textarea, select'
    ).forEach(input => {
      input.classList.toggle('is-valid', input.checkValidity());
      input.classList.toggle('is-invalid', !input.checkValidity());
    });

    if (!form.checkValidity()) {
      event.preventDefault();
    }

    event.preventDefault();
  });

  form.addEventListener('reset', () => {
    form.querySelectorAll('.is-valid, .is-invalid').forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });

    if (confirmPassword) {
      confirmPassword.setCustomValidity('');
    }
  });
});