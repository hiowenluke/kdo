
const kdo = require('../../src');
const lib = require('../__lib');

let flag = 1;
const expect = '456';

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		this.pass({a1: 4, a2: 5});

		// Equivalents to:
		// 		this.save({a1: 4, a2: 5}); // .save() is an alias of .pass()
		//		this.args.a1 = 4;
		//		this.args.a2 = 5;

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

	async f2({a2}) {
		if (flag === 1) return;
		this.pass({a2: 8});
	},

	async f3({a3}) {
		a3 = 6;
		this.pass({a3: 6});
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);

	const {a1, a2, a3} = args;
	const result = [a1, a2, a3].join('');
	return result === expect;
};

module.exports = fn;
