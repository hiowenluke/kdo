
const isOptions = require('../options/__lib/isOptions');

const fn = (args, opt) => {
	if (!opt && args && isOptions(args)) {
		opt = args;
		args = {};
	}

	args = args || {};
	opt = opt || {};

	return {args, opt};
};

module.exports = fn;
