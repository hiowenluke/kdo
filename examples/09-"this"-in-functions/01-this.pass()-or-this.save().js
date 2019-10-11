
const kdo = require('../../src');

let str = '';
const expect = '423';

const flow = {
	async f1({a1, a2, a3}) {
		this.pass({a1: 4});

		// Equivalents to:
		// 		this.save({a1: 4}); // an alias of .pass()
		//		this.args.a1 = 4;

		// Note:
		// 		If you wanna to replace the entire this.args,
		// 		use this.pass(args) or this.save(args) instead of this.args = args;

		// From the name, both save() and pass() have advantages and disadvantages:
		// 		1. The role of save() is to save the parameters, but it does not mean
		// 		   passing the parameters to subsequent functions.
		// 		2. The role of pass() is to pass the argument to the subsequent function immediately,
		// 		   but there may be ambiguity when using it in the middle of the function,
		// 		   because it actually just saves instead of passes the variables.

		// Therefore, please choose one of them according to your need.
	},

	async f2({a1, a2}) {
		str += a1; // '4'
		str += a2; // '42'
	},

	async f3({a3}) {
		str += a3; // '423'
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return str === expect;
};

module.exports = fn;
