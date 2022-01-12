import { generateRandomIndex } from '.';
import { Data } from '../data';

export const selectData: <T extends keyof S, U>(
	object: S,
	key: T
) => U = (object, key) => {
	const keyLength = object[key].length;
	const index = generateRandomIndex(keyLength);

	return object[key][index];
};
