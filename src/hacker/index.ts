import { hacker as hackerData } from '../data/hacker';

import { chooseRand } from '../helper/chooseRand';

// Generate random hacker phrase
export const hackerPhrase = () => {
	return chooseRand<typeof hackerData>('phrase', hackerData);
};
// Generate random hacker abbreviation
export const hackerAbbreviation = () => {
	return chooseRand<typeof hackerData>('abbreviation', hackerData);
};
// Generate random hacker adjective
export const hackerAdjective = () => {
	return chooseRand<typeof hackerData>('adjective', hackerData);
};
// Generates random hacker noun
export const hackerNoun = () => {
	return chooseRand<typeof hackerData>('noun', hackerData);
};
// Generates random hacker verb
export const hackerVerb = () => {
	return chooseRand<typeof hackerData>('verb', hackerData);
};
// Generates random hacker ingverb
export const hackeringVerb = () => {
	return chooseRand<typeof hackerData>('ingverb', hackerData);
};
