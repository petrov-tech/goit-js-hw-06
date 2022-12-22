const fontSizeControl = document.querySelector("input#font-size-control");

const textSize = document.querySelector("span#text");

fontSizeControl.addEventListener("change", (event) => {
  textSize.style.fontSize = `${event.target.value}px`;
});
