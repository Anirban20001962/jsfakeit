import {
	mean,
	// normalDist,
	randomNum,
	range,
	rangeNormal,
	rangeRandom,
	std,
	variance,
} from '..';

it('should give right mean', () => {
	const values = [3, 4, 5];
	const res = mean(values);
	expect(res).toBe(4);
});

it('should give right variance', () => {
	const values = [3, 4, 5];
	const res = variance(values);
	expect(res).toBe(0.6666666666666666);
});
// it ('should generate a norm dist value for x', () => {
// 	const res = normalDist(4, 4, 1);

// 	expect(res).toBe()
// })

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
	const [min, max] = [-10, 5];
	const res = rangeRandom(min, max) as number[];

	const r = res.every((e) => e >= min && e < max);

	expect(r).toBe(true);
});

it('should generate an random array of normal distribution', () => {
	const [min, max] = [-10, 10];
	const arr = rangeNormal(min, max);

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
