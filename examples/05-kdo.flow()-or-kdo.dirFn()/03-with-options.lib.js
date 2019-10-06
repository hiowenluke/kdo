
const flow = require('./03-flow');

const expect = 'f1f2f3';

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return result === expect;
};

module.exports = fn;
