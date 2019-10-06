
const kdo = require('../../src');
const lib = require('../__lib');

const expect = 2;

const flow = {
	async f1() {
		await lib.wait();
		return 2;
	},

	async f2({a2}) {
		return 1;
	},

	async f3({a3}) {
		return 3;
	}
};

const fn = async () => {
	const result = await kdo.do(flow);
	return result === expect;
};

module.exports = fn;
