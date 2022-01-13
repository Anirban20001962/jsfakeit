export function chooseRand<T, U = string>(key: keyof T, object: T): U {
	const l = (object[key] as unknown as Array<any>).length;
	const index = Math.floor(Math.random() * l);
	return (object[key] as unknown as Array<any>)[index];
}
