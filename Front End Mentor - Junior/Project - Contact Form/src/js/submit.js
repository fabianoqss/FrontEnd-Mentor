const forms = document.getElementById('forms');

function successful(event) {
  event.preventDefault();
  const success = document.getElementById('success');
}

forms.addEventListener('submit', successful);
