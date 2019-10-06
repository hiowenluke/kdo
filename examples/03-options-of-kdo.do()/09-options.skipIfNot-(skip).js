
const kdo = require('../../src');
const lib = require('../__lib');

let str = '';
const expect = '';

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

const fn = async () => {

	// Simulated passed parameters (note that the url has been resolved to a json object)
	// "/api/brain/mrp/redo" => {api: {brain: {mrp: {redo: {}}}}}
	const args = {api: {brain: {mrp: {redo: {}}}}};

	// If there is no api.brain.mrp.calc in args, then the flow will be skipped.
	// In this case, it is true, so the flow will be skipped.
	const options = {skipIfNot: 'api.brain.mrp.calc'};
	await kdo.do(flow, args, options);

	return str === expect;
};

module.exports = fn;
