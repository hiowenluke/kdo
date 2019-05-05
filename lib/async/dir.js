
let kdo;

const isOptions = require('./options/__lib/isOptions');

const fn = (module, opt) => {

	// If the value of opt is null, the default value does not take effect.
	// So here use the statement instead of the default to set the initial value of opt.
	opt = opt || {};

	// Initialize kdo here, avoiding mutual references with ./do
	kdo = kdo || {
		do: require('./do')
	};

	const dir = async (args, next) => {

		// Check if the args or next is options
		const newOpt = args && isOptions(args) ? args : next && isOptions(next) ? next: null;

		// Overlaid the new options to the old options
		if (newOpt) {

			// If the old options is a string or an array, convert it to options {order} first
			if (typeof opt === 'string' || Array.isArray(opt)) {
				opt = {order: opt};
			}

			// Overlaid the new options to the old options
			Object.assign(opt, newOpt);
		}

		const result = await kdo.do(module, args, opt);

		if (typeof result !== 'undefined') {
			return result;
		}

		if (typeof next === 'function') {
			return await next();
		}
	};

	return dir;
};

module.exports = fn;
