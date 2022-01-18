import { Word as wordData } from '../data/word';
import { celebrity as celebrityData } from '../data/celebrity';
import { address as addressData } from '../data/address';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

// Generate a random noun
export const noun = () => {
	let arr = [
		nounCommon,
		nounConcrete,
		nounAbstract,
		nounCollectivePeople,
		nounCollectiveAnimal,
		nounCollectiveThing,
		nounCountable,
		nounCountable,
	];
	return arr[getRandomArbitrary(0, 8)]();
};
// Generate a random common noun
export const nounCommon = () => {
	return chooseRand('noun_common', wordData);
};
// Generate random concrete noun
export const nounConcrete = () => {
	return chooseRand('noun_concrete', wordData);
};
// Generate random abstract noun
export const nounAbstract = () => {
	return chooseRand('noun_abstract', wordData);
};
// Generate random collective noun person
export const nounCollectivePeople = () => {
	return chooseRand('noun_collective_people', wordData);
};
// Generate random collective noun animal
export const nounCollectiveAnimal = () => {
	return chooseRand('noun_collective_animal', wordData);
};
// Generate random collective noun thing
export const nounCollectiveThing = () => {
	return chooseRand('noun_collective_thing', wordData);
};
// Genrate random countable noun
export const nounCountable = () => {
	return chooseRand('noun_countable', wordData);
};
// Generate random uncountale noun
export const nounProper = () => {
	switch (getRandomArbitrary(1, 3)) {
		case 1:
			return chooseRand('actor', celebrityData);
		case 2:
			return chooseRand('city', addressData);
	}
};
