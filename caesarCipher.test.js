import caesarCipher from "./caesarCipher";

test("Shift by one character to the right", () => {
	expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shift by 3 characters to the left", () => {
	expect(caesarCipher("def", -3)).toBe("abc");
});

test("Shift by 26 characters should produce the same string", () => {
	expect(caesarCipher("hello", 26)).toBe("hello");
});

test("Shift by 0 characters should produce the same string", () => {
	expect(caesarCipher("world", 0)).toBe("world");
});

test("Shift by a negative number should produce the same string", () => {
	expect(caesarCipher("cipher", -5)).toBe("xdkczm");
});

test("Shift by a large positive number should wrap around", () => {
	expect(caesarCipher("zebra", 30)).toBe("difve");
});

test("Ignore non-alphabet characters", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Preserve letter case", () => {
	expect(caesarCipher("CaSe SensiTive", 10)).toBe("MkCo CoxcsDsfo");
});

test("handles non-integer shift values", () => {
	expect(() => {
		caesarCipher("Hellow world!", "a");
	}).toThrow("Shift value must be an integer.");
});

test("", () => {
	expect("").toBe("");
});
