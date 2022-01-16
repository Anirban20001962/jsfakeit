import { ipv4Address, ipv6Address, url } from '../';

it('should generate ipv4 address', () => {
	const add = ipv4Address().split('.');
	expect(add.length).toBe(4);
});

it('should generate ipv6 address', () => {
	const add = ipv6Address().split('.');
	expect(add.length).toBe(8);
});

it('should generate a valid url', () => {
	const add = url();
	const rgx =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
	expect(rgx.test(add)).toBe(true);
});
