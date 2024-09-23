const form = document.querySelector(".myForm");

function handleClick(event) {
  event.preventDefault();
  const data = new FormData(form);

  if (data.get("firstName") === null) {
    console.log("vazio");
  }
}
form.addEventListener("submit", handleClick);
