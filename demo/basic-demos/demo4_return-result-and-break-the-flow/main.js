
const prepare = require('./prepare');
const config = require('./config');

const fn = async () => {

	// pass arguments to all functions.
	const args = config.args;
	const result = await prepare(args);
	config.log(result);
};

module.exports = fn;
