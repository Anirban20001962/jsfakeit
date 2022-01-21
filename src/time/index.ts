import { getRandomArbitrary } from '../helper/chooseRand';

/** Generate a random year after 1900 */
export const year = () => {
	return getRandomArbitrary(1900, new Date().getFullYear());
};
/** Generate a random day */
export const day = () => {
	return getRandomArbitrary(1, 31);
};
/** Generate a random month */
export const month = () => {
	return getRandomArbitrary(1, 13);
};
/** Generate a random date */
export const date = () => {
	return new Date(Date.UTC(year(), month(), day()));
};
