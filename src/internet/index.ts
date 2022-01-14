import { internet as internetData } from '../data/internet';
import { statusCode as statusCodeData } from '../data/status_code';

import { chooseRand } from '../helper/chooseRand';
// Generates a random domain suffix
export const domainSuffix = () => {
	return chooseRand<typeof internetData>('domain_suffix', internetData);
};
// Generates a random http method
export const httpMethod = () => {
	return chooseRand<typeof internetData>('http_method', internetData);
};
// Generates a random status code
export const statusCode = () => {
	return chooseRand<typeof statusCodeData>('general', statusCodeData);
};
// Generates a random simple status code
export const statusCodeSimple = () => {
	return chooseRand<typeof statusCodeData>('simple', statusCodeData);
};
