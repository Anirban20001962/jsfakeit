import { Word } from '../data/word';
import { chooseRand, getRandomArbitrary } from '../helper/chooseRand';

// Connective will generate a random connective
export const connective = () => {
	const cntType = [
		connectiveCasual,
		connectiveComparitive,
		connectiveExamplify,
		connectiveListing,
		connectiveListing,
		ConnectiveComplaint,
	];

	const i = getRandomArbitrary(0, cntType.length);
	return cntType[i]();
};
// ConnectiveTime will generate a random connective time
export const connectiveTime = () => chooseRand('connective_time', Word);

// ConnectiveComparitive will generate a random comparative connective
export const connectiveComparitive = () =>
	chooseRand('connective_comparitive', Word);

// ConnectiveComplaint will generate a random complaint connective
export const ConnectiveComplaint = () =>
	chooseRand('connective_complaint', Word);

// ConnectiveListing will generate a random listing connective
export const connectiveListing = () => chooseRand('connective_listing', Word);

// ConnectiveCasual will generate a random casual connective
export const connectiveCasual = () => chooseRand('connective_casual', Word);

// ConnectiveExamplify will generate a random examplify connective
export const connectiveExamplify = () =>
	chooseRand('connective_examplify', Word);
