
const KDO = require('./KDO');
const config = require('./config');
const prepare = require('./prepare');
const tree = require('./tree');
const exportsFn = require('./exportsFn');
const forModule = require('./forModule');

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

const kdo = async (obj, args, options = {}) => {

	// If it requires to configure kdo, then do it and return back
	if (config.init(obj)) {
		return;
	}

	// If the obj is a Node.js module, then require the whole directory
	obj = forModule(obj, kdo);

	// If the options is a string or an array, then it's order
	if (typeof options === 'string' || Array.isArray(options)) {
		options = {order: options};
	}

	let result;
	tree.level(+1);

	initOptions: {
		const args_ = {options, obj};
		const options_ = {return: 'all'};

		const k = kdo.new(args_, options_);
		k.use(prepare.initOptions);

		({options} = await k.do());
	}

	initSortingRules: {
		const args_ = options;
		const options_ = {return: 'all'};

		const k = kdo.new(args_, options_);
		k.use(prepare.initSortingRules);

		options = await k.do();
	}

	execute: {
		const {first, order, last} = options;
		const k = kdo.new(args, options);

		useWithOrder(k, obj, first);
		useWithOrder(k, obj, order);
		useWithOrder(k, obj, last);

		result = await k.do();
	}

	tree.level(-1);
	return result;
};

kdo.dir = (module, options) => {
	return exportsFn(kdo, module, options);
};

kdo.new = (...args) => {
	const inst = Object.create(KDO);
	inst.init(...args);
	return inst;
};

module.exports = kdo;
