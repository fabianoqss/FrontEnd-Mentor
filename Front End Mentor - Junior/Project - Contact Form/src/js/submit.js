const formulario = document.getElementById('forms');

export default function successful(event) {
  event.preventDefault();
  const success = document.getElementById('success-message');
  success.classList.remove('hidden');

  setTimeout(() => {
    success.classList.add('hidden');
  }, 3000);
}

formulario.addEventListener('submit', successful);
