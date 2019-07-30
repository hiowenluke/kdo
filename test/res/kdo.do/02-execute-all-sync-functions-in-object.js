
const kdo = require('../../../src');

let str = '';
let flag = 1;

const flow = {
	f1() {
		str += 1;
	},

	f2() {
		if (flag === 1) return;
		str += 2;
	},

	f3() {
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
