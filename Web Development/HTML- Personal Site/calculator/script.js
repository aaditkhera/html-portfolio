let screen = document.getElementById('result');
let equation = '';

function addToScreen(value) {
	equation += value;
	screen.value = equation;
}

function clearScreen() {
	equation = '';
	screen.value = '';
}

function calculate() {
	try {
		equation = eval(equation);
		screen.value = equation;
	} catch(error) {
		screen.value = 'Error';
	}
}
``
