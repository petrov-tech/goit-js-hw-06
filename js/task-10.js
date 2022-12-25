function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = amount => {
  const elementToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    div.style.width = `${30 + 10 * i}px`
    div.style.height = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    elementToAdd.push(div)
  }
  return elementToAdd
};

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd)
}) 



function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = ''
}
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});