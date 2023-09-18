import analyzeArray from "./analyzeArray.js";

test("analyzeArray returns an object with correct properties", () => {
	const arr = [1, 8, 3, 4, 2, 6];
	const result = analyzeArray(arr);

	expect(result).toEqual(
		expect.objectContaining({
			average: expect.any(Number),
			min: expect.any(Number),
			max: expect.any(Number),
			length: expect.any(Number),
		})
	);
});

test("analyzeArray calculates average correctly for valid input", () => {
	const arr = [1, 8, 3, 4, 2, 6];
	const result = analyzeArray(arr);

	expect(result.average).toBe(4);
});

test("analyzeArray finds minimum correctly for valid input", () => {
	const arr = [1, 8, 3, 4, 2, 6];
	const result = analyzeArray(arr);

	expect(result.min).toBe(1);
});

test("analyzeArray finds maximum correctly for valid input", () => {
	const arr = [1, 8, 3, 4, 2, 6];
	const result = analyzeArray(arr);

	expect(result.max).toBe(8);
});

test("analyzeArray calculates length correctly for valid input", () => {
	const arr = [1, 8, 3, 4, 2, 6];
	const result = analyzeArray(arr);

	expect(result.length).toBe(6);
});

test("analyzeArray throws an error for non-array input", () => {
	expect(() => analyzeArray("not an array")).toThrowError(
		"Input must be an array."
	);
});

test("analyzeArray throws an error for an array containing non-integer values", () => {
	const arr = [1, 2, "string", 4, 5];
	expect(() => analyzeArray(arr)).toThrowError(
		"Array must contain only integers."
	);
});
