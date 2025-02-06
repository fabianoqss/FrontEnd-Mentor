const formulario = document.getElementById('forms');
const data = {};

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
    field.classList.remove('border-red-500');
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
    messageValid &&
    queryTypeValid &&
    consentValid
  ) {
    console.log('Form is valid!', data);
  }
});

function isEmpty(value) {
  return value.trim() === '';
}
