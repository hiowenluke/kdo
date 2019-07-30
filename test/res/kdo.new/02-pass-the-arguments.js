
const kdo = require('../../../src');
const lib = require('../../../test/__lib');

let str = '';

const flow = {
	async f1({a1, a2, a3}) {
		await lib.wait();
		str += a1;
	},

	async f2({a1, a2, a3}) {
		str += a2;
	},

	async f3({a1, a2, a3}) {
		str += a3;
	}
};

const verify = (value) => {
	return value === '231';
};

const run = async () => {

	const args = {a1: 1, a2: 2, a3: 3};
	const k = kdo.new(args);

	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	await k.do();
	return str;
};

const info = {verify, run};
module.exports = info;
