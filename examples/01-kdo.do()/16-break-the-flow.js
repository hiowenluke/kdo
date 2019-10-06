
const kdo = require('../../src');
const lib = require('../__lib');

const expect = '123';

const flow = {
	async f1({a1}) {
		await lib.wait();
		return 'break';
	},

	async f2({a2}) {
		this.args.a2 = 5;
	},

	async f3({a3}) {
		this.args.a3 = 6;
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};

	// make kdo to return all of the values of arguments.
	const options = {return: 'all'};
	await kdo.do(flow, args, options);

	const {a1, a2, a3} = args;
	const str = [a1, a2, a3].join('');
	return str === expect;
};

module.exports = fn;
