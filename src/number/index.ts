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

// generates number in range
export const range = (start: number, end: number, step: number = 1) => {
	if (end < start) {
		return [];
	}

	const res = [];

	for (let i = start; i < end; i++) {
		res.push(i + step);
	}

	return res;
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
