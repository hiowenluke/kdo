
const kdo = require('../../lib');
const lib = require('../../examples/__lib');
const config = require('../../examples/__config');

// ----------------------------------------------------
// Use an object such as "me" or "flow" to organize functions.

// This means that we can split the complex business
// logic into multiple small functions, making the code
// structure clear, easy to understand and maintain.

// This is a good habit.
// ----------------------------------------------------
const me = {
	async f1({a1, a2, a3}, next) {
		lib.log(this.fnName, 'do something');

		a1 = 6;

		await next({a1});
	},

	async f2({a1, a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a1);

		a2 = 4;
		a3 = 5;

		return {args: {a2, a3}};
	},

	async f3({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

		a2 = 7;
		a3 = 8;

		this.setArgs({a2, a3});
	},

	async f4({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

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

	// Use options {return: 'all'} to make kdo to return all arguments
	const result = await kdo(me, args, {return: 'all'});

	// We can see that the result is equal to args, cool!
	lib.log('result =', result);
	lib.log('args   =', args);

	return result;
};

module.exports = fn;
