
const kdo = require('../../src');
const lib = require('../__lib');

// Load all files in folder "flow" and save to flow
const flow = kdo('./18-flow');

const expect = 'abc56';

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const options = {lib};
	const result = await kdo.do(flow, args, options);
	return result === expect;
};

module.exports = fn;
