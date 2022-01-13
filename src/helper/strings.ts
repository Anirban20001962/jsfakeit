// Refer to ASCII table: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

//array of lower characters
export const lowerChars = () => {
	let a: string[] = [];

	for (let i = 97; i <= 122; i++) {
		a.push(String.fromCharCode(i));
	}

	return a;
};

//array of upper characters
export const upperStr = () => {
	let a: string[] = [];

	for (let i = 65; i <= 90; i++) {
		a.push(String.fromCharCode(i));
	}

	return a;
};

//array of  numbers 0-9
export const numChars = () => {
	return Array.from({ length: 10 }, (_, k) => String(k));
};

//array of special characters
export const specialChars = () => {
	let a: string[] = [];

	for (let i = 33; i <= 47; i++) {
		a.push(String.fromCharCode(i));
	}

	for (let i = 58; i <= 64; i++) {
		a.push(String.fromCharCode(i));
	}

	for (let i = 91; i <= 96; i++) {
		a.push(String.fromCharCode(i));
	}

	for (let i = 123; i <= 126; i++) {
		a.push(String.fromCharCode(i));
	}

	return a;
};
