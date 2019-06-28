
const kdo = require('my-kdo');
const lib = require('my-test-lib');

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
	}
};

const verify = (value) => {
	return value === '';
};

const run = async () => {

	// Simulated passed parameters (note that the url has been resolved to a json object)
	// "/api/brain/mrp/redo" => {api: {brain: {mrp: {redo: {}}}}}
	const args = {api: {brain: {mrp: {redo: {}}}}};

	// If there is no api.brain.mrp.calc in args, then the flow will be skipped.
	// In this case, it is true, so the flow will be skipped.
	const options = {skipIfNot: 'api.brain.mrp.calc'};
	await kdo.do(flow, args, options);

	return str;
};

const info = {verify, run};
module.exports = info;
