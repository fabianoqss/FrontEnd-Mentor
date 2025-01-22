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
}
forms.addEventListener('change', handleChange);
