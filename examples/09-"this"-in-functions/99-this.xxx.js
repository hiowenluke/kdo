
const kdo = require('../../src');

const expect = 3;

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

const fn = async () => {
	const result = await kdo.do(flow);
	return result === expect;
};

module.exports = fn;
