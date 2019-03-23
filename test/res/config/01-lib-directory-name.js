
const flow = require('./01-flow');

const verify = (value) => {
	return value === '13';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return args;
};

const info = {verify, run};
module.exports = info;
