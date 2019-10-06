
const kdo = require('../../../src');
const lib = require('../../../test/__lib');

let str = '';
const expect = '123';

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		str += a1;
	},

	async f2({a2}) {
		str += a2;
	},

	async f3({a3}) {
		str += a3;
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return str === expect;
};

module.exports = fn;
