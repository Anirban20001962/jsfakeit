import { password } from '../';
import {
	lowerChars,
	numChars,
	specialChars,
	upperChars,
} from '../../helper/strings';

it('should generate a string of length 5 when a length is no specified', () => {
	const psd = password();
	expect(psd.length).toBe(5);
});

it('should return a password of a specified length', () => {
	const psd = password(6);
	expect(psd.length).toBe(6);
});

it('should return a password which contains small case when specified', () => {
	const psd = password(6, true, false, false, false, false);
	const strs = lowerChars();

	const res = psd.split('').some((a) => strs.includes(a));

	expect(res).toBe(true);
});

it('should return a password which contains upper case when specified', () => {
	const psd = password(6, false, true, false, false, false);
	const strs = upperChars();

	const res = psd.split('').some((a) => strs.includes(a));

	expect(res).toBe(true);
});

it('should return a password which contains numbers when specified', () => {
	const psd = password(6, false, false, true, false, false);
	const strs = numChars();

	const res = psd.split('').some((a) => strs.includes(a));

	expect(res).toBe(true);
});

it('should return a password which contains special case when specified', () => {
	const psd = password(6, false, false, false, true, false);
	const strs = specialChars();

	const res = psd.split('').some((a) => strs.includes(a));
	expect(res).toBe(true);
});

it('should return a password which  contains space case when specified', () => {
	const psd = password(6, false, false, false, false, true);
	const res = psd.split('').some((a) => a == ' ');

	expect(res).toBe(true);
});
