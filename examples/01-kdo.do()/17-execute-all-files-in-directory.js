
const kdo = require('../../src');

// Load all files in folder "flow" and save to flow
const flow = kdo('./17-flow');

const expect = '456';

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await kdo.do(flow, args);
	return result === expect;
};

module.exports = fn;
