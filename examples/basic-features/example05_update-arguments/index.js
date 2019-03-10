
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}, next) {
		lib.log(this.fnName, 'do something');

		a1 = 6;

		// This function has next parameter, we can
		// pass the new values of arguments to next functions via next()
		await next({a1});
	},

	async f2({a1, a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a1);

		a2 = 4;
		a3 = 5;

		// Save the new values of arguments via return {args} (must be this name),
		// kdo will pass them to the next functions
		return {args: {a2, a3}};
	},

	async f3({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

		a2 = 7;
		a3 = 8;

		// Save the new values to this.args,
		// this will effective to all "next" functions.
		this.args.a2 = a2;
		this.args.a3 = a2;

		// Or do it via this.setArgs(), more simple, more cool.
		this.setArgs({a2, a3});

		// If you wanna to replace the whole this.args,
		// use the following:
		//		this.setArgs({a1, a2, a3})

		// instead of the following:
		// 		this.args = {a1, a2, a3}
	},

	async f4({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

		// Add a property to this.args
		this.args.a5 = 9;
	},

	async f5({a5}) {
		lib.log(this.fnName, 'do something');
		lib.log(a5);
	}
};

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();
	const result = await kdo(flow, args);
	lib.log('args =', args);

	return result;
};

module.exports = fn;
