
const kdo = require('../../../src');

let str = '';
const expect = '12453';

const flow = {
	async f1() {
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
	const options = {last: ['f5', 'f3']};
	await kdo.do(flow, options);
	return str === expect;
};

module.exports = fn;
