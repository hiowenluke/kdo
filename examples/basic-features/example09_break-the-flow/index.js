
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using an object such as "flow" or "me" to organize
// functions, we can split the complex logic into multiple
// small functions, which will make the code structure
// clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}, next) {
		lib.log(this.fnName, 'do something');

		const result = a1 + a2;
		lib.log('calc:', 'a1 + a2 =', result);

		// To break the flow (this will skip the subsequent "next" functions),
		// use one of the following ways:
		// 		return result;
		// 		return 'break';
		//		return true;

		return 'break';
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
