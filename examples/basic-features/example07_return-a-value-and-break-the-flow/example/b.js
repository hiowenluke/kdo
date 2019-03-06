
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.doSomething(module);

	const result = a1 + a2;
	lib.log('calc:', 'a1 + a2 =', result);

	// Return a value to kdo. This will break the flow,
	// and the subsequent "next" functions will not be executed.
	return result;
};

module.exports = fn;
