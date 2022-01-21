import { Word as wordData } from '../data/word';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

/** Generate a random pronoun*/
export const pronoun = () => {
	let arr = [
		pronounPersonal,
		pronounObject,
		pronounPossessive,
		pronounReflective,
		pronounIndefinite,
		pronounDemostrative,
		pronounInterrogative,
		pronounRelative,
	];
	return arr[getRandomArbitrary(0, 8)]();
};
/** Generate a random personal pronoun*/
export const pronounPersonal = () => {
	return chooseRand('pronoun_personal', wordData);
};
/** Generate a random object pronoun*/
export const pronounObject = () => {
	return chooseRand('pronoun_object', wordData);
};
/** Generate a random possessive pronoun*/
export const pronounPossessive = () => {
	return chooseRand('pronoun_possessive', wordData);
};
/** Generate a random reflective pronoun*/
export const pronounReflective = () => {
	return chooseRand('pronoun_reflective', wordData);
};
/** Generate a random indefinite pronoun*/
export const pronounIndefinite = () => {
	return chooseRand('pronoun_indefinite', wordData);
};
/** Generate a random demonstrative pronoun*/
export const pronounDemostrative = () => {
	return chooseRand('pronoun_demonstrative', wordData);
};
/** Generate a random interrogative pronoun*/
export const pronounInterrogative = () => {
	return chooseRand('pronoun_interrogative', wordData);
};
/** Generate a random relative pronoun*/
export const pronounRelative = () => {
	return chooseRand('pronoun_relative', wordData);
};
