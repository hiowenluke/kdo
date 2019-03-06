
const config = require('../../__config');
const biz = require('./biz');

const fn = async () => {

	// pass arguments to all functions.
	const args = config.args;
	await biz(args);

	config.log(args);
};

module.exports = fn;
