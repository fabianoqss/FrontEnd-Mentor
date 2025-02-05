const formulario = document.getElementById('forms');

function submitForms(e) {
  e.preventDefault();

  const inputs = formulario.querySelectorAll('input[required]');

  inputs.forEach((input) => {
    const span = input.nextElementSibling;

    if (!input.checkValidity()) {
      span.innerText = 'This field is required';
      span.classList.remove('hidden');
    } else {
      span.innerText = '';
      span.classList.add('hidden');
    }
  });
}

formulario.addEventListener('submit', submitForms);
