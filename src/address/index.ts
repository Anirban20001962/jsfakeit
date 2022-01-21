import { address as addressData } from '../data/address';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { replaceWithNumber } from '../helper/replaceWithNumber';

export interface Address {
	address: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	country: string;
	latitude: number;
	longitude: number;
}

/** Generates random street names */
export const street = () => {
	return chooseRand<typeof addressData>('street_name', addressData);
};
/** Generate random city names */
export const city = () => {
	return chooseRand<typeof addressData>('city', addressData);
};
/** Generate random state names */
export const state = () => {
	return chooseRand<typeof addressData>('state', addressData);
};
/** Generate random country names */
export const country = () => {
	return chooseRand<typeof addressData>('country', addressData);
};
/** Generates a random zip */
export const zip = () => {
	const zip = chooseRand<typeof addressData>('zip', addressData);
	return replaceWithNumber(zip);
};
/** Generate a random longitude */
export const longitude = () => {
	return Math.floor(getRandomArbitrary(-180, 180));
};
/** Generates a random latitude */
export const latitude = () => {
	return Math.floor(getRandomArbitrary(-90, 90));
};
/** Generates a radom full address */
export const address: () => Address = () => {
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
