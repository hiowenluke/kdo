
const flow = require('./04-flow');

const verify = (value) => {
	return value === 'f3f1f2';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return result;
};

const info = {verify, run};
module.exports = info;
