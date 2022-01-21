import { sentence } from '../data/sentence';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';
import { adjectiveDescriptive } from '../word_adjective';
import { noun } from '../word_noun';
import { adverbDegree, adverbManner } from '../word_adverb';
import { prepositionSimple } from '../word_preposition';
import { verbAction } from '../word_verb';

/** Phrase will return a random phrase */
export const phrase = () => chooseRand('phrase', sentence);

/** Generates a random noun phrase  */
export const phraseNoun = () => {
	let str = '';
	let bool = getRandomArbitrary(0, 2);

	if (bool) {
		str = `${adjectiveDescriptive()} ${noun()}`;
	} else {
		str = noun();
	}

	let prob = getRandomArbitrary(0, 2);

	if (prob) {
		return 'the ' + str;
	}

	return str;
};
/** Generates a random verb phrase  */
export const phraseVerb = () => {
	let sb: string[] = [];

	if (getRandomArbitrary(0, 2)) {
		sb.push(phraseAdverb());
	}

	sb.push(verbAction());

	if (getRandomArbitrary(0, 2)) {
		sb.push(phraseNoun());
	}

	if (getRandomArbitrary(0, 2)) {
		sb.push(phraseAdverb());
		if (getRandomArbitrary(0, 2)) {
			sb.push(phrasePreposition());
		}
		if (getRandomArbitrary(0, 2)) {
			sb.push(phraseAdverb());
		}
	}

	return sb.join(' ');
};
/** Generates a random adverb phrase  */
export const phraseAdverb = () => {
	const bool = getRandomArbitrary(0, 2);

	if (bool) {
		return `${adverbDegree()} ${adverbManner()}`;
	}
	return adverbManner();
};
/** Generates a random preposition phrase  */
export const phrasePreposition = () => {
	return `${prepositionSimple()} ${phraseNoun()}`;
};
