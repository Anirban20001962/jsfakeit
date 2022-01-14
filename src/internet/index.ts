import { internet as internetData } from '../data/internet';
import { statusCode as statusCodeData } from '../data/status_code';
import { logLevels as logLevelsData } from '../data/log_level';
import { computer as computerData } from '../data/computer';

import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

import { jobDescriptor, bS } from '../company';
import { date } from '../time';

// Generates a random domain suffix
export const domainSuffix = () => {
	return chooseRand<typeof internetData>('domain_suffix', internetData);
};
// Generates a random http method
export const httpMethod = () => {
	return chooseRand<typeof internetData>('http_method', internetData);
};
// Generates a random status code
export const httpStatusCode = () => {
	return chooseRand<typeof statusCodeData>('general', statusCodeData);
};
// Generates a random simple status code
export const httpStatusCodeSimple = () => {
	return chooseRand<typeof statusCodeData>('simple', statusCodeData);
};
// Generates a random domain name
export const domainName = () => {
	const text = (jobDescriptor() + bS()).toLowerCase();
	const text_1 = text.replace(' ', '');
	return `${text_1}.${domainSuffix()}`;
};
// Generates a random url
export const url = () => {
	let num = getRandomArbitrary(1, 4);
	let slug = [];
	for (let i = 0; i < num; i++) {
		slug[i] = bS();
	}
	const protocol = ['https', 'http'];
	let scheme = protocol[getRandomArbitrary(0, 2)];
	let path = slug.join('/');

	let url = `${scheme}://www.${domainName()}/${path}`;
	return url.replace(' ', '');
};
// Generates a random ipv4Address
export const ipv4Address = () => {
	const num = () => {
		return getRandomArbitrary(0, 256);
	};
	return `${num()}.${num()}.${num()}.${num()}`;
};
// Generates a random ipv6Address
export const ipv6Address = () => {
	const num = () => {
		return getRandomArbitrary(0, 65536);
	};
	return `${num()}.${num()}.${num()}.${num()}.${num()}.${num()}.${num()}.${num()}`;
};
// Generates a random Mac address
export const macAddress = () => {
	const num = () => getRandomArbitrary(17, 255).toString(16);
	return `${num()}:${num()}:${num()}:${num()}:${num()}:${num()}`;
};
// LogLevel will generate a random log level
// See data/LogLevels for list of available levels
export const logLevel = (logType: string) => {
	const keys = Object.keys(logLevelsData);
	if (keys.findIndex(logLevel) >= 0) {
		//@ts-ignore
		return chooseRand<typeof logLevelsData>(logType, logLevelsData);
	}
	return chooseRand<typeof logLevelsData>('general', logLevelsData);
};
// Generate a random linux platfrom
export const linuxPlatformToken = () => {
	return chooseRand<typeof computerData>('linux_processor', computerData);
};
// Generate a random mac platfrom
export const macPlatformToken = () => {
	return chooseRand<typeof computerData>('mac_processor', computerData);
};
// Generate a random window platfrom
export const windowsPlatformToken = () => {
	return chooseRand<typeof computerData>('windows_platform', computerData);
};
// Generate random http version
export const httpVersion = () => {
	return chooseRand<typeof internetData>('http_version', internetData);
};
// Generate random platform
export const randomPlatform = () => {
	const platforms = [
		linuxPlatformToken(),
		macPlatformToken(),
		windowsPlatformToken(),
	];

	let num = getRandomArbitrary(0, 3);

	return platforms[num];
};
// Generate a random opera browser user agent string
export const operaUserAgent = () => {
	let platform =
		'(' +
		randomPlatform() +
		'; en-US) Presto/2.' +
		getRandomArbitrary(8, 13) +
		'.' +
		getRandomArbitrary(160, 355) +
		' Version/' +
		getRandomArbitrary(10, 13) +
		'.00';

	return (
		'Opera/' +
		getRandomArbitrary(8, 10) +
		'.' +
		getRandomArbitrary(10, 99) +
		' ' +
		platform
	);
};
// Generate safari user agent browswer string
export const firefoxUserAgent = () => {
	let ver =
		'Gecko/' +
		date().toDateString() +
		' Firefox/' +
		getRandomArbitrary(35, 58) +
		'.0';
	let platforms = [
		'(' +
			windowsPlatformToken() +
			'; ' +
			'en-US' +
			'; rv:1.9.' +
			getRandomArbitrary(0, 3) +
			'.20) ' +
			ver,
		'(' +
			linuxPlatformToken() +
			'; rv:' +
			getRandomArbitrary(5, 8) +
			'.0) ' +
			ver,
		'(' +
			macPlatformToken() +
			' rv:' +
			getRandomArbitrary(2, 7) +
			'.0) ' +
			ver,
	];
	return (
		'Mozilla/5.0 ' + platforms[Math.floor(Math.random() * platforms.length)]
	);
};
// Generate a random chrome browser user agent string
export const chromeUserAgent = () => {
	let randNum1 =
		getRandomArbitrary(531, 536).toString() +
		getRandomArbitrary(0, 3).toString();

	let randNum2 = getRandomArbitrary(36, 41);
	let randNum3 = getRandomArbitrary(800, 900);

	return (
		'Mozilla/5.0 ' +
		'(' +
		randomPlatform() +
		') AppleWebKit/' +
		randNum1 +
		' (KHTML, like Gecko) Chrome/' +
		randNum2 +
		'.0.' +
		randNum3 +
		'.0 Mobile Safari/' +
		randNum1
	);
};
