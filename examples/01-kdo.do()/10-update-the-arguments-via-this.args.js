
const kdo = require('../../src');
const lib = require('../__lib');

let flag = 1;
const expect = '456';

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		this.args.a1 = 4;
		this.args.a2 = 5;

		// Equivalents to:
		// 		this.pass({a1: 4, a2: 5})
		//		this.save({a1: 4, a2: 5}) // an alias of .pass()

		// Note:
		// 		If you wanna to replace the entire this.args,
		// 		use this.pass(args) or this.save(args) instead of this.args = args;
	},

	async f2({a2}) {
		if (flag === 1) return;
		this.args.a2 = 8;
	},

	async f3({a3}) {
		a3 = 6;
		this.args.a3 = 6;
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
