import { emoji as emojiData } from '../data/emoji';

import { chooseRand } from '../helper/chooseRand';
/** Generates random emoji*/
export const emoji = () => {
	return chooseRand<typeof emojiData>('emoji', emojiData);
};
/** Generates random emoji descriptor*/
export const emojiDescriptor = () => {
	return chooseRand<typeof emojiData>('description', emojiData);
};
/** Generates random emoji category*/
export const emojiCategory = () => {
	return chooseRand<typeof emojiData>('category', emojiData);
};
/** Generates random emoji alias*/
export const emojiAlias = () => {
	return chooseRand<typeof emojiData>('alias', emojiData);
};
/** Generates random emoji tag*/
export const emojiTag = () => {
	return chooseRand<typeof emojiData>('tag', emojiData);
};
