import { getRandomArbitrary } from '../helper/chooseRand';

//Number will generate a random number between given min And max
export const number = (min: number, max: number) => {
	return getRandomArbitrary(min, max);
};

export const uInt8 = (max: number) => {
	const uIntArr = new Uint8Array(1);
	uIntArr[0] = number(0, max);

	return uIntArr[0];
};

export const uInt16 = (max: number) => {
	const uIntArr = new Uint16Array(1);
	uIntArr[0] = number(0, max);

	return uIntArr[0];
};

export const uInt32 = (max: number) => {
	const uIntArr = new Uint32Array(1);
	uIntArr[0] = number(0, max);

	return uIntArr[0];
};
//get std deviation of an arrayof numbers
export const std = (arr: number[]) => {
	return Math.sqrt(variance(arr));
};

//get variance of an array of numbers
export const variance = (arr: number[]) => {
	const m = mean(arr);

	const v = arr.map((e) => (e - m) ** 2).reduce((acc, e) => acc + e);

	return v;
};

// get mean of an array of number
export const mean = (arr: number[]) => arr.reduce((acc, e) => acc + e, 0);

// generates number in range
export const range = (start: number, end: number, step: number = 0) => {
	if (end < start) {
		return [];
	}

	const res = [];

	for (let i = start; i < end; i++) {
		res.push(i + step);
	}

	return res;
};

//Generate random numbers between min and max
export const rangeRandom = (min: number, max: number) => {
	if (min == max) {
		return [min];
	}
	if (min > max) {
		let tmp = min;
		min = max;
		max = tmp;
	}
	const size = max - min;
	const res = Array(size);
	for (let _ of range(min, max)) {
		res.push(getRandomArbitrary(min, max));
	}

	return res;
};

// Generate random numbers in nomral distribution
export const rangeNormal = (min: number, max: number) => {
	if (min == max) {
		return [min];
	}
	if (min > max) {
		let tmp = min;
		min = max;
		max = tmp;
	}

	const arr = rangeRandom(min, max);
	const m = mean(arr);
	const v = variance(arr);
	const sigma = std(arr);

	const coef = 1 / (sigma * Math.sqrt(2 * Math.PI));

	return arr.map((e) => {
		const param = (-1 / 2) * ((e - m) ** 2 / v);
		const kernal = Math.exp(param);

		return coef * kernal;
	});
};

//Selects random number from a given array
export const randomNum = (arr: number[]) => {
	if (arr.length == 1) {
		return arr[0];
	}
	return arr[getRandomArbitrary(0, arr.length)];
};

//Shuffles given array
export const shuffleNum = (arr: number[]) => {
	for (let i of range(0, arr.length)) {
		const j = getRandomArbitrary(0, i);
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
};
