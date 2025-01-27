const forms = document.getElementById('forms');

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add('border-borderError');
    target.setCustomValidity('This field is Required');
    target.nextElementSibling.innerText = target.validationMessage;
    event.preventDefault();
  } else {
    target.classList.remove('border-borderError');
  }

  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  formData[target.name] = target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function successful(event) {
  event.preventDefault();
  const success = document.getElementById('success-message');
  success.classList.remove('hidden');

  setTimeout(() => {
    success.classList.add('hidden');
  }, 3000);

  setTimeout(() => {
    window.location.reload();
    formulario.reset();
  }, 5000);
}

forms.addEventListener('change', handleChange);
forms.addEventListener('submit', successful);
