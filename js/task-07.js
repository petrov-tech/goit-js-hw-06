const fontSizeControl = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");

fontSizeControl.addEventListener('input', event => {
  textSize.style.fontSize = `${event.target.value}px`;

});

// fontSizeControl.addEventListener("change", (event) => {
//   textSize.style.fontSize = `${event.target.value}px`;
// });

// як у цій ситуації краще зробити? через input чи change?