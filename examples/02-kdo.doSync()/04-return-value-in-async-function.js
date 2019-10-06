
const kdo = require('../../src');
const lib = require('../__lib');

const expect = 3;

const flow = {
	f1(obj) {
		obj.a = 1;
	},

	f2(obj) {
		obj.a ++;
	},

	f3(obj) {
		obj.a ++;
		return obj.a;
	}
};

const fn = async () => {
	const args = {obj: {a: 0}};
	const result = kdo.doSync(flow, args.obj);

	await lib.wait();
	return result === expect;
};

module.exports = fn;
