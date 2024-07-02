const inputElement = document.getElementById('input-field')
const outputElement = document.getElementById('output-field');
const buttons = document.querySelectorAll('button');

inputElement.addEventListener('keyup', ()=> 
    (outputElement.innerHTML = inputElement.value)
);

buttons.forEach((btn)=> {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('uppercase')) {
            outputElement.innerHTML = outputElement.innerHTML.toUpperCase();
        } else if(btn.classList.contains('capitalize')) {
            outputElement.innerHTML = outputElement.innerHTML.charAt(0).toUpperCase() +
            outputElement.innerHTML.slice(1).toLowerCase();
        } else if(btn.classList.contains('lowercase')) {
            outputElement.innerHTML = outputElement.innerHTML.toLowerCase();
        }
    });

})