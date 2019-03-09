
const configKdo = require('../config/kdo');
const initAll = require('./initAll');
const initSortingRules = require('./initSortingRules');

const me = {
	async init(kdo, obj, opt) {
		configKdo.setIsForKdo(true);

		opt = await this.initAll(kdo, obj, opt);
		opt = await this.initSortingRules(kdo, opt);

		configKdo.setIsForKdo(false);
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
	}
};

module.exports = me;
