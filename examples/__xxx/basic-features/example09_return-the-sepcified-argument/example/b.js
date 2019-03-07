
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.doSomething(module);

	a2 = 6;

	// The args must be an object, do not forget to use {} to wrap the arguments.
	return {args: {a2}};
};

module.exports = fn;
