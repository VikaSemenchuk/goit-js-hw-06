function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueEl = document.querySelector(".color");
const changeBtnEl = document.querySelector(".change-color");

function changeBgColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = document.body.style.backgroundColor;
}

changeBtnEl.addEventListener("click", changeBgColor);