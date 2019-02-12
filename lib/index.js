
const config = require('./config');
const prepare = require('./prepare');
const KDO = require('./KDO');
const tree = require('./tree');
const tools = require('./tools');
const exportsFn = require('./exportsFn');

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

	// If it requires to configure kdo, then do it and return back
	if (config.init(obj)) {
		return;
	}

	let result;
	tree.level(+1);

	initArguments: {
		const k = Object.create(KDO);

		const args = {obj, options, returnParam};
		const returnParam_ = {return: 'all'};

		k.init(args, returnParam_);
		k.use(prepare.initArguments);

		// Init arguments and return all of them
		({obj, options, returnParam} = await k.do());
	}

	sortMethods: {
		const k = Object.create(KDO);

		const args = Object.assign({}, options, {obj});
		const returnParam_ = {return: 'all'};

		k.init(args, returnParam_);
		k.use(prepare.sortMethods);

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
