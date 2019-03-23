
const kdo = require('../../../lib');

const flow = {
	async f1() {
		this.xxx = 1;
	},

	async f2() {
		this.xxx ++; // 2
	},

	async f3() {
		this.xxx ++; // 3
		return this.xxx; // 3
	}
};

const verify = (value) => {
	return value === 3;
};

const run = async () => {
	const result = await kdo.do(flow);
	return result;
};

const info = {verify, run};
module.exports = info;
