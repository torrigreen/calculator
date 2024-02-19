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
	if (b === 0) return `🙅`;
	return a / b;
}

function operate(operation, num1, num2) {
	return operation(num1, num2);
}

function updateDisplay() {
	display.textContent = displayVal;
}

function displayNumber(button) {
	displayVal += button.textContent;
	updateDisplay();
}

function setNum(value) {
	if (value === '') return;

	if (firstNum === '') {
		firstNum = Number(value);
	} else if (secondNum === '') {
		secondNum = Number(value);
	}

	displayVal = '';
}

function setOperator(button) {
	switch (button.textContent) {
		case '+':
			operator = add;
			break;
		case '-':
			operator = subtract;
			break;
		case '*':
			operator = multiply;
			break;
		case '/':
			operator = divide;
			break;
	}
}

function evaluate() {
	if (firstNum === '' || secondNum === '' || operator === '') return;

	const result = operate(operator, firstNum, secondNum);
	displayVal = Math.round((result + Number.EPSILON) * 10000) / 10000;
	updateDisplay();
	displayVal = '';
	firstNum = result;
	secondNum = '';
}

function reset() {
	displayVal = '';
	firstNum = '';
	secondNum = '';
	operator = '';
	updateDisplay();
}

const display = document.querySelector('.display');
let displayVal = '';

for (const digit of document.querySelectorAll('.digit')) {
	digit.addEventListener('click', () => displayNumber(digit));
}

let firstNum = '';
let secondNum = '';
let operator;

for (const operatorBtn of document.querySelectorAll('.operator')) {
	operatorBtn.addEventListener('click', () => {
		setNum(displayVal);
		evaluate();
		setOperator(operatorBtn);
	})
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
	setNum(displayVal);
	evaluate();
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);