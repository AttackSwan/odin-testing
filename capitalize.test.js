import capitalize from "./capitalize.js";

// Non-exception functionality tests
test("Capitalizes the first letter of a string", () => {
	expect(capitalize("hello")).toBe("Hello");
	expect(capitalize("hello world!")).toBe("Hello world!");
	expect(capitalize("JavaScript")).toBe("JavaScript");
});
test("Handles single letter string", () => {
	expect(capitalize("a")).toBe("A");
	expect(capitalize("1")).toBe("1");
	expect(capitalize("!")).toBe("!");
});

// Exception tests
test("Handles empty string", () => {
	expect(capitalize("")).toBe("");
});
test("Handles non-letter at start of word", () => {
	expect(capitalize("3three")).toBe("3three");
});
test("Handles leading space", () => {
	expect(capitalize(" leading space")).toBe(" leading space");
});
test("Handles trailing space", () => {
	expect(capitalize("trailing space ")).toBe("Trailing space ");
});
