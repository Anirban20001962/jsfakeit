import {} from '../helper/chooseRand';

/** Generate a random url for a given width and height */
export const imageUrl = (width: number = 200, height: number = 300) => {
	return `https://picsum.photos/${width}/${height}`;
};
