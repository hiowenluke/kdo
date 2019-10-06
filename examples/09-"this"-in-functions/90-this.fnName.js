
const kdo = require('../../src');

let str = '';
const expect = 'f1f2f3';

const flow = {
	async f1() {
		str += this.fnName;
	},

	async f2() {
		str += this.fnName;
	},

	async f3() {
		str += this.fnName;
	}
};

const fn = async () => {
	await kdo.do(flow);
	return str === expect;
};

module.exports = fn;
