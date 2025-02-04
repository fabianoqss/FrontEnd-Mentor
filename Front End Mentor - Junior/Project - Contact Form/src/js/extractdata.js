const formulario = document.querySelector('#forms');

function envioFormulario(e) {
  const target = e.target;
  console.log(target);
}

formulario.addEventListener('click', envioFormulario);
