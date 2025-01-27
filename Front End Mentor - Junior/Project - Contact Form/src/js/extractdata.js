const forms = document.getElementById('forms');
const successMessage = document.getElementById('success-message');

function showError(target, message) {
  target.classList.add('border-borderError');
  target.setCustomValidity(message);
  target.nextElementSibling.innerText = target.validationMessage;
}

function clearError(target) {
  target.classList.remove('border-borderError');
  target.setCustomValidity('');
  target.nextElementSibling.innerText = '';
}

function saveFormData(target) {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  formData[target.name] = target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    showError(target, 'This field is Required');
    event.preventDefault();
  } else {
    clearError(target);
  }
  saveFormData(target);
}

forms.addEventListener('submit', (event) => {
  event.preventDefault();
  const target = event.target;
  if (!target.checkValidity()) {
    if (target.name === 'choose')
      showError(target.nextElementSibling, 'Please select a query Type');
    else if (target.name === 'consent')
      showError(
        target.nextElementSibling,
        'To submit this form, please consent to being contacted',
      );
  }
  successMessage.classList.remove('hidden');

  setTimeout(() => successMessage.classList.add('hidden'), 3000);

  setTimeout(() => {
    forms.reset();
    window.location.reload();
  }, 5000);
});

forms.addEventListener('submit', handleChange);
