import { word } from '../word_general';
import { number } from '../number';
import { firstName, lastName } from '../person';

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
		paragraph_text += '\n';
	}

	return paragraph_text;
};
// Generate a random question
export const question = () => {
	let str = sentence(number(3, 10));
	return str.slice(0, str.length - 1) + '?';
};
// Generate a random quote
export const quote = () => {
	return sentence(number(3, 10)) + `- ${firstName()} ${lastName()}`;
};
