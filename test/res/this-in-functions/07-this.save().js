
const kdo = require('../../../src');

let str = '';

const flow = {
	async f1({a1, a2, a3}) {
		this.save({a1: 4});
	},

	async f2({a1, a2}) {
		str += a1; // '4'
		str += a2; // '42'
	},

	async f3({a3}) {
		str += a3; // '423'
	}
};

const verify = (value) => {
	return value === '423';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	await kdo.do(flow, args);
	return str;
};

const info = {verify, run};
module.exports = info;
