import { Word } from '../data/word';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

// Verb will generate a random verb
export const verb = () => {
	const verbType = [verbAction, verbHelping, verbLinking];
	const i = getRandomArbitrary(0, verbType.length);

	return verbType[i]();
};

// VerbAction will generate a random action verb
export const verbAction = () => chooseRand('verb_action', Word);

// VerbTransitive will generate a random transitive verb
export const verbTransitive = () => chooseRand('verb_transitive', Word);

// VerbIntransitive will generate a random intransitive verb
export const verbIntransitive = () => chooseRand('verb_intransitive', Word);

// VerbLinking will generate a random linking verb
export const verbLinking = () => chooseRand('verb_linking', Word);

// VerbHelping will generate a random helping verb
export const verbHelping = () => chooseRand('verb_helping', Word);
