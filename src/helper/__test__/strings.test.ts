import { lowerChars, numChars, specialChars, upperChars } from '../strings';

it('lowerChars func should give 26 letters', () => {
	const chars = lowerChars();
	expect(chars.length).toBe(26);
});

it('upperChars func should give 26 letters', () => {
	const chars = upperChars();
	expect(chars.length).toBe(26);
});

it('numChars func should give 10 letters', () => {
	const chars = numChars();
	expect(chars.length).toBe(10);
});

it('specialChars func should give 32 letters', () => {
	const chars = specialChars();
	expect(chars.length).toBe(32);
});
