import { car } from '../';

it('should generate car', () => {
	const c = car();

	expect(typeof c.brand).toBe('string');
	expect(typeof c.fuel).toBe('string');
	expect(typeof c.model).toBe('string');
	expect(typeof c.transmission).toBe('string');
	expect(typeof c.type).toBe('string');
	expect(typeof c.year).toBe('number');
});
