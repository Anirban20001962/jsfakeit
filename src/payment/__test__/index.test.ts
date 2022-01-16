import { isLuhn, creditCard, creditCardCvv } from '../';

it('should check if the a luhn number is true or not', () => {
	const res = isLuhn('9752599622');
	expect(res).toBe(true);
});

it('should generate 4-digit cvv for american express', () => {
	const res = creditCardCvv('american-express');

	expect(res.length).toBe(4);
});

it('should generate a valid credit card', () => {
	const cc = creditCard();

	console.log(cc);
	expect(isLuhn(`${cc.number}`)).toBe(true);
});
