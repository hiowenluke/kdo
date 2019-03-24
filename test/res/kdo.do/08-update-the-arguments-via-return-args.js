
const kdo = require('../../../lib');
const lib = require('../../../test/__lib');

let flag = 1;

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

const verify = (args) => {
	const compareTo = {a1: 4, a2: 5, a3: 6};
	return lib.isValueEqual(args, compareTo);
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return args;
};

const info = {verify, run};
module.exports = info;
