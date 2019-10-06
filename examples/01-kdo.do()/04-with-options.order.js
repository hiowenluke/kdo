
const kdo = require('../../src');
const lib = require('../__lib');

let str = '';
const expect = '4325';

const flow = {
	async f1() {
		await lib.wait();
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

	const options = {
		order: [
			'f4',
			'f3',
			'f2',
			'f5'
		]
	};

	await kdo.do(flow, options);
	return str === expect;
};

module.exports = fn;
