export function replaceWithNumber(s: string) {
	const arr = Array.from(s);
	for (let i = 0; i < arr.length; i++) {
		let n = Math.floor(Math.random() * 10);
		arr[i] = n.toString();
	}
	return arr.join('');
}
