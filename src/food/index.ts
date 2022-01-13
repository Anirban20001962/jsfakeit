import { food as foodData } from '../data/food';
import { chooseRand } from '../helper/chooseRand';

//Generate random fruit
export const fruit = () => {
	return chooseRand<typeof foodData>('fruit', foodData);
};

//Generate random vegetable
export const vegetable = () => {
	return chooseRand<typeof foodData>('vegetable', foodData);
};
//Generate random breakfast
export const breakfast = () => {
	return chooseRand<typeof foodData>('breakfast', foodData);
};
//Generate random lunch
export const lunch = () => {
	return chooseRand<typeof foodData>('lunch', foodData);
};
//Generate random dinner
export const dinner = () => {
	return chooseRand<typeof foodData>('dinner', foodData);
};
//Generate random snack
export const snack = () => {
	return chooseRand<typeof foodData>('snack', foodData);
};

//Generate random dessert
export const dessert = () => {
	return chooseRand<typeof foodData>('dessert', foodData);
};
