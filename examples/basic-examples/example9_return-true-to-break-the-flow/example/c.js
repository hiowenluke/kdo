
const lib = require('../lib');

// This function will not be executed because it was skipped
const fn = async ({a1}) => {
	await lib.do(module);

	a1 = 7;

	return {args: {a1}};
};

module.exports = fn;
