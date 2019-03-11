
const kdo = require('../../../lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

// There are three ways to save the new values of arguments
// and taking effect for all next functions:
// 		return {args: {a1}}
//		this.args.a1 = 6
// 		this.setArgs({a1, a2})

// If you wanna to replace this.args, use the following:
// 		this.setArgs({a1, a2, a3})

// instead of the following:
// 		this.args = {a1, a2, a3}

const flow = {
	async f1({a1, a2, a3}) {
		this.log(this.fnName, 'do something');

		a1 = 6;

		// Must be the name "args"
		return {args: {a1}};
	},

	async f2({a1, a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a1);

		a2 = 4;
		a3 = 5;

		this.args.a2 = a2;
		this.args.a3 = a2;
	},

	async f3({a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a2, a3);

		a2 = 7;
		a3 = 8;

		this.setArgs({a2, a3});
	},

	async f4({a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a2, a3);

		this.args.a5 = 9;
	},

	async f5({a5}) {
		this.log(this.fnName, 'do something');
		this.log(a5);
	}
};

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();
	const result = await kdo(flow, args);
	kdo.log('args =', args);

	return result;
};

module.exports = fn;
