export const chooseRand: <S, T = string>(object: S, key: keyof S) => T = (
	object,
	key
) => {
	const keyLength = (object[key] as unknown as Array<any>).length;
	const index = Math.floor(Math.random() * keyLength);

	return (object[key] as unknown as Array<any>)[index];
};
