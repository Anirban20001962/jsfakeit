import { Word } from '../data/word';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

// Preposition will generate a random preposition
export const prepositon = () => {
	const prepTypes = [
		prepositionCompund,
		prepositionDouble,
		prepositionSimple,
	];
	const i = getRandomArbitrary(0, prepTypes.length);
	return prepTypes[i]();
};

// PrepositionSimple will generate a random simple preposition
export const prepositionSimple = () => chooseRand('preposition_simple', Word);

// PrepositionDouble will generate a random simple preposition
export const prepositionDouble = () => chooseRand('preposition_double', Word);

// PrepositionCompound will generate a random compound preposition
export const prepositionCompund = () =>
	chooseRand('preposition_compound', Word);
