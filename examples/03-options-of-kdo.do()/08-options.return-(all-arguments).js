
const kdo = require('../../src');

const expect = '456';

const flow = {
	async f1({a1, a2, a3}) {
		this.args.a1 = 4;
	},

	async f2({a1, a2, a3}) {
		this.args.a2 = 5;
	},

	async f3({a1, a2, a3}) {
		this.args.a3 = 6;
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const options = {return: 'all'};
	const result = await kdo.do(flow, args, options);

	const {a1, a2, a3} = result;
	const str = [a1, a2, a3].join('');
	return str === expect;
};

module.exports = fn;
