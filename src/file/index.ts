import { files as filesData } from '../data/files';
import { chooseRand } from '../helper/chooseRand';

/** Generate random Mimetype*/
export const mimeType = () => {
	return chooseRand<typeof filesData>('mime_type', filesData);
};

/** Generate random extension*/
export const extension = () => {
	return chooseRand<typeof filesData>('extension', filesData);
};
