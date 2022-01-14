import { address } from '../';

it('should generate address', () => {
	const add = address();

	expect(typeof add.address).toBe('string');
	expect(typeof add.city).toBe('string');
	expect(typeof add.country).toBe('string');
	expect(typeof add.latitude).toBe('number');
	expect(typeof add.longitude).toBe('number');
	expect(typeof add.state).toBe('string');
	expect(typeof add.street).toBe('string');
});
