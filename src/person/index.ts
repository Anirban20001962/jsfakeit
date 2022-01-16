import { person as personData } from '../data/person';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { replaceWithNumber } from '../helper/replaceWithNumber';

import { domainSuffix } from '../internet';
import { CreditCard, creditCard } from '../payment';
import { job, Job } from '../company';
import { address, Address } from '../address';
import { imageUrl } from '..';

export interface Personinfo {
	firstName: string;
	lastName: string;
	gender: 'male' | 'female';
	ssn: string;
	image: string;
	job: Job;
	address: Address;
	contact: ContactInfo;
	creditCard: CreditCard;
}

export interface ContactInfo {
	phone: string;
	email: string;
}

// To be done later
export const person: () => Personinfo = () => {
	return {
		firstName: firstName(),
		lastName: lastName(),
		gender: gender(),
		ssn: ssn(),
		image: imageUrl(),
		job: job(),
		address: address(),
		contact: contact(),
		creditCard: creditCard(),
	};
};

// Generate a random name
export const name = () => {
	return firstName() + ' ' + lastName();
};
// Generate a random first Name
export const firstName = () => {
	return chooseRand<typeof personData>('first', personData);
};
// Generate a random last Name
export const lastName = () => {
	return chooseRand<typeof personData>('last', personData);
};
// Generate a random name prefix
export const nameSuffix = () => {
	return chooseRand<typeof personData>('prefix', personData);
};
// Generate a random SSN
export const ssn = () => {
	return getRandomArbitrary(100000000, 999999999).toString();
};
// Generate a random Gender
export const gender = () => {
	let gen = getRandomArbitrary(0, 2);
	if (gen) {
		return 'male';
	}
	return 'female';
};
// Generate a random hobby
export const hobby = () => {
	return chooseRand<typeof personData>('hobby', personData);
};
// Generate a random phone number
export const phone = () => {
	return replaceWithNumber('##########');
};
// Generate a random phone formatted number
export const phoneFormatted = () => {
	const formatted = chooseRand<typeof personData>('phone', personData);
	return replaceWithNumber(formatted);
};
// Generates a random email
export const email = () => {
	let email = firstName() + lastName();
	email += '@';
	email += lastName() + '.' + domainSuffix();
	return email.toLowerCase();
};
// Generates a random contact
export const contact: () => ContactInfo = () => {
	return {
		email: email(),
		phone: phone(),
	};
};
