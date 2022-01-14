import { company as companyData } from '../data/company';
import { job as jobData } from '../data/job';

import { chooseRand } from '../helper/chooseRand';
import { Job } from '../helper/company';

// Generates random company name
export const company = () => {
	return chooseRand<typeof companyData>('name', companyData);
};
// Generates random company suffix
export const companySuffix = () => {
	return chooseRand<typeof companyData>('suffix', companyData);
};
// Generates random company buzz word string
export const buzzWord = () => {
	return chooseRand<typeof companyData>('buzzwords', companyData);
};
// Generates a random company bs string
export const bS = () => {
	return chooseRand<typeof companyData>('buzzwords', companyData);
};
// Generates a random job title
export const jobTitle = () => {
	return chooseRand<typeof jobData>('title', jobData);
};
// Generates a random job descriptor
export const jobDescriptor = () => {
	return chooseRand<typeof jobData>('descriptor', jobData);
};
// Generates a random job level
export const jobLevel = () => {
	return chooseRand<typeof jobData>('level', jobData);
};
// Generates a random job info
export const job: () => Job = () => {
	return {
		company: company(),
		title: jobTitle(),
		descriptor: jobDescriptor(),
		level: jobLevel(),
	};
};
