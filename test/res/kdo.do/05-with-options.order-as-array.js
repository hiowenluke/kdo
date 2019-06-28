
const kdo = require('my-kdo');
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
	}
};

const verify = (value) => {
	return value === '4325';
};

const run = async () => {

	const order = [
		'f4',
		'f3',
		'f2',
		'f5'
	];

	await kdo.do(flow, order);
	return str;
};

const info = {verify, run};
module.exports = info;
