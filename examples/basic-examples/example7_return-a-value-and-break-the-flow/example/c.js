
const lib = require('../lib');

// this function will not be executed because it was skipped
const fn = async () => {
	await lib.do(module);
	return 'hi';
};

module.exports = fn;
