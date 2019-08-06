
const kdo = require('../../../src');
const lib = require('../../../test/__lib');

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

const run = async () => {
	const args = {obj: {a: 0}};
	const result = kdo.doSync(flow, args.obj);

	await lib.wait();
	return result;
};

const info = {verify, run};
module.exports = info;
