import { person as personData } from '../data/person';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { replaceWithNumber } from '../helper/replaceWithNumber';
import {
	lowerChars,
	numChars,
	specialChars,
	upperChars,
} from '../helper/strings';

//Generate random username
export const userName = () => {
	//random select a lastname,
	// a random number to it and return
	return (
		chooseRand<typeof personData>('last', personData) +
		replaceWithNumber('####')
	);
};

//Generate random password
//Minimum length of 5 if num < 5
export const password = (
	num: number,
	lower: boolean = true,
	upper: boolean = true,
	numeric: boolean = true,
	special: boolean = true,
	space: boolean = false
) => {
	if (num < 5) {
		num = 5;
	}

	const res: string[] = Array.from({ length: num });

	//get all the type od characters
	const lStr = lowerChars();
	const uStr = upperChars();
	const sStr = specialChars();
	const nStr = numChars();

	//pass phrase
	let passphrase: string[] = [];
	let i = 0;

	//If lower add lower case chars to passphrase
	if (lower) {
		passphrase = [...passphrase, ...lStr];
		const p = getRandomArbitrary(0, lStr.length);
		res.push(lStr[p]);

		i += 1;
	}

	//If upper add upper case chars to passphrase
	if (upper) {
		passphrase = [...passphrase, ...uStr];
		const p = getRandomArbitrary(0, uStr.length);
		res.push(uStr[p]);

		i += 1;
	}

	//If numeric add numeric case chars to passphrase
	if (numeric) {
		passphrase = [...passphrase, ...nStr];
		const p = getRandomArbitrary(0, nStr.length);
		res.push(nStr[p]);

		i += 1;
	}

	//If special add special case chars to passphrase
	if (special) {
		passphrase = [...passphrase, ...sStr];
		const p = getRandomArbitrary(0, sStr.length);
		res.push(sStr[p]);

		i += 1;
	}

	//If space add space case chars to passphrase
	if (space) {
		passphrase = [...passphrase, ' '];
		res.push(' ');

		i += 1;
	}

	if (passphrase.length == 0) {
		passphrase = [...passphrase, ...lStr];
	}

	while (i < num) {
		const p = getRandomArbitrary(0, passphrase.length);
		res.push(passphrase[p]);
	}

	return res.join('');
};
