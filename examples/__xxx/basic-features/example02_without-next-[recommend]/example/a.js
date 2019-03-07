
const lib = require('../lib');

// if the "next" parameter is omitted,
// kdo will automatically go to the next function.
const fn = async ({a1, a2, a3}) => {

	// do something
	await lib.doSomething(module);
};

module.exports = fn;
