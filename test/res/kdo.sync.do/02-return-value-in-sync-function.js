
const kdo = require('../../../src');

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

const verify = (value) => {
	return value === 3;
};

const run = () => {
	const args = {obj: {a: 0}};
	const result = kdo.sync.do(flow, args.obj);
	return result;
};

const info = {verify, run};
module.exports = info;
