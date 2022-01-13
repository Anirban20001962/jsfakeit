import { address as addressData } from '../data/address';

import { Address } from '../helper/address';
import { chooseRand } from '../helper/chooseRand';

export const generate: () => Address = () => {
	const street = chooseRand<typeof addressData>('street_name', addressData);
	const city = chooseRand<typeof addressData>('city', addressData);
	const state = chooseRand<typeof addressData>('state', addressData);
	const zip = chooseRand<typeof addressData>('zip', addressData);
	const country = chooseRand<typeof addressData>('country', addressData);
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
