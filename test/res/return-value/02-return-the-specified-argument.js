
const kdo = require('../../../lib');

let flag = 1;

const flow = {
	async f1({a1}) {
		this.args.a1 = 4;
	},

	async f2({a2}) {
		if (flag === 1) return;
		this.args.a2 = 5;
	},

	async f3({a3}) {
		this.args.a3 = 6;
	}
};

const verify = (result) => {
	return result === 6;
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};

	// make kdo to return the value of argument "a3".
	const options = {return: 'a3'};
	const result = await kdo.do(flow, args, options);

	return result;
};

const info = {verify, run};
module.exports = info;
