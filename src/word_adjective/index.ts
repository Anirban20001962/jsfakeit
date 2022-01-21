import { Word } from '../data/word';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

/**  Adjective will generate a random adjective*/
export const adjective = () => {
	const adjType = [
		adjectiveDescriptive,
		adjectiveDemostrative,
		adjectiveIndefinite,
		adjectiveInterrogative,
		adjectivePossessive,
		adjectiveProper,
		adjectiveQuantitative,
	];
	const i = getRandomArbitrary(0, adjType.length);
	return adjType[i]();
};

/**  AdjectiveDescriptive will generate a random descriptive adjective*/
export const adjectiveDescriptive = () => {
	return chooseRand('adjective_descriptive', Word);
};

/**  AdjectiveQuantitative will generate a random quantitative adjective*/
export const adjectiveQuantitative = () => {
	return chooseRand('adjective_quantitative', Word);
};

/**  AdjectiveProper will generate a random proper adjective*/
export const adjectiveProper = () => {
	return chooseRand('adjective_proper', Word);
};

/**  AdjectiveDemonstrative will generate a random demonstrative adjective*/
export const adjectiveDemostrative = () => {
	return chooseRand('adjective_demonstrative', Word);
};

/**  AdjectivePossessive will generate a random possessive adjective*/
export const adjectivePossessive = () => {
	return chooseRand('adjective_possessive', Word);
};

/**  AdjectiveInterrogative will generate a random interrogative adjective*/
export const adjectiveInterrogative = () => {
	return chooseRand('adjective_interrogative', Word);
};
/**  AdjectiveIndefinite will generate a random indefinite adjective*/
export const adjectiveIndefinite = () => {
	return chooseRand('adjective_indefinite', Word);
};
