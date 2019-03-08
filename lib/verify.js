
const tools = require('./tools');

const fn = (args, opt) => {
	if (tools.isOptions(args)) {
		opt = args;
		args = {};
	}

	args = args || {};
	opt = opt || {};

	return {args, opt};
};

module.exports = fn;
