import calculator from "./calculator.js";

test("Addition", () => {
	expect(calculator.add(0, 5)).toBe(5);
	expect(calculator.add(-3, 10)).toBe(7);
	expect(calculator.add(0, 0)).toBe(0);
	expect(calculator.add(4, 8)).toBe(12);
});

test("Subtraction", () => {
	expect(calculator.subtract(0, 5)).toBe(-5);
	expect(calculator.subtract(5, 1)).toBe(4);
	expect(calculator.subtract(0, 0)).toBe(0);
	expect(calculator.subtract(-3, -2)).toBe(-1);
});

test("Multiplication", () => {
	expect(calculator.multiply(0, 5)).toBe(0);
	expect(calculator.multiply(5, 1)).toBe(5);
	expect(calculator.multiply(0, 0)).toBe(0);
	expect(calculator.multiply(-1, 3)).toBe(-3);
});

test("Division", () => {
	expect(calculator.divide(0, 5)).toBe(0);
	expect(calculator.divide(5, 1)).toBe(5);
	expect(calculator.divide(0, 0)).toBe("Division by zero is not allowed.");
	expect(calculator.divide(-3, 1)).toBe(-3);
});

test("Handles non-integer input", () => {
	expect(() => {
		calculator.add(0, "a");
	}).toThrow("Both arguments must be integers.");
	expect(() => {
		calculator.subtract("!", 3);
	}).toThrow("Both arguments must be integers.");
	expect(() => {
		calculator.multiply(5, "3");
	}).toThrow("Both arguments must be integers.");
	expect(() => {
		calculator.divide("!2", 1);
	}).toThrow("Both arguments must be integers.");
	expect(() => {
		calculator.add("a", 0);
	}).toThrow("Both arguments must be integers.");
});
