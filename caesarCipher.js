const caesarCipher = (inputString, shift) => {
	function validateInput() {
		if (!Number.isInteger(shift)) {
			throw new Error("Shift value must be an integer.");
		}
		// Wrapping around
		shift = shift % 26;
	}

	function encryptString() {
		let encryptedString = "";

		for (let i = 0; i < inputString.length; i++) {
			let char = inputString[i];

			if (/[a-zA-Z]/.test(char)) {
				const isUpperCase = char === char.toUpperCase();
				const charCode = char.charCodeAt(0);

				let shiftedCharCode = charCode + shift;
				if (isUpperCase) {
					if (shiftedCharCode > 90) {
						shiftedCharCode -= 26;
					} else if (shiftedCharCode < 65) {
						shiftedCharCode += 26;
					}
				} else {
					if (shiftedCharCode > 122) {
						shiftedCharCode -= 26;
					} else if (shiftedCharCode < 97) {
						shiftedCharCode += 26;
					}
				}

				char = String.fromCharCode(shiftedCharCode);
			}

			encryptedString += char;
		}

		return encryptedString;
	}

	validateInput();
	return encryptString();
};

export default caesarCipher;
