
const kdo = require('../../../src');
const lib = require('../../../test/__lib');

let str = '';
let flag = 1;
const expect = '13';

const flow = {
	async f1() {
		await lib.wait();
		str += 1;
	},

	async f2() {
		if (flag === 1) return;
		str += 2;
	},

	async f3() {
		str += 3;
	}
};

const fn = async () => {
	await kdo.do(flow);
	return str === expect;
};

module.exports = fn;
