const formulario = document.getElementById('forms');
const data = {};
const messageSent = document.getElementById('success-message');

function validateField(field, errorMessage) {
  const errorSpan = field.nextElementSibling;
  if (isEmpty(field.value)) {
    errorSpan.innerText = errorMessage;
    errorSpan.classList.remove('hidden');
    return false;
  } else {
    errorSpan.innerText = '';
    errorSpan.classList.add('hidden');
    data[field.name] = field.value;
    return true;
  }
}

function validateRadio(name, errorSpan) {
  const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
  if (!selectedRadio) {
    errorSpan.innerText = 'Please select a query type.';
    errorSpan.classList.remove('hidden');
    return false;
  } else {
    errorSpan.innerText = '';
    errorSpan.classList.add('hidden');
    data[name] = selectedRadio.value;
    return true;
  }
}

function validateCheckbox(field, errorMessage) {
  const errorSpan = document.querySelector('.error');
  if (!field.checked) {
    errorSpan.innerText = errorMessage;
    errorSpan.classList.remove('hidden');
    return false;
  } else {
    errorSpan.innerText = '';
    errorSpan.classList.add('hidden');
    data[field.name] = true;
    return true;
  }
}

function validateEmail(field, errorMessage) {
  const errorSpan = field.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (isEmpty(field.value)) {
    errorSpan.innerText = 'Please enter a valid email address';
    errorSpan.classList.remove('hidden');
    return false;
  } else if (!emailRegex.test(field.value)) {
    errorSpan.innerText = errorMessage;
    errorSpan.classList.remove('hidden');
    return false;
  } else {
    errorSpan.innerText = '';
    errorSpan.classList.add('hidden');
    data[field.name] = field.value;
    return true;
  }
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstNameValid = validateField(
    document.getElementById('firstName'),
    'This field is Required',
  );
  const lastNameValid = validateField(
    document.getElementById('lastName'),
    'This field is Required',
  );

  const emailValid = validateEmail(
    document.getElementById('email'),
    'Please enter a valid email address.',
  );

  const messageValid = validateField(
    document.getElementById('message'),
    'This field is Required',
  );

  const queryTypeValid = validateRadio(
    'choose',
    document.querySelector('.query'),
  );

  const consentValid = validateCheckbox(
    document.getElementById('consent'),
    'To submit this form, please consent to being contacted',
  );

  if (
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    messageValid &&
    queryTypeValid &&
    consentValid
  ) {
    saveToLocalStorage(data);
    messageSent.classList.remove('hidden');
    setTimeout(() => {
      messageSent.classList.add('hidden');
      location.reload();
    }, 5000);
  }
});

function saveToLocalStorage(data) {
  try {
    localStorage.setItem('formData', JSON.stringify(data));
    console.log('Dados salvos no localStorage:', data);
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
  }
}

function isEmpty(value) {
  return value.trim() === '';
}
