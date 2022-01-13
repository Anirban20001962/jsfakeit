import { animals as animalsData } from '../data/animals';
import { chooseRand } from '../helper/chooseRand';

//Generate random petname
export const petName = () => {
	return chooseRand<typeof animalsData>('petname', animalsData);
};

//Generate random animal type
export const animalType = () => {
	return chooseRand<typeof animalsData>('type', animalsData);
};

//Generate random farm animal
export const farmAnimal = () => {
	return chooseRand<typeof animalsData>('farm', animalsData);
};

//Generate random animal
export const animal = () => {
	return chooseRand<typeof animalsData>('animal', animalsData);
};

//Generate random cat
export const cat = () => {
	return chooseRand<typeof animalsData>('cat', animalsData);
};

//Generate random dog
export const dog = () => {
	return chooseRand<typeof animalsData>('dog', animalsData);
};
