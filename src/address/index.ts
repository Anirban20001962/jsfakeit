import { address as addressData } from '../data/address';
import { selectData } from '../helpers/selectData';

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

export const generate: () => Address = () => {
	// random values
	const street = selectData<typeof addressData, string, string>(
		addressData,
		'street_name'
	);
	const city = selectData<typeof addressData, string, string>(
		addressData,
		'city'
	);

	const state = selectData<typeof addressData, string, string>(
		addressData,
		'state'
	);

	const zip = selectData<typeof addressData, string, string>(
		addressData,
		'zip'
	);
	const country = selectData(addressData, 'country');
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
