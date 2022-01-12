export const randomDataChooser: <S, T extends keyof S, U>(
	object: S,
	key: T
) => U = (object, key) => {
	const keyLength = object[key].length;
	const index = Math.floor(Math.random() * keyLength);

	return object[key][index];
};
