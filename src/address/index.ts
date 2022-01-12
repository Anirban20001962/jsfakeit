import { address as addressData } from '../data/address';
import { chooseRand } from '../helpers/chooseRand';

interface Address {
	address: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	country: string;
	latitude: number;
	longitude: number;
}
type T = typeof addressData;

export const generate: () => Address = () => {
	// random values

	const street = chooseRand<T>(addressData, 'street_name');
	const city = chooseRand<T>(addressData, 'city');
	const state = chooseRand<T>(addressData, 'state');
	const country = chooseRand<T>(addressData, 'country');
	const zip = chooseRand<T>(addressData, 'zip');
	const latitude = 90;
	const longitude = 180;

	const address = [street, city, state, zip].join(' ');
	return {
		address,
		street,
		state,
		city,
		country,
		latitude,
		longitude,
		zip,
	};
};

console.log(generate());
