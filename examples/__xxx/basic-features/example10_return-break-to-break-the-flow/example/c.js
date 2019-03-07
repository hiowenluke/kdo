
const lib = require('../lib');

// This function will not be executed because it was skipped
const fn = async ({a1}) => {
	await lib.doSomething(module);

	a1 = 6;

	return {args: {a1}};
};

module.exports = fn;
