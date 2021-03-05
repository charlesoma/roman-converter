const RomanNumerals = {
	toRoman: (value) => {
		const int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		const romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

		let roman = "";

		for (let i = 0; i < int.length; i++) {
			while (int[i] <= value) {
				roman += romanNumeral[i];
				value -= int[i];
			}
		}

		return roman;
	},
	fromRoman: (value) => {
		const romanNumeral = "IVXLCDM";
		const int = [1, 5, 10, 50, 100, 500, 1000];

		let sum = 0;

		while (value) {
			if (!!value[1] && romanNumeral.indexOf(value[0]) < romanNumeral.indexOf(value[1])) {
				sum += (int[romanNumeral.indexOf(value[1])] - int[romanNumeral.indexOf(value[0])]);
				value = value.substring(2, value.length);
			} else {
				sum += int[romanNumeral.indexOf(value[0])];
				value = value.substring(1, value.length);
			}
		}

		return sum;
	}
}

export default RomanNumerals;
