function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const background = {
//   body: document.querySelector("body"),
//   span: document.querySelector("span.color"),
//   changeColor: document.querySelector("button.change-color")
// }
// console.log("🚀 -> background", background);


const body = document.querySelector("body");
const span = document.querySelector("span.color");
const changeColor = document.querySelector("button.change-color");

changeColor.addEventListener("click", () => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;
  span.textContent = color;
  console.log(color);
});
