const calculator = {
	validateInput: (a, b) => {
		if (!Number.isInteger(a) || !Number.isInteger(b)) {
			throw new Error("Both arguments must be integers.");
		}
	},

	add: (a, b) => {
		calculator.validateInput(a, b);
		return a + b;
	},
	subtract: (a, b) => {
		calculator.validateInput(a, b);
		return a - b;
	},
	multiply: (a, b) => {
		calculator.validateInput(a, b);
		return a * b;
	},
	divide: (a, b) => {
		calculator.validateInput(a, b);
		if (b === 0) {
			return "Division by zero is not allowed.";
		}
		return a / b;
	},
};

export default calculator;
