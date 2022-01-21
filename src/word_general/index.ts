import { Word } from '../data/word';
import { chooseRand } from '../helper/chooseRand';
import { randomString } from '../helper/strings';

/**  Word will generate a random word*/
export const word = () => {
	const randKey = randomString(Object.keys(Word)) as keyof typeof Word;
	return chooseRand(randKey, Word);
};
