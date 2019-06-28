
const kdo = require('my-kdo');

// Load all files in folder "flow" and save to flow
const flow = require('rir')(module, './16-flow');

const verify = (result) => {
	return result === '456';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await kdo.do(flow, args);
	return result;
};

const info = {verify, run};
module.exports = info;
