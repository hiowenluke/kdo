
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

		// set the return value of kdo
		this.return = result;
	},

	async f2({a1, a2, a3}) {
		this.log(this.fnName, 'do something');

		// override the previously set value
		this.return = 3;
	},

	async f3({a2, a3}) {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};
	const result = await kdo.do(flow, args);

	// the result will be 3
	kdo.log('result =', result);

	return result;
};

module.exports = fn;
