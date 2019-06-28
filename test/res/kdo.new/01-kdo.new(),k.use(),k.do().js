
const kdo = require('my-kdo');
const lib = require('../../../test/__lib');

let str = '';

const flow = {
	async f1() {
		await lib.wait();
		str += 1;
		return str;
	},

	async f2() {
		str += 2;
	},

	async f3() {
		str += 3;
	}
};

const verify = (value) => {
	return value === '231';
};

const run = async () => {

	// create an instance of kdo
	const k = kdo.new();

	// add functions in flow
	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	// execute all functions
	const result = await k.do();

	return result;
};

const info = {verify, run};
module.exports = info;
