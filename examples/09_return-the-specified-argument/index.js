
const kdo = require('../../lib');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}) {
		this.log(this.fnName, 'do something');

		a1 = 6;

		return {args: {a1}};
	},

	async f2({a1, a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a1);

		a2 = 4;
		a3 = 5;

		this.args.a2 = a2;
		this.args.a3 = a3;
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

	let args;
	let result;

	// Use options {return: 'a3'} to make kdo to return argument "a3".
	// Since any of arguments may have been changed, this options explicitly indicates that
	// the newest values ​​of argument "a3" are returned with clear semantics.
	args = {a1: 1, a2: 2, a3: 3};
	result = await kdo.do(flow, args, {return: 'a3'});
	kdo.log('a3   =', result);
	kdo.log('args =', args);

	// Use options {return: 'all'} to make kdo to return all arguments.
	// Uncomment the code below to see the effect:
	// 		args = {a1: 1, a2: 2, a3: 3}; // re-initialize the args for demo
	// 		result = await kdo.do(flow, args, {return: 'all'});
	// 		kdo.log('result =', result);
	// 		kdo.log('args   =', args);

	return result;
};

module.exports = fn;
