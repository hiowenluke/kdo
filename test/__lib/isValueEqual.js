
const fn = (a, b) => {
	const index = Object.keys(a).findIndex(key => {
		if (a[key] !== b[key]) return key;
	});

	return index === -1;
};

module.exports = fn;
