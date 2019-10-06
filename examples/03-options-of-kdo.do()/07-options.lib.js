
const kdo = require('../../src');
const lib = require('../__lib');

let str = '';
const expect = '12345';

const flow = {
	async f1() {
		await this.wait();
		str += 1;
	},

	async f2() {
		str += 2;
	},

	async f3() {
		str += 3;
	},

	async f4() {
		str += 4;
	},

	async f5() {
		str += 5;
	}
};

const fn = async () => {
	const options = {lib};
	await kdo.do(flow, options);
	return str === expect;
};

module.exports = fn;
