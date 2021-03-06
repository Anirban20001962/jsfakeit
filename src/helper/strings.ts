// Refer to ASCII table: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

import { getRandomArbitrary } from './chooseRand';

//array of lower characters
export const lowerChars = () => {
	let a: string[] = [];

	for (let i = 97; i <= 122; i++) {
		a.push(String.fromCharCode(i));
	}

	return a;
};

//array of upper characters
export const upperChars = () => {
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

//Generate random character
export const randCharacter = () => {
	const passphrase = [...numChars(), ...lowerChars(), ...upperChars()];
	const i = getRandomArbitrary(0, passphrase.length);

	return passphrase[i];
};

// RandomString will take in a slice of string and return a randomly selected value
export const randomString = (a: string | string[]) => {
	if (Array.isArray(a)) {
		if (a.length == 1) {
			return a[0];
		}

		return a[getRandomArbitrary(0, a.length)];
	} else {
		if (a.length == 1) {
			return a;
		}
		return a.split('')[getRandomArbitrary(0, a.length)];
	}
};
