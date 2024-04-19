function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let button = document.querySelector(".change-color");
let span = document.querySelector(".color");

button.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
});

///////////////////////////////////////////////////////////////////////////////////////////////

