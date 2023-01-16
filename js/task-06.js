const validInputEl = document.querySelector("#validation-input");

function onValidClassAdd(event) {
  console.log(event);

  event.currentTarget.value.length === Number(validInputEl.dataset.length)
    ? (validInputEl.className = "valid")
    : (validInputEl.className = "invalid");
}

validInputEl.addEventListener("blur", onValidClassAdd);
