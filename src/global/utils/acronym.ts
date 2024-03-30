export const acronym = (text: string) => {
	return text
		.split(/\s/)
		.reduce(function (accumulator, word) {
			return accumulator + word.charAt(0);
		}, "")
		.toUpperCase();
};
