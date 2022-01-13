import { beer as beerData } from '../data/beer';

import { chooseRand } from '../helper/chooseRand';

// Generates random beer name
export const beerName = () => {
	return chooseRand<typeof beerData>('name', beerData);
};
// Generates random beer style
export const beerStyle = () => {
	return chooseRand<typeof beerData>('style', beerData);
};
// Generates random beer hop
export const beerHop = () => {
	return chooseRand<typeof beerData>('hop', beerData);
};
// Generates random beer malt
export const beerMalt = () => {
	return chooseRand<typeof beerData>('malt', beerData);
};

export const beerYeast = () => {
	return chooseRand<typeof beerData>('yeast', beerData);
};
