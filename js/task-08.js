const formEL = document.querySelector(".login-form");

formEL.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please enter your e-mail and password!");
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
