const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните все поля, пожалуйста!");
  }
  const userDetails = { email: email.value, Password: password.value };

  e.currentTarget.reset();
}
