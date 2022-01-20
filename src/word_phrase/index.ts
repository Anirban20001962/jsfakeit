// import {  noun } from '..';
import { sentence } from '../data/sentence';
import { chooseRand } from '../helper/chooseRand';

// Phrase will return a random phrase
export const phrase = () => chooseRand('phrase', sentence);

// PhraseNoun will return a random noun phrase
// export const phraseNoum = () => {
//     let str = adjectiveDescriptive() + noun();

// }

// PhraseAdverb will return a random adverb phrase
// export const phraseAdverb = () => {

// }
