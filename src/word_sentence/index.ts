import { word } from '../word_general';

// Generate a random sentence
export const sentence = (wordCount: number) => {
	if (wordCount <= 0) return '';

	let sentence = word();

	for (let i = 1; i < wordCount; i++) {
		let word_temp = word();
		sentence += ` ${word_temp}`;
	}

	return `${sentence}.`;
};
// Generate a random paragraph
export const paragraph = (
	wordCount: number,
	senteneceCount: number,
	paragraphCount: number
) => {
	if (wordCount <= 0 || senteneceCount <= 0 || paragraphCount <= 0) return '';
	let paragraph_text = '';
	for (let i = 0; i < paragraphCount; i++) {
		for (let j = 0; j < senteneceCount; j++) {
			let sent = sentence(wordCount);
			paragraph_text += sent;
		}
		paragraph_text += '/n';
	}

	return paragraph_text;
};
