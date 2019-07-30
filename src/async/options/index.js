
const configKdo = require('../../__config').forKdo;
const initAll = require('./initAll');
const initSortingRules = require('./initSortingRules');

const me = {
	async init(obj, opt) {
		configKdo.setIsForKdo(true);

		opt = await initAll(obj, opt);
		opt = await initSortingRules(obj, opt);

		configKdo.setIsForKdo(false);
		return opt;
	}
};

module.exports = me;
