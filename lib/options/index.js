
const config = require('../config');
const configKdo = require('../configKdo');
const initAll = require('./initAll');
const initSortingRules = require('./initSortingRules');
const tools = require('../tools');

const me = {
	async init(kdo, obj, opt) {
		configKdo.setIsForKdo(true);

		opt = await this.initAll(kdo, obj, opt);
		opt = await this.initSortingRules(kdo, opt);

		configKdo.setIsForKdo(false);

		// For the case:
		// const options = {
		//		kdo: {
		//			isPrintTree: true
		// 		}
		// }
		this.initConfigIfNeeded(opt);

		return opt;
	},

	async initAll(kdo, obj, opt) {
		const args = {opt, obj};
		const options = {return: 'opt'};

		const k = kdo.new(args, options);
		k.use(initAll);

		return await k.do();
	},

	async initSortingRules(kdo, opt) {
		const args = opt;
		const options = {return: 'all'};

		const k = kdo.new(args, options);
		k.use(initSortingRules);

		return await k.do();
	},

	initConfigIfNeeded(opt) {
		if (!tools.isKdo(opt)) return;
		config.init(opt.kdo);
	}
};

module.exports = me;
