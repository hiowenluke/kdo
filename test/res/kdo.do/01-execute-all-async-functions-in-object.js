
const kdo = require('../../../lib');
const lib = require('../../../test/__lib');

let str = '';
let flag = 1;

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

const verify = (value) => {
	return value === '13';
};

const run = async () => {
	await kdo.do(flow);
	return str;
};

const info = {verify, run};
module.exports = info;
