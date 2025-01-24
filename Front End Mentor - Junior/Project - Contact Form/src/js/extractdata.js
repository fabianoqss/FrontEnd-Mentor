const forms = document.getElementById('forms');

export default function handleChange(event) {
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

forms.addEventListener('change', handleChange);
