
const me = {
	initRules({order, first = [], last = [], exclude = []}, next) {

		typeof first === 'string' && (first = [first]);
		typeof last === 'string' && (last = [last]);
		typeof exclude === 'string' && (exclude = [exclude]);

		next({order, first, last, exclude});
	},

	removeElementsInExclude({order, first, last, exclude}, next) {
		if (!exclude.length) return next();

		first.length && (first = first.filter(el => exclude.indexOf(el) === -1));
		order.length && (order = order.filter(el => exclude.indexOf(el) === -1));
		last.length && (last = last.filter(el => exclude.indexOf(el) === -1));

		next({order, first, last});
	},

	removeElementsInFirstOrLastFromOrder({order, first, last}, next) {
		if (!first.length && !last.length) return next();

		first.length && (order = order.filter(el => first.indexOf(el) === -1));
		last.length && (order = order.filter(el => last.indexOf(el) === -1));

		next({order});
	}
};

module.exports = me;
