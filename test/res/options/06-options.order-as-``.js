
const kdo = require('my-kdo');

let str = '';

const flow = {
	async f1() {
		str += 1;
	},

	async f2() {
		str += 2;
	},

	async f3() {
		str += 3;
	},

	async f4() {
		str += 4;
	},

	async f5() {
		str += 5;
	}
};

const verify = (value) => {
	return value === '531';
};

const run = async () => {
	const order = `
		f5
		f3
		f1
	`;
	await kdo.do(flow, order);
	return str;
};

const info = {verify, run};
module.exports = info;
