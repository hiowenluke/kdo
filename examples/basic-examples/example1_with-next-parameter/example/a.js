
const lib = require('../lib');

// the 1st parameter must be specified as an object
// if the 2nd parameter is next
const fn = async ({a1, a2, a3}, next) => {

	// do something
	await lib.do(module);

	// go to the next function
	await next();
};

module.exports = fn;
