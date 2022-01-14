import { replaceWithNumber } from '../replaceWithNumber';

it('replaceWithNumber should convert string to random text of equal length', () => {
	const src = '####';
	const rnd = replaceWithNumber(src);
	expect(rnd.length).toBe(src.length);
	expect(Number.isNaN(rnd)).toBe(false);
});
