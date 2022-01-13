import { beer as beerData } from '../data/beer';

import { chooseRand } from '../helper/chooseRand';

export const beerName = () => {
	return chooseRand<typeof beerData>('name', beerData);
};

export const beerStyle = () => {
	return chooseRand<typeof beerData>('style', beerData);
};

export const beerHop = () => {
	return chooseRand<typeof beerData>('hop', beerData);
};

export const beerMalt = () => {
	return chooseRand<typeof beerData>('malt', beerData);
};

export const beerYeast = () => {
	return chooseRand<typeof beerData>('yeast', beerData);
};
