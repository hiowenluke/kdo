
const kdo = require('../../src');

let str = '';
const expect = 'abc';

const flow = {
	async f1() {
		str += 'a';

		// print logs without indent.
		// there is no way to test it for now.
		this.topic(str);

		// but there is nothing printed by this.topic ?
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
