
const kdo = require('../../../lib');

const flow = {
	async f1({a1, a2, a3}) {
		this.args.a1 = 4;
	},

	async f2({a1, a2, a3}) {
		this.args.a2 = 5;
	},

	async f3({a1, a2, a3}) {
		this.args.a3 = 6;
	}
};

const verify = (result) => {
	return result === 6;
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const options = {return: 'a3'};
	const result = await kdo.do(flow, args, options);
	return result;
};

const info = {verify, run};
module.exports = info;
