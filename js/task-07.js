const sizeControlInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeControlInputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});
