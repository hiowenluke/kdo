
const lib = require('../lib');

const fn = async ({a2, a5}) => {

	// if the condition is not met, then return a undefined value or false,
	// kdo will automatically go to the next function.
	if (1) return;

	// the subsequent code will not be executed
	await lib.do(module);
};

module.exports = fn;
