
const kdo = require('../../../lib');
const lib = require('../../../test/__lib');

let flag = 1;

const flow = {
	async f1({a1}) {
		await lib.wait();
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

const verify = (args) => {
	const compareTo = {a1: 4, a2: 2, a3: 6};
	return lib.isValueEqual(args, compareTo);
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};

	// make kdo to return all of the values of arguments.
	const options = {return: 'all'};
	await kdo.do(flow, args, options);

	return args;
};

const info = {verify, run};
module.exports = info;
