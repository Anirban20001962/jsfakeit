import { hipster as hipsterData } from '../data/hipster';

import { chooseRand } from '../helper/chooseRand';

/** Generates a random single hipster word */
export const hipsterWord = () => {
	chooseRand<typeof hipsterData>('word', hipsterData);
};
