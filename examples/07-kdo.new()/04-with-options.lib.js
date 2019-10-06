
const kdo = require('../../src');
const lib = require('../__lib');

const expect = '456';

const flow = {
	async f1({a1, a2, a3}) {

		// call functions in lib via this
		await this.wait();

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
	const options = {lib};
	const k = kdo.new(args, options);

	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	await k.do();

	const {a1, a2, a3} = args;
	const result = [a1, a2, a3].join('');
	return result === expect;
};

module.exports = fn;
