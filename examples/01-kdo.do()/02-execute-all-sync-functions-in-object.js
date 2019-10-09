
const kdo = require('../../src');

let str = '';
let flag = 1;
const expect = '1';

const flow = {
	f1() {
		str += 1;
	},

	f2() {
		if (flag === 1) return true;
		str += 2;
	},

	f3() {
		str += 3;
	}
};

const fn = () => {
	kdo.doSync(flow);
	return str === expect;
};

module.exports = fn;
