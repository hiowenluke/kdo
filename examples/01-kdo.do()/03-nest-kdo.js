
const kdo = require('../../src');
const lib = require('../__lib');

let str = '';
const expect = '14563';

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

const fn = async () => {
	await kdo.do(flow);
	return str === expect;
};

module.exports = fn;
