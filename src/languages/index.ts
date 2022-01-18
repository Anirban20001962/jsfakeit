import { languages as languagesData } from '../data/languages';

import { chooseRand } from '../helper/chooseRand';

// Returns a random language
export const language = () => {
	return chooseRand('long', languagesData);
};
// Returns a random language abbreviation
export const lanugageAbbreviation = () => {
	return chooseRand('short', languagesData);
};
// Returns a random language bcp
export const languageBCP = () => {
	return chooseRand('bcp', languagesData);
};
// Returns a random programming language
export const programmingLanguage = () => {
	return chooseRand('programming', languagesData);
};
