
const lib = require('../lib');

const fn = async ({a2, a5}, next) => {

	// if the condition is not met, then return await next().
	// this will go to the next function.
	if (1) return await next();

	// the subsequent code will not be executed
	await lib.doSomething(module);
	await next();
};

module.exports = fn;
