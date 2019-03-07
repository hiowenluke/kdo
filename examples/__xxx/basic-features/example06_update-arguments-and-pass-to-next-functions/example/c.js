
const lib = require('../lib');

const fn = async ({a1, a2}, next) => {
	await lib.doSomething(module);

	a1 = 6;
	a2 = 7;

	// This function has next parameter, we can
	// pass the new values to next functions via next()
	await next({a1, a2});
};

module.exports = fn;
