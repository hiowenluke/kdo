
const kdo = {
	new: require('../new')
};

const me = {
	initRules({order, first = [], last = [], exclude = []}) {

		typeof first === 'string' && (first = [first]);
		typeof last === 'string' && (last = [last]);
		typeof exclude === 'string' && (exclude = [exclude]);

		this.setArgs({order, first, last, exclude});
	},

	removeElementsInExclude({order, first, last, exclude}) {
		if (!exclude.length) return;

		first.length && (first = first.filter(el => exclude.indexOf(el) === -1));
		order.length && (order = order.filter(el => exclude.indexOf(el) === -1));
		last.length && (last = last.filter(el => exclude.indexOf(el) === -1));

		this.setArgs({order, first, last});
	},

	removeElementsInFirstOrLastFromOrder({order, first, last}) {
		if (!first.length && !last.length) return;

		first.length && (order = order.filter(el => first.indexOf(el) === -1));
		last.length && (order = order.filter(el => last.indexOf(el) === -1));

		this.setArgs({order});
	}
};

const fn = async (obj, opt) => {
	const args = opt;
	const options = {return: 'all'};

	const k = kdo.new(args, options);
	k.use(me);

	return await k.do();
};

module.exports = fn;
