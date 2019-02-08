
const config = require('./config');
const initArguments = require('./initArguments');
const KDO = require('./KDO');
const sortMethods = require('./sortMethods');
const tree = require('./tree');

const useWithOrder = (k, obj, array) => {
	array.forEach(key => {
		const fn = obj[key];
		if (!fn) {
			console.log('Info:', key, 'is not exists.');
		}
		else {
			k.use(fn, key);
		}
	});
};

const kdo = async (obj, args, options = {}) => {

	if (config.init(obj)) {
		return;
	}

	tree.level(+1);

	let result;
	const k = Object.create(KDO);

	initArguments: {
		k.init({obj, options, return: 'all'});
		k.use(initArguments);
		result = await k.do();

		obj = result.obj;
		options = result.options;
	}

	sortMethods: {
		options.obj = obj;
		options.return = 'all';

		k.init(options);
		k.use(sortMethods);
		options = await k.do();
	}

	execute: {
		let {order, first, last, lib} = options;

		const k = Object.create(KDO);
		k.init(args, lib);

		useWithOrder(k, obj, first);
		useWithOrder(k, obj, order);
		useWithOrder(k, obj, last);

		result = await k.do();
	}

	tree.level(-1);
	return result;
};

module.exports = kdo;
