
const kdo = require('../../../src');

const flow = {
	async f1() {
		return 2;
	},

	async f2({a2}) {
		return 1;
	},

	async f3({a3}) {
		return 3;
	}
};

const verify = (result) => {
	return result === 2;
};

const run = async () => {
	const result = await kdo.do(flow);
	return result;
};

const info = {verify, run};
module.exports = info;
