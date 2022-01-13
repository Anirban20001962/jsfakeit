import { address as addressData } from '../data/address';
<<<<<<< HEAD
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
=======

import { AddressEnum, Address } from '../helper/address';
import { chooseRand } from '../helper/chooseRand';

export const generate: () => Address = () => {
	const street = chooseRand<typeof addressData>(
		AddressEnum.street_name,
		addressData
	);
	const city = chooseRand<typeof addressData>(AddressEnum.city, addressData);
	const state = chooseRand<typeof addressData>(
		AddressEnum.state,
		addressData
	);
	const zip = chooseRand<typeof addressData>(AddressEnum.zip, addressData);
	const country = chooseRand<typeof addressData>(
		AddressEnum.country,
		addressData
	);
>>>>>>> 4e5647513ec63055c4969bb2ef54431f2602243f
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
<<<<<<< HEAD

console.log(generate());
=======
>>>>>>> 4e5647513ec63055c4969bb2ef54431f2602243f
