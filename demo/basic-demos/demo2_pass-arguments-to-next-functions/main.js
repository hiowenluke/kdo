
const config = require('../../__config');
const prepare = require('./prepare');

const fn = async () => {

	// pass arguments to all functions.
	const args = config.args;
	await prepare(args);

	config.log(args);
};

module.exports = fn;
