
const lib = require('../lib');

const fn = ({a2, a5}, next) => {

	// if the condition is not met, then return a undefined value or false,
	// kdo will automatically go to the next function.
	if (1) return next();

	// the subsequent code will not be executed
	lib.do.sync(module);
	next();
};

module.exports = fn;
