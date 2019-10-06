
const kdo = require('../../src');

let str = '';
const expect = 'abc';

const flow = {
	async f1() {
		str += 'a';

		// print logs with indent in kdo tree, as same usage as console.log().
		// there is no way to test it for now.
		this.log(str);

		// but there is nothing printed by this.log ?
		// 'cause we disabled kdo printing logs in /test/mocha/run.js
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
	return str === expect;
};

module.exports = fn;
