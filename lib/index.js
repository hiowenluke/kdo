
const config = require('./config');
const prepare = require('./prepare');
const KDO = require('./KDO');
const tree = require('./tree');
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

const kdo = async (obj, args, sortingRule = {}, returnParam = {}) => {

	// If it requires to configure kdo, then do it and return back
	if (config.init(obj)) {
		return;
	}

	let result;
	tree.level(+1);

	initArguments: {

		const args = {obj, sortingRule, returnParam};
		const returnParam_ = {return: 'all'};

		const k = kdo.new(args, returnParam_);
		k.use(prepare.initArguments);

		// Init arguments and return all of them
		({obj, sortingRule, returnParam} = await k.do());
	}

	sortMethods: {

		const args = Object.assign({}, sortingRule, {obj});
		const returnParam_ = {return: 'all'};

		const k = kdo.new(args, returnParam_);
		k.use(prepare.sortMethods);

		sortingRule = await k.do();
	}

	execute: {
		let {order, first, last, lib} = sortingRule;

		const k = kdo.new(args, returnParam, lib);

		useWithOrder(k, obj, first);
		useWithOrder(k, obj, order);
		useWithOrder(k, obj, last);

		result = await k.do();
	}

	tree.level(-1);
	return result;
};

kdo.dir = (module, sortingRule, lib) => {
	return exportsFn(module, sortingRule, lib, kdo);
};

kdo.new = (...args) => {
	const inst = Object.create(KDO);
	inst.init(...args);
	return inst;
};

module.exports = kdo;
