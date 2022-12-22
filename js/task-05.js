const textInput = document.querySelector('#name-input');
console.log("🚀 -> textInput", textInput.value);


const output = document.querySelector("#name-output");

textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if (event.target.value == '') {
        output.textContent = "Anonymous";
    }
    
    
})
