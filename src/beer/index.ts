import { beer as beerData } from '../data/beer';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

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
// Generates random beer yeast
export const beerYeast = () => {
	return chooseRand<typeof beerData>('yeast', beerData);
};
// BeerAlcohol will return a random beer alcohol level between 2.0 and 10.0
export const beerAlcohol = () => {
	return getRandomArbitrary(2, 10).toFixed(1);
};
// BeerIbu will return a random beer ibu value between 10 and 100
export const beerIbu = () => {
	return getRandomArbitrary(10, 100).toFixed(0);
};
// BeerBlg will return a random beer blg between 5.0 and 20.0
export const beerBlg = () => {
	return getRandomArbitrary(5, 20).toFixed(1);
};
