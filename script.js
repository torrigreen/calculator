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

let firstNum;
let secondNum;
let operator;

function operate(operation, num1, num2) {
	return operation(num1, num2);
}

const display = document.querySelector('.display');
let displayVal = '';

function updateDisplay() {
	display.textContent = displayVal;
}

function displayNumber(button) {
	displayVal += button.textContent;
	updateDisplay();
}

for (const digit of document.querySelectorAll('.digit')) {
	digit.addEventListener('click', () => displayNumber(digit));
}

for (const operatorBtn of document.querySelectorAll('.operator')) {
	operatorBtn.addEventListener('click', () => setOperator(operatorBtn));
}

function setNumber() {
	if (!firstNum) {
		firstNum = +displayVal;
	} else {
		secondNum = +displayVal;
	}

	displayVal = '';
	updateDisplay();
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

// store the first number when an operator is selected
// store operator when selected
// store the second number when another operator is selected
for (const operatorBtn of document.querySelectorAll('.operator')) {
	operatorBtn.addEventListener('click', () => {
		setNumber();
		setOperator(operatorBtn);
	})
}

// store the second number when enter is selected
// call operate on all three
// display the result
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
	setNumber();
	displayVal = operate(operator, firstNum, secondNum);
	updateDisplay();
});