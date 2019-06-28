
const kdo = require('my-kdo');
const lib = require('../../../test/__lib');

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		this.args.a1 = 4;
	},

	async f2({a1, a2, a3}) {
		this.args.a2 = 5;
	},

	async f3({a1, a2, a3}) {
		this.args.a3 = 6;
	}
};

const verify = (value) => {
	return value === 6;
};

const run = async () => {

	const args = {a1: 1, a2: 2, a3: 3};
	const options = {return: 'a3'};
	const k = kdo.new(args, options);

	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	const result = await k.do();
	return result;
};

const info = {verify, run};
module.exports = info;
