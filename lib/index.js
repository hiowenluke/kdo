
const config = require('./config');
const initArguments = require('./initArguments');
const KDO = require('./KDO');
const sortMethods = require('./sortMethods');
const tree = require('./tree');

const useWithOrder = (k, obj, array) => {
	array.forEach(key => {
		const fn = obj[key];
		if (!fn) {
			console.log('[KDO][Info]', key, 'is not exists.');
		}
		else {
			k.use(fn, key);
		}
	});
};

const kdo = async (obj, args, options = {}, returnParam = {}) => {

	if (config.init(obj)) {
		return;
	}

	tree.level(+1);

	let result;
	const k = Object.create(KDO);

	initArguments: {
		k.init({obj, options, returnParam}, {return: 'all'});
		k.use(initArguments);

		// Init arguments and return them
		({obj, options, returnParam} = await k.do());
	}

	sortMethods: {
		options.obj = obj;

		k.init(options, {return: 'all'});
		k.use(sortMethods);

		options = await k.do();
	}

	execute: {
		let {order, first, last, lib} = options;

		const k = Object.create(KDO);
		k.init(args, returnParam, lib);

		useWithOrder(k, obj, first);
		useWithOrder(k, obj, order);
		useWithOrder(k, obj, last);

		result = await k.do();
	}

	tree.level(-1);
	return result;
};

module.exports = kdo;
