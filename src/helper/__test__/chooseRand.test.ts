import { chooseRand, getRandomArbitrary } from '../chooseRand';

it('should something random from object key', () => {
	const obj = {
		a: ['m', 'p'],
		b: ['o', 's'],
	};

	const out = chooseRand<typeof obj>('a', obj);
	const res = obj.a.includes(out);
	expect(res).toBe(true);
});

it('should return a number between given range', () => {
	const i = getRandomArbitrary(10, 20);
	expect(i >= 10).toBe(true);
	expect(i < 20).toBe(true);
});
