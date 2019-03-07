
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

const flow = {
	async f1({a1, a2, a3}, next) {
		lib.log(this.fnName, 'do something');

		const result = a1 + a2;
		lib.log('calc:', 'a1 + a2 =', result);

		// Return a value to kdo. This will break the flow,
		// and the subsequent "next" functions will be ignored
		return result;
	},

	async f2({a1, a2, a3}) {
		lib.log(this.fnName, 'do something');
	},

	async f3({a2, a3}) {
		lib.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();
	const result = await kdo(flow, args);
	lib.log('result =', result);

	return result;
};

module.exports = fn;
