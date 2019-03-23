
const kdo = require('../../../lib');

let str = '';

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

const verify = (value) => {
	return value === 'abc';
};

const run = async () => {
	const result = await kdo.do(flow);
	return result;
};

const info = {verify, run};
module.exports = info;
