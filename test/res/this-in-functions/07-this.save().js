
const kdo = require('../../../src');

let str = '';
const expect = '423';

const flow = {
	async f1({a1, a2, a3}) {
		this.save({a1: 4}); // or this.setArgs({a1: 4});
	},

	async f2({a1, a2}) {
		str += a1; // '4'
		str += a2; // '42'
	},

	async f3({a3}) {
		str += a3; // '423'
	}
};

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return str === expect;
};

module.exports = fn;
