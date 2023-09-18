const analyzeArray = (inputArray) => {
	// Input validation: Check if inputArray is an array
	if (!Array.isArray(inputArray)) {
		throw new Error("Input must be an array.");
	}

	// Input validation: Check if inputArray contains only integers
	if (!inputArray.every((num) => Number.isInteger(num))) {
		throw new Error("Array must contain only integers.");
	}

	// Calculate average, min, max, and length of the inputArray
	const sum = inputArray.reduce((acc, num) => acc + num, 0);
	const average = sum / inputArray.length;
	const min = Math.min(...inputArray);
	const max = Math.max(...inputArray);
	const length = inputArray.length;

	// Return an object with the calculated properties
	return {
		average,
		min,
		max,
		length,
	};
};

export default analyzeArray;
