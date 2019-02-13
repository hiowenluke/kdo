
const requireDirectory = require('rir');
const tools = require('../tools');

const initArguments = {
	checkObj({obj}, next) {
		if (tools.isModule(obj)) {
			obj = requireDirectory(obj);
		}

		next({obj});
	},

	checkSortingRule({sortingRule, returnParam, lib}, next) {
		const arg = sortingRule;

		if (!tools.isSortingRule(arg)) {
			if (tools.isReturnParam(arg)) {
				returnParam = arg;
			}
			else if (tools.isLib(arg)){
				lib = arg;
			}

			// Important: use undefined instead of null.
			// Because the default value of argument will not be effective if the argument is null.
			sortingRule = undefined;
		}

		next({sortingRule, returnParam, lib});
	},

	checkReturnParam({returnParam, lib}, next) {
		const arg = returnParam;

		if (!tools.isReturnParam(arg)) {
			if (tools.isLib(arg)){
				lib = arg;
			}

			returnParam = undefined;
		}

		next({returnParam, lib});
	},

	checkLib({lib}, next) {
		const arg = lib;

		if (!tools.isLib(arg)) {
			lib = undefined;
		}

		next({lib});
	},

	convertSortingRuleStringToArray({sortingRule}, next) {

		// If the sortingRule is NOT a string, the go to the next function
		if (typeof sortingRule !== 'string') return next();

		// If the ortingRule is a string, then it will be like the following:
		// `
		//		f1 // comment
		//		f2 // /* comment */
		// `
		if (!/[\r\n]/.test(sortingRule)) {
			throw new Error('The sortingRule must be an object or an array or multilines with ``.')
		}

		let str = sortingRule
			.replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, '') // strip comments
			.replace(/\s+/mg, ' ') // remove redundant spaces
			.replace(/,/g, '') // remove commas
			.replace(/(^\s)|(\s$)/g, '') // remove leading and trailing spaces
		;

		sortingRule = str.split(' ');

		next({sortingRule});
	},

	setDefaultSortingRuleAsOrderIfItsAnArray({sortingRule}, next) {

		if (Array.isArray(sortingRule)) {
			sortingRule = {order: sortingRule};
		}

		next({sortingRule});
	},

	fetchDefaultSortingRuleFromObjIfNoOrder({sortingRule = {}, obj}, next) {

		if (!sortingRule.order) {
			sortingRule.order = Object.keys(obj);
		}

		next({sortingRule});
	}
};

module.exports = initArguments;
