
const kdo = require('../../src');

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
	}
};

const fn = () => {
	const args = {obj: {a: 0}};
	kdo.doSync(flow, args.obj);
	return args.obj.a === expect;
};

module.exports = fn;
