import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { currency as currencyData } from '../data/currency';
import { creditCards, CreditCardTypes } from '../data/payment';
import { randCharacter, randomString } from '../helper/strings';
import bs58 from 'bs58';
import { password } from '..';
import { replaceWithNumber } from '../helper/replaceWithNumber';
import { randomNum } from '../number';

export interface CurrencyInfo {
	short: string;
	long: string;
}

/** CreditCard is a interface containing credit variables*/
export interface CreditCard {
	type: keyof typeof CreditCardTypes;
	number: number;
	exp: string;
	cvv: string;
}

/** Generate a random long currency*/
export const currencyLong = () => {
	return chooseRand<typeof currencyData>('long', currencyData);
};

/** Generate a random short currency*/
export const currencyShort = () => {
	return chooseRand<typeof currencyData>('short', currencyData);
};

/** Generate currency with random currency information*/
export const currency: () => CurrencyInfo = () => {
	const long = currencyLong();
	const short = currencyShort();

	return {
		long,
		short,
	};
};

/** Price will take in a min and max value and return a formatted price*/
export const price = (min: number, max: number) => {
	return +getRandomArbitrary(min, max).toFixed(2);
};

/** CreditCardType will generate a random credit card type string*/
export const creditCardType = () => {
	const availCardType = Object.keys(creditCards);
	const i = getRandomArbitrary(0, availCardType.length);
	const key = availCardType[i] as keyof typeof CreditCardTypes;

	return key;
};

/** CreditCardExp will generate a random credit card expiration date string
Exp date will always be a future date*/
export const creditCardExp = () => {
	let month = getRandomArbitrary(1, 13).toString();
	if (month.length == 1) {
		month = `0${month}`;
	}

	const currentYear = new Date().getFullYear() - 2000;
	return `${month}/${getRandomArbitrary(currentYear + 1, currentYear + 10)}`;
};

/** creditCardNumber will generate random credit card number*/
export const creditCardNumber = (type: keyof typeof CreditCardTypes) => {
	const cc = creditCards[type];

	const len = randomNum(cc.lengths);

	let numStr = `${randomNum(cc.patterns)}`;
	numStr += '#'.repeat(len - numStr.length);
	numStr = replaceWithNumber(numStr);

	let ui = parseInt(numStr, 10);
	let isValid = isLuhn(`${ui}`);

	if (!isValid) {
		ui = creditCardNumber(type);
	}

	return ui;
};
/** Generates random credit card cvv*/
export const creditCardCvv = (type: keyof typeof CreditCardTypes) => {
	const cc = creditCards[type];
	const len = cc.code.size;

	const hashStr = Array(len).fill('#').join('');

	return replaceWithNumber(hashStr);
};

/**  Generates random credit Card*/
export const creditCard: () => CreditCard = () => {
	const ccType = creditCardType();

	return {
		type: ccType,
		exp: creditCardExp(),
		number: creditCardNumber(ccType),
		cvv: creditCardCvv(ccType),
	};
};

/** Generate 9-digit AchRouting number*/
export const achRouting = () => {
	return replaceWithNumber('#########');
};

/** Generate 12-digit AchAccount number*/
export const achAccount = () => {
	return replaceWithNumber('############');
};

//checks is the given number is luhn number
export const isLuhn = (num: string) => {
	let a = num
		.split('')
		.reverse()
		.map((a) => +a);
	// double every second number
	a = a.map((e, i) => (i % 2 != 0 ? 2 * e : e));
	// if an element is a 2-digit number , sum the digits
	a = a.map((e) => {
		const b = e.toString();
		if (b.length == 2) {
			return +b[0] + +b[1];
		}

		return +e;
	});

	//Sum and check if res%10 is 0
	const res = a.reduce((acc, e) => acc + e, 0);

	return res % 10 == 0;
};
//BitcoinAddress will generate a random bitcoin address consisting of numbers, upper and lower characters
export const bitcoinAddress = () => {
	const size = getRandomArbitrary(25, 34);
	return `${randomString('13')}${password(
		size,
		true,
		true,
		true,
		false,
		false
	)}`;
};

// BitcoinPrivateKey will generate a random bitcoin private key base58 consisting of numbers, upper and lower characters
export const bitcoinPrivateKey = () => {
	let res = '';
	for (let i = 0; i < 49; i++) {
		const c = randCharacter();
		res += bs58.encode(Buffer.from(c));
	}

	return `5${randomString('HJK')}${res}`;
};
