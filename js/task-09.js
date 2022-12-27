function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector("span.color");
const changeColor = document.querySelector("button.change-color");

changeColor.addEventListener("click", event => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;
  span.textContent = color;
});
