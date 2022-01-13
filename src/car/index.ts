import { cars as carsData } from '../data/car';

import { car } from '../helper/car';
import { chooseRand } from '../helper/chooseRand';

// Generates random Car type
export const carType = () => {
	return chooseRand<typeof carsData>('type', carsData);
};
// Generates random Car fuel
export const carFuel = () => {
	return chooseRand<typeof carsData>('fuel_type', carsData);
};
// Generates random Car Transmission
export const carTransmission = () => {
	return chooseRand<typeof carsData>('transmission_type', carsData);
};
// Generates random Car Brand
export const carBrand = () => {
	return chooseRand<typeof carsData>('maker', carsData);
};
// Generates random Car Model
export const carModel = () => {
	return chooseRand<typeof carsData>('model', carsData);
};
// Generates random year
export const carYear: () => number = () => {
	return 2019;
};
//// Generates random Car Details
export const carDetail: () => car = () => {
	let type_t = carType();
	let fuel_t = carFuel();
	let transmission_t = carTransmission();
	let brand_t = carBrand();
	let model_t = carModel();
	let year_t = carYear();

	return {
		type: type_t,
		fuel: fuel_t,
		transmission: transmission_t,
		brand: brand_t,
		model: model_t,
		year: year_t,
	};
};
