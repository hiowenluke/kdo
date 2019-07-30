
const configKdo = require('../../__config').forKdo;
const initAll = require('./initAll');
const initSortingRules = require('./initSortingRules');

const me = {
	init(obj, opt) {
		configKdo.setIsForKdo(true);

		opt = initAll(obj, opt);
		opt = initSortingRules(obj, opt);

		configKdo.setIsForKdo(false);
		return opt;
	}
};

module.exports = me;
