function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const span = document.querySelector("span.color");

const changeColor = document.querySelector("button.change-color");

changeColor.addEventListener("click", () => {
  console.log("колір той, а значення не то");
  body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
});
