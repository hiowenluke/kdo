
const kdo = require('my-kdo');

let str = '';

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

const verify = (value) => {
	return value === 'abc';
};

const run = async () => {
	await kdo.do(flow);

	// there is no way to test it for now.
	kdo.nlog(str);

	return str;
};

const info = {verify, run};
module.exports = info;
