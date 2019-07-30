
const kdo = require('../../../src');
const lib = require('../../../test/__lib');

let str = '';

const flow = {
	async f1() {
		await lib.wait();
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
	},

	async f6() {
		str += 6;
	},

	async f7() {
		str += 7;
	},

	async f8() {
		str += 8;
	},

	async f9() {
		str += 9;
	}
};

const verify = (value) => {
	return value === '6317824';
};

const run = async () => {

	const options = {

		first: [
			'f6',
			'f3',
		],

		last: [
			'f2',
			'f4'
		],

		exclude: [
			'f5',
			'f9'
		],
	};

	await kdo.do(flow, options);
	return str;
};

const info = {verify, run};
module.exports = info;
