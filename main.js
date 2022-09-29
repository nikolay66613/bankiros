let input = document.querySelector('#sales');
let input2 = document.querySelector('#expenses');

input.addEventListener('input', joinValues, false);
input2.addEventListener('input', joinValues, false);

function joinValues(){
        result.innerHTML = ((Number(input.value) - Number(input2.value))/Number(input2.value)).toFixed(2);
};