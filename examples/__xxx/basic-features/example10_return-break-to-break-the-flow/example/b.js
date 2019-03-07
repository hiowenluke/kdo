
const lib = require('../lib');

const fn = async () => {
	await lib.doSomething(module);

	// Return "break" to caller. This will break the flow,
	// and the subsequent "next" functions will not be executed.
	return 'break';
};

module.exports = fn;
