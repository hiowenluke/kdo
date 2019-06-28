
const flow = require('./03-flow');

const verify = (value) => {
	return value === 'f1f2f3';
};

const run = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return result;
};

const info = {verify, run};
module.exports = info;
