import { address as addressData } from '../data/address';

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
