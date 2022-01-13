import { cars as carsData } from '../data/car';

import { car } from '../helper/car';
import { chooseRand } from '../helper/chooseRand';

export const carType = () => {
	return chooseRand<typeof carsData>('type', carsData);
};

export const carFuel = () => {
	return chooseRand<typeof carsData>('fuel_type', carsData);
};

export const carTransmission = () => {
	return chooseRand<typeof carsData>('transmission_type', carsData);
};

export const carBrand = () => {
	return chooseRand<typeof carsData>('maker', carsData);
};

export const carModel = () => {
	return chooseRand<typeof carsData>('model', carsData);
};

export const carYear: () => number = () => {
	return 2019;
};

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
