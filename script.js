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

function backspace() {
	displayVal = '';
	updateDisplay();
}

let displayVal = '';
let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector('.display');

for (const digitBtn of document.querySelectorAll('.digit')) {
	digitBtn.addEventListener('click', () => displayNumber(digit));
}

for (const operatorBtn of document.querySelectorAll('.operator')) {
	operatorBtn.addEventListener('click', () => {
		setNum(displayVal);
		evaluate();
		setOperator(operatorBtn);
	})
}

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
	setNum(displayVal);
	evaluate();
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', reset);

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', backspace);

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', () => {
	if (!displayVal.includes('.')) displayNumber(decimalBtn);
})