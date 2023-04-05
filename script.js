const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal");
const acBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const del = document.querySelector(".delete");
const calScreen = document.querySelector(".screen");

let prevNumber = '';
let calOperator = '';
let currentNumber = '0';

const updateScreen = (number) => {
	calScreen.value = number
}

const inputNumber = (number) => {
	if(currentNumber === '0'){
		currentNumber = number
	} else {
		currentNumber += number
	}
}

const inputOperator = (operator) => {
	if (calOperator === '') {
	prevNumber = currentNumber
	} 
	calOperator = operator
	currentNumber = '0'
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
	inputNumber(event.target.value)
	updateScreen(currentNumber)
	})
})

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
	  inputOperator(event.target.value)

	  })
})

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
})

const calculate = () => {
	let result = ''
	switch(calOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		case "%":
			result = parseFloat(prevNumber) % parseFloat(currentNumber)
			break
		default:
			break
	}

	currentNumber = result;
	calOperator = ''
}

const clearAll = () => {
	prevNumber = ''
	calOperator = ''
	currentNumber = '0'
}

acBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

const back = () => {
	if (currentNumber.length > 0) {
		currentNumber = currentNumber.slice(0, -1);
	}
}

del.addEventListener('click', () => {
	back();
	updateScreen(currentNumber)
})