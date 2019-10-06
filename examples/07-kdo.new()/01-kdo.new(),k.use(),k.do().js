
const kdo = require('../../src');
const lib = require('../__lib');

let str = '';
const expect = '231';

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

const fn = async () => {

	// create an instance of kdo
	const k = kdo.new();

	// add functions in flow
	k.use(flow.f2);
	k.use(flow.f3);
	k.use(flow.f1);

	// execute all functions
	const result = await k.do();

	return result === expect;
};

module.exports = fn;
