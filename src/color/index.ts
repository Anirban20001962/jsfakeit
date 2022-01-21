import { colors as colorsData } from '../data/colors';

import { chooseRand } from '../helper/chooseRand';

/** Generates safe color*/
export const safeColor = () => {
	return chooseRand<typeof colorsData>('safe', colorsData);
};
/**  Generates full color*/
export const color = () => {
	return chooseRand<typeof colorsData>('full', colorsData);
};
/**  Generates hexColor*/
export const hexColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
/**  Generates rgbColor*/
export const rgbColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r},${g},${b})`;
};
