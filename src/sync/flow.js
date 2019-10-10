
const caller = require('caller');
const lib = require('../__lib');

let kdo;

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

	// Require kdo here instead of top this file, avoiding circular references with ./do
	// Use kdo || {...} to do it only once
	kdo = kdo || {
		do: require('./do')
	};

	// No argument
	if (!module && !opt) {
		module = lib.createSimulatedModule(caller());
	}
	else

	// One argument
	if (module && !opt) {

		// It is module object
		if (module.filename) {
			// do nothing
		}
		else {
			// It is opt, then simulate the module
			opt = module;
			module = lib.createSimulatedModule(caller());
		}
	}
	else {
		// Two arguments
		// do nothing
	}

	if (module.filename && module.constructor.name !== 'Module') {
		module.isSimulatedModule = true;
	}

	// Two forms:
	// 		kdo.flow('query')
	// 		kdo.flow({filename}, 'query')
	if (tools.isSingleLineString(opt)) {
		const argName = opt;

		const flowFn = (argValue) => {
			const args = {};
			args[argName] = argValue;

			// kdo.do(module, {query})
			return kdo.do(module, args);
		};

		return flowFn;
	}

	// If the value of opt is null, the default value does not take effect.
	// So here use the statement instead of the default to set the initial value of opt.
	opt = opt || {};

	// The next is comes from KDO.__next()
	const flowFn = (args, next) => {

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

	return flowFn;
};

module.exports = fn;
