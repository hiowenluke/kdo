
const biz = require('./biz');
const config = require('./config');

const fn = async () => {

	// pass arguments to all functions.
	const args = config.args;
	const result = await biz(args);
	config.log(result);
};

module.exports = fn;
