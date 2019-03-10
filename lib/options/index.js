
const configKdo = require('../config/kdo');
const initAll = require('./initAll');
const initSortingRules = require('./initSortingRules');

const me = {
	async init(kdo, obj, opt) {
		configKdo.setIsForKdo(true);

		opt = await initAll(kdo, obj, opt);
		opt = await initSortingRules(kdo, opt);

		configKdo.setIsForKdo(false);
		return opt;
	}
};

module.exports = me;
