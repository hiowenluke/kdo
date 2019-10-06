
const kdo = require('../../src');

let str = '';
const expect = 'abc';

const flow = {
	async f1() {
		str += 'a';
		this.return = str; // 'a'
	},

	async f2() {
		str += 'b';
		this.return = str; // 'ab'
	},

	async f3() {
		str += 'c';
		this.return = str; // 'abc'
	}
};

const fn = async () => {
	const result = await kdo.do(flow);
	return result === expect;
};

module.exports = fn;
