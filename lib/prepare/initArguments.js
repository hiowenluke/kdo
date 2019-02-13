
const requireDirectory = require('rir');
const tools = require('../tools');

const initArguments = {
	ifTheObjIsModuleThenRequireDirectory({obj}, next) {

		// If the obj is module, then require direcotry
		if (tools.isModule(obj)) {
			obj = requireDirectory(obj);
		}

		next({obj});
	},

	ifTheSortingRuleIsReturnParamThenSaveIt({sortingRule, returnParam}, next) {
		if (tools.isReturnParam(sortingRule)) {
			returnParam = sortingRule;
			sortingRule = null;
		}

		next({sortingRule, returnParam});
	},

	ifTheSortingRuleIsAStringThenConvertItToAnArray({sortingRule}, next) {

		// If the sortingRule is a string, then it will be like this:
		// `
		//		f1 // comment
		//		f2 // /* comment */
		// `
		if (typeof sortingRule === 'string') {
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
		}

		next({sortingRule});
	},

	ifTheSortingRuleIsOrderOrLibThenUpdateTheSortingRule({sortingRule}, next) {

		// The sortingRule is order
		if (Array.isArray(sortingRule)) {
			sortingRule = {order: sortingRule};
		}
		else {
			if (typeof sortingRule === 'object') {

				// The sortingRule is lib if its NOT sortingRule
				if (!tools.isSortingRule(sortingRule)) {
					sortingRule = {lib: sortingRule};
				}
			}
		}

		next({sortingRule});
	}
};

module.exports = initArguments;
