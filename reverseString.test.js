import reverseString from "./reverseString.js";

test("Reverses a string", () => {
	expect(reverseString("Hello world!")).toBe("!dlrow olleH");
	expect(reverseString("123")).toBe("321");
	expect(reverseString("W W w ")).toBe(" w W W");
});

test("Handles an empty string", () => {
	expect(reverseString("")).toBe("");
});

test("Handles a single-character string", () => {
	expect(reverseString("a")).toBe("a");
	expect(reverseString("1")).toBe("1");
	expect(reverseString("!")).toBe("!");
});

test("handles special characters", () => {
	expect(reverseString("!@#123")).toBe("321#@!");
});
