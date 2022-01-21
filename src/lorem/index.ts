import { lorem as loremData } from '../data/lorem';

import { chooseRand } from '../helper/chooseRand';

/**Generate a random word*/
export const loremIpsumWord = () => {
	return chooseRand('word', loremData);
};
