import { getRandomArbitrary } from '../helper/chooseRand';

export const year = () => {
	return getRandomArbitrary(1900, new Date().getFullYear());
};

export const day = () => {
	return getRandomArbitrary(1, 31);
};

export const month = () => {
	return getRandomArbitrary(1, 13);
};

export const date = () => {
	return new Date(Date.UTC(year(), month(), day()));
};
