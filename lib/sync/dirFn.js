
const kdo = {
	do: require('./do')
};

const tools = {
	isOptions: require('./options/__lib/isOptions'),

	isSingleLineString(str) {
		return typeof str === 'string' && !/[\r\n]/.test(str);
	},

	isMultiLinesString(str) {
		return typeof str === 'string' && /[\r\n]/.test(str);
	}
};

const fn = (module, opt) => {

	// kdo.dirFn(module, 'query')
	if (tools.isSingleLineString(opt)) {
		const argName = opt;

		const dirFn = (argValue) => {
			const args = {};
			args[argName] = argValue;

			// kdo.do(module, {query})
			return kdo.do(module, args);
		};

		return dirFn;
	}

	// If the value of opt is null, the default value does not take effect.
	// So here use the statement instead of the default to set the initial value of opt.
	opt = opt || {};

	// The next is comes from KDO.__next()
	const dirFn = (args, next) => {

		// Check if the args or next is options
		const newOpt = args && tools.isOptions(args) ? args : next && tools.isOptions(next) ? next: null;

		// Overlaid the new options to the old options
		if (newOpt) {

			// If the old options is a multi-lines string or an array, convert it to options {order} first
			if (tools.isMultiLinesString(opt) || Array.isArray(opt)) {
				opt = {order: opt};
			}

			// Overlaid the new options to the old options
			Object.assign(opt, newOpt);
		}

		const result = kdo.do(module, args, opt);

		// If the result is not undefined, then return it
		if (typeof result !== 'undefined') {
			return result;
		}

		// If there is a next function, then execute it and return a new result
		if (typeof next === 'function') {
			return next();
		}
	};

	return dirFn;
};

module.exports = fn;
