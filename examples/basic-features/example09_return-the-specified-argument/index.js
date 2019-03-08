
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using the object "flow" or "me" to organize functions,
// we can split the complex logic into multiple small functions,
// which will make the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
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

	// Use options {return: 'a3'} to make kdo to return argument "a3".
	// Since any of arguments may have been changed, this options explicitly indicates that
	// the newest values ​​of argument "a3" are returned with clear semantics.
	const result = await kdo(flow, args, {return: 'a3'});

	// We can see that the result is equal to args.a3, cool!
	lib.log('a3   =', result);
	lib.log('args =', args);

	return result;
};

module.exports = fn;
