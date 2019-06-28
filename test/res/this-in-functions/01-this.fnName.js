
const kdo = require('my-kdo');

let str = '';

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

const verify = (value) => {
	return value === 'f1f2f3';
};

const run = async () => {
	await kdo.do(flow);
	return str;
};

const info = {verify, run};
module.exports = info;
