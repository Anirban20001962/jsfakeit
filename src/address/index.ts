import { address as addressData } from '../data/address';

import { Address } from '../helper/address';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { replaceWithNumbers } from '../helper/replaceWithNumber';

export const street: () => string = () => {
	return chooseRand<typeof addressData>('street_name', addressData);
};

export const city: () => string = () => {
	return chooseRand<typeof addressData>('city', addressData);
};

export const state: () => string = () => {
	return chooseRand<typeof addressData>('state', addressData);
};

export const country: () => string = () => {
	return chooseRand<typeof addressData>('country', addressData);
};

export const zip: () => string = () => {
	const zip = chooseRand<typeof addressData>('zip', addressData);
	return replaceWithNumbers(zip);
};

export const longitude: () => number = () => {
	return Math.floor(getRandomArbitrary(-180, 180));
};

export const latitude: () => number = () => {
	return Math.floor(getRandomArbitrary(-90, 90));
};

export const generate: () => Address = () => {
	const street_t = street();
	const city_t = city();
	const state_t = state();
	const zip_t = zip();
	const country_t = country();
	const latitude_t = latitude();
	const longitude_t = longitude();

	const address = [street_t, city_t, state_t, zip_t].join(' ');
	return {
		address,
		street: street_t,
		state: state_t,
		city: city_t,
		country: country_t,
		latitude: latitude_t,
		longitude: longitude_t,
		zip: zip_t,
	};
};
