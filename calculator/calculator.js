
const additionButton = document.querySelector('#addition');
const subButton = document.querySelector('#substraction');
const mulButton= document.querySelector("#multiplication");

const divButton = document.querySelector("#division");
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');

additionButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

subButton.addEventListener('click', () => {
    const valueOne = -fieldOne.value;
    const valueTwo = -fieldTwo.value;
    const result = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    // alert(` Addition is: ${valueOne - valueTwo}`);
    resultValue.innerHTML = result;
} );

mulButton.addEventListener('click', () => {
    const valueOne = fieldOne.value;
    const valueTwo = fieldTwo.value;
    const result = valueOne * valueTwo;
    console.log(valueOne * valueTwo);
    // alert(` Addition is: ${valueOne * valueTwo}`);
    resultValue.innerHTML = result;
} );

divButton.addEventListener('click', () => {
    const valueOne = fieldOne.value;
    const valueTwo = fieldTwo.value;
    const result = valueOne / valueTwo;
    console.log(valueOne / valueTwo);
    // alert(` Addition is: ${valueOne / valueTwo}`);
    resultValue.innerHTML = result;
} );

const clearButton = document.querySelector("#clear");
const clearField = document.querySelectorAll("input");

clearButton.addEventListener("click", () => {
    clearField.forEach( (input) => (input.value = ""))
    resultValue.innerHTML = '';

})