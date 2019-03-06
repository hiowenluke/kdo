
const lib = require('../lib');

const fn = async () => {
	await lib.do(module);

	// Return true to caller. This will break the flow,
	// and the subsequent "next" functions will not be executed.
	return true;
};

module.exports = fn;
