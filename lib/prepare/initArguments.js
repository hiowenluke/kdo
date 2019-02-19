
const fixArguments = require('./fixArguments');

const initArguments = {
	fixArguments({sortingRule, returnParam, lib}, next) {
		next(fixArguments.do({sortingRule, returnParam, lib}));
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
