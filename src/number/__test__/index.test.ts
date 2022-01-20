import { mean, randomNum, range, rangeNormal, rangeRandom, std } from '..';

it('should selects a random number form an number array', () => {
	const ex = [3, 6, 7, 9, 0];
	const choice = randomNum(ex);

	expect(ex.includes(choice)).toBe(true);
});

it('should make array of all elements within a range', () => {
	const res = range(0, 5);
	const r = res.every((e, i) => i == e);

	expect(r).toBe(true);
});

it('should make array of all elements within a range', () => {
	const res = rangeRandom(0, 5) as number[];
	const r = res.every((e) => e >= 0 && e < 5);

	expect(r).toBe(true);
});

it('should generate an random array of normal distribution', () => {
	const arr = rangeNormal(0, 10);

	const m = mean(arr);
	const s = std(arr);
	const rng = [m - s, m + s, m - 2 * s, m + 2 * s, m - 3 * s, m + 3 * s];

	const isNormal = arr.every((e) => {
		if (rng[0] <= e && rng[1] >= e) {
			return true;
		}
		if (rng[2] <= e && rng[3] >= e) {
			return true;
		}
		if (rng[4] <= e && rng[5] >= e) {
			return true;
		}
		//return
		return false;
	});

	expect(isNormal).toBe(true);
});
