
const kdo = require('../../src');

let str = '';
const expect = 'abc';

const flow = {
	async f1() {
		str += 'a';
	},

	async f2() {
		str += 'b';
	},

	async f3() {
		str += 'c';
	}
};

const fn = async () => {
	await kdo.do(flow);

	// print without tree indent.
	// There is no way to test it for now.
	kdo.nlog(str);

	return str === expect;
};

module.exports = fn;
