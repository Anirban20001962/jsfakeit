import { celebrity as celebrityData } from '../data/celebrity';

import { chooseRand } from '../helper/chooseRand';

export const celebrityActor = () => {
	return chooseRand<typeof celebrityData>('actor', celebrityData);
};

export const celebrityBusiness = () => {
	return chooseRand<typeof celebrityData>('business', celebrityData);
};

export const celebritySport = () => {
	return chooseRand<typeof celebrityData>('sport', celebrityData);
};
