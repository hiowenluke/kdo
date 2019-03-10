
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

	let args;
	let result;

	// Use options {return: 'a3'} to make kdo to return argument "a3".
	// Since any of arguments may have been changed, this options explicitly indicates that
	// the newest values ​​of argument "a3" are returned with clear semantics.
	args = config.init();
	result = await kdo(flow, args, {return: 'a3'});
	lib.log('a3   =', result);
	lib.log('args =', args);

	// Use options {return: 'all'} to make kdo to return all arguments.
	// Uncomment the code below to see the effect:
	// args = config.init(); // re-initialize the args for demo
	// result = await kdo(flow, args, {return: 'all'});
	// lib.log('result =', result);
	// lib.log('args   =', args);

	return result;
};

module.exports = fn;
