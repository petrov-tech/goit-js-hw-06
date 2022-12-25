function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const box = document.getElementById(boxes)
console.log("🚀 -> box", boxes);


const input = document.querySelector('#controls')
console.log("🚀 -> input", input.firstElementChild);

const btnCreate = document.querySelector('[data-create]')
console.log("🚀 -> btnCreate", btnCreate);

const btnDestroy = document.querySelector("[data-destroy]");
console.log("🚀 -> btnCreate", btnDestroy);

const amount = input.firstElementChild
console.log("🚀 -> amount", amount);


function createBoxes(amount) {
  
}