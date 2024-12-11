
const htmlInput = document.getElementById('htmlInput');
const output = document.getElementById('output');

htmlInput.addEventListener('input', () => {
   output.innerHTML = htmlInput.value;
});

