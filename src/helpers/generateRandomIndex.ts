export const generateRandomIndex: (end: number, start?: number) => number = (
	end,
	start = 0
) => {
	return Math.floor(Math.random() * (end - start) + start);
};
