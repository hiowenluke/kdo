
const kdo = {
	do: require('./do')
};

const isOptions = require('./options/__lib/isOptions');

const fn = (module, opt) => {

	// kdo.dirFn(module, 'query')
	if (typeof opt === 'string') {
		const argName = opt;

		const dirFn = async (argValue) => {
			const args = {};
			args[argName] = argValue;

			// kdo.do(module, {query})
			return await kdo.do(module, args);
		};

		return dirFn;
	}

	// If the value of opt is null, the default value does not take effect.
	// So here use the statement instead of the default to set the initial value of opt.
	opt = opt || {};

	// The next is comes from KDO.__next()
	const dirFn = async (args, next) => {

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

		// If the result is not undefined, then return it
		if (typeof result !== 'undefined') {
			return result;
		}

		// If there is a next function, then execute it and return a new result
		if (typeof next === 'function') {
			return await next();
		}
	};

	return dirFn;
};

module.exports = fn;
