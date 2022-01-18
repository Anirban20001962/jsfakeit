import { Word } from '../data/word';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

// Adverb will generate a random adverb
export const adverb = () => {
	const advType = [
		adverbManner,
		adverbDegree,
		adverbPlace,
		adverbTimeDefinite,
		adverbFrequencyDefinite,
		adverbFrequencyIndefinite,
	];
	const i = getRandomArbitrary(0, advType.length);
	return advType[i]();
};

// AdverbManner will generate a random manner adverb
export const adverbManner = () => {
	return chooseRand('adverb_manner', Word);
};

// AdverbDegree will generate a random degree adverb
export const adverbDegree = () => {
	return chooseRand('adverb_degree', Word);
};
// AdverbPlace will generate a random place adverb
export const adverbPlace = () => chooseRand('adverb_place', Word);

// AdverbTimeDefinite will generate a random time definite adverb
export const adverbTimeDefinite = () =>
	chooseRand('adverb_time_definite', Word);

// AdverbFrequencyDefinite will generate a random frequency definite adverb
export const adverbFrequencyDefinite = () =>
	chooseRand('adverb_frequency_definite', Word);

// AdverbFrequencyIndefinite will generate a random frequency indefinite adverb
export const adverbFrequencyIndefinite = () =>
	chooseRand('adverb_frequency_indefinite', Word);
