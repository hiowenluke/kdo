
const kdo = require('my-kdo');
const lib = require('my-test-lib');

let flag = 1;

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		this.args.a1 = 4;
		this.args.a2 = 5;
	},

	async f2({a2}) {
		if (flag === 1) return;
		this.args.a2 = 8;
	},

	async f3({a3}) {
		a3 = 6;
		this.args.a3 = 6;
	}
};

const verify = (args) => {
	const {a1, a2, a3} = args;
	return [a1, a2, a3].join('') === '456';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return args;
};

const info = {verify, run};
module.exports = info;
