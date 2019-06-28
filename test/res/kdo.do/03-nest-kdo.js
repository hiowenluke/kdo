
const kdo = require('my-kdo');
const lib = require('my-test-lib');

let str = '';

const flow = {
	async f1() {
		await lib.wait();
		str += 1;
	},

	async f2() {

		// nest kdo
		const flow1 = {
			async f1() {
				str += 4;
			},

			async f2() {
				str += 5;
			},

			async f3() {
				str += 6;
			}
		};

		await kdo.do(flow1);
	},

	async f3() {
		str += 3;
	}
};

const verify = (value) => {
	return value === '14563';
};

const run = async () => {
	await kdo.do(flow);
	return str;
};

const info = {verify, run};
module.exports = info;
