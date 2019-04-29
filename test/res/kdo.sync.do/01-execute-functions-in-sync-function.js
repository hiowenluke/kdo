
const kdo = require('../../../lib');

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

const verify = (value) => {
	return value === 3;
};

const run = () => {
	const args = {obj: {a: 0}};
	kdo.sync.do(flow, args.obj);
	return args.obj.a;
};

const info = {verify, run};
module.exports = info;
