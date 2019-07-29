
const kdo = require('../../lib');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}) {
		this.log(this.fnName, 'do something');

		const result = a1 + a2;
		this.log('calc:', 'a1 + a2 =', result);

		// Return a value to kdo. This will break the flow,
		// and the subsequent "next" functions will be ignored
		return result;
	},

	async f2({a1, a2, a3}) {
		this.log(this.fnName, 'do something');
	},

	async f3({a2, a3}) {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};
	const result = await kdo.do(flow, args);
	kdo.log('result =', result);

	return result;
};

module.exports = fn;
