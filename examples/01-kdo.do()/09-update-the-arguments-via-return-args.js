
const kdo = require('../../src');
const lib = require('../__lib');

let flag = 1;
const expect = '456';

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		a1 = 4;
		a2 = 5;
		return {args: {a1, a2}};
	},

	async f2({a2}) {
		if (flag === 1) return;
		a2 = 8;
		return {args: {a2}};
	},

	async f3({a3}) {
		a3 = 6;
		return {args: {a3}};
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
