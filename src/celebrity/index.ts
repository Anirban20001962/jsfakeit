import { celebrity as celebrityData } from '../data/celebrity';

import { chooseRand } from '../helper/chooseRand';

// Generates random Actor
export const celebrityActor = () => {
	return chooseRand<typeof celebrityData>('actor', celebrityData);
};
// Generates random Businessman
export const celebrityBusiness = () => {
	return chooseRand<typeof celebrityData>('business', celebrityData);
};
// Generates random Sport Start
export const celebritySport = () => {
	return chooseRand<typeof celebrityData>('sport', celebrityData);
};
