
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.do(module);

	a1 = 3;

	// The args must be an object, do not forget to use {} to wrap the arguments.
	return {args: {a1}};
};

module.exports = fn;
