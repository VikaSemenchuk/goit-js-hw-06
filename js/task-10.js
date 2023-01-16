function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const divCreateBoxesEl = document.querySelector("#boxes");

function createBoxes(amount) {

  const createdBoxes = [];

  for (let i = 0; i < amount; i += 1) {

    const newBox = document.createElement("div");

    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;

    createdBoxes.push(newBox);
  }

  divCreateBoxesEl.append(...createdBoxes);
}

function destroyBoxes() {
  divCreateBoxesEl.innerHTML = "";
}

btnCreateEl.addEventListener("click", () => createBoxes(Number(inputEl.value)));
btnDestroyEl.addEventListener("click", destroyBoxes);
