
const kdo = require('../../../lib');
const lib = require('../../../test/__lib');
const flow = require('rir')(module, './16-flow');

const verify = (result) => {
	return result === 'abc56';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const options = {lib};
	const result = await kdo.do(flow, args, options);
	return result;
};

const info = {verify, run};
module.exports = info;
