
const config = require('../config');
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.do(module);

	// Return a value to caller. This will break the flow,
	// and the subsequent "next" functions will not be executed.
	return config.calc();
};

module.exports = fn;
