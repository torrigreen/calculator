function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, num1, num2) {
	return operator(num1, num2);
}

function updateDisplay(button) {
	displayVal += button.textContent;
	display.textContent = displayVal;
}

function clearDisplay() {
	displayVal = '';
	display.textContent = '';
}

const display = document.querySelector('.display');

for (const button of document.querySelectorAll('button')) {
	button.addEventListener('click', () => updateDisplay(button));
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

let firstNum;
let secondNum;
let operator;
let displayVal = '';