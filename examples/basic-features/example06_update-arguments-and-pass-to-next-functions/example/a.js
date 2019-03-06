
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.do(module);
	lib.log(a1, a2, a3);

	a2 = 4;
	a3 = 5;

	// save these new values of arguments to args (must be this name)
	// and pass them to the next function
	return {args: {a2, a3}};
};

module.exports = fn;
